<template>
  <div class="container" style="overflow:hidden">
    <!-- 1번 배너 -->
    <div style="display: flex; justify-content: space-between; align-items: center; background-color: #AEC5EF; height: 680px;">
      <div style="width: 60%;">
        <img src="../assets/shareBooksBanner/share_books_banner_01.png" alt="image" style="width: 80%; object-fit: cover;">
      </div>
      <div style="width: 40%;">
        <div data-aos="fade-right" style="text-align: left; color: #3D3D3D">
          <span style="font-size: 58px; font-weight: bold;">내 근처의<br>가까운 도서관</span><br>
          <div style="margin-top: 15px; margin-bottom: 30px;">
            <span style="font-size: 22px;">동네 이웃의 다양한 책을 대여해보세요 </span>
            <img src="../assets/shareBooksIcon/share_books_icon_05.png" alt="image" style="padding-top:3px; width:25px; height:25px;  vertical-align: top;">
          </div>
          <button class="btn-2" @click="handleBanner01">책 대여하기</button>
        </div>
      </div>
    </div>

    <!-- 2번 배너 -->
    <div style="display: flex; justify-content: space-between; align-items: center; background-color: #F4F7FF; height: 680px;">
      <div style="width: 40%;">
        <div style="display: flex; justify-content: space-between; align-items: center; text-align: left;">
          <div style="width: 35%;"></div>
          <div data-aos="fade-left" style="width: 65%; color: #3D3D3D;">
            <span style="font-size: 58px; font-weight: bold;">쉐어북스</span><br>
            <div style="margin-top: 15px; margin-bottom: 30px;">
              <span style="font-size: 22px;">집에 잠들어있는 많은 책, 함께 공유해볼까요?<br>먼저 책 등록부터 진행해주세요! </span>
            <img src="../assets/shareBooksIcon/share_books_icon_06.png" alt="image" style="padding-top:3px; width:25px; height:25px;  vertical-align: top;">
            </div>
            <button class="btn-2" @click="handleBanner02">책 등록하기</button>
          </div>
        </div>
      </div>
      <div style="width: 60%;">
        <img src="../assets/shareBooksBanner/share_books_banner_03.png" alt="image" style="width: 80%;">
      </div>
    </div>

    <!-- 3번 배너 -->
    <div style="display: flex; justify-content: space-between; align-items: center; background-color: #97A3F5; height: 680px;">
      <div style="width: 60%;">
        <img src="../assets/shareBooksBanner/share_books_banner_02.png" alt="image" style="width: 80%; height: auto;">
      </div>
      <div style="width: 40%;">
        <div data-aos="fade-right" style="text-align: left; color: #3D3D3D">
          <span style="font-size: 58px; font-weight: bold;">Now Open<br>채팅 기능!</span><br>
          <div style="margin-top: 15px; margin-bottom: 30px;">
            <span style="font-size: 22px;">실시간으로 책에 관해 소통할 수 있는 <br> 채팅 기능을 이용해보세요! </span>
            <img src="../assets/shareBooksIcon/share_books_icon_07.png" alt="image" style="padding-top:3px; width:25px; height:25px;  vertical-align: top;">
          </div>
          <button class="btn-2" @click="handleBanner03">채팅하러 가기</button>
        </div>
      </div>
    </div>

    <!-- 4번 배너 -->
    <div style="display: flex; justify-content: space-between; align-items: center; background-color: #F4F7FF; height: 680px;">
      <div style="width: 40%;">
        <div style="display: flex; justify-content: space-between; align-items: center; text-align: left;">
          <div style="width: 35%;"></div>
          <div data-aos="fade-left" style="width: 65%; color: #3D3D3D;">
            <span style="font-size: 58px; font-weight: bold;">취향저격 <br> 책 추천기능!</span><br>
            <div style="margin-top: 15px; margin-bottom: 30px;">
              <span style="font-size: 22px;">취향에 딱 맞는 책을 찾으시나요?<br>책 추천기능을 이용해보세요! </span>
              <img src="../assets/shareBooksIcon/share_books_icon_08.png" alt="image" style="padding-top:1px; width:25px; height:25px;  vertical-align: top;">
            </div>
            <button class="btn-2" @click="handleBanner04">찾아보러 가기</button>
          </div>
        </div>
      </div>
      <div style="width: 60%;">
        <img src="../assets/shareBooksBanner/share_books_banner_04.png" alt="image" style="width: 80%;">
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
            <el-button type="info" @click="handleLoginDialog(true)" style="font-family: 'Jua', sans-serif; font-size: 16px; background-color: #5B6EBC; color: #fff; border:none;">로그인</el-button>
            <el-button type="info" @click="handleLoginDialog(false)" style="font-family: 'Jua', sans-serif; font-size: 16px; background-color: #6D747D; color: #fff; border:none;">창닫기</el-button>
          </span>
        </div>
      </template>
    </el-dialog>
  </div>  
</template>

<script>
  export default {
    methods: {
      handleBanner01() {
        this.$router.push({path:'/book/place'});
      },
      handleBanner02() {
        if(sessionStorage.getItem("TOKEN") === null) {
          return this.dialogVisible = true;
        }
        this.$router.push({path:'/book/register'});
      },
      handleBanner03() {
        if(sessionStorage.getItem("TOKEN") === null) {
          return this.dialogVisible = true;
        }else{
          var ret = window.open("/book/chat","CHATTING","width=1500,height=800,location=no,scrollbars=yes");
          ret.open();
        }
      },
      handleBanner04() {
        if(sessionStorage.getItem("TOKEN") === null) {
          return this.dialogVisible = true;
        }
        this.$router.push({path:'/book/recommend'});
      },
      handleLoginDialog(flag) {
        if(flag === true) {
          this.dialogVisible = false;
          this.$router.push({path:'/login'});
        }else {
          this.dialogVisible = false;
        }
      }
    },
    data() {
      return {
        // 로그인 다이어로그
        dialogVisible: false
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,700&display=swap');

button,
button::after {
    transition: all 0.5s;
}

button {
    background: #5B6EBC;
    border: 3px solid #5B6EBC;
    border-radius: 5px;
    border : none;
    color: #fff;
    display: inline-block;
    font-size: 18px; 
    margin: 1em auto;
    padding-right: 25px; 
    padding-left: 25px; 
    padding-top: 15px; 
    padding-bottom: 15px;
    position: relative;
    text-transform: uppercase;
    font-family: 'Jua', sans-serif;

}

button::before,
button::after {
    background: #3d4978;
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 5px;
}

button:hover {
    color: #fff;
    z-index: 2;
}

/* BUTTON 2 */
.btn-2::after {
    height: 100%;
    left: 0;
    top: 0;
    width: 0;
}

.btn-2:hover:after {
    width: 100%;
    z-index: -1;
}


</style>