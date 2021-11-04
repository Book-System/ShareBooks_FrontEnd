<template>
    <div class="container">
        
        <div class="row g-0">
            <div class="col-md-7" style="background-color: #eee; text-align: center; ">
                <div style="width: 100%; height: 80%;">
                    <div class="card-header py-3">
                            <h5 class="my-0 fw-normal">거래장소를 확인하세요</h5>
                            <br/>
                            <div id="map" style="width:100%;height:800px;"></div>
                        </div>
                </div>

            </div>
            <div class="col-md-5">
                <div class="card" style="padding: 10px;">
                    <h5>플레이스</h5>
                    <div class="card-body" v-for="item in 4" :key="item">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <p>빌려주는 사람님의 홈짐</p>
                                <p>[도시뷰_인하우스 홈짐] 강남역이 코앞, 분당 서현역에서 차로 20분</p>
                                <p>리뷰가 없습니다.</p>
                                <p>서울 강남구 가로수길 5</p>
                            </div>
                        </div>
                        <hr>
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

</style>