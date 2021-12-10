<template>
    <div class="container">
        <!-- 상단 배너 -->
        <div class="sector-container">
            <div class="st-background">
                <img src="../assets/shareBooksBanner/share_books_banner_06.jpg" alt="home_background">
            </div>
            <div class="st-content-center" style="color: #fff;">
                <span style="font-size: 55px;">책 등록하기</span><br>
                <div style="margin-top: 15px; margin-bottom: 30px;">
                    <span style="font-size: 19px;">집에 잠들어있는 많은 책들, 함께 공유해볼까요?</span>
                </div>
            </div>
        </div>
        <!-- 메인 배너 -->
        <div class="sector2-container">
            <el-card class="box-card" shadow="hover" style="width: 700px; padding: 30px; color: #3D3D3D">
                <div style="text-align: left;">
                    <span style="font-size: 18px;">집에 있는 책을 공유해보세요!</span><br>
                    <div style="display: flex; justify-content: left; align-items: center;">
                        <img src="../assets/shareBooksIcon/share_books_icon_14.png" alt="image" style="width: 40px; height: 40px; margin-right: 10px;">
                        <span style="font-size: 40px;">책 등록하기</span>
                    </div>
                </div>
                <!-- 글제목 -->
                <div style="text-align: left; font-size: 18px; margin-top: 40px;">
                    <span>글제목</span><br>
                    <el-input placeholder="글제목을 입력하세요" v-model="bookData.title" @blur="handleCheckTitle" style="margin-top: 7px;"></el-input>
                    <div>
                        <span v-if="bookData.titleFocus" v-text="bookData.titleText" style="color: #f00;"></span>
                    </div>
                </div>
                <!-- 글내용 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>글내용</span><br>
                    <el-input type="textarea" :rows="10" v-model="bookData.content" @blur="handleCheckContent" placeholder="내용을 입력하세요" style="margin-top: 7px"></el-input>
                    <div>
                        <span v-if="bookData.contentFocus" v-text="bookData.contentText" style="color: #f00;"></span>
                    </div>
                </div>
                <!-- 주소 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>주소</span><br>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="width: 75%; margin-right: 5px;">
                            <el-input placeholder="주소를 입력하세요" v-model="bookData.address" style="margin-top: 7px;"></el-input>
                        </div>
                        <div style="width: 25%; margin-top: 5px;">
                            <el-button type="info" icon="el-icon-search" style="width: 100%; background-color: #5B6EBC; font-size: 18px; font-family: 'Jua', sans-serif;" @click="execDaumPostcode">우편 번호</el-button>
                        </div>
                    </div>
                    <!-- 카카오 맵 -->
                    <div id="map" style="width: 100%; height: 300px; margin-top: 5px; border: 1px solid #E6E6E6"></div>
                </div>
                <!-- 대여료 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>대여료</span><br>
                    <el-input placeholder="대여료를 입력하세요" v-model="bookData.price" @blur="handleCheckPrice" @input="e=>value=changeNum(e.target.value)" style="margin-top: 7px;"></el-input>
                    <div>
                        <span v-if="bookData.priceFocus" v-text="bookData.priceText" style="color: #f00;"></span>
                    </div>
                </div>
                <!-- 카테고리 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>카테고리</span><br>
                    <div style="margin-top: 10px;">
                        <el-select v-model="bookData.category" placeholder="카테고리를 선택하세요">
                            <el-option
                            v-for="item in categoryList"
                            :key="item.code"
                            :label="item.name"
                            :value="item.code"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!-- 태그 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>태그</span><br>
                    <el-input placeholder="태그를 입력하세요 (#즐거움, #공포)" v-model="bookData.tag" @blur="handleCheckTag" style="margin-top: 7px;"></el-input>
                    <div>
                        <span v-if="bookData.tagFocus" v-text="bookData.tagText" style="color: #f00;"></span>
                    </div>
                </div>
                <!-- 책 제목 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>책 제목</span><br>
                    <el-input placeholder="책 제목을 입력하세요" v-model="bookData.bookTitle" @blur="handleCheckBookTitle" style="margin-top: 7px;"></el-input>
                    <div>
                        <span v-if="bookData.bookTitleFocus" v-text="bookData.bookTitleText" style="color: #f00;"></span>
                    </div>
                </div>
                <!-- 책 내용 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>책내용</span><br>
                    <el-input type="textarea" :rows="10" v-model="bookData.bookContent" @blur="handleCheckBookContent" placeholder="내용을 입력하세요" style="margin-top: 7px"></el-input>
                    <div>
                        <span v-if="bookData.bookContentFocus" v-text="bookData.bookContentText" style="color: #f00;"></span>
                    </div>
                </div>
                <!-- 이미지 첨부 -->
                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                    <span>이미지 첨부</span><br>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" limit="3" list-type="picture-card"  style="margin-top: 7px;"
                    :on-remove="handleRemove" :on-success="handlePictureCardPreview" :on-exceed="handleExceed">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="image" />
                    </el-dialog>
                </div>
                <!-- 글 등록하기 버튼 -->
                <el-button type="info" style="background-color: #5B6EBC; font-size: 18px; width: 100%; margin-top: 20px; font-family: 'Jua', sans-serif;" @click="handleBookRegister">글 등록하기</el-button><br>
            </el-card>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                // 책 정보
                bookData: {
                    title  : '',
                    titleFocus: false,
                    titleText : '글 제목을 입력하세요.',
                    content: '',
                    contentFocus: false,
                    contentText : '글 내용을 입력하세요.',
                    zipcode: '',
                    address: '',
                    price  : '',
                    priceFocus: false,
                    priceText : '대여료를 입력하세요.',
                    category: '',
                    tag    : '',
                    tagFocus: false,
                    tagText : '태그를 입력하세요.',
                    bookTitle  : '',
                    bookTitleFocus: false,
                    bookTitleText : '책 제목을 입력하세요.',
                    bookContent: '',
                    bookContentFocus: false,
                    bookContentText : '책 내용을 입력하세요',
                    fileList: []
                },
                // 카테고리 정보
                categoryList: [
                    {
                        value: 1,
                        label: '추리',
                    },
                    {
                        value: 2,
                        label: '공포',
                    },
                    {
                        value: 3,
                        label: '교육',
                    },
                    {
                        value: 4,
                        label: '로맨스',
                    },
                    {
                        value: 5,
                        label: '자기계발',
                    }
                ],
                // 카카오 맵
                map: null,
                markers: [],
                mPosition: []
            }
        },
        created() {
            this.handleCategory();
        },
        mounted() {
            // 카카오맵
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
            // 대여료 천 단위 콤마찍기
        changeNum : function(value) {
            return value = this.comma(this.uncomma(value));
        },
        comma(str) {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        },
        uncomma(str) {
            str = String(str);
            return str.replace(/[^\d]+/g, '');
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
            //주소 찾기
            execDaumPostcode() {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        if (this.extraAddress !== "") {
                            this.extraAddress = "";
                        }
                        if (data.userSelectedType === "R") {
                            // 사용자가 도로명 주소를 선택했을 경우
                            this.bookData.address = data.roadAddress;
                        } else {
                            // 사용자가 지번 주소를 선택했을 경우(J)
                            this.bookData.address = data.jibunAddress;
                        }

                        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                        if (data.userSelectedType === "R") {
                            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                                this.extraAddress += data.bname;
                            }
                            // 건물명이 있고, 공동주택일 경우 추가한다.
                            if (data.buildingName !== "" && data.apartment === "Y") {
                                this.extraAddress +=
                                    this.extraAddress !== "" ?
                                    `, ${data.buildingName}` :
                                    data.buildingName;
                            }
                            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                            if (this.extraAddress !== "") {
                                this.extraAddress = `(${this.extraAddress})`;
                            }
                        } else {
                            this.extraAddress = "";
                        }
                        // 우편번호를 입력한다.
                        this.zipcode = data.zonecode;
                        this.updateMap();
                    },
                }).open();
            },
            //주소로 지도 업데이트
            updateMap(){
                // 맵만들기
                let mPosition = [];
                let thisTemp = this;
                const container = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5,
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
                    this.map.setLevel(3);
                }
            },
            // 이미지 첨부
            handleRemove(file, fileList) {
                console.log("삭제", file, fileList);
            },
            handlePictureCardPreview(response,file,fileList) {
                console.log("response", response);
                console.log("file", file);
                console.log("fileList", fileList);
                this.bookData.fileList = fileList;

                this.dialogImageUrl = file.url;
                this.dialogVisible = false;
            },
            handleExceed() {
                this.$message.warning('이미지는 최대 3장까지 첨부가능합니다.');
            },
            beforeRemove(file) {
                return this.$confirm(`${file.name} 파일을 삭제하시겠습니까?`);
            },
            // 글 제목 유효성
            handleCheckTitle() {
                if(this.bookData.title === '') {
                    this.bookData.titleFocus = true;
                }else {
                    this.bookData.titleFocus = false;
                }
            },
            // 글 내용 유효성
            handleCheckContent() {
                if(this.bookData.content === '') {
                    this.bookData.contentFocus = true;
                }else {
                    this.bookData.contentFocus = false;
                }
            },
            // 대여료 유효성
            handleCheckPrice() {
                if(this.bookData.price === '') {
                    this.bookData.priceFocus = true;
                }else{
                    this.bookData.priceFocus = false;
                    this.bookData.price =this.changeNum(this.bookData.price);
                }
            },
            // 태그 유효성
            handleCheckTag() {
                if(this.bookData.tag === '') {
                    this.bookData.tagFocus = true;
                }else {
                    this.bookData.tagFocus = false;
                }
            },
            // 책 제목 유효성
            handleCheckBookTitle() {
                if(this.bookData.bookTitle === '') {
                    this.bookData.bookTitleFocus = true;
                }else {
                    this.bookData.bookTitleFocus = false;
                }
            },
            // 책 내용 유효성
            handleCheckBookContent() {
                if(this.bookData.bookContent === '') {
                    this.bookData.bookContentFocus = true;
                }else {
                    this.bookData.bookContentFocus = false;
                }
            },
            async handleBookRegister() {
                if(this.bookData.title !== '' && this.bookData.content !== '' && this.bookData.address !== '' && this.bookData.price !== '' && this.bookData.category !== '' && this.bookData.tag !== '' && this.bookData.bookTitle !== '' && this.bookData.bookContent !== '' && this.bookData.fileList.length > 0){
                    console.log(sessionStorage.getItem("TOKEN"));
                    const url = '/REST/api/book/register';
                    const headers = {"Content-Type" : "multipart/form-data", "token" : sessionStorage.getItem("TOKEN")};
                    const formData = new FormData();
                    formData.append("title", this.bookData.title);
                    formData.append("content", this.bookData.content);
                    formData.append("bookTitle", this.bookData.bookTitle);
                    formData.append("bookContent", this.bookData.bookContent);
                    formData.append("address", this.bookData.address);
                    formData.append("price", parseInt(this.bookData.price));
                    formData.append("categoryCode", parseInt(this.bookData.category));
                    formData.append("tag", this.bookData.tag);

                    if(this.bookData.fileList.length === 1){
                        formData.append("file", this.bookData.fileList[0].raw);
                    }else if(this.bookData.fileList.length === 2){
                        formData.append("file", this.bookData.fileList[0].raw);
                        formData.append("file", this.bookData.fileList[1].raw);
                    }else if(this.bookData.fileList.length === 3){
                        formData.append("file", this.bookData.fileList[0].raw);
                        formData.append("file", this.bookData.fileList[1].raw);
                        formData.append("file", this.bookData.fileList[2].raw);
                    }
                    const response = await axios.post(url, formData, {headers});

                    // 결과 값 반환
                    if (response.data.result === 1) {
                        alert(response.data.data);
                        return this.$router.push({path: '/book/place'});
                    }else {
                        return alert("글 등록을 실패했습니다.");
                    }
                }else{
                    return alert("모든 항목을 입력해주세요.");
                }
            },
            // 카테고리 조회
            async handleCategory() {
                const url = `/REST/api/category/list`;
                const headers = {"Content-Type" : "application/json"};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.categoryList = response.data.data;
                }
            }
        }
    }
</script>

<style scoped>
    .sector-container{
        width: 100%;
        margin: 1px auto;
        position: relative;
    }
    .st-background img{
        width: 100%;
        height: 280px;
        object-fit: cover;
        vertical-align: middle;
    }
    .st-content-center{
        padding: 10px 20px;
        color: #3D3D3D;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .sector2-container{
        height: 100%;
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex; 
        justify-content: center; 
        align-items: center;
    }
</style>