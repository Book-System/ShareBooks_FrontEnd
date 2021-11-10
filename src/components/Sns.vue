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
                                    <!-- 프로필 사진 -->
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
                            <div class="d-flex" style="height:40px;">
                                    <div>
                                        <button type="button" v-on:click="isActive=!isActive" v-bind:class="{ child: isChild, 'is-active': isActive }">
                                        &emsp;<img src="../assets/images/heart.png" alt="이미지" style="width: 20px; height:22px">
                                        공감하기</button>
                                         <button type="button" class="btn_like" >
                                        &emsp;<img src="../assets/images/heart.png" alt="이미지" style="width: 20px; height:22px">
                                        공감하기</button>
                                    </div>&emsp;&emsp;

                                    <div>
                                        <button type="button" class="btn_comment" @click="handle_comment">
                                            <img src="../assets/images/chat.png" alt="이미지" style="width: 20px; height:22px">
                                            댓글 1</button>
                                    </div>

                                        

                                    <!--좋아요 누르면 뜨는 거  -->
                                    <!-- <div class="text-align: right">
                                        <img src="../assets/images/heart2.png" alt="이미지" style="width: 20px; height:22px;"> 7
                                    </div> -->

                                </div>
                            </div>
                        </div>
                    

                    <!-- 댓글 들어갈 공간 -->
                        <div v-if="is_show">
                            <div class="containers">
                                <div class="card" style="width:820px">
                                    <div class="around">
                                        <h4>댓글1</h4>
                                            <div>
                                                최신순 등록순
                                            </div>
                                    </div>
                                    <hr/>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="d-flex">
                                                <div class="box" style="background: #BDBDBD;">
                                                    <img class="profile" src="../assets//images/Booklover.png">
                                                </div>&emsp;
                                                <a style="padding-right:10px;">냠냠</a>
                                            </div>
                                                <div class="relative">
                                                <p>너무 이뻐요!</p>
                                                </div>
                                                <div class="relative2">
                                                답글쓰기&emsp;공감하기
                                                </div>
                                                <hr class="hr">
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    

                    <!-- 두번째 게시글 -->
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
            ischild: true,
            isActive: true,
            }
        },
        methods: {
            handle_comment() {
                this.is_show = !this.is_show;
            },
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

    .btn_comment {
        border: none;
        background-color: #fff;
    }

    .btn_like {
        border: none;
        background-color: #fff;
        transition: background-color 0.4s;
    }
    .is-active {
        background: #ffda33;
    }

    .around {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
        padding-left: 30px;
        height: 20px;
        padding-top:5px;
    }

    .relative {
        position: relative;
        left: 50px;
    }

    .relative2 {
        position: relative;
        left: 50px;
        color: rgb(148, 147, 147);
    }

    .hr {
        border : 1px;
        color: #ccc;
    }
</style>