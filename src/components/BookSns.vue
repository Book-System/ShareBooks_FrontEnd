<template>
    <div class="container">
        <div class="banner">
            <div>
                <span class="banner_mypage">쉐어북스 커뮤니티</span><br>
                <div class="banner_bar"></div>
            </div>
        </div>
    </div>
    <div style="background-color:#d7ccc856; padding-top: 40px; padding-bottom: 40px;">
        <div style=" padding-top:20px; display: flex; justify-content: right; align-items:right; width:74%;">
            <el-button type="primary" class="reply_btn" size="small" @click=" handleInsertEdit()">글쓰기✍🏻 </el-button>
        </div> 
        <div class="jc_center" v-for="sns in snses" :key="sns">
            <el-card class="box-card" shadow="hover" style="width: 750px; height:100%; padding: 30px; color: #3D3D3D">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="width: 50%; text-align: left;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="width: 15%; ">
                                <img :src="memberUrl+sns.member" style="width: 40px; height: 40px; border-radius: 100%; object-fit: cover; border: 2.3px solid #5B6EBC;">
                            </div>
                            <div style="width: 85%;">
                                <span style="font-size: 18px;">{{sns.memberName}}</span><br>
                                <span style="font-size: 14px; color: #65676B;">{{$dayjs(sns.regdate).fromNow()}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="width: 50%; text-align: right;">
                        <div v-if="sns.member !== userinfo.id">
                            <i class="el-icon-more"></i>
                        </div>
                        <div v-if="sns.member === userinfo.id">
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    <i class="el-icon-more"></i>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu style="font-family: 'Jua', sans-serif;">
                                        <el-dropdown-item @click="handleUpdateEdit(sns.snsNo)">수정</el-dropdown-item>
                                        <el-dropdown-item @click="handleDelete(sns.snsNo)">삭제</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                </div><br/>
                <div style="text-align: left; margin-bottom: 10px;">
                    <span style="font-size: 24px;">{{sns.title}}</span><br>
                </div>                  
                <div class="content" style="font-size: 20px; text-align: left;">
                    {{sns.content}}
                </div>
                <br />
                <div class="image_center" v-if="sns.count === 1">
                    <el-image style="width: 100%; height: 100%" :src="`${url} + ${sns.snsNo}&priority=0`" :preview-src-list="handleUrl(srcList1[0], sns.snsNo)">
                    </el-image>
                </div>
                <div class="image_center" v-if="sns.count === 2">
                    <el-image style="width: 50%; height: 50%" :src="`${url} + ${sns.snsNo}&priority=0`" :preview-src-list="handleUrl(srcList2[0], sns.snsNo)">
                    </el-image>
                    <div style="margin: 6px;"></div>
                    <el-image style="width: 50%; height: 50%" :src="`${url} + ${sns.snsNo}&priority=1`" :preview-src-list="handleUrl(srcList2[1], sns.snsNo)">
                    </el-image>
                </div>
                <div class="image_center" v-if="sns.count === 3">
                    <el-image style="width: 33%; height: 33%" :src="`${url} + ${sns.snsNo}&priority=0`" :preview-src-list="handleUrl(srcList3[0], sns.snsNo)">
                    </el-image>
                    <div style="margin: 6px;"></div>
                    <el-image style="width: 33%; height: 33%" :src="`${url} + ${sns.snsNo}&priority=1`" :preview-src-list="handleUrl(srcList3[1], sns.snsNo)">
                    </el-image>
                    <div style="margin: 6px;"></div>
                    <el-image style="width: 33%; height: 33%" :src="`${url} + ${sns.snsNo}&priority=2`" :preview-src-list="handleUrl(srcList3[2], sns.snsNo)">
                    </el-image>
                </div>
                <br />
                <div style="margin-right:650px;" v-for="good in goods" :key="good">
                    <div v-if="good.snsNo === sns.snsNo && good.good !== null">❤️{{good.good}}</div>
                    <div v-if="good.snsNo === sns.snsNo && good.good === null">❤️{{'0'}}</div>
                    <!-- <div v-if="sns.good !== null">❤️{{sns.good}}</div>
                    <div v-if="sns.good === null">❤️{{'0'}}</div> -->
                </div>
                <br />
                <div class="line"></div><br />
                <div style="display:flex;">
                    <div v-for="good in goods" :key="good">
                        <div v-if="good.snsNo === sns.snsNo && good.please === null"><button class="btn" @click="handleLike(sns.snsNo)">❤️ 공감하기</button></div>
                        <div v-if="good.snsNo === sns.snsNo && good.please !== null"><button class="btn" @click="handleLike(sns.snsNo)">🤍 공감취소</button></div>
                    </div>
                    <div v-for="good in goods" :key="good">
                        <div v-if="good.snsNo === sns.snsNo && good.reply === null">
                            <button class="btn" @click="handle_toggle(sns.snsNo),selectReply(sns.snsNo)">💬 댓글{{'(0)'}}</button>
                        </div>
                        <div v-if="good.snsNo === sns.snsNo && good.reply !== null">
                            <button class="btn" @click="handle_toggle(sns.snsNo),selectReply(sns.snsNo)">💬 댓글{{'('+good.reply+')'}}</button>
                        </div>
                    </div>
                </div><br />
                <div class="line"></div><br />
                <!-- 댓글 누르면 나오는 댓글쓰기 -->
                <div v-if="toggles[sns.snsNo]=== true">
                    <div>
                        <el-input type="textarea" :rows="2" placeholder="댓글을 입력하세요" v-model="reply"></el-input>
                    </div><br />
                    <div style="display: flex; justify-content: right; align-items: right; mergin-top:10px;">
                        <el-button type="primary" class="reply_btn" size="small" @click="handleReply(sns.snsNo)">댓글쓰기</el-button>
                    </div>
                    <div style="display:flex;" v-for="reply in replys" :key="reply">

                        <!--댓글 프로필이미지 -->
                        <div class="box" style="background: #BDBDBD; margin-top:20px; ">
                            <img :src="memberUrl+reply.member" style="width: 100%; height: 100%; border-radius: 100%; object-fit: cover; border: 1.5px solid #C1C0C1;">
                        </div>&emsp;


                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="padding-top:20px; padding-left:20px;">
                                <div style="display:flex;">
                                    <div>{{reply.memberName}}</div>
                                    <div style="padding-left:10px;">{{$dayjs(reply.regdate).fromNow()}}</div>
                                </div>
                                <div style="display:flex;">
                                    <span style="padding-top:12px; padding-right:13px;">{{reply.content}}</span>
                                    <el-button type="text" v-if="reply.member === userinfo.id" @click="DeleteReply(reply.snsreplyNo,reply.snsNo);"> ❌ </el-button>                                    
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="line"></div>
                </div><br />
            </el-card><br />
        </div>
    </div>
        <!-- SNS 수정하기 다이얼로그 -->
        <el-dialog title="수정하기" v-model="updateEdit" width="50%" :before-close="handleClose"> 
                <div  class="jc_between">                                                            
            <div style="width: 20%;">
                <span>제목</span>
            </div>
            <div style="width: 80%;">
                <el-input v-model="updateTitle" @blur="checkTitle" placeholder="제목을 입력하세요"></el-input>                    
            </div>
                </div><br/>
            <div class="line"></div><br>
            <div class="jc_between">            
            <div style="width: 20%;">
                <span>내용</span>
            </div>
            <div style="width: 80%;">
                <el-input type="textarea" cols="30" rows="10" placeholder="내용을 입력하세요" v-model="updateContent" @blur="checkContent">
                </el-input>                    
            </div>
                </div><br/>
            <div class="line"></div><br>
                <div class="jc_between">
            <div style="width: 20%;">
                <span>사진</span>
            </div>
            <div style="width: 80%;">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" limit="3" :file-list="fileList" :on-success="handleImageCardPreview" :on-remove="handleImageRemove" :on-exceed="handleExceed">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="imageDialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>
            </div>
                </div><br/>
            <template #footer>
                <span class="dialog-footer">
                    <el-button round @click="updateEdit = false">취소</el-button>
                    <el-button class="end_btn" round type="primary" @click="handleSnsUpdate(updatesns.snsNo)">수정</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- SNS 글쓰기 다이얼로그 -->           
        <el-dialog title="커뮤니티 글쓰기" v-model="insertEdit" width="50%" :before-close="handleClose">  
            <div  class="jc_between">                                                                
                <div style="width: 20%;">
                    <span>제목</span>
                </div><br/>
                <div style="width: 80%;">
                    <el-input v-model="title" @blur="checkTitle" placeholder="제목을 입력하세요"></el-input>                    
                </div><br/>
            </div><br/>
            <div class="line"></div><br>
            
            <div  class="jc_between">     
                <div style="width: 20%;">
                    <span>내용</span>
                </div><br/>
            
                <div style="width: 80%;">
                    <el-input type="textarea" cols="30" rows="10" placeholder="내용을 입력하세요" v-model="content" @blur="checkContent">
                    </el-input>                    
                </div>
            </div><br/>
                <div class="line"></div><br>
                <div  class="jc_between">   
                <div style="width: 20%;">
                    <span>사진</span>
                </div>
                <div style="width: 80%;">
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" limit="3" list-type="picture-card" :on-remove="handleRemove" :on-success="handlePictureCardPreview" :on-exceed="handleExceed">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="" />
                        </el-dialog>
                </div>
                </div><br/>
                <div class="line"></div><br>
            <template #footer>
                <span class="dialog-footer">
                    <el-button round @click="insertEdit = false">취소</el-button>
                    <el-button class="end_btn" round type="primary" @click="handleSnsInsert()">글쓰기</el-button>
                </span>
            </template>
        </el-dialog>
            

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                // 글쓰기                
                title: '',
                content: '',
                // 로그인된 회원정보
                userinfo: '',
                // 이미지
                url: '',
                memberUrl: '',                
                srcList1: [
                    `http://localhost:9090/REST/api/sns/select/image?priority=0&snsNo=`
                ],
                srcList2: [
                    `http://localhost:9090/REST/api/sns/select/image?priority=0&snsNo=`,
                    `http://localhost:9090/REST/api/sns/select/image?priority=1&snsNo=`
                ],
                srcList3: [
                    `http://localhost:9090/REST/api/sns/select/image?priority=0&snsNo=`,
                    `http://localhost:9090/REST/api/sns/select/image?priority=1&snsNo=`,
                    `http://localhost:9090/REST/api/sns/select/image?priority=2&snsNo=`
                ],
                // 좋아요
                goods: [],                
                // 수정목록
                updatesns:'',
                // 글수정
                updateTitle: '',
                updateContent: '',
                // 댓글?                            
                reply: '',
                // sns목록
                snses: [],
                //                
                liked: false,
                // 댓글 목록
                replys: [],
                // 댓글창
                toggles: [],
                // 글쓰기 다이얼로그
                insertEdit: false,
                // 수정하기 다이얼로그
                updateEdit: false,
                // 이미지 다이얼로그
                dialogVisible: false,
                // 글쓰기 이미지
                fileList: [],
                // 수정하기 이미지
                imageList: [],
                priorityList: [],

            }
        },
        async created() {
            await this.MemberSelect();
            await this.SnsAllSelect();
            await this.SnsGoodSelect();
        },
        methods: {
            //로그인한 user 정보 가져오기
            async MemberSelect() {
                const url = '/REST/api/member/memberGet';
                const headers = {
                    "Content-Type": "application/json",
                    "token": sessionStorage.getItem("TOKEN")
                };
                const response = await axios.get(url, {
                    headers
                });
                //console.log(response);
                if (response.data.result === 1) {
                    // 받은 데이터 items변수에 넣기
                    this.userinfo = response.data.member;
                    console.log("userinfo", response.data.member);
                }
            },
            
            //sns 글 가져오기(모든글)
            async SnsAllSelect() {
                const url = `/REST/api/sns/select/all`;
                const headers = {
                    "Content-Type": "application/json",
                    "token": sessionStorage.getItem("TOKEN")
                };
                const response = await axios.get(url, {
                    headers
                });

                if (response.data.status === 200) {
                    this.snses = response.data.sns;
                    console.log("snses", response.data.sns);
                    this.url = 'http://localhost:9090/REST/api/sns/select/image?snsNo=';
                    this.memberUrl = `http://localhost:9090/REST/api/member/image?memberid=`;
                }
            },

            // 글쓰기
            async handleSnsInsert(){
                const url = '/REST/api/sns/insert'
                const headers = {
                    "Content-Type": "multipart/form-data",
                    "token": sessionStorage.getItem("TOKEN")
                }

                const formData = new FormData();

                formData.append("title", this.title),
                    formData.append("content", this.content)

                if (this.fileList.length === 1) {
                    formData.append("file", this.fileList[0].raw);
                } else if (this.fileList.length === 2) {
                    formData.append("file", this.fileList[0].raw);
                    formData.append("file", this.fileList[1].raw);
                } else if (this.fileList.length === 3) {
                    formData.append("file", this.fileList[0].raw);
                    formData.append("file", this.fileList[1].raw);
                    formData.append("file", this.fileList[2].raw);
                }

                const response = await axios.post(url, formData, {
                    headers
                });
                console.log(response);
                if (response.data.result === 1) {
                    alert(response.data.data);
                    this.insertEdit = false;
                    await this.SnsAllSelect();
                } else {
                    alert('글쓰기 실패했습니다.')
                }
            },

            // 글수정
            async handleSnsUpdate(snsNo){
                const url = `/REST/api/sns/update`;
                const headers = {"Content-Type" : "multipart/form-data", "token" : sessionStorage.getItem("TOKEN")};

                const formData = new FormData();
                formData.append("snsNo", `${snsNo}`);
                formData.append("title", this.updateTitle);
                formData.append("content", this.updateContent);                

                // 우선순위
                if(this.priorityList.length === 1){
                    formData.append("priority", parseInt(this.priorityList[0]) + 1);
                }else if(this.priorityList.length === 2){
                    formData.append("priority", parseInt(this.priorityList[0]) + 1);
                    formData.append("priority", parseInt(this.priorityList[1]) + 1);
                }else if(this.priorityList.length === 3){
                    formData.append("priority", parseInt(this.priorityList[0]) + 1);
                    formData.append("priority", parseInt(this.priorityList[1]) + 1);
                    formData.append("priority", parseInt(this.priorityList[2]) + 1);
                }
                // 이미지 데이터
                if(this.imageList.length === 1){
                    formData.append("file", this.imageList[0].raw);
                }else if(this.imageList.length === 2){
                    formData.append("file", this.imageList[0].raw);
                    formData.append("file", this.imageList[1].raw);
                }else if(this.imageList.length === 3){
                    formData.append("file", this.imageList[0].raw);
                    formData.append("file", this.imageList[1].raw);
                    formData.append("file", this.imageList[2].raw);
                }

                const response = await axios.put(url, formData, {headers});                
                console.log("boardupdate", response);                  
                if (response.data.result === 1) {
                    alert(response.data.data);
                    this.updateEdit = false;                    
                    await this.SnsAllSelect();
                }
            },

            handleUrl(url, snsNo) {
                var array = [];
                const temp = url + snsNo;
                array.push(temp);                
                return array;
            },

            //sns글삭제
            async handleDelete(val) {
                this.$confirm('이글을 삭제하시겠습니까?', 'Warning', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning'
                    }).then(async () => {
                        const url = `/REST/api/sns/delete?snsNo=${val}`;
                        const headers = {
                            "Content-Type": "application/json",
                            "token": sessionStorage.getItem("TOKEN")
                        }
                        const response = await axios.delete(url, {
                            headers
                        });
                        //console.log("삭제결과",response);

                        if (response.data.result === 1) {
                            this.$message({
                                type: 'success',
                                message: '삭제가 완료되었습니다'
                            })
                            await this.SnsAllSelect();
                        }

                    })
                    .catch(() => {
                        this.$message({
                            type: 'info',
                            message: '삭제가 취소되었습니다',
                        })
                    })
            },
            //sns글쓰기로 눌렀을 때     
            async handleInsertEdit() {
                this.insertEdit = true;
            },

            //sns글 수정 눌렀을 때
            async handleUpdateEdit(snsNo) {
                // 다이어로그 표시여부
                this.updateEdit = true;

                // 데이터 받아오기
                let url = `/REST/api/sns/select?snsNo=${snsNo}`;
                let headers = {"Content-Type" : "application/json"};
                let response = await axios.get(url, headers);
                console.log(response);                                
                if (response.data.status === 200) {
                    // 받은 데이터 items변수에 넣기                    
                    this.updatesns = response.data.sns;                      
                    this.updateTitle = this.updatesns.title;
                    this.updateContent = this.updatesns.content;                    
                }

                // 이미지 받아오기
                url = `/REST/api/sns/image/priority?snsNo=${snsNo}`;
                headers = {"Content-Type": "application/json"};
                response = await axios.get(url, headers);     
                this.fileList = [];                                         
                if(response.data.sns.length > 0) {                    
                    // 이미지 개수만큼 반복수행
                    for(let i = 0; i < response.data.sns.length; i++) {       
                        console.log(response.data.sns[i].priority);                 
                        var temp = {
                        priority: i,                            
                        url: `http://localhost:9090/REST/api/sns/select/image?snsNo=${snsNo}&priority=${response.data.sns[i].priority-1}`                        
                        }                                            
                        this.fileList.push(temp);
                    }
                }

            },

            // 좋아요 / 좋아요 취소
            async handleLike(snsNo) {
                const url = `/REST/api/sns/check/good?snsNo=${snsNo}`;
                const headers = {
                    "Content-Type": "application/json",
                    "token": sessionStorage.getItem("TOKEN")
                };
                const body = {}
                const response = await axios.post(url, body, {
                    headers
                });

                if (response.data.result === 1) {
                    this.liked = true;
                    alert(response.data.data);
                    await this.SnsGoodSelect();
                } else {
                    this.liked = false;
                    alert(response.data.data);
                    await this.SnsGoodSelect();
                }
            },

            //댓글토글창
            async handle_toggle(val) {
                this.toggles[val] = !this.toggles[val];                   
            },

            //댓글쓰기
            async handleReply(val) {
                const url = '/REST/api/sns/insert/reply';
                const headers = {
                    "Content-Type": "application/json",
                    "token": sessionStorage.getItem("TOKEN")
                }
                const body = {
                    content: this.reply,
                    snsNo: val
                }
                const response = await axios.post(url, body, {
                    headers
                });
                console.log(response);
                if (response.data.result === 1) {
                    alert(response.data.data);
                    await this.selectReply(val);
                    await this.SnsGoodSelect();
                    this.reply = '';
                } else {
                    alert('댓글쓰기를 실패했습니다');
                }

            },

            //댓글가져오기
            async selectReply(val) {
                const url = `/REST/api/sns/select/reply?snsNo=${val}`;
                const headers = {
                    "Content-Type": "application/json"
                };
                const response = await axios.get(url, headers);
                console.log(response);
                if (response.data.result === 1) {
                    this.replys = response.data.snsReply;
                    console.log("replys", response.data.snsReply);
                    this.memberUrl = `http://localhost:9090/REST/api/member/image?memberid=`;


                }

            },

            //댓글삭제
            async DeleteReply(val,snsNo) {
                this.$confirm('이글을 삭제하시겠습니까?', 'Warning', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning'
                    }).then(async () => {
                        const url = `/REST/api/sns/delete/reply?snsreplyNo=${val}`;
                        const headers = {
                            "Content-Type": "application/json",
                            "token": sessionStorage.getItem("TOKEN")
                        }
                        const response = await axios.delete(url, {
                            headers
                        });
                        //console.log("삭제결과",response);

                        if (response.data.result === 1) {
                            this.$message({
                                type: 'success',
                                message: '삭제가 완료되었습니다'
                            })
                            await this.selectReply(snsNo);
                        }

                    })
                    .catch(() => {
                        this.$message({
                            type: 'info',
                            message: '삭제가 취소되었습니다',
                        })
                    })
            },

            // 다이얼로그 닫기
            handleClose() {
                this.updateEdit = false;
                this.insertEdit = false;
            },

            // 글쓰기 시 이미지 추가, 삭제
            handleRemove(file, fileList) {
                console.log(file.url);
                console.log("삭제file", file);
                console.log("삭제fileList", fileList);

            },
            handlePictureCardPreview(response, file, fileList) {
                console.log("response", response);
                console.log("file", file);
                console.log("fileList", fileList);
                this.fileList = fileList;

                this.dialogImageUrl = file.url;
                this.dialogVisible = false;
            },

            // 수정 시 이미지 추가, 삭제
            handleImageRemove(file, fileList) {
                if(!this.priorityList.includes(file.priority)) {
                    this.priorityList.push(file.priority);
                }
                console.log("삭제", file, fileList);             
            },
            handleImageCardPreview(response, file, fileList) {
                console.log("response", response);
                console.log("file", file);
                console.log("fileList", fileList);
                this.imageList.push(file);

                this.dialogImageUrl = file.url;
                this.imageDialogVisible = false;
            },
            handleExceed() {
                this.$message.warning('이미지는 최대 3장까지 첨부가능합니다.');
            },

            // 날짜 변환
            handleDate(value){
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
//----------------------------------------------------------------------------------------------------------------------------------------

            //sns 좋아요 목록 가져오기
            async SnsGoodSelect() {
                const url = `/REST/api/sns/select/good`;
                const headers = { "Content-Type": "application/json",
                "token" : sessionStorage.getItem("TOKEN") };
                const response = await axios.get(url, {headers});                
                if (response.data.status === 200) {
                    this.goods = response.data.sns;
                    console.log("goods", response.data.sns[0]);                    
                }
            },

//---------------------------------------------------------------------------------------------------------------------------------------- 
            
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        white-space: pre-line
    }

    .banner {
        padding-top: 30px;
        width: 100%;
        height: 280px;
        background-color: #202E3F;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner_mypage {
        color: #fff;
        font-size: 40px;
    }

    .banner_bar {
        display: inline-block;
        width: 110px;
        height: 4px;
        background-color: #5B60AE;
    }

    .jc_center {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .box {
        width: 35px;
        height: 35px;
        border-radius: 70%;
        overflow: hidden;
    }

    .profile {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .thumbnail {
        width: 200px;
        height: 200px;
    }

    .img {
        margin: 2px;
    }

    .image_center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: #E8E8E8;
        clear: both;
        margin-left: auto;
        margin-right: auto;
    }

    .btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        vertical-align: top;
        font-family: 'Jua', sans-serif;
        font-size: 16px;
    }

    .btn1 {
        background-color: transparent;
        cursor: pointer;
        vertical-align: top;
        font-family: 'Jua', sans-serif;
        font-size: 15px;
        color: black;
    }

    .reply_btn {
        background-color: #5B6EBC;
        font-family: 'Jua', sans-serif;
        border: none;
        font-size: 15px;
    }
    .jc_between {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
}
</style>