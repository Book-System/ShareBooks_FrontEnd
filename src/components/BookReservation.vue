<template>
    <div class="container">
        <div style="width: 70%; display: flex; justify-content: space-between; align-items: top;">
            <div style="width: 65%;">
                <el-card class="box-card" shadow="hover" style="color: #3D3D3D">
                    <div style="text-align: left;">
                        <span style="font-size: 20px;">우리동네에서 만나는 도서관!</span><br>
                        <img src="../assets/shareBooksIcon/share_books_icon_10.png" alt="image" style="width: 30px; height: 30px; margin-right: 10px;">
                        <span style="font-size: 35px;">책 예약하기</span>
                    </div>
                    <!-- 전화번호 -->
                    <div style="text-align: left; font-size: 18px; margin-top: 40px;">
                        <span>전화번호</span><br>
                        <el-input placeholder="'-'형식을 포함한 전화번호를 입력해주세요" v-model="phone" style="margin-top: 7px;" @blur="handlePhone"></el-input>
                        <div>
                            <span v-if="phoneData.focus" v-text="phoneData.text" style="color: #f00;"></span>
                        </div>
                    </div>
                    <!-- 예약가능날짜, 예약종료날짜 -->
                    <div style="text-align: left; font-size: 18px; margin-top: 25px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="width: 50%; margin-right: 5px;">
                                <span>대여시작날짜</span>
                                <div style="margin-top: 10px;">
                                    <el-date-picker v-model="startDate" :disabled-date="disabledDate1" type="date" placeholder="대여시작 날짜를 선택해주세요" style="width: 100%;"></el-date-picker>
                                </div>
                            </div>
                            <div style="width: 50%; margin-left: 5px;">
                                <span>대여종료날짜</span>
                                <div style="margin-top: 10px;">
                                    <el-date-picker v-model="endDate" :disabled-date="disabledDate2" type="date" placeholder="대여종료 날짜를 선택해주세요" style="width: 100%;" @blur="calculatePrice"></el-date-picker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 예약시작시간, 예약종료시간 -->
                    <div style="text-align: left; font-size: 18px; margin-top: 25px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="width: 50%; margin-right: 5px;">
                                <span>대여시작시간</span>
                                <div style="margin-top: 10px;">
                                    <el-time-picker v-model="startTime" style="width: 100%;" :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds" placeholder="대여시작 시간을 선택해주세요"></el-time-picker>
                                </div>
                            </div>
                            <div style="width: 50%; margin-left: 5px;">
                                <span>대여종료시간</span>
                                <div style="margin-top: 10px;">
                                    <el-time-picker v-model="endTime" style="width: 100%;" :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds" placeholder="대여종료 시간을 선택해주세요" @blur="handleCheckDateTime"></el-time-picker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 가격 -->
                    <div style="text-align: left; font-size: 18px; margin-top: 25px;">
                        <div>
                            <span>가격</span>
                        </div>
                        <div style="margin-top: 7px;">
                            <span>{{price}}원</span>
                        </div>           
                    </div>
                    <!-- 요청사항 -->
                    <div style="text-align: left; font-size: 18px; margin-top: 25px;">
                        <span>요청사항</span><br>
                        <el-input type="textarea" :rows="18" v-model="request" placeholder="요청사항을 입력하세요." style="margin-top: 7px" @blur="handleRequest"></el-input>
                        <div>
                            <span v-if="requestData.focus" v-text="requestData.text" style="color: #f00;"></span>
                        </div>
                    </div>
                    <el-button type="info" style="background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 18px; width: 100%; margin-top: 20px;" @click="handleReservation">예약하기</el-button><br>
                </el-card>
            </div>
            <div style="width: 35%;">
                <el-card class="box-card" shadow="hover" style="margin-left: 10px; color: #3D3D3D; padding: 10px;">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <img src="../assets/shareBooksIcon/share_books_icon_11.png" alt="image" style="width: 30px; height: 30px; margin-right: 10px;">
                                <span style="font-weight: bold; font-size: 30px;">예약 날짜 / 시간</span>
                            </div>
                            <div v-if="!checkDateTime" style="margin-top: 17px;">
                                <span style="font-size: 17px;">날짜와 시간을 선택해주세요</span>
                            </div>
                            <div v-if="checkDateTime" style="margin-top: 17px;">
                                <span style="font-size: 17px;">대여기간: {{checkStartDate}} ~ {{checkEndDate}}</span><br>
                                <span style="font-size: 17px;">시작시간: {{checkStartTime}}</span><br>
                                <span style="font-size: 17px;">종료시간: {{checkEndTime}}</span>
                            </div>
                        </div>
                    </div>
                </el-card>
                <el-card class="box-card" shadow="hover" style="margin-left: 10px; margin-top: 5px; color: #3D3D3D; padding: 10px;">
                    <span style="font-size: 20px;">📍<strong> 잠깐! 거래장소를 확인하세요</strong></span>
                    <div id="map" style="width: 100%; height: 300px; margin-top: 10px; margin-bottom: 10px;"></div>
                    <span style="font-size: 15px;">{{bookData.address}}</span>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                // 달력, 시간
                startDate: '',
                endDate  : '',
                startTime: '',
                endTime  : '',
                // 카카오 맵
                map: null,
                markers: [],
                // 가격, 책정보
                price  : 0,
                bookData: [],
                // 전화번호
                phone    : '',
                phoneData: {
                    text  : '전화번호를 입력해주세요.',
                    focus : false,
                    checkPhone: false
                },
                // 요청사항
                request    : '',
                requestData: {
                    text  : '요청사항을 입력해주세요.',
                    focus : false,
                    checkRequest: false
                },
                // 오른쪽 배너
                checkDateTime: false,
                checkStartDate: '',
                checkEndDate: '',
                checkStartTime: '',
                checkEndTime: ''
            }
        },
        async created() {
            await this.handleBookData();
            await this.updateMap();
        },
        mounted() {
            // 카카오 맵
            if (window.kakao && window.kakao.maps) {
                this.initMap();
            } else {
                const script = document.createElement("script");
                /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
                document.head.appendChild(script);
            }
        },
        methods: {
            // 달력 예약 불가
            disabledDate1(time) {
                return time.getTime() < Date.now();
            },
            // 달력 예약 불가2
            disabledDate2(time) {
                return time.getTime() <= new Date(this.startDate).getTime();
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
            updateMap(){
                // 맵만들기
                let mPosition = [];
                let thisTemp = this;
                const container = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                this.map = new kakao.maps.Map(container, options);
                 
                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new kakao.maps.services.Geocoder();
                var bookDataAddress = this.bookData.address;

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
                        mPosition[0] = value;
                        thisTemp.displayMarker(mPosition);
                    }
                });
                this.mPosition = mPosition;
            },
            // 마크 찍기
            displayMarker(mPosition) {
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
                    this.map.setLevel(2);
                }
            },
            // 책 정보 가져오기
            async handleBookData() {
                var urlparam = location.search;
                var params = new URLSearchParams(urlparam);
                var bookNo = params.get('bookno');
                
                const url = `/REST/api/book/detail?bookno=${bookNo}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.bookData = response.data.data;
                    this.price = this.bookData.price;
                }
            },
            // 예약하기
            async handleReservation() {
                if(this.phoneData.checkPhone && this.requestData.checkRequest && this.startDate !== '' && this.endDate !== '' && this.startTime !== '' && this.endTime !== '') {
                    const url = `/REST/api/reservation/register`;
                    const body = {
                        phone: this.phone,
                        reservationStartDate: new Date(this.startDate).toDateString(),
                        reservationEndDate: new Date(this.endDate).toDateString(),
                        reservationStartTime: new Date(this.startTime).toTimeString(),
                        reservationEndTime: new Date(this.endTime).toTimeString(),
                        requestMessage: this.request,
                        bookNo: this.bookData.book_No
                    }
                    const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    const response = await axios.post(url, body, {headers});
                    console.log(response);
                    if(response.data.result === 1) {
                        alert("책 예약을 성공했습니다.");
                        return this.$router.push({path:'/book/detail', query: {bookno: this.bookData.book_No}});
                    }else {
                        return alert("책 예약을 실패했습니다.");
                    }
                }else {
                    return alert("모든 항목을 입력해주세요.");
                }
            },
            // 휴대폰번호 유효성검사
            handlePhone() {
                var regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
                if (this.phone === '') {
                    this.phoneData.focus = true;
                    this.phoneData.text = "휴대폰번호를 입력해주세요.";
                    this.phoneData.checkPhone = false;
                } else if (this.phone.match(regExp) == null) {
                    this.phoneData.focus = true;
                    this.phoneData.text = "휴대폰번호 형식을 지켜주세요.";
                    this.phoneData.checkPhone = false;
                } else {
                    this.phoneData.focus = false;
                    this.phoneData.checkPhone = true;
                }
            },
            // 요청사항 유효성 검사
            handleRequest() {
                if(this.request === '') {
                    this.requestData.focus = true;
                    this.requestData.text = "요청사항을 입력해주세요.";
                    this.requestData.checkRequest = false;
                }else {
                    this.requestData.focus = false;
                    this.requestData.checkRequest = true;
                }
            },
            // 가격 계산 메소드
            calculatePrice() {
                const startDate = new Date(this.startDate).getTime();
                const endDate = new Date(this.endDate).getTime();
                const result = Math.round(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24));
                this.price = this.bookData.price * result;
            },
            // 오른쪽 배너 표시 메소드
            handleCheckDateTime() {
                if(this.startDate !== '' && this.endDate !== '' && this.startTime !== '' && this.endTime !== '') {
                    this.checkStartDate = new Date(this.startDate).toLocaleDateString();
                    this.checkEndDate = new Date(this.endDate).toLocaleDateString();
                    this.checkStartTime = new Date(this.startTime).toLocaleTimeString();
                    this.checkEndTime = new Date(this.endTime).toLocaleTimeString();
                    this.checkDateTime = true;
                }else {
                    this.checkDateTime = false;
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 45px;
        margin-bottom: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>