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

          <div id="login" class="d-grid gap-2">
              <button class="btn1 btn-primary" type="button">로그인</button>
              <button class="btn1 btn-warning" type="button">카카오 로그인</button><br/>

          </div>

              <div class="account">
                계정이 없으신가요?
                <a href="#">회원가입 하기</a>
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
        
    }
</script>

<style>
  .account {
    text-align: center;
  }
</style>