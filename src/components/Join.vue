<template>
    <div class="container">
        <el-card class="box-card" shadow="hover" style="width: 550px; padding: 30px; color: #3D3D3D">
            <div style="text-align: left; font-size: 40px;">
                <span>회원가입</span>
            </div>

            <!-- 아이디 -->
            <div style="text-align: left; font-size: 18px; margin-top: 40px;">
                <span>아이디</span><br>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="이메일 형식으로 입력하세요 (ex.user@gmail.com)" style="margin-top: 7px;" v-model="email" @blur="handleEmailCheck" ></el-input>
                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" style="background-color: #5B6EBC; border:none; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleSendEmail(email)">인증코드 발송</el-button>
                    </div>
                </div>
                <div>
                    <span v-if="emailData.focus" v-text="emailData.text" style="color: #f00;"></span>
                </div>
                <div v-if="emailData.sendFocus" style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="인증코드를 입력하세요." v-model="code" style="margin-top: 7px;"></el-input>
                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" style="background-color: #5B6EBC; border:none; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleSendEmailCheck(email, code)">인증코드 확인</el-button>
                    </div>
                </div>
            </div>

            <!-- 닉네임 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>닉네임</span><br>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="닉네임을 입력하세요" v-model="nickname" @blur="handleNicknameCheck" style="margin-top: 7px;"></el-input>
                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" style="width: 100%; border:none; background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleSendNicknameCheck(nuckname)">중복 확인</el-button>
                    </div>
                </div>
                <div>
                    <span v-if="nicknameData.focus" v-text="nicknameData.text" style="color: #f00;"></span>
                </div>
            </div>

            <!-- 비밀번호 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>비밀번호</span><br>
                <el-input placeholder="비밀번호를 입력하세요" type="password" v-model="password" @blur="handlePassword" style="margin-top: 7px;"></el-input>
                <div>
                    <span v-if="passwordData.focus" v-text="passwordData.text" style="color: #f00;"></span>
                </div>
            </div>
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>비밀번호 확인</span><br>
                <el-input placeholder="비밀번호를 재입력하세요" type="password" v-model="passwordChk" @blur="handlePasswordChk" style="margin-top: 7px;"></el-input>
                <div>
                    <span v-if="passwordData.focusChk" v-text="passwordData.textChk" style="color: #f00;"></span>
                </div>
            </div>

            <!-- 이름 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>이름</span><br>
                <el-input placeholder="이름을 입력하세요" v-model="name" style="margin-top: 7px;" @blur="handleName"></el-input>
                <div>
                    <span v-if="nameData.focus" v-text="nameData.text" style="color: #f00;"></span>
                </div>
            </div>

            <!-- 전화번호 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>전화번호</span><br>
                <el-input placeholder="'-' 포함한 전화번호를 입력하세요" v-model="phone" style="margin-top: 7px;" @blur="handlePhone"></el-input>
                <div>
                    <span v-if="phoneData.focus" v-text="phoneData.text" style="color: #f00;"></span>
                </div>
            </div>

            <!-- 주소 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>주소</span><br>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="우편번호" v-model="zipcode" style="margin-top: 7px;"></el-input>
                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" icon="el-icon-search" @click="execDaumPostcode" style="width: 100%; border:none; background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 17px;">우편번호</el-button>
                    </div>
                </div>
                <el-input placeholder="도로명 주소" v-model="address" @blur="handleAddress" style="margin-top: 7px;"></el-input>
            </div>

            <!-- 이미지 첨부 -->
            <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                <span>이미지 첨부</span><br>
                <div style="margin-top: 7px;">
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" limit="1" list-type="picture-card" :on-remove="handleRemove" :on-success="handlePictureCardPreview" :on-exceed="handleExceed">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="image"/>
                    </el-dialog>
                </div>
            </div>

            <!-- 로그인 버튼 -->
            <button class="btn-2" id="joinBtn" style="background-color: #000; color: #fff; font-family: 'Jua', sans-serif; font-size: 17px; width: 100%; margin-top: 20px;" @click="handleJoin">회원가입</button><br>
            <div style="margin-top: 20px;">
                <span style="margin-right: 10px; font-size: 16px;">아이디가 있으신가요?</span>
                <span style="cursor: pointer; margin-left: 10px; font-size: 16px; color: #5B6EBC" @click="handleLogin">로그인 하기</span>
            </div>
        </el-card>        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        methods: {
            // 로그인 페이지 이동
            handleLogin() {
                this.$router.push({path: '/login'});
            },
            // 회원가입
            async handleJoin() {
                if (this.emailData.checkSendEmail && this.nicknameData.checkSendNickname && this.passwordData.checkPassowrd && this.passwordData.checkPasswordChk
                    && this.nameData.checkName && this.phoneData.checkPhone && this.checkAddress && this.imageData.checkImage) {
                    const url = `/REST/api/member/join`;
                    const headers = {"Content-Type": "multipart/form-data"};
                    console.log("Hello~");
                    console.log(this.imageFile);
                    const formData = new FormData();
                    formData.append("id", this.email);
                    formData.append("password", this.password);
                    formData.append("nickname", this.nickname);
                    formData.append("name", this.name);
                    formData.append("phone", this.phone);
                    formData.append("zipcode", this.zipcode);
                    formData.append("address", this.address);
                    formData.append("file", this.imageFile[0].raw);

                    const response = await axios.post(url, formData, {headers});
                    if (response.data.result === 1) {
                        alert(`${this.name}님 회원가입을 축하합니다.`);
                        return this.$router.push({path: '/login'});
                    }
                } else {
                    return alert('모든 항목을 입력해 주세요');
                }
            },
            // 이메일 유효성, 정규식 검증
            handleEmailCheck(){
                var regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]*$/i;
                if (this.email === '') {
                    this.emailData.focus = true;
                    this.emailData.text = "이메일을 입력해주세요.";
                    this.emailData.checkEmail = false;
                } else if (this.email.match(regExp) == null) {
                    this.emailData.focus = true;
                    this.emailData.text = "이메일 형식을 지켜주세요.";
                    this.emailData.checkEmail = false;
                } else {
                    this.emailData.focus = false;
                    this.emailData.checkEmail = true;
                }
            },
            // 이메일 인증코드 발송
            async handleSendEmail(email) {
                if(this.emailData.checkEmail === true) {
                    let url = `/REST/api/member/checkid?id=${email}`;
                    let headers = {"Content-Type" : "application/json"};
                    let body = {};
                    let response = await axios.get(url, body, {headers});

                    // 중복되는 아이디가 존재할 경우
                    if(response.data.result === 0) {
                        return alert("이미 존재하는 아이디입니다.");
                    }
                    // 중복되는 아이디가 존재하지 않을 경우, 이메일 인증코드 전송
                    else if(response.data.result === 1) {
                        url = `/REST/api/member/confirmemail?memberId=${email}`;
                        headers = {"Content-Type" : "application/json"};
                        body = {};
                        response = await axios.post(url, body, {headers});

                        if(response.data.result === 1) {
                            this.emailData.sendFocus = true;
                            return alert("이메일 인증코드를 발송했습니다.");
                        }
                        return alert("이메일 인증코드 발송을 실패했습니다.");
                    }
                }else { 
                    return alert("아이디로 사용할 이메일을 입력하세요.");
                }
            },
            // 이메일 인증코드 검증
            async handleSendEmailCheck(email) {
                const url = `/REST/api/member/validemail`;
                const headers = {"Content-Type" : "application/json"};
                const body = {memberId : email, emailCode : this.code};
                const response = await axios.post(url, body, {headers});

                // 인증코드가 확인되었을 경우
                if(response.data.result === 1) {
                    this.emailData.checkSendEmail = true;
                    this.emailData
                    return alert("이메일 인증을 완료했습니다.");
                }
                // 인증코드 시간이 만료되었거나, 틀렸을 경우
                else {
                    return alert("이메일 인증을 실패했습니다.");
                }
            },
            // 닉네임 유효성 검증
            handleNicknameCheck() {
                if (this.nickname === '') {
                    this.nicknameData.focus = true;
                    this.nicknameData.text = "닉네임을 입력해주세요.";
                    this.nicknameData.checkNickname = false;
                } else {
                    this.nicknameData.focus = false;
                    this.nicknameData.checkNickname = true;
                }
            },
            // 닉네임 중복확인
            async handleSendNicknameCheck(nickname) {
                if(this.nicknameData.checkNickname === true) {
                    let url = `/REST/api/member/checknickname?nickname=${nickname}`;
                    let headers = {"Content-Type" : "application/json"};
                    let body = {};
                    let response = await axios.get(url, body, {headers});

                    // 중복되는 닉네임이 존재할 경우
                    if(response.data.result === 0) {
                        this.nicknameData.checkSendNickname = false;
                        return alert("이미 존재하는 닉네임입니다.");
                    }
                    // 중복되는 닉네임이 존재하지 않을 경우
                    else if(response.data.result === 1) {
                        this.nicknameData.checkSendNickname = true;
                        return alert("사용가능한 닉네임입니다.");
                    }
                }else { 
                    this.nicknameData.checkSendNickname = false;
                    return alert("닉네임을 입력하세요.");
                }
            },
            // 패스워드 유효성 검증
            handlePassword() {
                if(this.password === ''){
                    this.passwordData.focus = true;
                    this.passwordData.text = "비밀번호를 입력해주세요.";
                    this.passwordData.checkPassowrd = false;
                }else{
                    this.passwordData.focus = false;
                    this.passwordData.checkPassowrd = true;
                }
            },
            // 패스워드 재확인 검증
            handlePasswordChk() {
                if(this.passwordChk === '') {
                    this.passwordData.focusChk = true;
                    this.passwordData.textChk = "재확인을 위한 비밀번호를 입력해주세요.";
                    this.passwordData.checkPassowrdChk = false;
                }else if(this.password !== this.passwordChk) {
                    this.passwordData.focusChk = true;
                    this.passwordData.textChk = "비밀번호를 동일하게 입력해주세요.";
                    this.passwordData.checkPassowrdChk = false;
                }else {
                    this.passwordData.focusChk = false;
                    this.passwordData.checkPasswordChk = true;
                }
            },
            // 이름 유효성 검증
            handleName() {
                if(this.name === '') {
                    this.nameData.focus = true;
                    this.nameData.text = "이름을 입력해주세요.";
                    this.nameData.checkName = false;
                }else {
                    this.nameData.focus = false;
                    this.nameData.checkName = true;
                }
            },
            // 휴대폰번호 유효성 검증
            handlePhone() {
                var regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
                if (this.phone === '') {
                    this.phoneData.focus = true;
                    this.phoneData.text = "휴대폰번호를 입력해주세요.";
                    this.phoneData.checkPhone = false;
                } else if (this.phone.match(regExp) == null) {
                    this.phoneData.focus = true;
                    this.phoneData.text = "휴대폰번호 형식을 지켜주세요.";
                    this.phoneData.checkPhone = false;
                } else {
                    this.phoneData.focus = false;
                    this.phoneData.checkPhone = true;
                }
            },
            // 우편번호 찾기
            execDaumPostcode() {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        if (this.extraAddress !== "") {
                            this.extraAddress = "";
                        }
                        if (data.userSelectedType === "R") {
                            // 사용자가 도로명 주소를 선택했을 경우
                            this.address = data.roadAddress;
                        } else {
                            // 사용자가 지번 주소를 선택했을 경우(J)
                            this.address = data.jibunAddress;
                        }
                        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                        if (data.userSelectedType === "R") {
                            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                                this.extraAddress += data.bname;
                            }
                            // 건물명이 있고, 공동주택일 경우 추가한다.
                            if (data.buildingName !== "" && data.apartment === "Y") {
                                this.extraAddress +=
                                    this.extraAddress !== "" ?
                                    `, ${data.buildingName}` :
                                    data.buildingName;
                            }
                            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                            if (this.extraAddress !== "") {
                                this.extraAddress = `(${this.extraAddress})`;
                            }
                        } else {
                            this.extraAddress = "";
                        }
                        // 우편번호를 입력한다.
                        this.zipcode = data.zonecode;
                    },
                }).open();
            },
            // 주소 유효성 검증
            handleAddress() {
                if(this.address === '') {
                    this.checkAddress = false;
                }else {
                    this.checkAddress = true;
                }
            },
            // 이미지 삭제
            handleRemove(file, fileList) {
                console.log("삭제", file, fileList);
            },
            // 이미지 미리보기
            handlePictureCardPreview(response, file, fileList) {
                console.log(response);
                console.log(fileList);
                this.imageFile.push(file);
                this.dialogImageUrl = file.url;
                this.dialogVisible = false;
                if (this.imageFile.length === 0) {
                    this.imageData.checkImage = false;
                } else if(this.imageFile.length > 0) {
                    this.imageData.checkImage = true;
                }            
            },
            // 이미지 초과 메세지
            handleExceed() {
                this.$message.warning('이미지는 1장까지 첨부가능합니다.');
            }
        },
        data() {
            return {
                // 이메일
                email: '',
                code : '',
                emailData: {
                    text      : '이메일을 입력해주세요.',
                    focus     : false,
                    checkEmail: false,
                    sendFocus : false,
                    checkSendEmail: false
                },
                // 닉네임
                nickname: '',
                nicknameData: {
                    text    : '닉네임을 입력해주세요.',
                    focus   : false,
                    checkNickname: false,
                    checkSendNickname: false
                },
                // 패스워드 검증
                password    : '',
                passwordChk : '',
                passwordData: {
                    text    : '비밀번호를 입력해주세요.',
                    textChk : '비밀번호를 재입력해주세요.',
                    focus   : false,
                    focusChk: false,
                    checkPassowrd   : false,
                    checkPasswordChk: false
                },
                // 이름
                name    : '',
                nameData: {
                    text  : '이름을 입력해주세요.',
                    focus : false,
                    checkName: false
                },
                // 휴대폰번호
                phone    : '',
                phoneData: {
                    text  : '휴대폰번호를 입력해주세요.',
                    focus : false,
                    checkPhone: false
                },
                // 주소
                zipcode: '',
                address: '',
                extraAddress: '',
                checkAddress: false,
                // 이미지
                imageFile: [],
                imageData: {
                    text  : "최소 하나의 이미지를 등록해주세요.",
                    focus : false,
                    checkImage: false
                }
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
        transition: all 2s;
    }

    #joinBtn {
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
        border : none;
    }

    button::before,
    button::after {
        background: #5B6EBC;
        content: '';
        position: absolute;
        z-index: -1;
        border-radius: 5px;
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