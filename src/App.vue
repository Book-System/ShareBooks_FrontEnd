<template>
  <div class="container" oncontextmenu="return false">
    <!-- container -->
    <el-container style="min-width:1300px; height: 100%; border: 1px solid #eee">
      <el-container>
        <!-- header -->
        <el-header style="--el-header-padding: 0px; text-align: right;">
          <el-affix>
            <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#3D3D3D" active-text-color="#5B6EBC">
              <!-- 쉐어북스 로고 -->
              <el-menu-item>
                <a href="/" style="text-decoration: none;"><img src="./assets/share_books_logo.png" alt="image" style="width: auto; height: 50px;"></a>
              </el-menu-item>
              <!-- 검색 창 -->
              <el-menu-item>
                <el-input placeholder="동네이름을 검색하세요." v-model="search" style="width: 450px; margin-bottom: 5px;" @keyup.enter="handleSearch">
                  <template #prefix>
                    <i class="el-input__icon el-icon-search"></i>
                  </template>
                </el-input> 
              </el-menu-item>
              <!-- 쉐어북스 -->
              <el-menu-item index="1" style="font-size: 20px;">감성북스</el-menu-item>
              <!-- 플레이스 -->
              <el-menu-item index="2" style="font-size: 20px;">플레이스</el-menu-item>
              <!-- 커뮤니티 -->
              <el-menu-item index="3" style="font-size: 20px;">커뮤니티</el-menu-item>
              <el-menu-item>
              <!-- 실시간 검색 -->
                <div class="block" style="z-index:2;">
                    <ul id="ticker" v-for="msg in list" v-bind:key="msg"  >
                        <li class="search1"><a href="#"><span>{{msg.rank}}</span> {{msg.search}}</a></li>
                    </ul>
                </div>
              </el-menu-item>
              
              <!-- 로그인 -->
              <div class="menu">
                <!-- 이미지 및 닉네임 표시 -->
                <div v-if="logged">
                  <img :src="`http://localhost:9090/REST/api/member/image?memberid=${memberData.email}`" alt="image" class="profile_image_circle" style="width: 50px; height: 50px; border-radius: 50%; vertical-align: middle; margin-right:10px; object-fit: cover; border: 1.5px solid #C1C0C1;">
                  <span style="font-size:15px">{{memberData.nickname}}</span>
                </div>
              <el-dropdown style="color: #4F4F4F; margin-right: 10px;">
                <div>
                  <i class="el-icon-user-solid" style="padding: 20px;"></i>
                </div>
                <template #dropdown>
                  <el-dropdown-menu v-if="!logged" style="color: #4F4F4F; font-family: 'Jua', sans-serif;">
                    <el-dropdown-item @click="handleLogin">로그인</el-dropdown-item>
                    <el-dropdown-item @click="handleJoin">회원가입</el-dropdown-item>
                    <el-dropdown-item @click="handleService">고객센터</el-dropdown-item>
                  </el-dropdown-menu>
                  <el-dropdown-menu v-if="logged" style="color: #4F4F4F; font-family: 'Jua', sans-serif;">
                    <el-dropdown-item @click="handleLogout">로그아웃</el-dropdown-item>
                    <el-dropdown-item @click="handleMypage">마이페이지</el-dropdown-item>
                    <el-dropdown-item @click="handleService">고객센터</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              </div>
            </el-menu>
          </el-affix>
        </el-header>

        <!-- main -->
        <el-main style="--el-main-padding: 0px">
          <router-view @changeLogged="changeLogged" ></router-view>
        </el-main>

        <!-- footer -->
        <el-footer style="--el-footer-padding: 0px;">
          <div class="footer-container">
            <div class="item-wrap">
              <div class="items">
                <div style="width: 50%; text-align: left;">
                  <img src="./assets/share_books_logo2.png" alt="home_background" style="width: auto; height: 55px;">
                </div>
                <div style="width: 50%; text-align: right; font-size: 17px;">
                  <span>SHARE BOOKS</span><br>
                  <span>부산광역시 남구 수영로 261 (서초동, 백암빌딩) 403호</span><br>
                  <span>(주) 쉐어북스 | 문의 051-123-5678 | 사업자등록번호 123-12-12345</span><br>
                  <span>&copy; 2021. All Rights Reserved</span>
                </div>
              </div>
            </div>
          </div>
        </el-footer>

        <!-- back-top button -->
        <el-backtop style="padding: 5px;">
            <i class="el-icon-caret-top" style="color: #5B6EBC;"></i>
        </el-backtop>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import {getCurrentInstance} from '@vue/runtime-core'
export default {

  mounted() {
    //인기검색어 호출
    this.$socket.on('Ssubscribe', (recv) => {
        console.log("recv",recv);
          this.list = recv;

    });
  },
  created() {
    //인기검색어 롤링
    const app = getCurrentInstance();
    this.$socket = app.appContext.config.globalProperties.$socket;
    this.$socket.emit('search',{
        data : {
            code: 1
        }
    });            
    this.reload();
    // 로그인 여부에 따라, 상태가 바뀜
    if(sessionStorage.getItem('TOKEN') === null){
      this.logged = false;
    }else{
      this.logged = true;
      this.handleInformation();
    }
    
  },
  methods: {
    //로그인 화면 상태전환
    changeLogged(logged){
      this.logged = logged;
      // this.$router.go();
      location.href="/"
    },
    //인기검색어 롤링
    reload() {
      this.interval = setInterval(() => {      
          let value = this.list.splice(0, 1);
          this.list.push(value[0]);
      }, 3000)
    },
    handleSelect(menu){
      if(menu === '1'){
        this.$router.push({path:'/book/recommend'});
      }
      if(menu === '2'){
        this.$router.push({path:'/book/place'});
      }
      if(menu === '3'){
        this.$router.push({path:'/book/sns'});
      }
      if(menu === '4'){
        this.$router.push({path:'/mypage'});
      }
      if(menu === '5'){
        this.$router.push({path:'/search'});
      }
    },
    // 로그인 메소드
    handleLogin(){
      this.$router.push({path:'/login'});
    },
    // 회원가입 메소드
    handleJoin(){
      this.$router.push({path:'/Join'});
    },
    // 마이페이지 메소드
    handleMypage(){
      this.$router.push({path:'/mypage'});
    },
    // 고객센터 메소드
    handleService(){
      this.$router.push({path:'/service/notice'});
    },
    // 검색 메소드
    handleSearch(){
      let urlparam = location.search;
      this.$router.push({path:'/book/place', query: {address: this.search}});
      if(urlparam.length >= 1){
        setTimeout(function(){
          location.reload();
        },200);
      }
      //검색어 보내기
      this.$socket.emit('search', {
          data: {
              search: this.search,
              count: this.count,
              code : 2,
              rank : this.rank,
          }
      });
      this.search = ''
      
    },
    // 로그아웃 메소드
    handleLogout() {
      alert("로그아웃이 되었습니다.");
      sessionStorage.removeItem("TOKEN");
      this.$router.push({path: '/'});
      this.changeLogged(false);
      
      
    },
    async handleInformation() {
      const url = `/REST/api/member/information`;
      const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
      const response = await axios.get(url, {headers});

      if(response.data.result === 1) {
          this.member = response.data.data;
          console.log(this.member);
          this.memberData.email = this.member.id;
          this.memberData.name = this.member.name;
          this.memberData.nickname = this.member.nickname;
          this.memberData.phone = this.member.phone;
          this.memberData.zipcode = this.member.zipcode;
          this.memberData.address = this.member.address;
      }   
    },
  },
  data() {
    return {
      //인기검색어
      count: 1,
      rank: 0,
      list: [],
      recv: [],
      $socket: '',
      code: 0,
      msg : '',

      passLogin      : false,
      logged         : false,
      loginVisible   : false,
      registerVisible: false,
      search: '',

      //우측상단 닉네임
      memberData: {
        email     : '',
        curPassword: '',
        newPassword: '',
        newPasswordChk: '',
        name      : '',
        nickname  : '',
        phone     : '',
        zipcode   : '',
        address   : '',
        fileList  : [],
        
        // 전화번호 유효성 검사
        phoneFocus  : false,
        phoneCheck  : false,
        phoneText   : '휴대폰번호를 입력해주세요.',

        // 주소 유효성 검사
        addressFocus: false,
        addressCheck: false,
        addressText : '주소를 입력해주세요.'
      },
    }
  }
}
</script>

<style>
  /* Import Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  .el-header {
    background-color: #fff;
    line-height: 60px;
  }
  .el-main {
    text-align: center;
  }
  .footer-container {
    height: 210px;
    background-color: #5B6EBC;
  }
  .item-wrap {
    max-width: 70%;
    margin: 0 auto;
  }
  .item-wrap .items {
    height: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  .container {
    font-family: 'Jua', sans-serif;
  }
  .block {
    position: fixed;
    border:2px solid #5B60AE;
    border-radius: 5px;
    padding:0px 20px; 
    height:30px; 
    overflow:hidden; 
    background:#fff; 
    width:auto; 
    font-family:'Jua', sans-serif; 
    font-size:16px;
    margin : 15px auto ;
    text-align: center;
  }
  .block:hover {
      position: fixed;
      height:300px; 
  }

  .block ul,.block li {
      margin:0; 
      padding:0; 
      list-style:none;
  }

  .block li a {
      display:block; 
      height:30px; 
      line-height:30px; 
      color:#555; 
      text-decoration:none;
  }
  .block li span {
      padding:2px 5px; 
      background:#6075dc; 
      color:#fff; 
      font-weight:bold; 
      margin-right:3px;
  }

   .menu{
    display: flex;
    justify-content: right;
    align-items: center;
  }

  /* 커서 모양 */
  html, body { 
    cursor: url('./assets/emoticon/cursor11.png'),auto;
  }
  

  a, a:link { cursor: url('./assets/emoticon/cursor11.png'), auto;} 
  a:hover, a:focus { cursor: url('./assets/emoticon/cursor11.png'), auto;} 
  a:active {cursor: url('./assets/emoticon/cursor11.png'), auto;} 
</style>
