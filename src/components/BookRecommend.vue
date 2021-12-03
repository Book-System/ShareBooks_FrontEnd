<template>
  <div class="container" style="padding-bottom:50px">
    <!-- 상단 배너 -->
    <div>
      <el-carousel height="400px" arrow="never" trigger="click">
        <el-carousel-item v-for="banner in share_books_banner" :key="banner">
          <div class="lb-wrap">
            <div class="lb-text">
              <span class="lb-title">{{banner.title}}</span><br>
              <span class="lb-desc">{{banner.desc}}</span>
            </div>
            <div class="lb-image" style="z-index:-1">
              <img v-bind:src="require(`@/assets/shareBooksBanner/${banner.image}.jpg`)" alt="image" style="height: 400px; object-fit: cover;">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <!-- 2 -->
    <div style="width: 1200px; height: 500px; margin-left:auto; margin-right: auto; margin-top: 60px;">
      <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; align-items: center;">
        <!-- 이달의 추천 책 -->
        <div style="width: 75%;">
          <div style="text-align: left; font-size: 35px;">
            <span>이 달의 추천 책</span>
          </div>
          <el-carousel height="400px" arrow="never" trigger="click" :autoplay="false" indicator-position="outside">
            <el-carousel-item v-for="(lush_item, idx) in 2" :key="lush_item">
              <div style="width: 100%; height: 100%; display: flex; justify-content: spece-between; align-items: center;">
                <div  v-for="item in monthBooks[idx]" :key="item"  style="width: 33%;">
                  <router-link :to="`/book/detail?bookno=${item.book_No}`" style="text-decoration: none;">
                    <div style="padding: 10px;">
                      <div>
                        <img style="width: 100%; height: 250px; object-fit: cover;" alt="image" :src="`http://localhost:9090/REST/api/book/image/main?bookno=${item.book_No}&priority=1`">
                      </div>
                      <div>
                        <div style="font-size: 20px; color: #000; margin-top: 15px;">
                          <span>{{item.book_Title}}</span>
                        </div>
                        <div style="font-size: 15px; color: #7a7a7a">
                          <span>{{item.tag}}</span>
                        </div>
                        <div style="font-size: 19px; color: #000; margin-top: 15px;">
                          <span>₩{{item.price}}</span>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 사람들의 실제 리뷰 4개-->
        <div style="width: 25%; margin-top: -120px;">
          <el-carousel height="650px" indicator-position="none" arrow="never" style="margin-left: 20px;">
            <el-carousel-item v-for="sub_banner in commentBooks" :key="sub_banner">
              <div style="height: 360px; background-color: #FAFAFA;">
                <div style="padding: 25px; text-align: left;">
                  <div style="font-size: 28px;">
                    <span>{{sub_banner.book_Title}}</span>
                  </div>
                  <div style="font-size: 18px; margin-top: 5px; text-align: justify; color: #7a7a7a;">
                    <span>{{sub_banner.tag}}</span>
                  </div>
                  <div style="font-size: 20px; margin-top: 20px;">
                    <span>{{sub_banner.mname}}님의 후기</span>
                  </div>
                  <div style="font-size: 19px; margin-top: 5px; text-align: justify">
                    <span>{{sub_banner.content}}</span>
                  </div>
                </div>
              </div>
              <div style="height: 300px;">
                <img style="width: 100%; height: 300px; object-fit: cover;" alt="image" :src="`http://localhost:9090/REST/api/book/image/main?bookno=${sub_banner.book_No}&priority=1`">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- 사용자별 추천 책 리스트 -->
    <div style="width: 1200px; margin-left:auto; margin-right: auto; margin-top: 60px;">
      <div style="text-align: left; font-size: 35px; margin-top: 100px;">
        <span>평점이 높은 책</span>
      </div>
      <div style="width: 100%; display: table; justify-content: space-between; align-items: center; padding: 5px;">
        <ul style="width: 100%; margin: 0px; padding: 0px;">
          <li style="width: 20%; list-style: none; display: inline-flex;" v-for="item in recommendBooks" :key="item">
            <el-card style="width:100%; margin: 5px; display: inline-block;" :body-style="{ padding: '0px' }" shadow="never">
              <router-link :to="`/book/detail?bookno=${item.book_No}`" style="text-decoration: none;">
                <img style="width:100%; height: 200px; object-fit: cover;" alt="image" :src="`http://localhost:9090/REST/api/book/image/main?bookno=${item.book_No}&priority=1`">
                <div style="text-align: justify; padding: 10px 20px;">
                  <div>
                    <div>
                      <span style="font-size: 17px; color: #212529;">{{item.title}}</span>
                    </div>
                    <div style="margin-top: 5px;">
                      <span style="font-size: 15px; color: #969096">{{item.tag}}</span>
                    </div>
                    <div style="margin-top: 10px;">
                      <span style="font-size: 18px; color: #5B6EBC;">₩{{item.price}}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </el-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    created() {
      
      const loading = this.$loading({
              lock: true,
              text: 'Loading',
              background: '#fff',
              spinner : '1'
      });
      this.handleRecommendBook();
      this.handleCommentBook();
      this.handleMonthBook();
      loading.close();
    },
    mounted() {
      
    },
    methods: {
      async handleRecommendBook() {
        const url = `/REST/api/recommend/rating/book`;
        const headers = {"Content-Type" : "application/json"};
        const response = await axios.get(url, {headers});
        if(response.data.result === 1) {
          this.recommendBooks = response.data.data;
        }
      },
      async handleMonthBook() {
        const url = `/REST/api/recommend/month/book`;
        const headers = {"Content-Type" : "application/json"};
        const response = await axios.get(url, {headers});
        if(response.data.result === 1) {
          for(let i = 0; i < response.data.data.length; i++) {
            if(i < 3) {
              this.monthBooksTemp1.push(response.data.data[i]);
            }else {
              this.monthBooksTemp2.push(response.data.data[i]);
            }
            this.monthBooks.push(this.monthBooksTemp1);
            this.monthBooks.push(this.monthBooksTemp2);
          }
        }
      },
      async handleCommentBook() {
        const url =`/REST/api/recommend/comment/book`;
        const headers = {"Content-Type" : "application/json"};
        const response = await axios.get(url, {headers});
        if(response.data.result === 1) {
          this.commentBooks = response.data.data;
        }
      },
      handleLoading() {
        this.$nextTick(function() { 
          
        });
      }
    },
    data() {
      return {
        temp: '',
        // 평점이 높은 책 배열
        recommendBooks: [],
        // 최신 후기 4개
        commentBooks: [],
        // 이달의 핫한 책 6권
        monthBooks: [],
        monthBooksTemp1: [],
        monthBooksTemp2: [],
        
        // share_books_banner => 타이틀, 설명, 이미지
        share_books_banner : [
          {
            title : "#감성 #에세이 #힐링",
            desc  : "지친 마음을 달래줄 책들을 읽어보세요",
            image : "share_books_banner_07"
          },
          {
            title : "#로맨스 #소설 #판타지",
            desc  : "가슴 설레는 로맨스가 필요할 때",
            image : "share_books_banner_08"
          },
          {
            title : "#자기계발 #성공 #지혜",
            desc  : "힘겨운 이들이 꼭 읽어야 할 희망 메시지",
            image : "share_books_banner_09"
          },
          {
            title : "#철학 #예술 #인문학",
            desc  : "지금, 여기, 보통 사람들을 위한 현실 인문학",
            image : "share_books_banner_10"
          }
        ],
        // share_books_sub_banner => 물품명, 태그, 가격, 이미지
        lush_items : [
          [
            {
              productName : "죽고 싶지만 떡볶이는 먹고 싶어",
              productTag  : "#에세이 #심리치유 #공감라이프",
              productPrice: "₩ 5,000",
              productImage: "lush_item_05"
            },
            {
              productName : "세계에서 이 사랑이 사라진다 해도",
              productTag  : "#연애/사랑소설 #일본 장편소설 #청춘들에게",
              productPrice: "₩ 3,000",
              productImage: "lush_item_05"
            },
            {
              productName : "오늘은 이만 좀 쉴게요",
              productTag  : "#에세이 #스페셜에디션 #심리치유",
              productPrice: "₩ 2,000",
              productImage: "lush_item_05"
            }
          ],
          [
            {
              productName : "더티 보디 스프레이",
              productTag  : "#스테디셀러 #뒤돌아보는향 #재구매각",
              productPrice: "₩ 50,000",
              productImage: "lush_item_05"
            },
            {
              productName : "더티 보디 스프레이",
              productTag  : "#스테디셀러 #뒤돌아보는향 #재구매각",
              productPrice: "₩ 50,000",
              productImage: "lush_item_05"
            },
            {
              productName : "더티 보디 스프레이",
              productTag  : "#스테디셀러 #뒤돌아보는향 #재구매각",
              productPrice: "₩ 50,000",
              productImage: "lush_item_06"
            }
          ]
        ],
        // lush_sub_banner => 제품명, 제품 카테고리, 사용자 이름, 사용자 리뷰, 사용자 첨부 이미지
        lush_sub_banner : [
          {
            productName    : "#너라는 의미 너라는 위로",
            productCategory: "한국 시",
            userName       : "이소연님의 후기",
            userReview     : "아직은 건조한 환절기! 포근한 향기에 촉촉한 보습력까지 느껴볼 수 있는 것 같아요.",
            userImage      : "lush_sub_banner_img_10"
          },
          {
            productName    : "#카타스트로피 코스메틱",
            productCategory: "프레쉬 마스크",
            userName       : "김지훈님의 후기",
            userReview     : "아침마다 비타민 영양제 챙겨먹듯 피부에 영양공급! 세안 후 맑아진 얼굴에 만족도가 매우 높아요!",
            userImage      : "lush_sub_banner_img_05"
          },
          {
            productName    : "#더티",
            productCategory: "보디 스프레이",
            userName       : "한윤진님의 후기",
            userReview     : "더티라인 중에서 보디 스프레이가 제일 향기가 캐주얼한 느낌입니다. 확실히 향이 강해서 방향제로 사용하기 좋아요.",
            userImage      : "lush_sub_banner_img_07"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  /* Import Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

  .container {
    font-family: 'Jua', sans-serif;
  }

  /* sector01 */
  .sector01 {
    margin  : 1px auto; 
    position: relative;
  }
  .st01-background img {
    width     : 100%; 
    height    : 400px; 
    object-fit: cover; 
    vertical-align: middle;
  }
  .st01-content {
    padding   : 10px 20px; 
    color     : #fff; 
    text-align: center; 
    position  : absolute; 
    top       : 50%; 
    left      : 50%; 
    transform : translate(-50%, -50%);
  }
  .st01-content .container {
    width           : 1100px; 
    height          : 160px; 
    background-color: #fff; 
    border          : 1px solid #eee; 
    border-radius   : 9px; 
    margin-top      : 15px; 
    padding         : 20px; 
    box-shadow      : 3px 3px 7px black;
  }
  
  .ct-image img{
    width: 100%;
    height: 500px;
    object-fit: cover;
    vertical-align: middle;
  }
  .ct-text{
    padding: 10px 20px;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sector01-container{
    width: 100%;
    margin: 1px auto;
    position: relative;
  }


  .sector02-container{
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .sector02-text-container{
    margin-bottom: 40px;
    font-size: 14px;
    color: #696969;
  }
  
  .sector02-container table{
    margin-left: auto; 
    margin-right: auto;
  }
  
  .sector02-container .ct-td{
    padding-left: 20px; 
  }

  .sector02-sub-container{
    width: 100%;
    margin: 1px auto;
    position: relative;
  }


  .sector03-container{
    background-color: #ebebeb;
    font-family: 'Jua', sans-serif;
    width: 100%;
    height: 400px;
    margin: 1px auto;
    position: relative;
  }

  .sector04-container{
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .sector04-text-container{
    margin-bottom: 40px;
    font-size: 14px;
    color: #696969;
  }

  .sector04-sub-container{
    width: 100%;
    margin: 1px auto;
    position: relative;  
  }

  .sector04-container table{
    margin-left: auto; 
    margin-right: auto;
  }
  
  /* lb-wrap */
  .lb-wrap {
    width: 100%;
    position: relative;
  }
  .lb-wrap img {
    width: 100%;
    vertical-align: middle;
  }
  .lb-text {
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lb-title {
    font-size: 65px;
  }
  .lb-desc {
    font-size: 20px;
  }
</style>