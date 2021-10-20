<template>
    <div id="banner" class="col bg-dark p-5 rounded">
          <h3 class="mypage">마이페이지</h3>
    </div><br/>

  <div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">마이페이지</h3>
                </div>
                    <ul class="list-group">
                        <a href="#" class="list-group-item">내 정보수정</a>
                        <a href="#" class="list-group-item">나의 활동내역</a>
                        <a href="#" class="list-group-item">글 관리</a>
                    </ul>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">고객센터</h3>
                </div>
                    <ul class="list-group">
                        <a href="#" class="list-group-item">자주 묻는 질문 보러가기</a>
                    </ul>
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
                                <button class="btn1 btn-primary" type="button">중복확인</button>
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
                                <div class="col-sm-7">
                                  <input type="text" class="form-control" placeholder="06000" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                              <div class="col-sm-4 d-grid gap-2 d-md-block">
                                <button class="btn1 btn-primary" type="button">우편번호 찾기</button>
                              </div>
                                <div class="col-sm-12">
                                  <input type="text" class="form-control" placeholder="부산광역시 사상구" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                              </div>
                              <br/>

                            </form>
                        </div>
                    </div>   
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  .mypage {
    color: white;
    text-align: center;
  }
  .update{
    margin-left: 180px;
  }
</style>