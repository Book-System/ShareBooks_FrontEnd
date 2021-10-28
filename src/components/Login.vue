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

          <!-- <a v-bind:href="kakaoLogin()"></a> -->

          <!-- <a href="javascript:kakaoLogin();"><img src="https://www.gb.go.kr/Main/Images/ko/member/certi_kakao_login.png" style="height: 60px; width: auto;"</a> -->

          <!-- <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

          <div id="app">
            <img v-bind:src="kakaoimage" />
          </div> -->

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
    // var model = {
    //     kakaoimage: 'https://www.gb.go.kr/Main/Images/ko/member/certi_kakao_login.png'
    // };

    // var test = new Vue({ 
    //           el : 'app', 
    //           data : model
    //       })


    // window.Kakao.init("257c607c24f7d50242038cd2effa3765");

    // function kakaoLogin() {
    //   window.Kakao.Auth.login({
    //     scope:'profile_nickname, profile_image, account_email, gender',
    //     success : function(authObj) {
    //       console.log(authObj);
    //       window.kakao.API.request({
    //         url : '/v2/user/me',
    //         success : res => {
    //           const kakao_account = res.kakao_account;
    //           console.log(kakao_account);
    //         }
    //       });
    //     }
    //   });
    // }
</script>

<style>
  .account {
    text-align: center;
  }

</style>