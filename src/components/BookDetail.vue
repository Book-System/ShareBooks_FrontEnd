<template>
    <div class="container">
        <div class="row g-0">
            <div class="col-md-7">
                <!-- 판매 기본 정보 --> 
                <div>
                    <!-- 메인 이미지 및 서브 이미지 -->
                    <div>
                        <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false" @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
                            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
                            </vueper-slide>
                        </vueper-slides>

                        <vueper-slides class="no-shadow thumbnails" ref="vueperslides2" @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="slides.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
                            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" @click="$refs.vueperslides2.goToSlide(i)">
                            </vueper-slide>
                        </vueper-slides>
                    </div><br><br>

                    <!-- 판매 제목 & 판매 내용 -->
                    <div>
                        <h3>[대연동] 인간실격 책 대여해드립니다.</h3>
                        <div>
                            <textarea class="autosize" readonly style="width:100%; height: 250px; border:0; overflow:hidden; pointer-events: none">
[상태 완전 좋은 인간실격 책]              
예약 후, 정확한 주소와 메시지가 전달됩니다.

[감상평]
헬스장을 방문해 보신 분들은 알겠지만, 렉이라는 물건이 있습니다. 여러 가지 종류가 있지만 현재 홈짐에서 각광받는 렉 중 하나인 미니렉을 보유하고 있습니다. 기본적으로 3대 운동을 수행할 수 있고 바벨로 할 수 있는 운동들도 굉장히 많기 때문에 미니 렉 하나만 구비하신다면 앞서 말한 공간에서 충분히 근력운동을 할 수 있습니다.!
                            </textarea>
                        </div>
                    </div>
                    
                    <!-- 거래 장소 --> 
                    <div>
                        <h3>빌려주는사람님과의 거래장소</h3>
                        <div>
                            <div id="map" style="width:100%;height:300px;"></div>
                        </div>
                    </div><br><br>

                    <!-- 책 정보 -->
                    <div>
                        <h3>책정보</h3>
                        <div style="display: flex; justify-content: space-between; text-align: center;">
                            <div style="width: 35%">
                                <img src="../assets/images/neighbor.png" alt="이미지" style="width: 100%; height: 100%">
                            </div>
                            <div style="width: 65%; text-align: left; margin-left: 20px;">
                                <p>인간실격 / 스릴러</p>
                                <p>인간의 나약함을 탁월하게 묘사하는 다자이 오사무의 작품을 새롭게 읽는다. 순수하고 여린 심성의 젊은이가 인간 사회의 위선과 잔혹성을 견디지 못하고 파멸되어 가는 과정을 그린 소설로, 어느 세계에도 속하지 못한 채 인간 실격자로 전락한 주인공의 내면을 치밀한 심리묘사로 기록하였다. 다자이 작품 속의 타락과 자기파괴적 언행은 제2차 세계대전에서 패망한 후 공황상태에 빠진 일본 젊은이들의 의식을 반영하고 있다.</p>
                            </div>
                        </div>
                    </div><br><br>

                    <!-- 태그 정보 -->
                    <div>
                        <h3>태그정보</h3>
                        <div>
                            <p>#고구마 #감자 #부아이스 #인간실격</p>
                        </div>
                    </div>
                </div>
                <hr />

                <!-- 리뷰 정보 -->
                <div>
                    <!-- 개선본 -->
                    <div>
                        <!-- 리뷰 개수 & 리뷰 쓰기 -->
                        <div>
                            <div style="display: flex; justify-content: space-between; text-align: center;">
                                <div>
                                    <h3 style="display: inline">3개의 리뷰</h3>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-secondary" style="height: 30px" @click="handle_toggle">리뷰쓰기</button>
                                </div>
                            </div><br>
                            <div v-if="is_show">
                                <div class="allcontainer">
                                    <div class="container">
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

                                                    <div style="text-align: right">                                                   <button class="btn btn-success btn-lg" type="submit">댓글쓰기</button>
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
                    <div class="card" style="width:650px">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <!-- <p class="text-secondary text-center">15 Minutes Ago</p> -->
                                </div>
                                <div class="col-md-10">
                                    <a class="float-left" href="#"><strong>뭘봐</strong></a>
                                    <div class="star-ratings">
                                        <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div class="star-ratings-base space-x-2 text-lg">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <p>책 너무 잘읽었어요~~</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="width:650px">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <!-- <p class="text-secondary text-center">15 Minutes Ago</p> -->
                                </div>
                                <div class="col-md-10">
                                    <a class="float-left" href="#"><strong>히힣</strong></a>
                                    <div class="star-ratings">
                                        <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                                            <span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div class="star-ratings-base space-x-2 text-lg">
                                            <span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <p>나름 ㄱㅊㄱㅊ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="width:650px">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                    <!-- <p class="text-secondary text-center">15 Minutes Ago</p> -->
                                </div>
                                <div class="col-md-10">
                                    <a class="float-left" href="#"><strong>바부</strong></a>
                                    <div class="star-ratings">
                                        <div class="star-ratings-fill space-x-2 text-lg" :style="{ width: ratingToPercent + '%' }">
                                            <span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <div class="star-ratings-base space-x-2 text-lg">
                                            <span>★</span><span>★</span><span>★</span>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <p>잘빌렸음 책 좀 더러움</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>

            <div class="col-md-4" style="margin-left: 20px;">
                <div class="card" id="viewcard">
                    <div class="row g-0">
                        <div class="col-md-12">
                            <div style="text-align:center;">
                                <p>빌려주는 사람님의 홈짐</p>
                                <p>"서울 강남구 가로수길 5"<br>에 위치한 홈짐입니다.</p><br />
                            </div>
                            <div style="text-align:right;">
                                <h4>5000원</h4>
                            </div>
                            <button type="button" class="btn btn-primary" style="margin-left:90px">수정 및 삭제하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        VueperSlides,
        VueperSlide
    } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    export default {
        components: {
            VueperSlides,
            VueperSlide
        },
        name: 'App',
        data() {
            return {
                slides: [
                    { image: require('@/assets/images/chatting2.png') },
                    { image: require('@/assets/images/default.jpg') },
                    { image: require('@/assets/images/analyzing.png') }
                ],
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
            },
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
        color: #000;
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

    .thumbnails {
        margin: auto;
        max-width: 300px;
    }

    .thumbnails .vueperslide {
        box-sizing: border-box;
        border: 1px solid #fff;
        transition: 0.3s ease-in-out;
        opacity: 0.7;
        cursor: pointer;
    }

    .thumbnails .vueperslide--active {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        opacity: 1;
        border-color: #000;
    }
</style>