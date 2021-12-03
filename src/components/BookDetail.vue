<template>
    <div class="container">
        <div class="df jc-sb ai-t w-75 mt-20 md-20">
            <div class="w-70">
                <!-- 메인 이미지 및 서브 이미지 -->
                <div>
                    <vueper-slides class="no-shadow" ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false" @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
                        <vueper-slide v-for="(index, idx) in bookData.imageCount" :key="index" :image="`/REST/api/book/image?bookno=${bookData.no}&priority=${idx}`">
                        </vueper-slide>
                    </vueper-slides>
                    <vueper-slides style="margin-top: 5px;" class="no-shadow thumbnails" ref="vueperslides2" @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="bookData.imageCount" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
                        <vueper-slide v-for="(index, idx) in bookData.imageCount" :key="index" :image="`/REST/api/book/image?bookno=${bookData.no}&priority=${idx}`" @click="$refs.vueperslides2.goToSlide(idx)">
                        </vueper-slide>
                    </vueper-slides>
                </div>
                <!-- 글 제목, 글 내용 -->
                <div style="text-align: justify;">
                    <div style="margin-top: 30px; margin-bottom: 10px; font-size: 27px;">
                        <div style="display: flex; justify-content: left; align-items: center;">
                            
                            <span>{{bookData.list.title}}</span>
                        </div>
                    </div>
                    <div>
                        <span style="font-size: 18px;">예약 후, 정확한 주소와 메세지가 전송됩니다.</span>
                    </div>
                    <div style="margin-top: 10px;">
                        <span style="font-size: 18px; white-space: pre-line;">{{bookData.list.content}}</span>
                    </div>
                </div>

                <!-- 거래 장소 -->
                <div style="text-align: justify;">
                    <div style="margin-top: 30px; margin-bottom: 10px; font-size: 27px;">
                        <div style="display: flex; justify-content: left; align-items: center;">
                            <img src="../assets/shareBooksIcon/share_books_icon_02.png" alt="image" style="width: 28px; height: 28px; margin-right: 10px;">
                            <span>{{bookData.list.member_Name}}님의 대여장소</span>
                        </div>
                    </div>
                    <div id="map" style="width: 100%; height: 450px; margin-top: 5px;"></div>
                </div>
                
                <!-- 책 정보 -->
                <div style="text-align: justify;">
                    <div style="margin-top: 30px; margin-bottom: 10px; font-size: 27px;">
                        <div style="display: flex; justify-content: left; align-items: center;">
                            <img src="../assets/shareBooksIcon/share_books_icon_01.png" alt="image" style="width: 30px; height: 30px; margin-right: 10px;">
                            <span>책 정보</span>
                        </div>
                    </div>
                    <div>
                        <div style="font-size: 20px;">
                            <span>{{bookData.list.book_Title}} / {{bookData.list.category_Name}}</span><br>
                            <span style="font-size: 18px;">{{bookData.list.book_Content}}</span>
                        </div>
                    </div>
                </div>
                
                <!-- 태그 정보 -->
                <div style="text-align: justify;">
                    <div style="margin-top: 30px; margin-bottom: 10px; font-size: 27px;">
                        <div style="display: flex; justify-content: left; align-items: center;">
                            <img src="../assets/shareBooksIcon/share_books_icon_04.png" alt="image" style="width: 28px; height: 28px; margin-right: 10px;">
                            <span>태그정보</span>
                        </div>
                    </div>
                    <span style="font-size: 18px;">{{bookData.list.tag}}</span>
                </div>

                <!-- 리뷰 -->
                <div style="text-align: justify; margin-top: 70px;">
                    <div style="margin-top: 30px; margin-bottom: 10px; font-size: 27px;">
                        <span>{{reviewData.count}}개의 리뷰 ★ {{reviewData.rating}}</span>
                    </div>
                    <div style="width: 100%; height: 1px; background-color: #d2d2d2;"></div>
                    <!-- 실제 리뷰 표시 -->
                    <div v-if="reviewData.list.length === 0" style="margin-top: 20px; font-size: 18px;">
                        <span>아직 등록된 리뷰가 없습니다!</span>
                    </div>
                    <div v-for="review in reviewData.list" :key="review">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                            <div style="width: 15%; text-align: center;">
                                <el-avatar :size="100" style="background-color: #fff; border: 1px solid #d2d2d2;" :src="`http://localhost:9090/REST/api/member/image?memberid=${review.member.id}`"></el-avatar>
                            </div>
                            <div style="width: 85%;">
                                <div style="margin-left: 10px;">
                                    <div style="margin-bottom: 10px;">
                                        <div style="display: flex; justify-content: left; align-items: center;">
                                            <span style="font-size: 20px; ">{{review.member.nickname}}</span>
                                            <span style="font-size: 17px; margin-left: 10px;" v-text="handleRegdate(review.regdate)"></span>
                                        </div>
                                        <el-rate disabled v-model="review.rating" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half></el-rate>
                                    </div>
                                    <span style="font-size: 17px;">{{review.content}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-30">
                <div style="width: 100%; background-color: #fff; margin-left: 20px; padding: 25px; text-align: center;">
                    <p style="font-size: 25px;"><img src="../assets/emoticon/ping2.png" alt="image" style="width: 28px; height: 28px; margin-right: 10px; vertical-align: top;"><strong>{{bookData.list.member_Nickname}}</strong>님의 대여위치</p>
                    <p style="font-size: 21px;"><strong>"{{bookData.list.address}}"</strong><br>에서 거래를 진행합니다</p>
                    <div style="text-align: right;">
                        <span style="font-size: 18px;">1일 대여료</span><br>
                        <span style="font-size: 30px;">{{bookData.list.price}}원</span>
                    </div>
                    <div v-if="!checkWriteMember">
                        <el-button type="info" style="font-family: 'Jua', sans-serif; width: 100%; margin-top: 20px; background-color: #fff; border: 1.8px solid #5B6EBC; color: #5B6EBC; font-size: 18px; padding-right: 25px; padding-left: 25px; padding-top: 15px; padding-bottom: 15px;" @click="handleReservation">예약하러 가기</el-button><br>
                        <el-button type="info" style="font-family: 'Jua', sans-serif; width: 100%; margin-top: 5px;background-color: #5B6EBC; font-size: 18px; padding-right: 25px; padding-left: 25px; padding-top: 15px; padding-bottom: 15px;" @click="handleChat">문의하러 가기</el-button>
                    </div>
                    <div v-if="checkWriteMember">
                        <el-button type="info" style="font-family: 'Jua', sans-serif; width: 100%; margin-top: 20px; background-color: #fff; border: 1.8px solid #5B6EBC; color: #5B6EBC; font-size: 18px; padding-right: 25px; padding-left: 25px; padding-top: 15px; padding-bottom: 15px;" @click="handleUpdate">수정하기</el-button><br>
                        <el-button type="info" style="font-family: 'Jua', sans-serif; width: 100%; margin-top: 5px;background-color: #5B6EBC; font-size: 18px; padding-right: 25px; padding-left: 25px; padding-top: 15px; padding-bottom: 15px;" @click="handleDelete">삭제하기</el-button>
                    </div>
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
    import {getCurrentInstance} from '@vue/runtime-core'    
    import {VueperSlides, VueperSlide} from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css';
    import axios from 'axios';
    export default {
        components: {
            VueperSlides,
            VueperSlide
        },
        data() {
            return {
                // 채팅에 필요한 정보
                opponent :'',
                self : '',
                // 책 정보
                bookData: {
                    no  : this.$route.query.bookno,
                    imageCount: 0,
                    list: [],
                },
                // 리뷰 정보
                reviewData: {
                    count : 0,
                    rating: 0,
                    list  : []
                },
                // 카카오 맵
                map: null,
                markers: [],
                // 글 작성자인지 판단하는 변수
                checkWriteMember: false,
                // 로그인 검증 다이어로그
                dialogVisible: false,
                // 예약완료 조회 변수
                checkReservationButton: false   
            }
        },
        async created() {
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
            await this.bookDetail();
            await this.checkLogin();
            await this.bookImageCount();
            await this.reviewCount();
            await this.reviewList();
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
            // 글 수정 메소드
            handleUpdate() {
                return this.$router.push({path:'/book/update', query: {bookno: this.bookData.no}});
            },
            // 글 삭제 메소드
            async handleDelete() {
                const checkConfirm = confirm("정말 삭제하시겠습니까?");
                if(checkConfirm){
                    const url = `/REST/api/book/remove`;
                    const body = {"bookNo" : this.bookData.no};
                    const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    const response = await axios.delete(url, {headers : headers, data : body});
                    if(response.data.result === 1) {
                        alert("글 삭제가 완료되었습니다.");
                        return this.$router.push({path: '/book/place'});
                    }
                }
            },
            // 글을 조회한 사용자가 본인인지 타인인지 확인하는 메소드
            async checkLogin() {
                const token = sessionStorage.getItem("TOKEN");
                // token = sessionStorage.getItem("TOKEN");

                if(token === null) {
                    this.checkWriteMember = false;
                }else {
                    // 토큰 값을 통해 회원 정보 가져오기, 없을 경우도 동일
                    const url = `/REST/api/member/information`;
                    const headers = {"Content-Type" : "application/json", "token" : token};
                    const response = await axios.get(url, {headers});
                    
                    if(response.data.result === 1) {
                        var member = response.data.data;
                        if(this.bookData.list.member_Id === member.id) {
                            this.checkWriteMember = true;
                        }else {
                            this.checkWriteMember = false;
                        }
                        this.self = response.data.data.nickname;
                    }
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
                var bookDataAddress = this.bookData.list.address;

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
                }
            },
            // 책 정보 가져오기
            async bookDetail() {
                const url = `/REST/api/book/detail?bookno=${this.bookData.no}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                console.log("안녕하세요.", response);
                if(response.data.result === 1) {
                    this.bookData.list = response.data.data;
                }
            },
            // 책 이미지 개수 가져오기
            async bookImageCount() {
                const url = `/REST/api/book/image/count?bookno=${this.bookData.no}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, headers);
                if(response.data.result > 0) {
                    this.bookData.imageCount = response.data.result;
                }
            },
            // 리뷰 개수, 평점 가져오기
            async reviewCount() {
                const url = `/REST/api/review/avg?bookno=${this.bookData.no}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                if(response.data.data !== null) {
                    this.reviewData.count = response.data.data.count;
                    this.reviewData.rating = response.data.data.rating;
                }else {
                    this.reviewData.count = 0;
                    this.reviewData.rating = 0;
                }
            },
            // 리뷰 목록 가져오기
            async reviewList() {
                const url = `/REST/api/review/match/list?bookno=${this.bookData.no}`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.reviewData.list = response.data.list;
                }
            },
            // 예약페이지 이동
            handleReservation() {
                if(sessionStorage.getItem("TOKEN") === null) {
                    return this.dialogVisible = true;
                }
                this.$router.push({path:'/book/reservation', query: {bookno: this.bookData.no}});
            },
            // 문의페이지 이동
            handleChat() {
                if(sessionStorage.getItem("TOKEN") === null) {
                    return this.dialogVisible = true;
                }
                //방접속
                this.$socket.emit('publish',{
                    data: { 
                    room : this.bookData.list.member_Nickname+this.self ,
                    code:2,
                    username: this.self,
                    } 
                });
                
                this.$router.push({path: '/book/chat'});
                sessionStorage.setItem("seller",this.bookData.list.member_Nickname);
                sessionStorage.setItem("buyer",this.self);
                // var ret = window.open("/book/chat","CHATTING","width=1500,height=800,location=no,scrollbars=yes");
                // ret.open();
            },
            // 날짜 변환
            handleRegdate(value){
                // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
                if(value == '') return '';
            
                // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
                var js_date = new Date(value);

                // 연도, 월, 일 추출
                var year = js_date.getFullYear();
                var month = js_date.getMonth() + 1;
                var day = js_date.getDate();

                // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
                if(month < 10){
                    month = '0' + month;
                }

                if(day < 10){
                    day = '0' + day;
                }

                // 최종 포맷 (ex - '2021-10-08')
                return year + '-' + month + '-' + day;
            },
            handleLoginDialog(value) {
                if(value === true){
                    this.$router.push({path: '/login'});
                }else{
                    this.dialogVisible = value;
                }
            }
        }
    }
</script>

<style scoped>
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
        border-color: #5B6EBC;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F5F7FB;
        color: #4F4F4F;
    }
    .df {
        display: flex;
    }
    .jc-c {
        justify-content: center;
    }
    .jc-sb {
        justify-content: space-between;
    }
    .ai-c {
        align-items: center;
    }
    .ai-t {
        align-items: top;
    }
    .mt-5 {
        margin-top: 5px;
    }
    .mt-10 {
        margin-top: 10px;
    }
    .mt-15 {
        margin-top: 15px;
    }
    .mt-20 {
        margin-top: 20px;
    }
    .mt-25 {
        margin-top: 25px;
    }
    .mt-30 {
        margin-top: 30px;
    }
    .md-20 {
        margin-bottom: 20px;
    }
    .w-100 {
        width: 100%;
    }
    .w-95 {
        width: 95%;
    }
    .w-90 {
        width: 90%;
    }
    .w-85 {
        width: 85%;
    }
    .w-80 {
        width: 80%;
    }
    .w-75 {
        width: 75%;
    }
    .w-70 {
        width: 70%;
    }
    .w-65 {
        width: 65%;
    }
    .w-50 {
        width: 50%;
    }
    .w-35 {
        width: 35%;
    }
    .w-30 {
        width: 30%;
    }
    .w-25 {
        width: 25%;
    }
    .w-20 {
        width: 20%;
    }
    .w-10 {
        width: 10%;
    }
    .w-5 {
        width: 5%;
    }
</style>