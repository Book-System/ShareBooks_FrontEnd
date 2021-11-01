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
                        <a href="#" class="list-group-item">자주묻는질문</a>
                    </ul>
                </div>
        </div>

            <div class="col-md-9">
            <div class="card" style="padding:30px">
                <div class="card-body">
                    <div class="row">
                        <h4>문의게시판</h4>
                        <hr/>
                            
                        
                        <section id="article-list-wrap" class="section-1 con-min-width">
                            <div class="con">
                                <div class="article-search">
                                <form class="block">
                                    <input type="text" @input="search" :value="searchKeyword"
                                        placeholder="검색어" >
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

</style>