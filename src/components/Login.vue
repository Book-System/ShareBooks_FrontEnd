<template>

<div class="container">
  <div class="row">
    <div class="col">
    </div>
      <div class="col card" style="width: 50rem; height: 50rem">
        <div class="card-body">

          <h1 class="card-title">로그인</h1><br/>

          <div class="center">
          <label>아이디</label>
          <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" aria-describedby="basic-addon1" style="height: 35px;; width: 300px">
          </div>

          <br/>

          <div class="center">
          <label>비밀번호</label>
          <input type="text" class="form-control" placeholder="비밀번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1" style="height: 35px;; width: 300px">
          </div>

          <br/>

          <div id="logincheck" class="d-grid gap-2">
              <button class="btn1 btn-primary" type="button" style="height: 35px;; width: 300px">로그인</button>
          </div>
          <br/>
          <div class="kakao">            
            <img src="../assets/kakao_login_medium_wide.png" style="height: 40px; width: 300px;" @click="login()"/>
          </div>
                  
          <br/>

              <div class="account">
                계정이 없으신가요?
                <a href="./Join">회원가입 하기</a>
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
  .kakao {
    padding-left: 30px;
  }
  #logincheck {
    padding-left: 30px;
  }
  .center {
    padding-left: 30px;
  }

</style>