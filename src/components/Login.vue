<template>

<div class="container">
  <div class="row">
    <div class="col">
       <img src="../assets/images/Booklover.png" style="width:500px; height:500px;" />  
    </div>
      <div class="col" style="padding-left:100px;" >
        <div>

          

          <div>
          <p>아이디</p>
          <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>

          <br/>

          <div>
          <label>비밀번호</label>
          <input type="text" class="form-control" placeholder="비밀번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>


          <br/>


          <div >
             <a href="#" class="myButton">로그인</a>
          </div>
          <br/>
          <div class="kakao">            
            <button class="custom-btn-primary" type="button" @click="login()" style="height: 58px; margin: 0 auto; width:100%" ></button>
            
          </div>
                  
          <br/>

                <div class="account">
                  <a href="#">아이디 찾기</a> |
                  <a href="#">비밀번호 찾기</a><br/>
                  계정이 없으신가요? <a href="./Join">회원가입</a> 
              </div>

        </div>
      </div>
        <div class="col">
        </div>
  </div>
</div>
</template>
<script>
export default {
  methods: {
    login() {
      window.location.replace(
       "https://kauth.kakao.com/oauth/authorize?client_id=1369da4b522d2f4b32c277d58885eef0&redirect_uri=http://localhost:8080/join&response_type=code"
      );
    },
  },
  
};
</script>


<style scoped>
  .account {
    text-align: center;
  }

  .custom-btn-primary{
    background-color :transparent;
    background-image :url("../assets/images/kakao_login_medium_wide.png");
    background-repeat: no-repeat;
    background-size :100%;
    height:100px;
    border:none;
    
  }

  .container{
  padding-top:200px;
  padding-bottom:100px;
}


.myButton {
	background-color:#72dbdfa6;
	border-radius:6px;
	display:inline-block;
	cursor:pointer;
	color:rgb(94, 94, 94);
	font-family:Verdana;
	font-size:19px;
	padding:13px 135px;
	text-decoration:none;
	text-shadow:0px 0px 0px #283966;
}
.myButton:hover {
	background-color:#86cae6;
}
.myButton:active {
	position:relative;
	top:1px;
}

</style>