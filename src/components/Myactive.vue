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

        <div class="col-md-6">
          <div class="card" style="padding:30px">
              <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>나의 활동내역</h4>
                            <hr>
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-md-2 g-4">
                      <div class="col">
                        <div class="card">
                          <img src="..." class="card-img-top">
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
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

<style>
  .mypage {
    color: white;
    text-align: center;
  }
  .btn {
    margin-left: 80px;
  }
</style>