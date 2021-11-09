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

            <div class="col-md-9">
                <div class="card" style="padding:30px">
                    <div class="card-body">
                        <div class="row">
                            <h4>문의게시판</h4>
                            <hr />


                            <section id="article-list-wrap" class="section-1 con-min-width">
                                <div class="con">
                                    <div class="article-search">
                                        <form class="block">
                                            <input type="text" @input="search" :value="searchKeyword" placeholder="검색어">
                                        </form>

                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">번호</th>
                                                <th scope="col">제목</th>
                                                <th scope="col">작성자</th>
                                                <th scope="col">날짜</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2"></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <div class="pagination">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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
.pagination{
   margin-left: 180px;
}
 .container {
  padding-bottom: 100px;
 }
.banner{
    background-color:#ffcdd22f;
     width:100%;
     height:200px;
}
.banner-text{
 text-align: center;
padding-top: 5%;
  color: #000;

}
.article-search{
   text-align: right;
}
</style>