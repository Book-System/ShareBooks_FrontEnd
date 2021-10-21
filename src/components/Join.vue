<template>
<div class="container">
  <div class="row">
    <div class="col">
    </div>
      <div class="col-md-6 card">
        <div id="card1" class="card-body">
          <h1 class="card-title">회원가입</h1><br/>

          <label>아이디</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <button class="btn1 btn-primary" type="button">중복확인</button>
          </div>
          </div>
          <br/>

          <label>닉네임</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="닉네임을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <button class="btn1 btn-primary" type="button">중복확인</button>
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
            <button class="btn1 btn-primary" type="button">우편번호 찾기</button>
          </div>
            <div class="col-sm-12">
              <input type="text" class="form-control" placeholder="도로명 주소" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <br/>
          <br/>

            <div id="joinbtn" class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button">회원가입</button>
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

<style>
#join {
  padding-right: 50px;
}

#joinbtn {
  padding-left: 150px;
}

</style>