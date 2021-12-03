<template>
    <div class="container" v-loading.fullscreen.lock="fullscreenLoading">
        <el-card class="box-card" shadow="hover" style="width: 550px; padding: 30px; color: #3D3D3D">
            <div style="text-align: left; font-size: 40px;">
                <span>로그인</span>
            </div>
            <!-- 아이디 -->
            <div style="text-align: left; font-size: 18px; margin-top: 40px;">
                <span>아이디</span><br>
                <el-input placeholder="아이디를 입력하세요" v-model="email" @blur="handleEmail" clearable=true style="margin-top: 7px;"></el-input>
                <div>
                    <span v-if="emailData.focus" v-text="emailData.text" style="color: #f00;"></span>
                </div>
            </div>
            <!-- 비밀번호 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>비밀번호</span><br>
                <el-input placeholder="비밀번호를 입력하세요" type="password" v-model="password" @blur="handlePassword" clearable=true style="margin-top: 7px;"></el-input>
                <div>
                    <span v-if="passwordData.focus" v-text="passwordData.text" style="color: #f00;"></span>
                </div>
            </div>
            <button class="btn-2" style="background-color: #000; border:none;  color:#fff; font-family: 'Jua', sans-serif; font-size: 18px; width: 100%; margin-top: 20px; " @click="handleLogin">로그인</button><br>
            <el-button type="info" @click="loginWithKakao" style="background-color: #FFE500; border:none; font-family: 'Jua', sans-serif; font-size: 18px; width: 100%; margin-top: 20px; color: #392A07;">카카오 로그인</el-button>
            <div style="margin-top: 20px;">
                <span style="margin-right: 10px; font-size: 16px;">계정이 없으신가요?</span>
                <span style="cursor: pointer; margin-left: 10px; font-size: 16px; color: #5B6EBC" @click="handleJoin">회원가입 하기</span>
            </div>
        </el-card>        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {

        created() {
            
        },
        methods: {
            loginWithKakao() {
               
                const params = {
                    redirectUri: "http://localhost:8080/kakaologin", //========변경===========
                };
                window.Kakao.Auth.authorize(params);
            },
            // 화면로딩 => 생명주기 확인
            openFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    background: '#fff',
                })
                setTimeout(() => {
                    loading.close()
                }, 1000)
            },
            // 회원가입 페이지 이동
            handleJoin() {
                this.$router.push({path:'/join'});
            },
            // 이메일 검증
            handleEmail() {
                if(this.email === '') {
                    this.emailData.focus = true;
                    this.emailData.text = "이메일을 입력해주세요.";
                }else{
                    this.emailData.focus = false;
                    this.emailData.checkEmail = true;
                }
            },
            // 패스워드 검증
            handlePassword() {
                if(this.password === '') {
                    this.passwordData.focus = true;
                    this.passwordData.text = "비밀번호를 입력해주세요.";
                }else{
                    this.passwordData.focus = false;
                    this.passwordData.checkPassword = true;
                }
            },
            // 로그인
            async handleLogin(){
                if(this.emailData.checkEmail && this.passwordData.checkPassword){
                    const url     = "REST/api/member/login";
                    const headers = {"Content-Type" : "application/json"};
                    const body    = {email: this.email, password: this.password};
                    const response= await axios.post(url, body, {headers});

                    if(response.data.result === 1){
                        sessionStorage.setItem("TOKEN", response.data.token);
                        alert("로그인을 성공했습니다.");
                        this.$emit('changeLogged',true);//========변경===========
                        this.$router.push({path: '/'});//========변경===========
                    }else{
                        return alert("아이디 또는 비밀번호를 확인해주세요.");
                    }
                }else{
                    return alert("아이디와 비밀번호를 입력해주세요.");
                }
            }
        },
        data() {
            return {
                // 이메일 검증
                email             : '',
                emailData: {
                    text      : '이메일을 입력해주세요.',
                    focus     : false,
                    checkEmail: false
                },
                // 패스워드 검증
                password          : '',
                passwordData: {
                    text      : '비밀번호를 입력해주세요.',
                    focus     : false,
                    checkPassword: false
                },
                // 로딩 화면
                fullscreenLoading: false
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 45px;
        margin-bottom: 45px;
        display: flex; 
        justify-content: center; 
        align-items: center;
    }

    button,
    button::after {
        transition: all 1s;
    }

    button {
        background: none;
        border-radius: 5px;
        color: #5B6EBC;
        display: inline-block;
        padding-right: 25px; 
        padding-left: 25px; 
        padding-top: 15px; 
        padding-bottom: 15px;
        position: relative;
        text-transform: uppercase;
        font-family: 'Jua', sans-serif;
    }

    button::before,
    button::after {
        background: #5B6EBC;
        border-radius: 5px;
        content: '';
        position: absolute;
        z-index: -1;
    }

    button:hover {
        color: #fff;
        z-index: 2;
    }

    /* BUTTON 2 */
    .btn-2::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 0;
    }

    .btn-2:hover:after {
        width: 100%;
        z-index: -1;
    }
</style>