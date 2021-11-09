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

        <div class="col-md-8">
          <div class="card" style="padding:30px">
              <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>나의 활동내역</h4>
                            <hr>
                        </div>
                    </div>
                      
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#qwe">빌려준 책</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#asd">빌린 책</a>
                      </li>
                    </ul>
                    <br/>

                <div class="tab-content">
                  <div class="tab-pane fade show active" id="qwe">
                    <div class="row row-cols-1 row-cols-md-2 g-4">

                      <div class="col">
                        <div class="card">
                              <img src="http://www.greenart.co.kr/upimage/new_editor/201712/20171213171136.jpg" class="card-img-top" id="cardimage">
                          <div class="card-body">
                            <h5 class="card-title">책 빌려드립니다. 하루 200원!</h5>
                            <p class="card-text">위치: 부산광역시 남구 수영로 387</p>
                            <p class="card-text">대여일 : 10월 12일 ~ 10월 14일</p>
                          </div>
                          <div class="btn-family">
                          <a href="#" class="myButton1">삭제</a>
                          <a href="#" class="myButton1">수정</a>
                          </div>
                        </div>
                      </div>

                      <div class="col">
                        <div class="card">
                            <img src="http://www.greenart.co.kr/upimage/new_editor/201712/20171213171136.jpg" class="card-img-top" id="cardimage">
                          <div class="card-body">
                            <h5 class="card-title">책 빌려드립니다. 하루 200원!</h5>
                            <p class="card-text">위치: 부산광역시 남구 수영로 387</p>
                            <p class="card-text">대여일 : 10월 12일 ~ 10월 14일</p>
                          </div>
                           <div class="btn-family">
                          <a href="#" class="myButton1">삭제</a>
                          <a href="#" class="myButton1">수정</a>
                          </div>
                        </div>
                      </div>

                      </div>
                  </div>

                      <div class="tab-pane fade" id="asd">
                        <p> 빌린 책이 없습니다 :) </p>
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

  .btn-family{   
    margin: 10px auto;
    padding-left: 200px;
  }
 .myButton1 {
	background-color:#d1c4e9;
	border-radius:5px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Verdana;
	font-size:16px;
	padding:6px 11px;
	text-decoration:none;
	text-shadow:0px 0px 0px #d1c4e9;
  margin-right:10px;
}
.myButton1:hover {
	background-color:#d1c4e9;
}
.myButton1:active {
	position:relative;
	top:1px;
}

  #first {
    float: right;
    width: 20%;
}

  #second{
    float: right;
    margin-left: 2%;
    width: 20%;
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
.cardbody{
  background-color: transparent;
}



</style>