<template>
<div class="container">
  <div class="welcome">
   <img src="../assets//images/welcome4.jpg" style="width:550px; height:210px;  " />  
  </div>   
  <div class="row">
    <div class="col">
    </div>
      <div class="col-md-6 card">
        <div id="card1" class="card-body">
          <h1 class="card-title">회원가입</h1>
          <hr>

          <label>아이디</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="userid" placeholder="아이디를 입력하세요" >
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
           <a href="#" class="myButton1">중복확인</a>
          </div>
          </div>
          <br/>

          <label>닉네임</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="usernickname" placeholder="닉네임을 입력하세요" >
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <a href="#" class="myButton1">중복확인</a>
          </div>
          </div>
          <br/>

          <div>
          <label>비밀번호</label>
          <input type="text" class="form-control" v-model="userpw" placeholder="비밀번호를 입력하세요" >
          </div>
          <br/>

          <div>
          <label>비밀번호 확인</label>
          <input type="text" class="form-control" v-model="userpw1" placeholder="비밀번호를 다시 입력하세요" >
          </div>
          <br/>

          <div>
          <label>이름</label>
          <input type="text" class="form-control" v-model="username" placeholder="이름을 입력하세요" >
          </div>
          <br/>

          <div>
          <label>전화번호</label>
          <input type="text" class="form-control" v-model="userphone" placeholder="'-' 빼고 숫자만 입력">
          </div>
          <br/>

          <label>주소</label>
          <div class="row">
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="우편번호" v-model="postcode" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <input type="button" class="btn" @click="execDaumPostcode()" value="우편번호 찾기">
          </div>
            <div class="col-sm-12"> <br/>
              <input type="text" class="form-control" v-model="address" placeholder="도로명 주소" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <br/>
        

            <div id="joinbtn" class="d-grid gap-2 d-md-block">
             <a href="#" class="myButton" @click="Login">회원가입</a>
            </div>

        </div>
      </div>
        <div class="col" style="width: 100rem;">
        </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
      value:"",
    };
  },
  methods: {
    Login() {

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
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
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
        },
      }).open();
    },
     changeNum : function(value) {
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
   filters:{
        inputNumberFormat(val){
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    } 
  
};
</script>

<style  scoped>
.welcome{
  text-align: center;
}

#join {
  padding-right: 50px;
}

#joinbtn {
  padding-left: 210px;
}

.container{
  padding-top:50px;
  padding-bottom:100px;
}

.myButton {
	background-color:#7892c2;
	border-radius:12px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;
	padding:8px 55px;
	text-decoration:none;
	text-shadow:0px 0px 0px #283966;
}
.myButton:hover {
	background-color:#476e9e;
}
.myButton:active {
	position:relative;
	top:1px;
}

.myButton1 {
	background-color:#aac2f0;
	border-radius:5px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Verdana;
	font-size:16px;
	padding:6px 11px;
	text-decoration:none;
	text-shadow:0px 0px 0px #283966;
}
.myButton1:hover {
	background-color:#7892c2;
}
.myButton1:active {
	position:relative;
	top:1px;
}

</style>