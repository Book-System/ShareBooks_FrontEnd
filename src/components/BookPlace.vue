<template>
    <div class="container">
        <div style="width: 75%; display: flex; justify-content: space-between; align-items: top; margin-top: 45px; margin-bottom: 45px;">
            <div style="width: 70%;">
                <!-- 카카오 맵 -->
                <div id="map" style="width: 100%; height: 650px; margin-top: 5px;"></div>
                <div>
                    <el-button type="info" style="background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 18px; width: 100%; margin-top: 3px;" @click="handleBookRegister">책 등록하기</el-button>
                </div>
            </div>
            <div style="min-width: 30%; margin-left: 20px;">
                <div style="width: 100%; border: 1px solid #E6E6E6;  margin-top: 5px; padding: 25px;">
                    <div style="text-align: left;">
                        <span style="font-size: 30px;">플레이스</span>
                        <img src="../assets/shareBooksIcon/share_books_icon_09.png" alt="image" style="width: 28px; height: 28px; margin-left: 10px;">
                    </div>
                    <div v-if="items.length === 0" style="margin-top: 10px; height: 600px; font-size: 22px; display: flex; justify-content: center; align-items: center;">
                        <span>😰검색된 장소가 없습니다.</span>
                    </div>
                    <div v-if="items.length !== 0">
                        <div v-for="(item, index) in items" :key="item">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                                <div style="width: 40%; display: flex; justify-content: center;">
                                    <div style="width: 115px; height: 115px;">
                                        <img :src="`http://localhost:9090/REST/api/book/image/main?bookno=${item.book_No}&priority=1`" alt="image" class="profile_image_circle" style="width: 100%; height: 100%; border-radius: 100%;">
                                    </div>
                                </div>
                                <div style="min-width: 60%; text-align: left; margin-left: 10px;">
                                    <span style="color: #999999; font-size: 15px;">{{item.member_Nickname}}님의 대여장소</span><br>
                                    <span style="color: #474948; font-size: 18px;">
                                        <router-link :to="`/book/detail?bookno=${item.book_No}`" style="text-decoration: none; color: #5B6EBC;">{{item.title}}</router-link>
                                    </span><br>
                                    <span style="color: #999999; font-size: 15px;" v-if="handleRating(item.rating, item.count)" v-text="rating"></span><br>
                                    <span style="color: #999999; font-size: 15px;" @click="displayInfoWindow(item.address, item.member_Nickname)">{{item.address}}</span>
                                </div>
                            </div>
                            <div v-if="index !== (items.length-1)" style="height: 1px; background-color: #E8E8E8; margin-top: 20px;"></div>
                        </div>
                    </div>
                </div>
                <div v-if="itemsLength > 4" style="width: 100%; padding: 25px;">
                    <el-pagination v-model="currentPage" layout="prev, pager, next" @current-change="handlePlaceSelect" :page-size="4" :total="itemsLength" >
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- 로그인 다이어로그 -->
        <el-dialog title="서비스 안내" v-model="dialogVisible" width="500px">
        <div style="height: 1px; background-color: #dfdfdf;"></div>
        <div style="font-size: 16px; margin-top: 10px; margin-bottom: 10px; color: #3D3D3D">
            <span>해당 서비스는 <strong>로그인</strong> 후 사용가능합니다.</span><br>
            <span>비회원인 경우 <strong>회원가입</strong>을 먼저 신청해주세요!</span>
        </div>
        <div style="height: 1px; background-color: #dfdfdf;"></div>
        <template #footer>
            <div style="text-align: center;">
            <span class="dialog-footer">
                <el-button type="info" @click="handleLoginDialog(true)" style="font-family: 'Jua', sans-serif; font-size: 16px; background-color: #5B6EBC; color: #fff;">로그인</el-button>
                <el-button type="info" @click="handleLoginDialog(false)" style="font-family: 'Jua', sans-serif; font-size: 16px; background-color: #6D747D; color: #fff;">창닫기</el-button>
            </span>
            </div>
        </template>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
import {defineComponent, ref} from 'vue'
    export default defineComponent({
        data() {
            return {
                // 카카오 맵
                map        : null,
                items      : [],
                itemsLength: '',
                markers    : [],
                infowindow : null,
                // 별점
                rating     : '',
                // 페이지네이션
                currentPage: ref(1),
                // 인포메이션
                information: '',
                // 로그인 다이어로그
                dialogVisible: false
            }
        },
        async created() {
            const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    background: '#fff',
            })
            await this.handlePlaceSelect();
            await this.handlePlaceCount();
            await this.updateMap();
            loading.close();
        },
        mounted() {
            // 카카오 맵
            if (window.kakao && window.kakao.maps) {
                this.initMap();
            } else {
                const script = document.createElement("script");
                /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
                document.head.appendChild(script);
            }
        },
        methods: {
            // 책 등록페이지 이동
            handleBookRegister() {
                return this.$router.push({path: '/book/register'});
            },
            // 평균 별점 기능
            handleRating(rating, count) {              
                if(rating !== null){ 
                    this.rating = '★ ' + parseFloat(rating).toFixed(1) + '(' + count + ')';
                }else{
                    this.rating = "등록된 리뷰가 없습니다.";                  
                }
                return true;
            },
            // 검색창에 입력한 지역에 등록된 책만 검색
            async handlePlaceSelect(value) {
                var urlparam = location.search;
                var params = new URLSearchParams(urlparam);
                var address = params.get('address');
                
                // 검색어 없이 플레이스 페이지에 들어올 경우
                if(typeof value == 'undefined') {
                    value = "1";
                }
                if(address === null) {
                    address = "";
                }
                const url = `/REST/api/book/list/search?address=${address}&page=${value}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.items = response.data.data;
                }
                // 카카오 맵 업데이트
                await this.updateMap();
            },
            // 전체 책 목록 개수를 가져오기 위한 메소드
            async handlePlaceCount() {
                var urlparam = location.search;
                var params = new URLSearchParams(urlparam);
                var address = params.get('address');

                // 검색어 없이 플레이스 페이지에 들어올 경우
                if(address === null) {
                    address = "";
                }
                const url = `/REST/api/book/list/total?address=${address}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                console.log(response);
                if(response.data.result === 1) {
                    this.itemsLength = response.data.data.length;
                }
            },
            // 카카오 맵
            initMap() {
                const container = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5,
                };
                this.map = new kakao.maps.Map(container, options);
            },
            //주소로 지도 업데이트
            async updateMap(){
                // 맵 만들기
                const container = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                this.map = new kakao.maps.Map(container, options);
                
                // 주소 좌표 변환 객체를 생성합니다.
                var geocoder = new kakao.maps.services.Geocoder();

                var items = this.items;
                var thisTemp  = this;

                function first(callback) {
                    setTimeout(() => {
                        for(let i = 0; i < items.length; i++) {
                            // 주소로 좌표를 검색합니다.
                            geocoder.addressSearch(items[i].address, function(result, status) {
                                // 정상적으로 검색이 완료됐으면 
                                if (status === kakao.maps.services.Status.OK) {    
                                    var temp = [result[0].road_address.y, result[0].road_address.x];
                                    callback(null, temp);
                                }
                            });
                        }
                    }, 1000);
                }

                var array = [];
                var count = 0;
                first(function (error, value) {
                    if (error) {
                        console.log(error);
                    } else {
                        count++;
                        array.push(value);
                        if(count === items.length) {
                            thisTemp.displayMarker(array);
                        }
                    }
                });
            },
            // 마크 찍기
            async displayMarker(mPosition) {
                // 마커이미지의 주소입니다.
                var imageSrc = '/image/share_books_marker.png';   
                // 마커이미지의 크기입니다.
                var imageSize = new kakao.maps.Size(50, 70); 
                // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                var imageOption = {offset: new kakao.maps.Point(25, 70)}; 
                    
                const positions = mPosition.map((position) => new kakao.maps.LatLng(...position));
                if(positions.length > 0) {
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    this.markers = positions.map((position) => new kakao.maps.Marker({
                        map: this.map,
                        position: position,
                        image: markerImage
                    }));
                    const bounds = positions.reduce((bounds, latlng) => bounds.extend(latlng), new kakao.maps.LatLngBounds());
                    this.map.setBounds(bounds);
                }
            },
            // 정보 표시
            displayInfoWindow(address, nickname) {
                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new kakao.maps.services.Geocoder();
                var bookDataAddress = address;
                var thisTemp = this;

                function first(callback) {
                    setTimeout(() => {
                        // 주소로 좌표를 검색합니다
                        geocoder.addressSearch(bookDataAddress, function(result, status) {
                            // 정상적으로 검색이 완료됐으면 
                            if (status === kakao.maps.services.Status.OK) {
                                var temp = [result[0].y, result[0].x];
                                callback(null, temp);
                            }
                        });
                    }, 1000);
                }
                first(function (error, value) {
                    if(error) {
                        console.log(error);
                    }else {
                        thisTemp.information = value;
                        var temp = thisTemp.information;
                        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다.
                        var iwContent = `<div style="padding: 10px;">${nickname}님의 대여장소</div>`;
                        // 인포윈도우 표시 위치입니다.
                        var iwPosition = new kakao.maps.LatLng(parseFloat(temp[0]), parseFloat(temp[1]));
                        // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다.
                        var iwRemoveable = true; 

                        // 마커이미지의 주소입니다.
                        var imageSrc = '/image/share_books_marker.png';   
                        // 마커이미지의 크기입니다.
                        var imageSize = new kakao.maps.Size(50, 70); 
                        // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                        var imageOption = {offset: new kakao.maps.Point(25, 70)}; 
                        // 마커 이미지
                        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                        // 마커를 생성하고, 지도위에 표시한다.
                        var marker = new kakao.maps.Marker({position: iwPosition, image: markerImage});
                        marker.setMap(thisTemp.map);

                        thisTemp.infowindow = new kakao.maps.InfoWindow({
                            map: thisTemp.map, // 인포윈도우가 표시될 지도
                            position: iwPosition,
                            content: iwContent,
                            removable: iwRemoveable,
                        });
                        thisTemp.infowindow.open(thisTemp.map, marker);
                        thisTemp.map.setLevel(2);
                        thisTemp.map.setCenter(iwPosition);
                    }
                });
            }
        }
    })
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .profile_image{
        height: 100%;
        border-radius: 100%;
        overflow: hidden;
    }
    .profile_image_circle{
        object-fit: cover;
    }
</style>