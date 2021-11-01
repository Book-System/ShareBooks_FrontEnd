<template>
    <div class="container">
        <div class="row g-0">
            <div class="col-md-7" style="background-color: #eee;">
                <div>
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div>
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div>
                    <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                </div>

                <div>
                    <h3>빌려주는사람님과의 거래장소</h3>
                    <div>
                        <h1>지도데이터</h1>

                    </div>
                </div>
                <hr/>
                <div>

                    <div class="review">
                    <h3>3개의 리뷰</h3>
                    <button type="button" class="btn btn-secondary" style="height:30px"><a href="./review">리뷰쓰기</a></button>
                    </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <div class="rating-block">
                                    <h2 class="bold padding-bottom-7">4.5 <small>/ 5</small></h2>
                                </div>
                            </div>
                        </div>

                    <div class="container">
                        <div class="card" style="width:630px">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                        <p class="text-secondary text-center">15 Minutes Ago</p>
                                    </div>
                                    <div class="col-md-10">
                                            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                            <div class="star-ratings">
                                                <div class="star-ratings-fill space-x-2 text-lg"
                                                :style="{ width: ratingToPercent + '%' }">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                                </div>
                                                <div class="star-ratings-base space-x-2 text-lg">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                                </div>
                                    </div>
                                    <div class="clearfix"></div>
                                        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" style="width:630px">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                        <p class="text-secondary text-center">15 Minutes Ago</p>
                                    </div>
                                    <div class="col-md-10">
                                            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                            <div class="star-ratings">
                                                <div class="star-ratings-fill space-x-2 text-lg"
                                                :style="{ width: ratingToPercent + '%' }">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span>
                                                </div>
                                                <div class="star-ratings-base space-x-2 text-lg">
                                                    <span>★</span><span>★</span><span>★</span><span>★</span>
                                                </div>
                                    </div>
                                    <div class="clearfix"></div>
                                        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" style="width:630px">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                        <p class="text-secondary text-center">15 Minutes Ago</p>
                                    </div>
                                    <div class="col-md-10">
                                            <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                            <div class="star-ratings">
                                                <div class="star-ratings-fill space-x-2 text-lg"
                                                :style="{ width: ratingToPercent + '%' }">
                                                    <span>★</span><span>★</span><span>★</span>
                                                </div>
                                                <div class="star-ratings-base space-x-2 text-lg">
                                                    <span>★</span><span>★</span><span>★</span>
                                                </div>
                                    </div>
                                    <div class="clearfix"></div>
                                        <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>


                </div>
            </div>
            <div class="col-md-5">
                <div class="card" style="padding: 20px;">
                    <div class="row g-0">
                        <div class="col-md-12">
                            <div style="text-align:center;">
                                <p>빌려주는 사람님의 홈짐</p>
                                <p>"서울 강남구 가로수길 5"<br>에 위치한 홈짐입니다.</p>
                            </div>
                            <div style="text-align:right;">
                                <p>1회 이용가격</p>
                                <p>5,000원</p>
                            </div>
                            <button type="button" class="btn btn-primary">수정 및 삭제하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    ratingToPercent() {
        const score = +this.restaurant.averageScore * 20;
        return score + 1.5;
    },
    
    }
</script>

<style scoped>

    .star-ratings {
    color: #aaa9a9; 
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
    }
    
    .star-ratings-fill {
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
    }
    
    .star-ratings-base {
    z-index: 0;
    padding: 0;
    }

    .star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2.25rem;
    line-height: 2.5rem;
    justify-content: space-around;
    padding: 0 0.2em;
    text-align: center;
    width: 5em;
    }
    
    .star-rating input {
    display: none;
    }
    

    .review {
        display: flex;
        justify-content: space-between;
    }

a {
    text-decoration:none;
    color : #fff
    }

a:hover { 
    text-decoration: none;
    color : #fff
}

</style>