<template>
    <div id="banner" class="col bg-dark p-5 rounded">
          <h3 class="mypage">글 관리</h3>
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

        <div class="col-md-9">
          <div class="card" style="padding:30px">
              <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>글 관리</h4>
                            <hr>
                        </div>
                    </div>

                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#aaa">게시글</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#vvv">리뷰</a>
                      </li>
                    </ul>

                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="aaa">
                      <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>게시글번호</th>
                                    <th>게시글제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                </tr>
                            </thead>
                            <tbody id="items">
                                <tr>
                                    <td>1</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                          <div class="row">
                              <div class="col-md-4 col-md-offset-4 text-center">
                                  <ul class="pagination" id="myPager"></ul>
                              </div>
                          </div>
                        </div>
                    </div>
                    
                  <br/>
                    <div class="tab-pane fade" id="vvv">
                      <p> 남긴 리뷰가 없습니다 :) </p>
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
</style>