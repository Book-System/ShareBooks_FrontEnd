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
                            <hr />
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
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingOne">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                회원가입은 어떻게 하나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">제발 되라!!!</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingTwo">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                회원 정보 수정은 어디서 하나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">3</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingThree">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                회원 탈퇴는 어떻게 하나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">4</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingFour">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                아이디가 기억나지 않아요.
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingFive">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                비밀번호가 기억나지 않아요.
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">6</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingSix">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                                휴대전화 본인인증 인증번호가 오지 않아요.
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">7</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingSeven">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                                                간편 로그인 기능을 사용하고 싶어요. 소셜 로그인 계정(카카오)을 어떻게 연동할 수 있나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">8</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingEight">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                                                후기는 언제까지 작성할 수 있나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">9</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingNine">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                                                후기 댓글에 욕설이 있어요. 어떻게 해야 하나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">10</th>
                                                <td>
                                                    <div>
                                                        <div class="accordion-header" id="flush-headingTen">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                                                알림 설정(푸시)은 어떻게 하나요?
                                                            </button>
                                                        </div>
                                                        <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                                                            <div class="accordion-body">와아아아</div>
                                                        </div>
                                                    </div>
                                                </td>
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
                faq_show: false
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