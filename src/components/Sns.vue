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
                                </div><br />

                                <div class="d-flex">
                                    <div class="box" style="background: #BDBDBD;">
                                        <img class="profile" src="../assets//images/Booklover.png">
                                    </div>&emsp;
                                    <h5 style="padding-right:10px;">초이</h5>
                                    <small style="color:#ccc">신당동</small>
                                </div><br />

                                <div>
                                    앞에 새로 생긴 카페 가보셨나요? 분위기가 너무 좋아요!
                                </div>
                                <br />
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
                            <hr />
                            <!-- 좋아요, 댓글 -->
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <img src="../assets/images/heart.png" alt="이미지" style="width: 20px; height:22px">
                                        공감하기
                                    </div>&emsp;&emsp;

                                    <div>
                                        <button type="button" class="btn_img" @click="handle_comment">
                                            <img src="../assets/images/chat.png" alt="이미지" style="width: 20px; height:22px">
                                            댓글 3</button>
                                    </div>

                                        <!-- 댓글 들어갈 공간 -->
                                        <div v-if="is_show">
                                            <div class="allcontainer">
                                                <div class="containers">
                                                    <div class="row">
                                                        <div class="col-md-12 card">
                                                            <div class="card-body">
                                                                <label>리뷰쓰기</label>
                                                                <div class="star-rating space-x-4">
                                                                    <input type="radio" id="5-stars" name="rating" value="5" v-model="ratings" />
                                                                    <label for="5-stars" class="star pr-4">★</label>
                                                                    <input type="radio" id="4-stars" name="rating" value="4" v-model="ratings" />
                                                                    <label for="4-stars" class="star">★</label>
                                                                    <input type="radio" id="3-stars" name="rating" value="3" v-model="ratings" />
                                                                    <label for="3-stars" class="star">★</label>
                                                                    <input type="radio" id="2-stars" name="rating" value="2" v-model="ratings" />
                                                                    <label for="2-stars" class="star">★</label>
                                                                    <input type="radio" id="1-star" name="rating" value="1" v-model="ratings" />
                                                                    <label for="1-star" class="star">★</label>
                                                                </div>

                                                                <div class="form-floating">
                                                                    <textarea class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
                                                                </div>
                                                                <br />

                                                                <div style="text-align: right">
                                                                    <button class="btn btn-success btn-lg" type="submit">댓글쓰기</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <div>
                                        <img src="../assets/images/heart2.png" alt="이미지" style="width: 20px; height:22px"> 7
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- 두번째 게시글 -->
                    <div class="col-12 col-xl-12">
                        <div class="card">
                            <div class="card1">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5>동네카페</h5>
                                    <small>30분 전</small>
                                </div><br />

                                <div class="d-flex">
                                    <div class="box" style="background: #BDBDBD;">
                                        <img class="profile" src="../assets//images/Booklover.png">
                                    </div>&emsp;
                                    <h5 style="padding-right:10px;">초이</h5>
                                    <small style="color:#ccc">신당동</small>
                                </div><br />

                                <div>
                                    앞에 새로 생긴 카페 가보셨나요? 분위기가 너무 좋아요!
                                </div>
                                <br />
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
                            <hr />
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <img src="../assets/images/heart.png" alt="이미지" style="width: 20px; height:22px">
                                        공감하기
                                    </div>&emsp;&emsp;

                                    <div>
                                        <button type="button" class="btn_img" @click="handle_comment">
                                            <img src="../assets/images/chat.png" alt="이미지" style="width: 20px; height:22px">
                                            댓글 3</button>
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
        data() {
            return {
            is_show: false,
            }
        },
        methods: {
            handle_comment() {
                this.is_show = !this.is_show;
            }
        }
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
        height: 200px;
    }

    .img {
        margin: 2px;
    }

    .card-body {
        margin: 10px;
    }

    .box {
        width: 35px;
        height: 35px;
        border-radius: 70%;
        overflow: hidden;
    }

    .profile {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .btn_img {
        border: none;
        background-color: #fff;
    }
</style>