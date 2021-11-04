<template>

<div class="container">
  <div class="row">
    <div class="col">
    </div>
      <div class="col card" style="width: 50rem; height: 47rem">
        <div class="card-body">

          <h1 class="card-title">로그인</h1><br/>

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


          <div id="logincheck" class="d-grid gap-2">
              <button class="btn btn-primary" type="button" style="height: 52px; margin: 0 auto; width:100%">로그인</button>
          </div>
          <br/>
          <div class="kakao">            
            <button class="custom-btn-primary" type="button" @click="login()" style="height: 52px; margin: 0 auto; width:100%" ></button>
            
          </div>
                  
          <br/>

              <div class="account">
                <a href="#">아이디 찾기</a> |
                <a href="#">비밀번호 찾기</a> |
                <a href="./Join">회원가입</a>
                
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


<style>
  .account {
    text-align: center;
  }

  .custom-btn-primary{
    background-color :transparent;
    background-image :url("../assets/kakao_login_medium_wide.png");
    background-repeat: no-repeat;
    background-size :100%;
    height:100px;
    border:none;
    
  }
</style>