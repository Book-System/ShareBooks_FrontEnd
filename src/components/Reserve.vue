<template>
    <div>
        <div id="banner" class="col p-5 rounded" style="background-color:#ccc">
            <h3 class="mypage">책 예약하기</h3>
        </div><br/>

        <div class="allcontainer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 card">
                        <div id="card1" class="card-body">
                            <h5>가까운 곳에서 책을 빌리자!</h5>
                            <h2 class="card-title">책예약하기</h2><br/>
                            <div>
                                <label>전화번호</label>
                                <input type="text" class="form-control" placeholder="전화번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <br/>
                
                            <label>시작일</label>
                            <p><input type="date"></p><br/>

                            <label>반납일</label>
                            <p><input type="date"></p><br/>

                            <div>
                                <label>대여시간</label>
                                <p><input type="time"></p>
                            </div>
                            <br/>

                            <div>
                                <label>반납시간</label>
                                <p><input type="time"></p>
                            </div>
                            <br/>
                            
                            <label>요청사항</label>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="호스트에게 요청할 사항을 입력하세요" id="floatingTextarea2" style="height: 100px"></textarea>
                            </div>
                            <br/>

                            <div id="joinbtn" class="d-grid gap-2 d-md-block">
                                <button class="btn btn-primary" type="button">예약하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h5 class="my-0 fw-normal">예약 날짜/시간</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled mt-3 mb-4">
                                    <h5>10월 12일 ~ 10월 14일</h5>
                                    <li>대여기간 : 17:00</li>
                                    <li>반납기간 : 18:00</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-header py-3">
                            <h5 class="my-0 fw-normal">거래장소를 확인하세요</h5>
                            <div id="map" style="width:100%;height:300px;"></div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                initMap() {
                    const container = document.getElementById("map");
                    const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5,
                };
                this.map = new kakao.maps.Map(container, options);
            }
        }
    }
</script>

<style scoped>
    .allcontainer {
        padding-left: 300px;
      
    }
   
</style>