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

            <div class="col-md-9">
            <div class="card" style="padding:30px">
                <div class="card-body">
                    <div class="row">
                        <h4>FAQ 자주묻는질문</h4>
                        <hr/>
                            
                        
                        <section id="article-list-wrap" class="section-1 con-min-width">
                            <div class="con accordion accordion-flush" id="accordionFlushExample">
                            <table class="table">
                                <thead class="accordion-item">
                                    <tr class="accordion-header" id="flush-headingOne">
                                    <th scope="col">번호</th>
                                    <th scope="col">내용</th>
                                    </tr>
                                </thead>
                                <tbody class="accordion-item">
                                    <tr>
                                    <th scope="row">1</th>
                                    <div class="accordion-header" id="flush-headingOne">
                                    <td><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        회원가입은 어떻게 하나요?
                                    </button></td>
                                    </div>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">제발 되라!!!</div>
                                    </div>
                                    </tr>

      
                                    <tr>
                                    <th scope="row">2</th>
                                    <div class="accordion-header" id="flush-headingTwo">
                                    <td><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        회원 정보 수정은 어디서 하나요?
                                    </button></td>
                                    </div>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">왜 위로 가는걸까.....</div>
                                    </div>
                                    </tr>

                                    <tr>
                                    <th scope="row">3</th>
                                    <td>회원 탈퇴는 어떻게 하나요?</td>
                                    </tr> 

                                    <tr>
                                    <th scope="row">4</th>
                                    <td>아이디가 기억나지 않아요.</td>
                                    </tr> 

                                    <tr>
                                    <th scope="row">5</th>
                                    <td>비밀번호가 기억나지 않아요.</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">6</th>
                                    <td>휴대전화 본인인증 인증번호가 오지 않아요.</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">7</th>
                                    <td>간편 로그인 기능을 사용하고 싶어요. 소셜 로그인 계정(카카오)을 어떻게 연동할 수 있나요?</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">8</th>
                                    <td>후기는 언제까지 작성할 수 있나요?</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">9</th>
                                    <td>후기 댓글에 욕설이 있어요. 어떻게 해야 하나요?</td>
                                    </tr>

                                    <tr>
                                    <th scope="row">10</th>
                                    <td>알림 설정(푸시)은 어떻게 하나요?</td>
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
         name: 'App',
        data: () => {
            return {
                faq_show : false
            }
        },
        methods: {
            handle_faq() {
                this.is_show = !this.is_show;
            },
        },
    }
</script>

<style scoped>

</style>