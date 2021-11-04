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
                        <div id="map" style="width:100%;height:300px;"></div>
                    </div>
                </div>
                <hr />
                <div>

                    <div class="review">
                        <div id="app">
                            <h3 style="display: inline-block">3개의 리뷰</h3>
                            <button type="button" class="btn btn-secondary" style="height:30px" @click="handle_toggle">리뷰쓰기</button>
                            <!-- <button @click="handle_toggle" type="button">리뷰쓰기</button> -->
                            <div v-show="is_show">
                                <div class="allcontainer">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6 card" id="allreview">
                                                <div id="card1" class="card-body">
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
                                                        <textarea class="form-control" placeholder="호스트에게 요청할 사항을 입력하세요" id="floatingTextarea2" style="height: 100px"></textarea>
                                                    </div>
                                                    <br />

                                                    <div class="text-right">
                                                        <div class="stars starrr" data-rating="0"></div>
                                                        <a class="btn btn-danger btn-sm" href="#" id="close-review-box" style="display:none; margin-right: 10px;"></a>
                                                        <!-- <button id="cancel" class="btn btn-danger" type="submit">cancel</button> -->
                                                        <button class="btn btn-success btn-lg" type="submit">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="rating-block">
                            <h2 class="bold padding-bottom-7">4.5 <small>/ 5</small></h2>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="card" style="width:600px">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <p class="text-secondary text-center">15 Minutes Ago</p>
                                </div>
                                <div class="col-md-10">
                                    <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                    <div class="star-ratings">
                                        <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div class="star-ratings-base space-x-2 text-lg">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="width:600px">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <p class="text-secondary text-center">15 Minutes Ago</p>
                                </div>
                                <div class="col-md-10">
                                    <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                    <div class="star-ratings">
                                        <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                                            <span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div class="star-ratings-base space-x-2 text-lg">
                                            <span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="width:600px">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <p class="text-secondary text-center">15 Minutes Ago</p>
                                </div>
                                <div class="col-md-10">
                                    <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>
                                    <div class="star-ratings">
                                        <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                                            <span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div class="star-ratings-base space-x-2 text-lg">
                                            <span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />


            </div>

            <div class="col-md-5">
                <div class="card" id="viewcard">
                    <div class="row g-0">
                        <div class="col-md-12">
                            <div style="text-align:center;">
                                <p>빌려주는 사람님의 홈짐</p>
                                <p>"서울 강남구 가로수길 5"<br>에 위치한 홈짐입니다.</p><br/>
                            </div>
                            <div style="text-align:right;">
                                <p>1회 이용가격</p>
                                <h4>5000원</h4>
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
        name: 'App',
        data: () => {
            return {
                is_show: false,
                map: null,
                markerPositions1: [
                [33.452278, 126.567803],
                [33.452671, 126.574792],
                [33.451744, 126.572441],
                ],
                markerPositions2: [
                [37.499590490909185, 127.0263723554437],
                [37.499427948430814, 127.02794423197847],
                [37.498553760499505, 127.02882598822454],
                [37.497625593121384, 127.02935713582038],
                [37.49629291770947, 127.02587362608637],
                [37.49754540521486, 127.02546694890695],
                [37.49646391248451, 127.02675574250912],
                ],
                markers: [],
                infowindow: null,
                };
            },
            mounted() {
                if (window.kakao && window.kakao.maps) {
                    this.initMap();
                } else {
                    const script = document.createElement("script");
                    /* global kakao */
                    script.onload = () => kakao.maps.load(this.initMap);
                    script.src =
                    "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
                    document.head.appendChild(script);
                }
            },
        methods: {
            handle_toggle() {
                this.is_show = !this.is_show;
            },
            initMap() {
                    const container = document.getElementById("map");
                    const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5,
                };
                this.map = new kakao.maps.Map(container, options);
            }
        },
        ratingToPercent() {
            const score = +this.restaurant.averageScore * 20;
            return score + 1.5;
        }
    }
    
</script>

<style scoped>

    .star-ratings {
        color: #aaa9a9;
        position: relative;
        unicode-bidi: bidi-override;
        width: max-content;
        -webkit-text-fill-color: transparent;
        /* Will override color (regardless of order) */
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
        text-decoration: none;
        color: #fff
    }

    a:hover {
        text-decoration: none;
        color: #fff
    }



    .star-rating label {
        -webkit-text-fill-color: transparent;
        /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 2.3px;
        -webkit-text-stroke-color: #2b2a29;
        cursor: pointer;
    }

    .star-rating :checked~label {
        -webkit-text-fill-color: gold;
    }

    .star-rating label:hover,
    .star-rating label:hover~label {
        -webkit-text-fill-color: #fff58c;
    }

    .animated {
        -webkit-transition: height 0.2s;
        -moz-transition: height 0.2s;
        transition: height 0.2s;
    }


    .star-ratings {
        color: #aaa9a9;
        position: relative;
        unicode-bidi: bidi-override;
        width: max-content;
        -webkit-text-fill-color: transparent;
        /* Will override color (regardless of order) */
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

    #viewcard {
        padding: 20px;
        display: inline-block;
        position: sticky;
        top: 80px;
        width: 350px;
        height: 250px;
    }
</style>