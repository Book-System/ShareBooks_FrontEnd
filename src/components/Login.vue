<template>

<div class="container">
  <div class="row">
    <div class="col">
    </div>
      <div class="col card" style="width: 50rem; height: 40rem">
        <div class="card-body">

          <h1 class="card-title">로그인</h1><br/>

          <div>
          <label>아이디</label>
          <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>

          <br/>

          <div>
          <label>비밀번호</label>
          <input type="text" class="form-control" placeholder="비밀번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>

          <br/>

          <div id="logincheck" class="d-grid gap-2">
              <button class="btn1 btn-primary" type="button" style="height: 30px;">로그인</button>
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
// export default {
//    methods: {
//      login() {
//        window.location.replace(
//          "https://kauth.kakao.com/oauth/authorize?client_id=AppKey&redirect_uri=http://127.0.0.1:8080/login&response_type=code"
//        );
//      },
//   },
// };
</script>

<style>
  .account {
    text-align: center;
  }

</style>