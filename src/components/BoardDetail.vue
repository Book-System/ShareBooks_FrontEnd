<template>
    <div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">고객센터</h3>
                </div>
                    <ul class="list-group">
                        <a href="./customer" class="list-group-item">문의하기</a>
                        <a href="./board" class="list-group-item">문의게시판</a>
                        <a href="./Faq" class="list-group-item">자주묻는질문</a>
                    </ul>
                </div>
        </div>

            <div class="col-md-8">
            <div class="card" style="padding:30px">
                <div class="card-body">
                    <div class="row">
                        <h4>게시판 상세보기</h4>

                        <div class="AddWrap">
                          <form>
                            <table class="tbAdd">
                              <colgroup>
                                <col width="100%" />
                                <col width="*" />
                              </colgroup>
                              <tr>
                                <th>제목</th>
                                <!-- <td>{{subject}}</td> -->
                              </tr>
                              <tr>
                                <th>작성자</th>
                              </tr>
                              <tr>
                                <th>내용</th>
                                <td class="txt_cont" v-html="cont"></td>
                              </tr>
                              <tr>
                                <th>이미지</th>
                                <!-- <td><img src="../assets/images/default.jpg" onerror="this.src='../assets/images/default.jpg'" style="width:200px; height:200px"></td> -->
                              </tr>
                            </table>
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

<style scoped>
  .tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:300px; vertical-align:top;}

  .container{
    padding-top:90px;
    padding-bottom:100px;    
  }
</style>