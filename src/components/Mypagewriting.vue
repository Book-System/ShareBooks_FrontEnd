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
                    <a href="./Updatemypage" class="list-group-item list-group-item-action">내정보수정</a>
                    <a href="./Myactive" class="list-group-item list-group-item-action">나의활동내역</a>
                    <a href="./Mypagewriting" class="list-group-item list-group-item-action">글관리</a>
                    <a href="#" class="list-group-item list-group-item-action">책추천</a> 
                    <a href="#" class="list-group-item list-group-item-action">즐겨찾기</a> 
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
                    
                
                    <div class="tab-pane fade" id="vvv">
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

.container{

  padding-bottom:100px;
}


</style>