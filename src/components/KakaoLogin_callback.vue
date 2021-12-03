<template>
    <div class="container">
        <el-card class="box-card" shadow="hover" style="width: 550px; padding: 30px; color: #3D3D3D">
            <div style="text-align: left; font-size: 35px; font-weight: bold;">
                <span>회원가입</span>
            </div>
            <!-- 아이디 -->
            <div style="text-align: left; font-size: 15px; font-weight: bold; margin-top: 40px;">
                <span>아이디</span><br>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="이메일 형식으로 입력하세요 (ex.user@gmail.com)" @blur="checkId" v-model="email" style="margin-top: 7px;"></el-input>
                        <span v-if="emailData.checkId" v-text="emailData.checkText" style="color :#f00"></span>
                    </div>
                    <div v-if="flag" style="width: 25%; margin-top: 5px;">
                        <el-button type="info" @click="handlecheckId(email)" style="background-color: #5B6EBC; font-weight: bold; ">인증코드 발송</el-button>
                    </div>
                </div>
                <div v-if="flag" style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="인증코드를 입력하세요." v-model="email" style="margin-top: 7px;"></el-input>
                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" style="background-color: #5B6EBC; font-weight: bold; ">인증코드 확인</el-button>
                    </div>
                </div>
            </div>
            <!-- 닉네임 -->
            <div style="text-align: left; font-size: 15px; font-weight: bold; margin-top: 18px;">
                <span>닉네임</span><br>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="닉네임을 입력하세요" v-model="usernickname" @blur="checkNick" style="margin-top: 7px;"></el-input>
                        <span v-if="nickData.checkId" v-text="nickData.checkText" style="color :#f00"></span>
                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" @click="handlecheckNickname(usernickname)" style="width: 100%; background-color: #5B6EBC; font-weight: bold;">중복 확인</el-button>
                    </div>
                </div>
            </div>

            <!-- 이름 -->
            <div style="text-align: left; font-size: 15px; font-weight: bold; margin-top: 18px;">
                <span>이름</span><br>
                <el-input placeholder="이름을 입력하세요" v-model="username" @blur="checkName" style="margin-top: 7px;"></el-input>
                <span v-if="nameData.checkId" v-text="nameData.checkText" style="color :#f00"></span>
            </div>
            <!-- 전화번호 -->
            <div style="text-align: left; font-size: 15px; font-weight: bold; margin-top: 18px;">
                <span>전화번호</span><br>
                <el-input placeholder="'-' 포함한 전화번호를 입력하세요" v-model="userphone" @blur="checkPhone" style="margin-top: 7px;"></el-input>
                <span v-if="phoneData.checkId" v-text="phoneData.checkText" style="color :#f00"></span>
            </div>
            <div style="text-align: left; font-size: 15px; font-weight: bold; margin-top: 18px;">
                <span>주소</span><br>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 75%; margin-right: 5px;">
                        <el-input placeholder="우편번호" v-model="postcode" @blur="checkCode" style="margin-top: 7px;"></el-input>
                        <span v-if="codeData.checkId" v-text="codeData.checkText" style="color :#f00"></span>

                    </div>
                    <div style="width: 25%; margin-top: 5px;">
                        <el-button type="info" icon="el-icon-search" @click="execDaumPostcode()" style="width: 100%; background-color: #5B6EBC; font-weight: bold;">우편번호</el-button>

                    </div>
                </div>
                <el-input placeholder="도로명 주소" v-model="address" @blur="checkAdd" style="margin-top: 7px;"></el-input>
                <span v-if="addData.checkId" v-text="addData.checkText" style="color :#f00"></span>

                <!-- 이미지 첨부 -->
                <div style="text-align: left; font-size: 15px; font-weight: bold; margin-top: 18px;">
                    <span>이미지 첨부</span><br>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" limit="1" list-type="picture-card" :on-remove="handleRemove" :on-success="handlePictureCardPreview" :on-exceed="handleExceed">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="" />
                    </el-dialog>
                    <span v-if="imageData.checkId" v-text="imageData.checkText" style="color :#f00"></span>
                </div>
            </div>
            <el-button type="info" @click="handleJoin" style="background-color: #5B6EBC; font-weight: bold; font-size: 17px; width: 100%; margin-top: 20px; ">회원가입</el-button><br>
            <div style="margin-top: 20px;">
                <span style="cursor: pointer; margin-right: 10px; font-weight: bold; font-size: 14px;">아이디가 있으신가요?</span>
                <span style="cursor: pointer; margin-left: 10px; font-weight: bold; font-size: 14px; color: #5B6EBC">로그인 하기</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {
        defineComponent
    } from 'vue'
    import axios from 'axios';
    import {
        getKakaoToken,
        getKakaoUserInfo
    } from "../services/login";

    export default defineComponent({
        created() {
            if (this.$route.query.code) {
                this.setKakaoToken();
            }
        },
        methods: {
            //카카오토큰 가져오기
            async setKakaoToken() {
                console.log('카카오 인증 코드', this.$route.query.code);
                const {
                    data
                } = await getKakaoToken(this.$route.query.code);
                if (data.error) {
                    alert('카카오톡 로그인 오류입니다.');
                    this.$router.replace('/login');
                    return;
                }
                window.Kakao.Auth.setAccessToken(data.access_token);
                //console.log("카카오토큰2",data.access_token);       
                await this.setUserInfo();
                //this.$router.replace('/');
            },
            //카카오 유저정보가져오기
            async setUserInfo() {
                const res = await getKakaoUserInfo();
                // console.log("usermail",res.kakao_account.email);
                // console.log("nickname",res.kakao_account.profile.nickname);
                // console.log("profile",res.kakao_account.profile.profile_image_url);
                this.email = res.kakao_account.email;
                this.usernickname = res.kakao_account.profile.nickname;


                //받아온 이메일로 이메일유효성검사
                const url = `/REST/api/member/checkid?id=` + this.email;
                const body = {};
                const header = {
                    "Content-Type": "application/json"
                };
                const response = await axios.get(url, body, header);
                console.log("--유효성검사---", response.data.result);

                // 이미 가입된 이메일일 경우 로그인으로 이동
                if (response.data.result === 0) {
                    await this.KakaoLogin();

                }
                // 가입하지 않은 이메일일 경우 회원가입으로 이동
                else if (response.data.result === 1) {
                    console.log("회원가입이동");

                }
            }, 
            //로그인
            async KakaoLogin() {
              
                    const url     = "REST/api/member/login";
                    const headers = {"Content-Type" : "application/json"};
                    const body    = {email: this.email, password: 'kakao_login_password'};
                    const response= await axios.post(url, body, {headers});

                    if(response.data.result === 1){
                        sessionStorage.setItem("TOKEN", response.data.token);
                        //alert("로그인을 성공했습니다.");
                        this.$emit('changeLogged',true);
                        this.$router.push({path: '/'});
                    }else{
                        return alert("아이디 또는 비밀번호를 확인해주세요.");
                    }
               
                

            },

            handleRemove(file, fileList) {
                console.log("삭제", file, fileList)
            },
            handlePictureCardPreview(response, file, fileList) {
                console.log("response", response);
                console.log("file", file);
                console.log("fileList", fileList)
                this.fileList.push(file);

                this.dialogImageUrl = file.url
                this.dialogVisible = false
                if (this.fileList == '') {
                    this.imageData.checkId = true;
                } else {
                    this.imageData.checkId = false;
                    this.imageData.checkFocus = true;
                }
            },
            handleExceed() {
                this.$message.warning('이미지는 1장까지 첨부가능합니다.');
            },

            //이메일 정규식
            checkId() {
                var regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]*$/i;
                if (this.email == '') {
                    this.emailData.checkId = true;
                    this.emailData.checkText = "이메일을 입력해 주세요.";
                } else if (this.email.match(regExp) == null) {
                    this.emailData.checkId = true;
                    this.emailData.checkText = "이메일 형식을 지켜주세요.";
                } else {
                    this.emailData.checkId = true;
                    this.emailData.checkFocus = true;
                    this.emailData.checkText = "아이디 중복 확인을 눌러주세요."
                }
            },

            checkPhone() {
                var checkp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
                if (this.userphone == '') {
                    this.phoneData.checkId = true;
                    this.phoneData.checkText = "번호를 입력해 주세요."
                } else if (this.userphone.match(checkp) == null) {
                    this.phoneData.checkId = true;
                    this.phoneData.checkText = "번호 형식을 지켜주세요."
                } else {
                    this.phoneData.checkId = false;
                    this.phoneData.checkFocus = true;

                }
            },
            checkNick() {
                if (this.usernickname == '') {
                    this.nickData.checkId = true;
                } else {
                    this.nickData.checkId = true;
                    this.nickData.checkFocus = true;
                    this.nickData.checkText = "닉네임 중복 확인을 눌러주세요."
                }
            },

            checkName() {
                if (this.username == '') {
                    this.nameData.checkId = true;
                } else {
                    this.nameData.checkId = false;
                    this.nameData.checkFocus = true;
                }
            },
            checkCode() {
                console.log(this.postcode.length);
                if (this.postcode.length > 0) {
                    this.codeData.checkId = false;
                    this.codeData.checkFocus = true;
                } else {
                    this.codeData.checkId = true;
                }
            },
            checkAdd() {
                console.log(this.address.length);
                if (this.address.length > 0) {
                    this.addData.checkId = false;
                    this.addData.checkFocus = true;
                } else {
                    this.addData.checkId = true;
                }
            },
            async handlecheckNickname(val) {
                const url = `/REST/api/member/checknickname?nickname=${val}`
                const header = {
                    "Content-Type": "application/json"
                }
                const body = {}
                const response = await axios.get(url, body, header);
                console.log(response);
                //닉네임 중복일 경우
                if (response.data.result === 0) {
                    alert(response.data.data);
                    this.nickData.allClear = false;
                    return;
                }
                if (response.data.result === 1) {
                    alert(response.data.data);
                    this.nickData.allClear = true;
                    this.nickData.checkId = false;
                }
            },
            async handlecheckId(val) {
                if (this.emailData.checkFocus) {
                    const url = `/REST/api/member/checkid?id=${val}`;
                    const body = {};
                    const header = {
                        "Content-Type": "application/json"
                    };
                    const response = await axios.get(url, body, header);

                    // 아이디가 중복일 경우
                    if (response.data.result === 0) {
                        alert(response.data.data);
                        this.emailData.allClear = false;
                        return;
                    }
                    // 아이디가 사용가능할 경우
                    else if (response.data.result === 1) {
                        alert(response.data.data);
                        this.emailData.allClear = true;
                        this.emailData.checkId = false;
                        return;
                    }
                } else {
                    alert("아이디를 입력해주세요.");
                    return;
                }
            },
            async handleJoin() {

                if (this.phoneData.checkFocus && this.nameData.checkFocus && this.addData.checkFocus &&
                    this.codeData.checkFocus && this.imageData.checkFocus) {
                    const url = `/REST/api/member/join`
                    const header = {
                        "Content-Type": "multipart/form-data"
                    }

                    const formData = new FormData();

                    formData.append("id", this.email),
                        formData.append("password", 'kakao_login_password'),
                        formData.append("address", this.address),
                        formData.append("name", this.username),
                        formData.append("nickname", this.usernickname),
                        formData.append("phone", this.userphone),
                        formData.append("zipcode", this.postcode),
                        formData.append("file", this.fileList[0].raw);

                    const response = await axios.post(url, formData, header);
                    console.log(response);
                    if (response.data.result === 1) {
                        await this.KakaoLogin();
                    }
                } else {
                    alert('모든 항목을 입력해 주세요')
                }



            },
            token() {
                sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuYSIsImV4cCI6MTYzNjU1MTE3OSwiaWF0IjoxNjM2NDY0Nzc5fQ.G9_YKfXltSHCQhQ9rFods_YbTvrhCHrQXZCeF33Idqs");
            },
            execDaumPostcode() {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        if (this.extraAddress !== "") {
                            this.extraAddress = "";
                        }
                        if (data.userSelectedType === "R") {
                            // 사용자가 도로명 주소를 선택했을 경우
                            this.address = data.roadAddress;
                            this.checkAdd();
                        } else {
                            // 사용자가 지번 주소를 선택했을 경우(J)
                            this.address = data.jibunAddress;
                            this.checkAdd();
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
                        this.postcode = data.zonecode;
                        this.checkCode();
                    },
                }).open();
            },
            changeNum: function(value) {
                return value = this.comma(this.uncomma(value));
            },
            comma(str) {
                str = String(str);
                return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            },
            uncomma(str) {
                str = String(str);
                return str.replace(/[^\d]+/g, '');
            }
        },
        filters: {
            inputNumberFormat(val) {
                return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        data() {
            return {
                email: '',
                postcode: '',
                address: '',
                extraAddress: '',
                value: '',
                userpw: 'kakao_login_password',
                usernickname: '',
                userpw1: 'kakao_login_password',
                userphone: '',
                username: '',
                fileList: [],
                imageData: {
                    checkFocus: false,
                    checkId: true,
                    checkText: "최소 하나의 이미지 입력해주세요.",
                    checkColor: "f00",
                },
                emailData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "이메일을 입력해주세요.",
                    checkColor: "f00",
                    allClear: false
                },
                phoneData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "전화번호를 입력해주세요.",
                    checkColor: "f00",
                    allClear: false
                },
                nickData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "닉네임을 입력해주세요.",
                    checkColor: "f00",
                    allClear: false
                },

                nameData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "이름을 입력해주세요.",
                    checkColor: "f00",

                },
                codeData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "우편번호를 입력해주세요.",
                    checkColor: "f00",

                },
                addData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "주소를 입력해주세요.",
                    checkColor: "f00",

                },
            }
        }
    })
</script>

<style scoped>
    .container {
        margin-top: 45px;
        margin-bottom: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>