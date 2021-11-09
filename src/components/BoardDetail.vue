<template>
<div class="main">
        <div class="banner" >
           <h2 class="banner-text">고객센터</h2>
        </div><br/>   
    <div class="container">
    <div class="row">
        <div class="col-md-3">
               <div class="list-group">
                    <a class="list-group-item list-group-item-action disabled">고객센터</a>
                    <a href="./customer" class="list-group-item list-group-item-action">문의하기</a>
                    <a href="./board" class="list-group-item list-group-item-action">문의게시판</a>
                    <a href="./Faq" class="list-group-item list-group-item-action">자주묻는질문</a> 
                </div>
            </div>

            <div class="col-md-8">
            <div class="card" style="padding:30px">
                <div class="card-body">
                    <div class="row">
                        <h4>문의게시판 상세보기</h4>

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
   
    padding-bottom:100px;    
  }
.banner{
    background-color:#ffcdd22f;
     width:100%;
     height:250px;
}
.banner-text{
 text-align: center;
 padding-top:150px;
  color: #000;

}
  
</style>