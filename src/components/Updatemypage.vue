<template>
    <div class="main">
        <div class="banner" >
           <h2 class="banner-text">마이페이지</h2>
        </div><br/>

  <div class="container">
    <div class="row">
        <div class="col-md-3">
           <div class="list-group">
                    <a href="./mypage" class="list-group-item list-group-item-action">마이페이지</a>
                    <a href="./Updatemypage" class="list-group-item list-group-item-action">내 정보 수정</a>
                    <a href="./Myactive" class="list-group-item list-group-item-action">나의 활동 내역</a>
                    <a href="./Mypagewriting" class="list-group-item list-group-item-action">글 관리</a>
                    <a href="#" class="list-group-item list-group-item-action">책 추천</a> 
                    <a href="#" class="list-group-item list-group-item-action">즐겨찾기</a> 
            </div>
        </div>

        <div class="col-md-7">
          <div class="card" style="padding:30px">
              <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>내 프로필</h4>
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <form>
                              <label>아이디</label>
                              <input type="text" class="form-control" placeholder="alal@1212" aria-label="Username" aria-describedby="basic-addon1">
                              <br/>

                              <div>
                              <label>현재 비밀번호</label>
                              <input type="text" class="form-control" placeholder="현재 비밀번호" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <div>
                              <label>새 비밀번호</label>
                              <input type="text" class="form-control" placeholder="새 비밀번호" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <div>
                              <label>새 비밀번호</label>
                              <input type="text" class="form-control" placeholder="새 비밀번호 재확인" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <div>
                              <label>이름</label>
                              <input type="text" class="form-control" placeholder="나나나" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              
                              <div>
                              <label>생년월일</label>
                              <input type="text" class="form-control" placeholder="999999" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <label>닉네임</label>
                              <div class="row">
                                <div class="col-sm-7">
                                  <input type="text" class="form-control" placeholder="ㅁㅁㅁ" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                              <div class="col-sm-4 d-grid gap-2 d-md-block">
                               <a href="#" class="myButton1">중복확인</a>
                              </div>
                              </div>
                              <br/>

                              <div>
                              <label>전화번호</label>
                              <input type="text" class="form-control" placeholder="010-0000-1111" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <label>주소</label>
                                <div class="row">
                                  <div class="col-sm-6">
                                    <input type="text" class="form-control" v-model="postcode" placeholder="우편번호" aria-describedby="basic-addon1">
                                  </div>
                                  <div class="col-sm-4 ">
                                    <input type="button" class="btn" @click="execDaumPostcode()" value="우편번호 찾기"><br/>
                                  </div>
                                  <div class="col-sm-8">
                                    <input type="text" class="form-control" v-model="address" placeholder="주소"  aria-describedby="basic-addon1"><br>
                                  </div>
                                </div>

                        <div id="joinbtn" class="d-grid gap-2 d-md-block">
                         <input type="button" class="btn" value="등록하기"><br/>
                        </div>

                            </form>
                        </div>
                    </div>   
              </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>  export default {
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
      value:"",
    };
  },
  methods: {
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
    }   
}
}
</script>

<style scoped>
.banner{
    background-color:#d1c4e92d;
     width:100%;
     height:200px;
}
.banner-text{
 text-align: center;
 padding-top:5%;
  color: #000;

}
 
  .update{
    margin-left: 180px;
  }

  .myButton1 {
	background-color:#d1c4e9;
	border-radius:5px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Verdana;
	font-size:15px;
	padding:5px 10px;
	text-decoration:none;
	text-shadow:0px 0px 0px #d1c4e9;
}
.myButton1:hover {
	background-color:#d1c4e9;
}
.myButton1:active {
	position:relative;
	top:1px;
}

.btn {
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 15px;
  background: #d1c4e9;
  padding: 6px 9px 3px 9px;
  text-decoration: none;
}

.btn:hover {
  background: #d1c4e9;
  text-decoration: none;
}

#joinbtn{
  padding-left:250px;
}

.container{
  padding-bottom:100px;
}

</style>