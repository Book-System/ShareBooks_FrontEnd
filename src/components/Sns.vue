<template>
    <div class="container">

        <div class="row">

            <div class="col">
            </div>

            <div class="col-md-8 card">
                <div id="card1" class="card-body">
                    <h4>우리동네 게시판</h4>
                    <hr>

                    <div class="col-12 col-xl-12">
                        <div class="card">
                            <div class="card1">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5>동네카페</h5>
                                    <small>30분 전</small>
                                </div><br/>

                                <div class="d-flex">
                                    <h5 style="padding-right:10px;">초이</h5>
                                    <small style="color:#ccc">신당동</small>
                                </div>

                                <div>
                                   앞에 새로 생긴 카페 가보셨나요? 분위기가 너무 좋아요!
                                </div>
                                <br/>
                                <div class="d-flex">
                                    <div class="img">
                                        <img src="https://www.mstoday.co.kr/news/photo/202010/62714_44329_4439.jpeg" class="thumbnail" alt="...">
                                    </div>
                                    <div class="img">
                                        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMzFfOTcg/MDAxNjEyMDk1NTUwMzYw.4fGnTvMsT9_xjJJQGEkj5COpOOmJF1Ijai9TUY4XOR8g.HAVFa_HPq85NdszhE03CYt9cd-uWAY30yDmSTcBCUiQg.JPEG.hyj3410/IMG_2691.JPG?type=w800" class="thumbnail" alt="...">
                                    </div>
                                    <div class="img">
                                        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA1MjlfMTAg/MDAxNTkwNzQ2MzM0Mzk2.Mu_7UeMSvcFXZXg6fle8m0t7gBQzUpL-9AslKqksvEYg.QftpC92FVV36A-QaoQ1T1y0khj_edm6eIySc-dlXBOgg.JPEG.jhgeel/SE-12ef010d-0740-4fdb-a277-64237fe509e4.jpg?type=w800" class="thumbnail" alt="...">
                                    </div>
                                </div>
                            </div>                              
                                <hr/>
                                <div class="card-body">
                                    <div class="d-flex">
                                    <div>
                                        <img src="../assets/images/heart.png" alt="이미지" style="width: 20px; height:22px">
                                        공감하기
                                    </div>
                                    <div>
                                        <img src="../assets/images/chat.png" alt="이미지" style="width: 20px; height:22px">
                                        댓글
                                    </div>
                                    </div>
                                    <div>
                                        <!-- 댓글 들어갈 공간 -->
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col" style="width: 100rem;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .container {
        padding-top: 80px;
        padding-bottom: 100px;
    }
    .card1 {
        padding: 50px;
    }
    .thumbnail {
        width: 200px;
        height : 200px;
    }
    .img {
        margin :2px;
    }
    .card-body {
        margin: 10px;
    }
</style>