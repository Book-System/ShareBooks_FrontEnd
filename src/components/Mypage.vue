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
                        <a href="./Updatemypage" class="list-group-item">내 정보수정</a>
                        <a href="./Myactive" class="list-group-item">나의 활동내역</a>
                        <a href="./Mypagewriting" class="list-group-item">글 관리</a>
                        <a href="#" class="list-group-item">책 추천</a>
                        <a href="#" class="list-group-item">즐겨찾기</a>
                    </ul>
              </div>
        </div>

        <div class="col-md-7">
          <div class="card" style="padding:30px">
              <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>My PROFILE</h4>
                            <hr>
                        </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h4>나나나님</h4>
                        <p>안녕하세요. 나나나입니다.</p>
                        <p>abab@naver.com</p>
                        
                      </div>

                      <div class="col-lg-4">
                        <h4>나의 활동내역 보기</h4>
                        <p>내가 빌려준 책</p>
                        <p>0</p>
                        <p>내가 빌린 책</p>
                        <p>1</p>
                      </div>

                      <div class="col-lg-4">
                        <h4>내가 쓴글 보기</h4>
                        <p>내가 쓴 게시글</p>
                        <p>0</p>
                        <p>내가 쓴 리뷰</p>
                        <p>1</p>
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

<style scoped>
  .mypage {
    color: white;
    text-align: center;
  }
  .btn {
    margin-left: 80px;
  }
</style>