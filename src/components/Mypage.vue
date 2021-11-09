<template>
  <div class="main">
        <div class="banner" >
           <h2 class="banner-text">마이페이지</h2>
        </div><br/>   

  <div class="container">
   
    <div class="row">
        <div class="col-md-3">
            <div class="list-group">
                    <a href="./mypage" class="list-group-item list-group-item-action">마이페이지</a>
                    <a href="./Updatemypage" class="list-group-item list-group-item-action">내 정보 수정</a>
                    <a href="./Myactive" class="list-group-item list-group-item-action">나의 활동 내역</a>
                    <a href="./Mypagewriting" class="list-group-item list-group-item-action">글 관리</a>
                    <a href="#" class="list-group-item list-group-item-action">책 추천</a> 
                    <a href="#" class="list-group-item list-group-item-action">즐겨찾기</a> 
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
                        <a href="./Myactive" >나의 활동 내역 보기</a>
                        <p>내가 빌려준 책</p>
                        <p>0</p>
                        <p>내가 빌린 책</p>
                        <p>1</p>
                      </div>

                      <div class="col-lg-4">
                         <a href="./Mypagewriting" >내가 쓴 글 보기</a>
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

.container{

  padding-bottom:100px;
}

.banner{
    background-color:#d1c4e92d;
     width:100%;
     height:250px;
}
.banner-text{
 text-align: center;
 padding-top:150px;
  color: #000;

}

   


</style>