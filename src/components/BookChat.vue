<template>
    <div class="container" style="border: 1px solid #eee;" v-loading.fullscreen.lock="fullscreenLoading">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="width: 30%;  border-right: 1px solid #eee;">
                <!-- 검색 창 -->
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px;">
                    <div style="width: 30%;">
                        <span href="/" style="font-family: 'Archivo Black', sans-serif; font-size: 19px; font-weight: bold; color: #5B6EBC; margin-right: 10px;">CHAT LIST</span>
                    </div>
                    <div style="width: 70%;">
                        <el-input placeholder="닉네임 검색하기" v-model="text" style="width: 100%; " @keyup.enter="handleSearch">
                            <template #prefix>
                                <i class="el-input__icon el-icon-search"></i>
                            </template>
                        </el-input> 
                    </div>
                </div>
                <div style="width: 100%; height: 1px; background-color: #E8E8E8;"></div>
                <!-- 검색 내용 -->
                <el-scrollbar height="600px"> 
                    <div v-for="(msg1,idx) in list1" v-bind:key="msg1">
                        <div style="padding: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="width: 15%;">
                                    <img :src="`http://localhost:9090/REST/api/member/image?memberid=${memberId[idx]}`" alt="image" style="width: 60px; height: 60px; object-fit: cover;"> 
                                </div>
                                <div style="width: 85%; margin-left: 10px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <div style="width: 50%; text-align: left;">
                                            <span style="font-size: 18px; font-weight: bold;">상대방 : {{msg1.opponent}}</span>
                                        </div>
                                        <div v-if="joined[idx]" style="width: 50%; text-align: right;">
                                            <el-button size="medium" @click="joinRoom(msg1.room,idx,msg1.room1,msg1.room2)" :disabled="joinbtn == 0" >입장</el-button>
                                            
                                        </div>
                                        <div v-if="!joined[idx]" style="width: 50%; text-align: right;">
                                            <el-button size="medium" @click="leaveRoom(msg1.room,idx)">나가기</el-button>
                                            
                                        </div>
                                    </div>
                                    <div style="text-align: left; margin-top: 5px; color: #858585">
                                        <span style="font-size: 16px; font-weight: bold;">판매자 : {{msg1.room1}}</span><br/>
                                        <span style="font-size: 16px; font-weight: bold;">구매자 : {{msg1.room2}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </el-scrollbar>
            </div>
            <div style="width: 70%; padding-left: 10px; padding-right: 10px;">
                <el-scrollbar height="600px;">
                    <div v-for="msg in list" v-bind:key="msg" >
                        <ul>
                            <li v-bind:style="msg.style">
                                <span > {{msg.username}} </span><br/>
                                <span style="background-color: #ECECEC; border-radius: 20px;  padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; font-size: 20px; ">{{msg.userid}}</span><br/>
                                <span style="font-size: 12px;">{{msg.regdate}}</span><br/>
                            </li>
                        </ul>
                    </div>

                    <!-- <div style="width: 100%; text-align: left;">

                        <div>
                            <div style="text-align: left;">
                                <span>yeri@naver.com</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: top;">
                                <div style="width: 10%;">
                                    <div style="text-align: justify">
                                        <img src="../assets/traveler_img_07.jpg" alt="image" style="width: 100%; height: 70px; object-fit: cover;">
                                    </div>
                                </div>
                                <div style="width: 90%; text-align: left; margin-left: 10px;">
                                    <div  style="padding: 10px;">
                                        <span style="background-color: #ECECEC; border-radius: 20px;  padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px;">오 안녕! 난 좋지~~</span>
                                    </div>
                                    <div style="padding: 5px;">
                                        <span>2021-07-13 20:35</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="width: 100%; text-align: right;"> 

                        <div style="display:inline-block;">
                            <div style="width: 100%;">
                                <div style="text-align: left;">
                                    <span>yeri@naver.com</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: top;">
                                    <div style="width: 10%;">
                                        <div style="text-align: justify">
                                            <img src="../assets/traveler_img_07.jpg" alt="image" style="width: 100%; height: 70px; object-fit: cover;">
                                        </div>
                                    </div>
                                    <div style="width: 90%; text-align: left; margin-left: 10px;">
                                        <div  style="padding: 10px;">
                                            <span style="background-color: #ECECEC; border-radius: 20px;  padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px;">오 안녕! 난 좋지~~</span>
                                        </div>
                                        <div style="padding: 5px;">
                                            <span>2021-07-13 20:35</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </el-scrollbar>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 90%;">
                        <el-input placeholder="채팅보내기" v-model="msg" style="width: 100%;" @keyup.enter="sendMassage" ></el-input> 
                    </div>
                    <div style="width: 10%; margin-left: 5px;">
                        <el-button type="info" style="width: 100%; background-color: #033f8d" @click="sendMassage">발송</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getCurrentInstance} from '@vue/runtime-core'
import axios from 'axios';
    export default {
        async created() {
            
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
            
            await this.handleMember();
            await this.join();
            
            
            this.openFullScreen();


        },
        mounted() {
            this.$socket.on('subscribe',(recv) => { // key는 subscribe
                // console.log("recv",recv); 			//recv로 받은 메세지를 list에 넣어준다			 
                
                if( this.username  === recv.username){
                    recv.flag = 1;
                    recv.style = "display:block; text-align: right; padding-right: 5px";
                    recv.style1 = "display:inline";
                } else if( recv.userjoin != null){
                    recv.style = "color: blue; text-align: center"  ;
                } 
                else {
                    recv.flag = 2;
                    recv.style = "display:block; text-align: left; padding-left: 5px";
                    recv.style1 = "display:inline";
                } 
                this.list.push(recv);
            })

            this.$socket.on('subscribe1',(recv1) => { // key는 subscribe

                if(recv1.room1 === this.username){
                    recv1.opponent = recv1.room2;
                }else {
                    recv1.opponent = recv1.room1;
                }
                const promise1 = Promise.resolve(this.handleFindId(recv1.opponent));
                promise1.then((value) => {
                    this.memberId.push(value);
                });
                this.list1.push(recv1);
                
                for(let i=0; i<this.list1.length; i++){
                    this.joined[i] = true;
                }
            })
        },
        data() {
            return {
                imageid : '',
                joinbtn : 1,
                //방번호
                room : '',
                //채팅목록 상대방이름
                opponent : '',
                fullscreenLoading: false,
                msg : '',
                msg1 : '',
                list : [],
                list1 : [],
                recv : [],
                recv1 : [],
                $socket : '',
                joined : [],
                regdate : '',
                flag : '',
                username: '',
                room1 : sessionStorage.getItem("seller"),
                room2 : sessionStorage.getItem("buyer"),
                memberId: []
            }
        },
        methods: {
            //닉네임으로 아이디찾기
            async handleFindId(value){
                const url = `/REST/api/member/findid?nickname=${value}`;
                const header = { "Content-Type" : "application/json"}
                const response = await axios.get(url, {header});
                return response.data.data;
            },
            //상대 닉네임을 가지고 넘어올것 
            //판매자(대여해주는 사람) = this.roomnumber2, 구매자(대여하는사람) = this.roomnumber3
            //부여 해주는 작업이 선행되어야한다
            //닉네임 불러오기
            async handleMember(){
                const url = '/REST/api/member/memberGet';
                const header = {
                    "Content-Type": "application/json",
                    "token": sessionStorage.getItem("TOKEN")
                    };
                
                const response = await axios.get(url, {headers : header})
                console.log("닉네임겟",response);
                if(response.data.result == 1){
                    this.username = response.data.member.nickname;
                }
            },
            openFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    background: '#fff',
                })
                setTimeout(() => {
                loading.close()
                }, 2000)
            },
            //채팅 메소드

            cancleTrade(){
                this.$socket.emit('publish',{
                    data: { 
                    room : this.roomnumber2+this.roomnumber3,
                    flag : this.flag,
                    code:5}
                    });
                
            },
            leaveRoom(val,idx){
                
                this.$socket.emit('publish',{
                    data: { 
                    room : val ,
                    code:3,
                    userid: this.msg,
                    username: this.username } 
                });
                for(let i = 0; i < this.joined.length; i++) {
                    if(i === idx) {
                        console.log("same");
                        this.joined[idx] = true;
                    }else {
                        console.log("different");
                        this.joinbtn = 1;
                    }
                }
                this.room1='';
                this.room2='';
                this.list=[];     
            },
            joinRoom(val,idx,room1,room2){
                
                //방입장시 구매자 판매자 구별해서 넣어줄것
                this.$socket.emit('publish',{
                    data: { 
                    room : val ,
                    code:2,
                    username: this.username,
                    } 
                });
                for(let i = 0; i < this.joined.length; i++) {
                    if(i === idx) {
                        console.log("same");
                        this.joined[idx] = false;
                    }else {
                        console.log("different");
                        this.joinbtn = 0;
                    }
                }
                this.room1 = room1;
                this.room2 = room2;
            },
            join(){
                this.$socket.emit('publish',{
                    data: {
                        code : 6,
                        username : this.username
                    }
                })
            },
            sendMassage() {
                
                this.$socket.emit('publish', //key는 publish 설정안하면 소켓사용불가
                {
                    data : {userid : this.msg, username : this.username, code:4 ,room : this.room1+this.room2, room1 : this.room1, room2 : this.room2 , regdate : new Date().toLocaleString(), flag : this.flag}
                    //id = 실제 적을 메세지의 내용
                    //name = 임의지정한 글쓴이 ( 이를 변경,수정하면 개인별 아이디로 지정 채팅자의 닉네임으로 설정가능)
                    //age = regdate와 같은것으로 설정하면 작성 시간으로 설정가능
                });
                this.msg ="";
                
            },
        }
    }
</script>
<style scoped>
  /* Import Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,700&display=swap');

  li{
    list-style:none;
  }
</style>