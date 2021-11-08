<template>
<div class="container">
  <div class="welcome">
   <img src="../assets//images/welcome4.jpg" style="width:550px; height:210px; margin-left:180px; " />  
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
              <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
           <a href="#" class="myButton1">중복확인</a>
          </div>
          </div>
          <br/>

          <label>닉네임</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="닉네임을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <a href="#" class="myButton1">중복확인</a>
          </div>
          </div>
          <br/>

          <div>
          <label>비밀번호</label>
          <input type="text" class="form-control" placeholder="비밀번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <div>
          <label>비밀번호 확인</label>
          <input type="text" class="form-control" placeholder="비밀번호를 다시 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <div>
          <label>이름</label>
          <input type="text" class="form-control" placeholder="이름을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <div>
          <label>전화번호</label>
          <input type="text" class="form-control" placeholder="'-' 빼고 숫자만 입력" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <label>주소</label>
          <div class="row">
            <div class="col-sm-7">
              <input type="text" class="form-control" placeholder="우편번호" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <a href="#" class="myButton1">우편번호찾기</a>
          </div>
            <div class="col-sm-12">
              <input type="text" class="form-control" placeholder="도로명 주소" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <br/>
        

            <div id="joinbtn" class="d-grid gap-2 d-md-block">
             <a href="#" class="myButton">회원가입</a>
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
   
  }
</script>

<style  scoped>
.welcome{
  margin-left:200px;
}

#join {
  padding-right: 50px;
}

#joinbtn {
  padding-left: 210px;
}

.container{
  padding-top:20px;
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