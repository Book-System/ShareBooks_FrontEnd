<template>
    <div class="container">
        <!-- 마이페이지 배너 -->
        <div class="title_banner">
            <div>
                <span class="title_banner_text">마이페이지</span><br>
                <div class="title_banner_line"></div>
            </div>
        </div>
        
        <!-- 마이페이지 메뉴 및 내용 -->
        <div class="main_banner">
            <div class="main_banner_container">
                <!-- 마이페이지 메뉴 -->
                <div class="main_banner_left">
                    <el-menu default-active="2" class="el-menu-demo" mode="vertical" @select="handleMenu" background-color="#fff" text-color="#3D3D3D" active-text-color="#5B6EBC">
                        <el-menu-item style="pointer-events: none;">
                            <template #title>
                                <span style="font-size: 23px;">마이페이지</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="1">
                            <span style="font-size: 17px;">내 정보수정</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <span style="font-size: 17px;">내 활동내역</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <span style="font-size: 17px;">글 관리</span>
                        </el-menu-item>
                        <el-menu-item style="pointer-events: none;">
                            <template #title>
                                <span style="font-size: 23px;">고객센터</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span style="font-size: 17px;">자주묻는 질문</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <span style="font-size: 17px;">1:1 문의</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <!-- 마이페이지 내용 -->
                <div class="main_banner_right">
                    <!-- 내 정보수정 -->
                    <div class="main_banner_01">
                        <div v-if="index === 1" style="width: 70%; padding: 35px;">
                            <!-- 프로필 이미지 -->
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="width: 120px; height: 120px;">
                                    <label for="input-file" style="cursor: pointer;">
                                    <img :src="`http://localhost:9090/REST/api/member/image?memberid=${memberData.email}`" alt="image" class="profile_image_circle" style="width: 100%; height: 100%; border-radius: 100%; object-fit: cover; border: 1.5px solid #C1C0C1;"> </label>
                                    <input type="file" id="input-file" style="display: none;" @change="handleChangeImage($event)">
                                </div>
                            </div>
                            <!-- 업로드, 삭제 버튼 -->
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <div style="margin-top: 15px;">
                                    <el-button type="info" style="border: 1px solid #C1C0C1; background-color: #fff; color: #3D3D3D; font-family: 'Jua', sans-serif; font-size: 17px;"><label for="input-file" style="cursor: pointer;">업로드</label><input type="file" id="input-file" style="display: none;" @change="handleChangeImage($event)"></el-button>
                                    <el-button type="info" style="border: 1px solid #C1C0C1; background-color: #fff; color: #3D3D3D; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleDeleteImage">삭제</el-button>
                                </div>
                            </div>
                            <div>
                                <!-- 아이디 -->
                                <div style="text-align: left; font-size: 18px; margin-top: 40px;">
                                    <span>아이디</span><br>
                                    <el-input disabled placeholder="이메일 형식으로 입력하세요 (ex.user@gmail.com)" style="margin-top: 7px;" v-model="memberData.email"></el-input>
                                </div>
                                <!-- 비밀번호 -->
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>현재 비밀번호</span><br>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <div style="width: 75%; margin-right: 5px;">
                                            <el-input placeholder="현재 비밀번호를 입력하세요" type="password" v-model="memberData.curPassword" @blur="handleCurrentPassword" style="margin-top: 7px;"></el-input>
                                        </div>
                                        <div style="width: 25%; margin-top: 5px;">
                                            <el-button type="info" icon="el-icon-key" @click="handleCheckPassword(memberData.curPassword)" style="width: 100%; background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 17px;">변경하기</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>새 비밀번호</span><br>
                                    <el-input placeholder="새 비밀번호를 입력하세요." type="password" v-model="memberData.newPassword" @blur="handleNewPassword" style="margin-top: 7px;"></el-input>
                                </div>
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>새 비밀번호 재확인</span><br>
                                    <el-input placeholder="새 비밀번호를 재입력하세요." type="password" v-model="memberData.newPasswordChk" @blur="handleNewPasswordChk" style="margin-top: 7px;"></el-input>
                                </div>
                                <!-- 이름 -->
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>이름</span><br>
                                    <el-input disabled placeholder="이름을 입력하세요." v-model="memberData.name" style="margin-top: 7px;"></el-input>
                                </div>
                                <!-- 닉네임 -->
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>닉네임</span><br>
                                    <el-input disabled placeholder="닉네임을 입력하세요" v-model="memberData.nickname" style="margin-top: 7px;"></el-input>
                                </div>
                                <!-- 전화번호 -->
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>전화번호</span><br>
                                    <el-input placeholder="'-' 포함한 전화번호를 입력하세요" v-model="memberData.phone" style="margin-top: 7px;" @blur="handlePhone(memberData.phone)"></el-input>
                                    <div>
                                        <span v-if="memberData.phoneFocus" v-text="memberData.phoneText" style="color: #f00;"></span>
                                    </div>
                                </div>
                                <!-- 주소 -->
                                <div style="text-align: left; font-size: 18px; margin-top: 18px;">
                                    <span>주소</span><br>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <div style="width: 75%; margin-right: 5px;">
                                            <el-input placeholder="우편번호" v-model="memberData.zipcode" style="margin-top: 7px;"></el-input>
                                        </div>
                                        <div style="width: 25%; margin-top: 5px;">
                                            <el-button type="info" icon="el-icon-search" @click="execDaumPostcode" style="width: 100%; background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 17px;">우편번호</el-button>
                                        </div>
                                    </div>
                                    <el-input placeholder="도로명 주소" v-model="memberData.address" @blur="handleAddress" style="margin-top: 7px;"></el-input>
                                    <div>
                                        <span v-if="memberData.addressFocus" v-text="memberData.addressText" style="color: #f00;"></span>
                                    </div>
                                </div>
                                <!-- 수정, 탈퇴버튼 -->
                                <div style="display: flex; justify-content: center; align-items: center; margin-top: 18px;">
                                    <div style="margin-top: 15px;">
                                        <el-button type="info" style="background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 18px;" @click="handleUpdateMember">수정하기</el-button>
                                        <el-button type="info" style="background-color: #5B6EBC; font-family: 'Jua', sans-serif; font-size: 18px;" @click="handleDeleteMember">탈퇴하기</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 내 활동내역 -->
                    <div class="main_banner_02">
                        <div v-if="index === 2" style="width: 100%; padding: 35px;">
                            <div style="text-align: left; font-size: 30px;">
                                <div style="display: flex; justify-content: left; align-items: center;">
                                    <img src="../assets/shareBooksIcon/share_books_icon_15.png" alt="image" style="width: 30px; height: 30px; margin-right: 10px;">
                                    <span>내 활동내역</span>
                                </div>
                            </div>
                            <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
                                <div style="width: 33%;">
                                    <!-- 프로필 이미지 -->
                                    <div style="display: flex; justify-content: center; align-items: center;">
                                        <div style="width: 130px; height: 130px;">
                                            <img :src="urlImage02" alt="image" class="profile_image_circle" style="width: 100%; height: 100%; border-radius: 100%; object-fit: cover; border: 1.5px solid #C1C0C1;">
                                        </div>
                                    </div>
                                    <div style="margin-top: 10px; font-size: 20px;">
                                        <span>{{informationData.name}}</span>
                                    </div>
                                    <div style="margin-top: 5px; font-size: 16px;">
                                        <span>{{informationData.email}}</span>
                                    </div>
                                </div>
                                <div style="width: 33%;">
                                    <div style="display: flex; justify-content: center; align-items: center;">
                                        <div>
                                            <div style="font-size: 20px;">
                                                <span>나의 활동내역 보기</span>
                                            </div>
                                            <div>
                                                <p style="font-size: 18px;">내가 빌려준 책</p>
                                                <span style="font-size: 30px;  color: #5B6EBC;">{{informationData.rendBookCount}}</span>
                                            </div>
                                            <div>
                                                <p style="font-size: 18px;">내가 빌린 책</p>
                                                <span style="font-size: 30px; color: #5B6EBC;">{{informationData.rentBookCount}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="width: 33%;">
                                    <div style="display: flex; justify-content: center; align-items: center;">
                                        <div>
                                            <div style="font-size: 20px;">
                                                <span>내가 쓴글 보기</span>
                                            </div>
                                            <div>
                                                <p style="font-size: 18px;">내가 쓴 게시글</p>
                                                <span style="font-size: 30px;  color: #5B6EBC;">{{informationData.boardCount}}</span>
                                            </div>
                                            <div>
                                                <p style="font-size: 18px;">내가 쓴 리뷰</p>
                                                <span style="font-size: 30px; color: #5B6EBC;">{{informationData.reviewCount}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
                                <div class="wd33">
                                    <el-button type="info" style="border: 1px solid #C1C0C1; background-color: #fff; color: #3D3D3D; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleMenu('1')">정보수정</el-button>
                                </div>
                                <div class="wd33">
                                    <el-button type="info" style="border: 1px solid #C1C0C1; background-color: #fff; color: #3D3D3D; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleMenu('3')">더보기</el-button>
                                </div>
                                <div class="wd33">
                                    <el-button type="info" style="border: 1px solid #C1C0C1; background-color: #fff; color: #3D3D3D; font-family: 'Jua', sans-serif; font-size: 17px;" @click="handleMenu('3')">더보기</el-button>
                                </div>
                            </div>
                            <div style="margin-top: 20px;">
                                <Chart></Chart>
                            </div>
                        </div>
                    </div>

                    <!-- 글 관리 -->
                    <div v-if="index === 3" style="width: 100%;">
                        <el-tabs v-model="tabPosition" @tab-click="handleTab" type="border-card" style="border: none;">
                            <!-- 책 관리 -->
                            <el-tab-pane name="first" style="height: 100%;">
                                <template #label>
                                    <span style="color: #5B6EBC; font-size: 17px;">책 관리</span>
                                </template>
                                <div v-if="myBookList.length === 0">
                                    <div style="display: flex; justify-content: center; align-items: center;">
                                        <div style="font-size: 19px; display: flex; justify-content: center; align-items: center;">
                                            <span>😰작성된 글이 없습니다.</span>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="myBookList.length !== 0">
                                    <div style="display: table; justify-content: space-between; align-items: center; padding: 5px;">
                                        <ul style="width: 100%;  margin: 0px; padding: 0px;">
                                            <li style="width: 50%; list-style: none; display: inline-flex; margin-top: 10px;" v-for="book in myBookList" :key="book">
                                                <el-card style="width:100%; margin-right: 5px; margin-left: 5px;">
                                                    <img style="width:100%; height: 260px; object-fit: cover;" alt="image" :src="`http://localhost:9090/REST/api/book/image/main?bookno=${book.book_No}&priority=1`">
                                                    <div style="padding: 20px 30px; text-align: justify;">
                                                        <div>
                                                            <div>
                                                                <img src="../assets/emoticon/book.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">제목: {{book.title}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/location.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">위치: {{book.address}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/calendar.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">태그: {{book.tag}}</span>
                                                            </div>
                                                        </div>
                                                        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                            <el-button class="button_round" style="width: 120px;" type="info" round @click="handleUpdateBook(book.book_No)">수정하기</el-button>
                                                            <el-button class="button_round" style="width: 120px;" type="info" round @click="handleDeleteBook(book.book_No)">삭제하기</el-button>
                                                        </div>
                                                    </div>
                                                </el-card>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-tab-pane>

                            <!-- 빌려준 책 -->
                            <el-tab-pane name="second">
                                <template #label>
                                    <span style="color: #5B6EBC; font-size: 17px;">빌려준 책</span>
                                </template>
                                <div v-if="rendBookList.length === 0">
                                    <div style="font-size: 19px; display: flex; justify-content: center; align-items: center;">
                                        <span>😰작성된 글이 없습니다.</span>
                                    </div>
                                </div>
                                <div v-if="rendBookList.length !== 0">
                                    <div style="display: table; justify-content: space-between; align-items: center; padding: 5px;">
                                        <ul style="width: 100%; margin: 0px; padding: 0px;">
                                            <li style="width: 50%; list-style: none; display: inline-flex;" v-for="item in rendBookList" :key="item">
                                                <el-card style="width:100%; margin: 5px; display: inline-block;">
                                                    <img style="width:100%; height: 260px; object-fit: cover;" alt="image" :src="`http://localhost:9090/REST/api/book/image/main?bookno=${item.book_No}&priority=1`">
                                                    <div style="padding: 20px 30px; text-align: justify;">
                                                        <div>
                                                            <div>
                                                                <img src="../assets/emoticon/book.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">제목: {{item.title}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/location.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">위치: {{item.address}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/calendar.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;" v-text="handleRegdate(item.reservation_Start_Date)"></span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/calendar.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">요청 사항: {{item.request_Message}}</span>
                                                            </div>
                                                        </div>
                                                        <div >
                                                            <div v-if="item.reject_Message === null && item.request === false" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px;" type="info" round @click="handleAcceptReservation(item.reservation_No)">수락하기</el-button>
                                                                <el-button class="button_round" style="width: 120px;" type="info" round @click="handleRefuseReservation(item.reservation_No)">거절하기</el-button>
                                                            </div>
                                                            <div v-if="item.reject_Message !== null && item.request === false" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px; background-color: #D93D51;" type="info" disabled round>거절완료</el-button>
                                                            </div>
                                                            <div v-if="item.reject_Message === null && item.request === true" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px; background-color: #5B6EBC;" type="info" disabled round>수락완료</el-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </el-card>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 거절 다이얼로그 -->
                                <el-dialog v-model="reasonVisible" width="530px" :before-close="handleClose">
                                    <div style="height: 1px; background-color: #E8E8E8; margin-bottom: 15px;"></div>
                                    <div style="text-align: justify;">
                                        <div style="font-size: 22px; margin-bottom: 15px;">
                                            <span>취소사유를 선택하세요!</span>
                                        </div>
                                        <el-radio-group v-model="radio" size="medium">
                                            <div>
                                                <el-radio label="개인 사정으로 인한 취소"><span style="font-size: 16px;">개인 사정으로 인한 취소</span></el-radio>
                                            </div>
                                            <div style="margin-top: 10px;">
                                                <el-radio label="이미 마감된 시간"><span style="font-size: 16px;">이미 마감된 시간</span></el-radio><br>
                                            </div>
                                            <div style="margin-top: 10px;">
                                                <el-radio label="예약 불가한 날짜"><span style="font-size: 16px;">예약 불가한 날짜</span></el-radio><br>
                                            </div>
                                            <div style="margin-top: 10px;">
                                                <el-radio label="예약 불가한 시간"><span style="font-size: 16px;">예약 불가한 시간</span></el-radio><br>
                                            </div>
                                            <div style="margin-top: 10px;">
                                                <el-radio label="장시간 대여"><span style="font-size: 16px;">장시간 대여</span></el-radio><br>
                                            </div>
                                            <div style="margin-top: 10px;">
                                                <el-radio label="잘못된 예약자 정보"><span style="font-size: 16px;">잘못된 예약자 정보</span></el-radio><br>
                                            </div>
                                            <div style="margin-top: 10px;">
                                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                                    <div style="width: 25%;">
                                                        <el-radio label="기타"><span style="font-size: 16px;">기타</span></el-radio>
                                                    </div>
                                                    <div style="witdh: 75%;" v-if="reasonSubmit">
                                                        <el-input placeholder="기타 사유를 입력하세요"></el-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-radio-group>
                                    </div>
                                    <template #footer>
                                        <span class="dialog-footer">
                                            <el-button class="button_round" type="info" round @click="handleRejectSubmit" style="width: 20%;">제출</el-button>
                                            <el-button class="button_round" type="info" round @click="reasonVisible=false" style="width: 20%;">취소</el-button>
                                        </span>
                                    </template>
                                    <div style="height: 1px; background-color: #E8E8E8; margin-top: 15px;"></div>
                                </el-dialog>
                            </el-tab-pane>

                            <!-- 빌린 책 -->
                            <el-tab-pane name="third">
                                <template #label>
                                    <span style="color: #5B6EBC; font-size: 17px;">빌린 책</span>
                                </template>
                                <div v-if="rentBookList.length === 0">
                                    <div style="font-size: 19px; display: flex; justify-content: center; align-items: center;">
                                        <span>😰작성된 글이 없습니다.</span>
                                    </div>
                                </div>
                                <div v-if="rentBookList.length !== 0">
                                    <div style="display: table; justify-content: space-between; align-items: center; padding: 5px;">
                                        <ul style="width: 100%; margin: 0px; padding: 0px;">
                                            <li style="width: 50%; list-style: none; display: inline-flex;" v-for="item in rentBookList" :key="item">
                                                <!-- 빌린 책 사이즈 조정 -->
                                                <el-card style="width:100%; height: 500px; margin: 5px; display: inline-block;">
                                                    <img style="width:100%; height: 260px; object-fit: cover;" alt="image" :src="`http://localhost:9090/REST/api/book/image/main?bookno=${item.book_No}&priority=1`">
                                                    <div style="padding: 20px 30px; text-align: justify;">
                                                        <div>
                                                            <div>
                                                                <img src="../assets/emoticon/book.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">제목: {{item.title}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/location.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">위치: {{item.address}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/calendar.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;" v-text="handleRegdate(item.reservation_Start_Date)"></span>
                                                            </div>
                                                            <div v-if="item.reject_Message !== null && item.request === false">
                                                                <span style="font-size: 17px; vertical-align: middle; color: #F03A17;">📌{{item.reject_Message}}</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div v-if="item.reject_Message === null && item.request === false" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px; text-align: center; background-color: #656C8E;" type="info" disabled round>수락대기중</el-button>
                                                                <el-button class="button_round" style="width: 120px; text-align: center; background-color: #5B6EBC;" type="info" round @click="handleChat">문의하기</el-button>
                                                            </div>
                                                            <div v-if="item.reject_Message === null && item.request === true && item.pay_Success === false" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px; text-align: center; background-color: #5B6EBC;" type="info" round @click="handlePay(item)">결제하기</el-button>
                                                            </div>
                                                            <div v-if="item.reject_Message !== null && item.request === false" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px; text-align: center; background-color: #D93D51;" type="info" disabled round>예약거절</el-button>
                                                            </div>
                                                            <div v-if="item.pay_Success === true && item.request === true" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                                <el-button class="button_round" style="width: 120px; text-align: center; background-color: #656C8E;" type="info" disabled round>거래완료</el-button>
                                                                <el-button class="button_round" style="width: 120px; text-align: center; background-color: #5B6EBC;" type="info" round @click="handleDialogReview(item.rmember_Id, item.book_No)">리뷰작성</el-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </el-card>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 리뷰 등록 -->
                                <el-dialog title= "리뷰 등록" v-model="reviewDialog" width="530px" :before-close="handleClose">
                                    <div style="font-size: 18px; text-align: left">
                                        <span>리뷰 내용</span>
                                        <div style="margin-top: 7px;">
                                            <el-input type="textarea" :rows="13" placeholder="다른 사용자에게 도움이 될 후기를 남겨주세요" v-model="reviewData.text"></el-input>
                                        </div>
                                    </div>
                                    <div style="font-size: 18px; text-align: left; margin-top: 20px;">
                                        <span>작성자</span>
                                        <div style="margin-top: 7px;">
                                            <el-input placeholder="작성자를 입력해주세요." v-model="reviewData.memberId" :disabled="true"></el-input>
                                        </div>
                                    </div>
                                    <div style="font-size: 18px; margin-top:20px;">
                                        <span>별점을 선택해주세요</span>
                                        <div style="margin-top: 7px;">
                                            <el-rate v-model="reviewData.rating" allow-half/>
                                        </div>
                                    </div>
                                    <template #footer>
                                        <span class="dialog-footer">
                                            <el-button type="info" round @click="handleRegisterReview" style="width: 90px; font-size: 17px; background-color: #5B6EBC; font-family: 'Jua', sans-serif;">등록</el-button>
                                            <el-button round @click="reviewDialog=false" style="width: 90px; font-size: 17px; font-family: 'Jua', sans-serif;">닫기</el-button>
                                        </span>
                                    </template>
                                </el-dialog>
                            </el-tab-pane>

                            <!-- 리뷰 관리 -->
                            <el-tab-pane name="fourth">
                                <template #label>
                                    <span style="color: #5B6EBC; font-size: 17px;">리뷰 관리</span>
                                </template>
                                <div v-if="reviewData.reviewList.length === 0">
                                    <div style="font-size: 19px; display: flex; justify-content: center; align-items: center;">
                                        <span>😰작성된 글이 없습니다.</span>
                                    </div>
                                </div>
                                <div v-if="reviewData.reviewList.length !== 0">
                                    <div style="display: table; justify-content: space-between; align-items: center; padding: 5px;">
                                        <ul style="width: 100%;  margin: 0px; padding: 0px;">
                                            <li style="width: 50%; list-style: none; display: inline-flex; margin-top: 10px;" v-for="review in reviewData.reviewList" :key="review">
                                                <el-card style="width:100%; margin-right: 5px; margin-left: 5px;">
                                                    <div style="padding: 20px 30px; text-align: justify;">
                                                        <div>
                                                            <div>
                                                                <img src="../assets/emoticon/book.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">제목: {{review.title}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/location.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;">평점: {{review.rating}}</span>
                                                            </div>
                                                            <div>
                                                                <img src="../assets/emoticon/calendar.png" alt="image" style="width: 6%; height: auto; vertical-align: middle;">
                                                                <span style="font-size: 17px; margin-left: 5px; vertical-align: middle;" v-text="handleRegdateReview(review.regdate)"></span>
                                                            </div>
                                                        </div>
                                                        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                                            <el-button class="button_round" style="width: 120px;" type="info" round @click="handleDialogUpdateReview(review.content, review.rating, review.review_No, review.member_Id)">수정하기</el-button>
                                                            <el-button class="button_round" style="width: 120px;" type="info" round @click="handleDeleteReview(review.review_No)">삭제하기</el-button>
                                                        </div>
                                                    </div>
                                                </el-card>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 리뷰 수정 -->
                                <el-dialog title= "리뷰 수정" v-model="reviewUpdateDialog" width="530px" :before-close="handleClose">
                                    <div style="font-size: 18px; text-align: left">
                                        <span>리뷰 내용</span>
                                        <div style="margin-top: 7px;">
                                            <el-input type="textarea" :rows="13" placeholder="다른 사용자에게 도움이 될 후기를 남겨주세요" v-model="reviewUpdateData.text"></el-input>
                                        </div>
                                    </div>
                                    <div style="font-size: 18px; text-align: left; margin-top: 20px;">
                                        <span>작성자</span>
                                        <div style="margin-top: 7px;">
                                            <el-input placeholder="작성자를 입력해주세요." v-model="reviewUpdateData.memberId" :disabled="true"></el-input>
                                        </div>
                                    </div>
                                    <div style="font-size: 18px; margin-top:20px;">
                                        <span>별점을 선택해주세요</span>
                                        <div style="margin-top: 7px;">
                                            <el-rate v-model="reviewUpdateData.rating" allow-half/>
                                        </div>
                                    </div>
                                    <template #footer>
                                        <span class="dialog-footer">
                                            <el-button type="info" round @click="handleUpdateReview()" style="width: 90px; font-size: 17px; background-color: #5B6EBC; font-family: 'Jua', sans-serif;">수정</el-button>
                                            <el-button round @click="reviewUpdateDialog=false" style="width: 90px; font-size: 17px; font-family: 'Jua', sans-serif;">닫기</el-button>
                                        </span>
                                    </template>
                                </el-dialog>
                            </el-tab-pane>
                        </el-tabs>
                    </div>       

                    <!-- 자주 묻는 질문 -->
                    <div v-if="index === 4">
                        <div style="display: flex; justify-content: left; align-items: center; padding: 20px 20px 10px 20px;">
                            <img src="../assets/shareBooksIcon/share_books_icon_16.png" alt="image" style="width: 25px; height: 25px; margin-right: 10px;">
                            <span style="font-size: 25px;">자주 묻는 질문</span>
                        </div>
                        <hr/>
                        <div>
                            <div class="jc_between table_header">
                                <div style="width: 10%; font-size: 17px;">
                                    <span>번호</span>
                                </div>
                                <div style="width: 90%; font-size: 17px;">
                                    <span>내용</span>
                                </div>
                            </div>
                        </div>
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="1">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`1번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span>동네인증을 왜 해야 하나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>쉐어북스는 우리 동네 이웃과 교류할 수 있는 서비스예요. <br>그래서 동네 이웃임을 확인하기 위해 동네인증을 필수로 해주셔야 해요. <br>
                                                주기적으로 동네인증 해주시길 바랄게요. GPS로 쉐어북스를 이용하실때 위치를 찾을 수 있어요. <br>이점 이용에 참고 부탁드릴게요. :)
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`2번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span> 탈퇴하고 싶어요 어떻게 하나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>[마이페이지 > 내 정보수정> 탈퇴하기] 에서 탈퇴할 수 있어요. <br>탈퇴하면 모든 게시글과 채팅 내용이 삭제되고 복구할 수 없으니 신중하게 탈퇴해 주세요. <br>
                                            탈퇴 후 7일 간 재가입 할 수 없어요.</span>
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="3">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`3번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span> 예약은 어떻게 하나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>예약방법은 쉽습니다.<br> 예약을 원하는 책을 클릭하시면 해당 책 페이지로 넘어갑니다. <br>그리고 화면 오른쪽에 있는 달력이 보일 겁니다. <br>달력을 보시고 예약 가능한 날짜를 선택하신후 채팅을 통해 거래를 확정해주세요</span>
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="4">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`4번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span>다른 지역에서 거래할 수 없나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>
                                            동네인증이 되어야만 다른 지역에서 거래할 수 있어요. 동네인증은 실제 그 동네에 있을 때 받을 수 있어요.<br>
                                            쉐어북스는 동네 근처 이웃과 교류할 수 있는 서비스예요. <br> 그래서 동네 이웃임을 확인하기 위해 동네인증이 필수로 진행되어야 해요. <br> <br>
                                            먼저, 다른 지역에서 거래하려면 해당 지역으로 내 동네를 바꿔야 해요. 동네를 바꾸는 방법은 아래와 같아요. <br><br>

                                            첫 번째 방법<br>
                                            홈 화면에서 동네이름을 검색해주세요. (ex. 내 동네가 '역삼동'이라면 '역삼동'을 검색하면 돼요.) <br>
                                            바꾸고자 하는 동네명을 클릭하면 끝! <br> <br>
                                            두 번째 방법 <br>
                                            [마이페이지]를 클릭해 주세요<br>
                                            [내 정보수정] -> 바꾸고자 하는 동네명을 검색하면 끝! <br>
                                            동네를 바꿨다면 이제 동네인증을 해주세요. 동네인증을 할 수 없다면 아쉽지만 해당 동네에서 거래할 수 없어요.
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="5">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`5번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span> 책을 등록할 때 팁은 어떤게 있을까요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>
                                            1. 사진은 정말 중요해요<br>
                                            첫인상이 중요한 것처럼 첫 사진도 중요하답니다. 책의 특징을 살려서 찍어보세요.
                                            책이 잘 보이도록 다양한 각도에서 여러장 찍어주시면 좋아요. 설명이 필요한 부분은 확대해서 찍어주세요.<br><br>

                                            2. 시세에 맞는 가격을 정해보세요 <br>
                                            책 대여금액을 정하기 어려우시죠? 쉐어북스 검색을 통해 비슷한 책의 시세를 먼저 알아보세요.<br> 현재 이미 예약된 책들의 가격을 보면 시세를 알 수 있어요.<br> 많은 사람에게 빌려주고 싶다면, 시세보다 조금 저렴하게 책정하세요. <br><br>

                                            3. 설명을 자세하게 적어주세요<br>
                                            내가 등록한 책을 한 문장으로 설명하긴 참 어렵잖아요. <br>
                                            책의 저자, 출판된 해, 책이 가지고 있는 사연이 있다면 그것도 좋아요 <br>
                                            책을 언제 구입해서 얼마나 가지고 계셨나요? 혹시 책이 좀 읽기 불편한 부분이 있지는 않나요? <br>
                                            결함이 있더라도 책상태에 미리 알려준다면 그 상태를 감안하고 대여할 거예요.
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="6">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`6번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span>거래나 환불은 어떻게 해야할까요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>
                                            쉐어북스의 모든 거래는 기본적으로 거래 당사자들끼리 자유롭게 진행할 수 있어요. <br> 가급적 쉐어북스는 거래에 개입하지 않아요. <br>
                                            그래서 거래 중에 이견이 있어도 거래 당사자들끼리 직접 대화하여 해결하는 것을 권장해요.<br>
                                            하지만 대화로 해결하기 어렵다면 쉐어북스는 아래와 같은 정책을 따르고 있어요. <br><br>
                                            거래 중에 분쟁이 발생하더라도 기본매너를 지키는 건 잊지 말아 주세요. <br>휴대폰 너머 나와 똑같은 사람이 있다는 것을 기억해 주세요. :) <br> <br>

                                            🔸 판매자에게는 이런 권리가 있어요. <br><br>
                                            판매자는 쉐어북스의 소중한 주민이자 여러분의 이웃이에요. 우리는 모두 판매자이면서 구매자예요. <br>
                                            구매자의 무리한 요구는 거절할 권리가 있어요. 매너없는 이야기에 답하지 않을 권리도 있어요. <br>
                                            무리한 요구나 비매너 행위를 지속한다면 '비매너 평가하기'나 '사용자 신고하기', <br> '문의 및 제안하기'를 통해서 알려주세요. <br>
                                            환불 관련 문제가 생겼을 때, 판매자의 실수나 잘못이 없는 다음과 같은 상황이라면 거부할 권리가 있습니다. <br><br>
                                            1. 단순한 변심으로 인한 환불 요청 <br>
                                            2. 판매글에 명시한 내용을 몰랐다는 이유로 환불 요청 <br>
                                            3. 거래 후 오랜 기간이 지난 후에 환불 요청(예: 구매 후 한 달이 지난 시점에서 환불 요청) <br>
                                            4. 위 제시한 상황 외에 명백한 잘못이 구매자에게 있는 경우 <br> <br>

                                            🔸 판매자에게는 이런 의무도 있어요.<br><br>

                                            우리는 모두 쉐어북스의 주민이에요. 쉐어북스의 거래매너를 지켜주세요. <br>
                                            판매를 원활히 하기 위해서는 자세한 설명과 사진을 첨부해주세요. 신경 쓰이는 부분이 있다면 꼭 사진을 찍거나 설명에 적어주세요. <br>
                                            나에게는 익숙하고 당연한 부분도 구매자에게는 낯선 책이라는 점을 기억해주세요. <br>
                                            거래 약속 후 취소하는 것을 지양해주세요. 내 시간이 소중한 만큼, 상대방의 시간도 소중히 여겨주세요. <br>
                                            판매자의 잘못이 명백한 다음과 같은 상황에서는 환불을 해주셔야 해요. <br>
                                            판매글(사진, 설명, 채팅 내용 등)과 실제 책이 객관적으로 상이한 경우<br>
                                            주요 하자가 있음에도 불구하고 판매글에 명확히 밝히지 않고 대여한 경우.<br> <br>


                                            🔸 구매자에게는 이런 권리가 있어요.<br><br>
                                            구매자 또한, 쉐어북스의 소중한 주민이자 여러분의 이웃이에요. <br>
                                            판매자의 무리한 요구는 거절할 권리가 있어요. 매너없는 이야기에 답하지 않을 권리도 있어요. <br>
                                            무리한 요구나 비매너 행위를 지속한다면 '비매너 평가하기'나 '사용자 신고하기', <br> '문의 및 제안하기'를 통해서 알려주세요. <br>
                                            거래 관련 문제가 생겼을 때, 판매자의 의무에 명시된 상황에 해당하면 환불을 요구할 권리가 있어요.<br><br>

                                            🔸 구매자에게는 이런 의무도 있어요.<br><br>
                                            우리는 모두 쉐어북스의 주민이에요. 쉐어북스의 거래매너를 지켜주세요. <br>채팅을 시작할 때는 가벼운 인사로 건네보는 건 어떨까요? <br>
                                            대여를 원활히 하기 위해서 대여 의사가 명확한 경우에만 약속을 잡아주세요. <br> 거래 약속 후 취소하는 것은 판매자와 구매자 모두에게 손해예요. <br> 내 시간이 소중한 만큼, 상대방의 시간도 소중히 여겨주세요. <br>
                                            거래 관련 문제가 생겼다고 해서 거래와 관련 없는 욕설/비방을 삼가세요. <br> 거래와 관련 없는 욕설/비방 등의 비매너 행위를 할 경우, 제재당할 수 있어요. <br>
                                            책을 받고 돈을 지불하지 않았다면, 물건의 값은 1일 이내에 지급해주세요. <br>입금을 미룬다면 '거래 불이행' 사유로 이용 제한될 수 있습니다.<br><br>

                                            🔸 예약금/계약금은 보호받기 어려워요.<br><br>
                                            물건을 양도하기 전이라면 구매자와 판매자는 거래를 취소할 수 있어요 <br>
                                            다만, 예약금/계약금 관련된 규정은 없으나 상호 합의에 따른 예약금/계약금 선입금 진행시 <br>구매자의 사정으로 거래 약속이 취소된다면 예약금은 보호받지 못할 수도 있어요. <br>
                                            민법상 구두계약이라 하더라도 개인거래상의 계약이 성립될 수 있으며, <br> 구매자의 사정으로 계약이 파기되면 계약금을 보호받지 못할 수 있기 때문에, 가급적 계약금/예약금을 선입금하지 않도록 주의해주세요.<br><br>

                                            🔸 쉐어북스는 이런 정책으로 운영됩니다.<br><br>
                                            쉐어북스는 중개자이며 운영정책에 따라 운영되고 거래에 대한 모든 책임은 거래 당사자에게 있어요. <br>
                                            따라서 거래 관련 문제가 발생했을 경우 구매자와 판매자가 직접 합의하여 해결하는 것을 기본으로 합니다. <br>
                                            하지만 합의가 어려운 경우 위에 명시한 권리 및 의무에 따라 구매자나 판매자를 이용제재 할 수 있고, <br> 분쟁이 해결된 경우에만 이용제재를 해제합니다. <br>
                                            구매자와 판매자 모두 분쟁을 해결하는 과정에서 상대방에게 비하/조롱/모욕/반말 등의 언행을 했다면 비매너 경고 또는 이용제재 받을 수 있습니다.<br><br>
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>    
                            <el-collapse-item name="7">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`7번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span>불건전한 게시글이나 사용자를 발견했어요. 어떻게 해야하나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>
                                            불건전한 게시글이나 사용자를 발견하면 반드시 저희에게 신고해주세요.<br> <br>
                                            쉐어북스는 청소년을 포함하여 다양한 이웃이 자유롭게 이용할 수 있는 공간이에요. <br>
                                            이웃에게 불쾌감, 성적 수치심, 왜곡된 성의식, 공포감 등을 일으킬 수 있는 모든 행위는 제한됩니다. <br>
                                            사용자를 보호하기 위해 불건전한 사용자는 영구적으로 퇴출하여 다시 가입할 수 없도록 조치하고 있어요. <br>
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>    
                            <el-collapse-item name="8">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`8번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span> 주요사기 패턴은 어떤것이 있나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>
                                            최근 빈번하게 발생하는 사기유형으로 아래의 유형이 있으니 주의해주세요 <br><br>

                                            🔸 아래의 계좌유형(가상계좌)의 경우 사기 가능성이 높아 입금유도 시 주의가 필요합니다! <br>

                                            카카오뱅크 3355 로 시작하는 계좌 <br>
                                            신한은행 562 또는 270으로 시작하는 계좌 <br>
                                            케이뱅크 7001로 시작하는 계좌 <br> <br>


                                            🔸 외부채널 (문자, 카카오톡 등) 에서 대화유도 시 응대하지 말아주세요! <br>

                                            감지 시스템을 피하기 위해 먼저 번호를 요구하거나 번호를 주고 대화를 이어가길 원하는 판매자의 경우, <br>
                                            거래에 주의하여 주시고 전달받은 번호/계좌번호의 피해사실이 없는지 확인 해 주세요.
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>    
                            <el-collapse-item name="9">
                                <template #title>
                                    <div class="jc_between" style="width: 100%; font-size: 17px;">
                                        <div style="width: 10%; text-align: center;">
                                            <span v-text="`9번`"></span>
                                        </div>
                                        <div style="width: 90%; text-align: left;">
                                            <span>수사기관 신고는 어떻게 해야하나요?</span>
                                        </div>
                                    </div>
                                </template>
                                <div class="line"></div><br>
                                <div class="jc_between" style="width: 100%; font-size: 17px;">
                                    <div style="width: 10%; text-align: center;">
                                        <span>답변</span>
                                    </div>
                                    <div style="width: 90%; text-align: left;">
                                        <span>
                                            신고하기를 통해 쉐어북스 팀에게 알려주신 이후에도 상대방이 탈퇴 했거나, 응답하지 않는 경우<br> 아래 절차에 따라 수사기관으로 신고를 접수해주세요.<br> <br>

                                            1. 사기 신고가 가능 한 경우<br>
                                            판매자가 책을 이미 대여해주었는데, 지속적으로 구매자가 입금을 안한 경우.<br>
                                            구매자가 입금을 한 후 판매자가 지속적으로 책을 대여해주지 않는 경우.<br>
                                            책 상태 속여서 판매하는 경우.<br><br>

                                            2. 경찰서에 신고하기<br>
                                            *사기죄 신고는 국내법상 피해자가 직접 신고해야 하기 때문에 관할 경찰서의 민원실에 직접 가셔서 신고해주세요!<br>(파출소가 아니라 경찰서로 가셔야 합니다)<br>

                                            준비물 : 신분증, 사기 피해 입증 자료(채팅 내용, 입금 내역 등)<br><br>
                                            관할 경찰서 방문하여 민원실에 비치된 진정서 작성 후 안내에 따라 제출.<br>
                                            - > 해당 부서의 안내에 따라 피해 내용에 대한 진술서 작성.<br>
                                            - >사건 이송 및 이후 진행 상황 확인(우편 및 담당 경찰)<br>
                                            *만약 사기꾼이 여러 사람에게 사기를 친 다중 사기건의 경우라면 온라인 신고도 가능해요.<br><br>


                                            3. 쉐어북스가 도와드릴게요!<br>
                                            경찰서에 신고 시 거래 상대방의 개인 정보를 모르는 경우, 쉐어북스로 관련 공문(압수수색영장)을 보내달라고 요청해주세요!<br>(국내법상 사기 피의자라도 휴대폰번호나 계좌번호 등의 개인정보를 경찰서에 제공하기 위해서는 법원에서 발급한 압수수색영장이 필요합니다.)<br>
                                            요청 공문(압수수색영장)에는 거래 상대방을 식별하기 위한 정보(쉐어북스 프로필 옆의 #ID, 닉네임, 지역, 채팅방 생성 시각 등)을 적어주세요!<br>
                                            경찰서에서 공문이 도착하면 당근마켓에서 적극적으로 수사에 협조하겠습니다!!<br>
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>    
                        </el-collapse>
                    </div>

<!-- ========================================================================================================================= -->
                    <div v-if="index === 5">
                        <div style="display: flex; justify-content: left; align-items: center; padding: 20px 20px 10px 20px;">
                            <img src="../assets/shareBooksIcon/share_books_icon_17.png" alt="image" style="width: 25px; height: 25px; margin-right: 10px;">
                            <span style="font-size: 25px;">1:1문의</span>
                        </div>
                        <hr/>
                        <div>
                            <div class="jc_between table_header">
                                <div style="width: 20%; font-size: 17px;">
                                    <span>문의 유형</span>
                                </div>
                                <div style="width: 30%; font-size: 17px;">
                                    <span>내용</span>
                                </div>
                                <div style="width: 10%; font-size: 17px;">
                                    <span>주문번호</span>
                                </div>
                                <div style="width: 20%; font-size: 17px;">
                                    <span>작성일</span>
                                </div>
                                <div style="width: 20%; font-size: 17px;">
                                    <span>처리 상태</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <el-collapse v-model="activeName" @change="handleChange" v-for="(board, index) in boards" :key="board" accordion>
                                <el-collapse-item :name="`${index + 1}`">
                                    <template #title>
                                        <div class="jc_between" style="width: 100%;" @click="PrioritySelect(board.board_No)">
                                            <div class="ta_center" style="width: 20%;">
                                                <span>{{board.inquiry}}</span>
                                            </div>
                                            <div class="ta_center" style="width: 30%;">
                                                <span>{{board.title}}</span>
                                            </div>
                                            <div class="ta_center" style="width: 10%;">
                                                <span>{{board.reservation_No}}</span>
                                            </div>
                                            <div class="ta_center" style="width: 20%;">
                                                <span v-text="handleBoarddate(board.regdate)"></span>
                                            </div>
                                            <div class="ta_center" style="width: 20%;">
                                                <el-button size="mini" @click="handleUpdateEdit(board.board_No)">수정</el-button>
                                                <el-button size="mini" @click="handleDelete(board.board_No)">삭제</el-button>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="line"></div>
                                    <div style="margin-top: 20px; margin-bottom: 20px;">
                                        <div class="jc_between" style="width: 100%;">
                                            <div class="ta_center" style="width: 67%;">{{board.content}}</div><br />
                                        </div>                                                                                                            
                                        <div class="jc_between" style="width: 100%;" v-for="(temp,idx) in imageCount" :key=temp>
                                            <div style="width: 20%;"></div>
                                            <div style="width: 50%; text-align: left;">                                            
                                                <img v-if="temp.imagename !== null" :src="`${boardImageUrl} + ${idx}`" alt="image" style="width: 100%; height: 100%;" />
                                            </div>
                                            <div style="width: 20%;"></div>
                                        </div>
                                    </div>
                                    <div class="line"></div><br>
                                    <div class="jc_between" style="width: 100%;">
                                        <div class="ta_center" style="width: 20%;">
                                            <span>답변</span>
                                        </div>
                                        <div style="width: 69%; text-align: left;">
                                            <span>{{reply}}</span>
                                        </div>

                                        <div style="width: 20%; text-align: center; color:#f55151" >
                                            <div v-if ="reply !== null">
                                                답변완료    
                                            </div>
                                            <div v-if ="reply === null">
                                                답변 대기중
                                            </div>                                                                                    
                                        </div>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                            <br/>
                            <div class="df jtc ali">
                                <el-row>
                                    <el-button class="btn" type="info" @click="boardDialogVisible = true">1:1 문의하기</el-button>
                                </el-row>

                                <!-- 보류 1대1 문의 수정하기 다이어로그 -->
                                <el-dialog title="수정하기" v-model="updateEdit" width="55%" :before-close="handleClose1">
                                    <div style="text-align: left; margin-left: auto; margin-right: auto; width: 100%;">
                                        <div>
                                            <span>문의 작성</span>
                                        </div><br />
                                        <div class="line"></div><br>
                                    </div>
                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>문의유형</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-select v-model="value1" placeholder="문의유형 선택" style="width: 100%;">
                                                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>                                            
                                        </div>
                                    </div><br />
                                    <div class="line"></div><br>
                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>주문번호</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-input v-model="updateReservation">
                                                <template #append>
                                                    <el-button type="text" @click="dialogFinding= true">조회</el-button>
                                                </template>
                                            </el-input>
                                            <el-dialog title="주문번호 조회" v-model="dialogFinding" width="40%" :before-close="handleClose2">
                                                <div class="line"></div><br>
                                                <div class="jc_between table_header">
                                                    <div style="width: 50%;">
                                                        <span>상품정보</span>
                                                    </div>
                                                    <div style="width: 30%;">
                                                        <span>주문번호</span>
                                                    </div>
                                                    <div style="width: 20%;">
                                                        <span>주문일자</span>
                                                    </div>
                                                </div>
                                                <div class="line"></div><br>
                                                <div class="jc_between" style="width: 100%;" v-for="reservation in reservations" :key="reservation">
                                                    <div class="ta_center" style="width: 40%;">
                                                        <el-radio-group v-model="radioBoard">
                                                            <el-radio :label="`${reservation.reservation_No}`">
                                                                <div class="jc_center" style="display: inline;">                                                                                                                                                                                     
                                                                    <img :src="`${reservationImageUrl} + ${reservation.book_No} &priority=1`" alt="image" style="width: 75px; height: 75px;">
                                                                    {{reservation.book_Title}}{{reservation.book_No}}
                                                                </div>
                                                            </el-radio>
                                                        </el-radio-group>
                                                    </div>
                                                    <div class="ta_center" style="width: 20%;">
                                                        <span>{{reservation.reservation_No}}</span>
                                                    </div>
                                                    <div class="ta_center" style="width: 20%;">
                                                        <span v-text="handleBoarddate(reservation.reservation_Start_Date)"></span>
                                                    </div>
                                                </div>
                                                <template #footer>
                                                    <span class="dialog-footer">
                                                        <el-button round @click="dialogFinding = false">취소</el-button>
                                                        <el-button round class="end_btn" type="primary" @click="handleRadio">선택하기</el-button>
                                                    </span>
                                                </template>
                                            </el-dialog>
                                        </div>
                                    </div><br />
                                    <div class="line"></div><br>
                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>작성자</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-input v-model="userName" @blur="checkUsername"></el-input>
                                            <span v-if="nameData.checkId" v-text="nameData.checkText" style="color :#f00"></span>
                                        </div>
                                    </div><br />
                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>휴대전화</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-input v-model="userPhone" @blur="checkPhone"></el-input>
                                            <span v-if="phoneData.checkId" v-text="phoneData.checkText" style="color :#f00"></span>
                                        </div>
                                    </div><br />
                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>이메일</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-input v-model="userEmail" @blur="checkId"></el-input>
                                            <span v-if="emailData.checkId" v-text="emailData.checkText" style="color :#f00"></span>
                                        </div>
                                    </div><br />
                                    <div class="line"></div><br>
                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>제목</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-input v-model="updateTitle" @blur="checkTitle" placeholder="제목을 입력하세요"></el-input>
                                            <span v-if="titleData.checkId" v-text="titleData.checkText" style="color :#f00"></span>
                                        </div>
                                    </div><br />

                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>문의내용</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-input type="textarea" cols="30" rows="10" placeholder="내용을 입력하세요" v-model="updateContent" @blur="checkContent">
                                            </el-input>
                                            <span v-if="contentData.checkId" v-text="contentData.checkText" style="color :#f00"></span>
                                        </div>
                                    </div><br />

                                    <div class="jc_between">
                                        <div style="width: 20%;">
                                            <span>사진</span>
                                        </div>
                                        <div style="width: 80%;">
                                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" limit="3" :file-list="imageList" :on-success="handlePhotoCardPreview" :on-remove="handlePhotoRemove" :on-exceed="handleExceed">
                                                <i class="el-icon-plus"></i>
                                            </el-upload>
                                            <el-dialog v-model="imageDialogVisible">
                                                <img width="100%" :src="dialogImageUrl" alt="" />
                                            </el-dialog>
                                        </div>
                                    </div><br />
                                    <template #footer>
                                        <span class="dialog-footer">
                                            <el-button round @click="updateEdit = false">취소</el-button>
                                            <el-button class="end_btn" round type="primary" @click="handleBoardUpdate(updateboard.board_No)">수정</el-button>
                                        </span>
                                    </template>
                                </el-dialog>
                                <!-- 1대1 문의 글쓰기 다이얼로그 -->
                                <div>
                                    <el-dialog title="1:1문의" v-model="boardDialogVisible" width="55%" :before-close="handleClose1">
                                        <div style="text-align: left; margin-left: auto; margin-right: auto; width: 100%;">
                                            <div>
                                                <span>문의 작성</span>
                                            </div><br />
                                            <div class="line"></div><br>
                                        </div>
                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>문의유형</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-select v-model="value" placeholder="문의유형 선택" style="width: 100%;">
                                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                    </el-option>
                                                </el-select>                                                
                                            </div>
                                        </div><br />
                                        <div class="line"></div><br>
                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>주문번호</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-input v-model="reservationCode">
                                                    <template #append>
                                                        <el-button type="text" @click="dialogFinding= true">조회</el-button>
                                                    </template>
                                                </el-input>
                                                <el-dialog title="주문번호 조회" v-model="dialogFinding" width="40%" :before-close="handleClose2">
                                                    <div class="line"></div><br>
                                                    <div class="jc_between table_header">
                                                        <div style="width: 50%;">
                                                            <span>상품정보</span>
                                                        </div>
                                                        <div style="width: 30%;">
                                                            <span>주문번호</span>
                                                        </div>
                                                        <div style="width: 20%;">
                                                            <span>주문일자</span>
                                                        </div>
                                                    </div>
                                                    <div class="line"></div><br>
                                                    <div class="jc_between" style="width: 100%;" v-for="reservation in reservations" :key="reservation">
                                                        <div class="ta_center" style="width: 40%;">
                                                            <el-radio-group v-model="radioBoard">
                                                                <el-radio :label="`${reservation.reservation_No}`">
                                                                    <div class="jc_center" style="display: inline;">
                                                                        <img :src="`${reservationImageUrl} + ${reservation.book_No} &priority=1`" alt="image" style="width: 75px; height: 75px;">
                                                                        {{reservation.book_Title}}
                                                                    </div>
                                                                </el-radio>
                                                            </el-radio-group>
                                                        </div>
                                                        <div class="ta_center" style="width: 20%;">
                                                            <span>{{reservation.reservation_No}}</span>
                                                        </div>
                                                        <div class="ta_center" style="width: 20%;">
                                                            <span v-text="handleBoarddate(reservation.reservation_Start_Date)"></span>
                                                        </div>
                                                    </div>
                                                    <template #footer>
                                                        <span class="dialog-footer">
                                                            <el-button round @click="dialogFinding = false">취소</el-button>
                                                            <el-button round class="end_btn" type="primary" @click="handleRadio">선택하기</el-button>
                                                        </span>
                                                    </template>
                                                </el-dialog>
                                            </div>
                                        </div><br />
                                        <div class="line"></div><br>
                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>작성자</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-input v-model="userName" @blur="checkUsername"></el-input>
                                                <span v-if="nameData.checkId" v-text="nameData.checkText" style="color :#f00"></span>
                                            </div>
                                        </div><br />
                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>휴대전화</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-input v-model="userPhone" @blur="checkPhone"></el-input>
                                                <span v-if="phoneData.checkId" v-text="phoneData.checkText" style="color :#f00"></span>
                                            </div>
                                        </div><br />
                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>이메일</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-input v-model="userEmail" @blur="checkId"></el-input>
                                                <span v-if="emailData.checkId" v-text="emailData.checkText" style="color :#f00"></span>
                                            </div>
                                        </div><br />
                                        <div class="line"></div><br>
                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>제목</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-input v-model="title" @blur="checkTitle" placeholder="제목을 입력하세요"></el-input>
                                                <span v-if="titleData.checkId" v-text="titleData.checkText" style="color :#f00"></span>
                                            </div>
                                        </div><br />

                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>문의내용</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-input type="textarea" cols="30" rows="10" placeholder="내용을 입력하세요" v-model="content" @blur="checkContent">
                                                </el-input>
                                                <span v-if="contentData.checkId" v-text="contentData.checkText" style="color :#f00"></span>
                                            </div>
                                        </div><br />

                                        <div class="jc_between">
                                            <div style="width: 20%;">
                                                <span>사진</span>
                                            </div>
                                            <div style="width: 80%;">
                                                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" limit="3" :on-success="handleImageCardPreview" :on-remove="handleImageRemove" :on-exceed="handleExceed">
                                                    <i class="el-icon-plus"></i>
                                                </el-upload>
                                                <el-dialog v-model="imageDialogVisible">
                                                    <img width="100%" :src="dialogImageUrl" alt="" />
                                                </el-dialog>
                                            </div>
                                        </div><br />
                                        <template #footer>
                                            <span class="dialog-footer">
                                                <el-button class="end_btn" type="primary" round @click="handleBoardInsert">제출</el-button>
                                                <el-button round @click="boardDialogVisible = false">취소</el-button>
                                            </span>
                                        </template>
                                    </el-dialog>
                                </div>
                            </div><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Chart from './Chart.vue';
    export default {
        created() {

            // 초기 페이지를 내 활동보기로 설정
            this.index = 2;
            this.handleMyInformation();
        },
        components : {
            Chart
        },
        methods: {
            // 메뉴 선택
            handleMenu(menu){
                // 내 정보수정
                if(menu === '1'){
                    this.index = 1;
                    this.handleInformation();
                }
                // 내 활동내역
                if(menu === '2'){
                    this.index = 2;
                    this.handleMyInformation();
                }
                // 글 관리
                if(menu === '3'){
                    this.index = 3;
                    this.handleMyBook();
                }
                // 자주묻는 질문
                if(menu === '4'){
                    this.index = 4;
                }
                // 1:1 문의
                if(menu === '5'){
                    this.index = 5;
                    this.boardSelect();
                }
            },
            // 내 정보조회 => 내 정보수정 클릭 시 호출
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
                    this.urlImage01 = "http://localhost:9090/REST/api/member/image?memberid=" + this.memberData.email;
                }   
            },
            // 비밀번호 체크
            async handleCheckPassword(curPassword) {
                const url = `/REST/api/member/checkpw?curpw=${curPassword}`;
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.memberData.curPasswordClear = true;
                    return alert("비밀번호가 일치합니다. 새로운 비밀번호를 입력해주세요.");
                }else {
                    this.memberData.curPasswordClear = false;
                    return alert("다시 비밀번호를 입력해주세요.");
                }
            },
            // 비밀번호 변경
            async handleChangePassword() {
                const url = `/REST/api/member/updatepw`;
                const body = {"id" : this.memberData.email, "newPassword" : this.memberData.newPassword};
                console.log(body);
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.put(url, body, {headers});
                if(response.data.result === 1) {
                    alert("회원정보가 변경되었습니다.(비밀번호 포함)");
                    return this.$router.go();
                }
            },
            // 전화번호 유효성 검사
            handlePhone(phone) {
                var regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
                if(phone === '') {
                    this.memberData.phoneFocus = true;
                    this.memberData.phoneText = "휴대폰번호를 입력해주세요.";
                }else if(phone.match(regExp) == null) {
                    this.memberData.phoneFocus = true;
                    this.memberData.phoneText = "휴대폰번호 형식을 지켜주세요.";
                }else {
                    this.memberData.phoneFocus = false;
                    this.memberData.phoneCheck = true;
                }
            },
            // 주소 유효성 검사
            handleAddress() {
                if(this.memberData.address === '') {
                    this.memberData.addressFocus = true;
                    this.memberData.addressText = '주소를 입력해주세요.';
                }else {
                    this.memberData.addressFocus = false;
                    this.memberData.addressCheck = true;
                }
            },
            // 우편번호 찾기
            execDaumPostcode() {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        if (this.extraAddress !== "") {
                            this.extraAddress = "";
                        }
                        if (data.userSelectedType === "R") {
                            // 사용자가 도로명 주소를 선택했을 경우
                            this.memberData.address = data.roadAddress;
                        } else {
                            // 사용자가 지번 주소를 선택했을 경우(J)
                            this.memberData.address = data.jibunAddress;
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
                        this.memberData.zipcode = data.zonecode;
                    },
                }).open();
            },
            // 회원정보수정
            async handleUpdateMember() {
                const url = `/REST/api/member/update`;
                const headers = {"Content-Type" : "multipart/form-data", "token" : sessionStorage.getItem("TOKEN")};

                const formData = new FormData();
                formData.append("phone", this.memberData.phone);
                formData.append("zipcode", this.memberData.zipcode);
                formData.append("address", this.memberData.address);
                formData.append("file", this.memberData.fileList[0]);

                const response = await axios.put(url, formData, {headers});
                if(response.data.result === 1) {
                    if(this.memberData.curPasswordClear === true && this.memberData.newPassword !== '' && this.memberData.newPasswordChk !== '') {
                        this.handleChangePassword();
                    }else {
                        alert(response.data.data);  
                        return this.$router.go();
                    }
                }
            },
            // 회원정보탈퇴
            async handleDeleteMember() {
                let memberConfirm = confirm("정말 회원 탈퇴하시겠습니까?");
                console.log(memberConfirm);
                if(memberConfirm){
                    const url = `/REST/api/member/withdrawal`;
                    const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    const response = await axios.delete(url, {headers});

                    if(response.data.result === 1) {
                        alert("그동안 이용해주셔서 감사합니다.");
                        return  this.$router.push({path:'/login'});
                    }else {
                        return alert("회원탈퇴를 실패했습니다.");
                    }
                }
            },
            // 프로필 사진 변경
            handleChangeImage(e) {
                this.memberData.fileList[0] = e.target.files[0];
            },
            // 내 활동내역
            async handleMyInformation() {
                // 프로필사진, 이름, 이메일주소
                let url = `/REST/api/member/information`;
                let headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                let response = await axios.get(url, {headers});

                if(response.data.result === 1) {
                    this.information = response.data.data;
                    this.informationData.email = this.information.id;
                    this.informationData.name = this.information.name;
                    this.urlImage02 = "http://localhost:9090/REST/api/member/image?memberid=" + this.informationData.email;
                }

                // 빌린 책 개수
                url = `/REST/api/reservation/rent/count`;
                headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                response = await axios.get(url, {headers});

                if(response.data.result === 1) {
                    this.informationData.rentBookCount = response.data.data;
                }

                // 빌려준 책 개수
                url = `/REST/api/book/count`;
                headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                response = await axios.get(url, {headers});

                if(response.data.result === 1) {
                    this.informationData.rendBookCount = response.data.data;
                }

                // 내가 쓴 게시글
                url = `/REST/api/book/count`;
                headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                response = await axios.get(url, {headers});
                
                if(response.data.result === 1) {
                    this.informationData.boardCount = response.data.data;
                }

                // 내가 쓴 리뷰
                url = `/REST/api/review/mycount`;
                headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.informationData.reviewCount = response.data.data;
                }
                
            },
            // 다이얼로그 관련 기능
            handleClose() {
                this.reasonVisible = false;
                this.reviewDialog = false;
                this.reviewUpdateDialog = false;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(response, file, fileList) {
                console.log("response", response);
                console.log("fileList", fileList);
                console.log("file", file);

                this.memberData.fileList.push(file);
                this.dialogImageUrl = file.url;
            },
            // 글 관리: 수정하기
            handleUpdateBook(bookNo) {
                // 책 번호 넣기
                return this.$router.push({path:'/book/update', query: {bookno: bookNo}});
            },
            // 글 관리: 삭제하기
            async handleDeleteBook(bookNo) {
                const confirmDelete = confirm("정말 삭제하시겠습니까?");
                if(confirmDelete) {
                    const url = `/REST/api/book/remove`;
                    const body = {"bookNo" : bookNo};
                    const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    const response = await axios.delete(url, {headers: headers, data: body});
                    if(response.data.result === 1) {
                        alert("삭제를 성공했습니다.");
                        return this.$router.go();
                    }
                }
            },
            // 글 관리: 조회하기
            async handleMyBook() {
                const url = `/REST/api/book/list/rend`;
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    return this.myBookList = response.data.data;
                }
            },
            // 빌려준 책: 조회하기
            async handleRendBook() {
                const url = `/REST/api/reservation/list/rend`;
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.get(url, {headers});
                console.log("Hello im here");
                if(response.data.result === 1) {
                    console.log("여기야 여기~");
                    console.log(response.data.data);
                    return this.rendBookList = response.data.data;
                }
            },
            handleRefuseReservation(value) {
                this.reasonVisible = true;
                this.reservationNo = value;
            },
            // 빌려준 책: 거절사유 전송
            async handleRejectSubmit() {
                const url = `/REST/api/reservation/request/refuse`;
                const body = {"reservationno" : this.reservationNo, "rejectmessage" : this.radio};
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.put(url, body, {headers});
                if(response.data.result === 1) {
                    alert("책 예약을 거절했습니다.");
                    this.reasonVisible = false;
                    return this.$router.go();
                }
            },
            // 빌려준 책: 수락하기
            async handleAcceptReservation(value) {
                const url = `/REST/api/reservation/request/accept`;
                const body = {"reservationno" : value};
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.put(url, body, {headers});
                if(response.data.result === 1) {
                    alert("책 예약을 수락했습니다.");
                    return this.$router.go();
                }
            },
            // 빌린 책: 조회하기
            async handleRentBook() {
                const url = `/REST/api/reservation/list/rent`;
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    console.log("여기야 여기~");
                    console.log(response.data.data);
                    return this.rentBookList = response.data.data;
                }
            },
            // 메뉴 3번 탭 이벤트
            handleTab() {
                if(this.tabPosition === 'first') {
                    this.handleMyBook();
                }else if(this.tabPosition === 'second') {
                    this.handleRendBook();
                }else if(this.tabPosition === 'third') {
                    this.handleRentBook();
                    this.addScript();
                }else if(this.tabPosition === 'fourth') {
                    this.handleMyReview();
                }
            },
            // 리뷰 목록 조회
            async handleMyReview() {
                const url = `/REST/api/review/list`;
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.get(url, {headers});
                if(response.data.result === 1) {
                    this.reviewData.reviewList = response.data.list;
                    console.log("리뷰 목록입니다ㅏ",this.reviewData.reviewList);
                }
            },  
            // 날짜 변환(대여일)
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
                return '대여일: ' + year + '-' + month + '-' + day;
            },
            // 날짜 변환(대여일)
            handleRegdateReview(value){
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
                return '작성일: ' + year + '-' + month + '-' + day;
            },
            // 빌린 책: 결제하기
            addScript() {
                let scripts = [
                    "https://code.jquery.com/jquery-1.12.4.min.js",
                    "https://service.iamport.kr/js/iamport.payment-1.1.5.js"
                ];

                for (let i = 0; i < scripts.length; i++) {
                    let script = document.createElement('script');
                    script.setAttribute('type', 'text/javascript');
                    script.setAttribute('src', scripts[i]);
                    script.async = true;
                    document.getElementsByTagName('head')[0].appendChild(script);
                }
            },
            handlePay(item) {
                const thisTemp = this;
                // 가격 계산 메소드
                const startDate = new Date(item.reservation_Start_Date).getTime();
                const endDate = new Date(item.reservation_End_Date).getTime();
                const result = Math.round(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24));
                const resultPrice = item.price * result;

                var IMP = window.IMP; // 생략가능
                console.log(window);
                IMP.init('imp90221236');
                // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
                // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
                IMP.request_pay({
                    pg: 'inicis', // version 1.1.0부터 지원.
                    /*
                    'kakao':카카오페이,
                    html5_inicis':이니시스(웹표준결제)
                    'nice':나이스페이
                    'jtnet':제이티넷
                    'uplus':LG유플러스
                    'danal':다날
                    'payco':페이코
                    'syrup':시럽페이
                    'paypal':페이팔
                    */
                    pay_method: 'card',
                    /*
                    'samsung':삼성페이,
                    'card':신용카드,
                    'trans':실시간계좌이체,
                    'vbank':가상계좌,
                    'phone':휴대폰소액결제
                    */
                    merchant_uid: 'merchant_' + new Date().getTime(),
                    /*
                    merchant_uid에 경우
                    https://docs.iamport.kr/implementation/payment
                    위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
                    참고하세요.
                    나중에 포스팅 해볼게요.
                    */
                    name: item.title,
                    //결제창에서 보여질 이름
                    amount: resultPrice,
                    // amount: resultPrice,
                    //가격
                    buyer_email: item.rmember_Id,
                    //buyer_name: '구매자이름',
                    buyer_tel: item.phone,
                    buyer_addr: item.address,
                    //buyer_postcode: '123-456',
                    m_redirect_url: 'https://www.yourdomain.com/payments/complete'
                    /*
                    모바일 결제시,
                    결제가 끝나고 랜딩되는 URL을 지정
                    (카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐)
                    */
                }, function(rsp) {
                    var msg = '';
                    if (rsp.success) {
                        msg = '책 예약 결제가 완료되었습니다.';
                        // msg += '고유ID : ' + rsp.imp_uid;
                        // msg += '상점 거래ID : ' + rsp.merchant_uid;
                        // msg += '결제 금액 : ' + rsp.paid_amount;
                        // msg += '카드 승인번호 : ' + rsp.apply_num;
                        thisTemp.handleAfterPay(item.reservation_No);
                    } else {
                        msg = '결제에 실패하였습니다.';
                        msg += '에러내용 : ' + rsp.error_msg;
                    }
                    console.log(msg);
                });
            },
            // 빌린 책
            async handleAfterPay(value) {
                this.$socket.emit('chart', {
                    data: {
                        code : 3,
                        sellerId : this.informationData.email,
                        regdate: new Date().toLocaleDateString().replace(/\./g,""),
                        count : this.count
                    }
                });
                const url = `/REST/api/reservation/pay/success`;
                const body = {"reservationno" : value};
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.put(url, body, {headers});
                if(response.data.result === 1) {
                    alert("책 예약 결제가 완료되었습니다.");
                    return this.$router.go();
                }
            },
            // 리뷰 다이얼로그
            handleDialogReview(memberId, bookNo) {
                this.reviewData.memberId = memberId;
                this.reviewData.bookNo = bookNo;
                this.reviewDialog = true;
            },
            // 리뷰 작성
            async handleRegisterReview() {
                let url = `/REST/api/review/count?bookno=${this.reviewData.bookNo}`;
                let headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                let response = await axios.get(url, {headers});
                if(response.data.data > 0) {
                    alert("리뷰는 한 개만 등록할 수 있습니다.");
                    this.reviewDialog = false;
                }else if(response.data.data === 0) {
                    url = `/REST/api/review/register`;
                    const body = {"rating" : this.reviewData.rating, "content" : this.reviewData.text, "member" : this.reviewData.memberId, "book" : this.reviewData.bookNo};
                    headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    response = await axios.post(url, body, {headers});

                    if(response.data.result === 1) {
                        alert("리뷰등록을 성공했습니다.");
                        this.reviewDialog = false;
                    }
                }
            },
            // 리뷰 수정 다이얼로그
            handleDialogUpdateReview(content, rating, reviewNo, memberId) {
                this.reviewUpdateDialog = true;
                this.reviewUpdateData.text = content;
                this.reviewUpdateData.rating = rating;
                this.reviewUpdateData.reviewNo = reviewNo;
                this.reviewUpdateData.memberId = memberId;
            },
            // 리뷰 수정
            async handleUpdateReview() {
                const url = `/REST/api/review/update`;
                const body = {"rating" : this.reviewUpdateData.rating, "content" : this.reviewUpdateData.text, "reviewNo" : this.reviewUpdateData.reviewNo};
                const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                const response = await axios.put(url, body, {headers});

                if(response.data.result === 1) {
                    alert("리뷰수정을 성공했습니다.");
                    this.reviewUpdateDialog = false;
                }
            },
            // 리뷰 삭제
            async handleDeleteReview(reviewNo) {
                const confirmDelete = confirm("리뷰를 삭제하시겠습니까?");
                if(confirmDelete){
                    const url = `/REST/api/review/remove`;
                    const body = {"reviewNo" : reviewNo};
                    const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    const response = await axios.delete(url, {headers: headers, data: body});

                    if(response.data.result === 1) {
                        return alert("리뷰삭제를 성공했습니다.");
                    }
                }
            },
            // 문의하기 - 찬민
            handleChat() {
                console.log("Hello 찬민");
            },

            //1:1 고객센터 메소드

            // 새로고침
            handleIndex(value){
                this.index = value;
            },
            
            // 1대1 문의 목록 불러오기
            async boardSelect() {
                const url = '/REST/api/board/select'
                const headers = {"Content-Type": "application/json", "token" : sessionStorage.getItem("TOKEN")};

                const response = await axios.get(url, {
                    headers
                });
                if (response.data.result === 1) {
                    // 받은 데이터 boards변수에 넣기
                    this.boards = response.data.boardList;
                    console.log("boards", response.data.boardList);
                    this.inquiry = response.data.boardList.inquiry;   
                    this.title = response.data.boardList.title;                    
                    this.content = response.data.boardList.content;                    
                                                
                }
                this.MemberSelect();
                this.reservationSelect();
            },

            // 1대1 문의 멤버정보 불러오기
            async MemberSelect() {
                const url = '/REST/api/member/memberGet';
                const header = {"Content-Type": "application/json", "token" : sessionStorage.getItem("TOKEN")};

                const response = await axios.get(url, {
                    headers: header
                })
                console.log("members",response);
                if (response.data.result == 1) {                    
                    this.userName = response.data.member.name;
                    this.nameData.checkId = false;
                    this.userPhone = response.data.member.phone;
                    this.phoneData.checkId = false;
                    this.userEmail = response.data.member.id;
                    this.emailData.checkId = false;
                }
            },

            // 1대1 문의하기 예약목록 불러오기
            async reservationSelect() {
                const url = '/REST/api/board/reservation/list'
                const headers = {"Content-Type": "application/json", "token" : sessionStorage.getItem("TOKEN")};

                const response = await axios.get(url, {
                    headers
                });
                if (response.data.result === 1) {                    
                    this.reservations = response.data.data;
                    console.log("reservation", response.data.data)                    
                }

                this.reservationImageUrl = `http://localhost:9090/REST/api/book/image/main?bookno=`
            },
            
            // 게시판에서 이미지 우선순위 불러오기
            async PrioritySelect(boardNo) {          
                console.log("햄버거", boardNo)      
                let url = `/REST/api/board/image/list?boardNo=${boardNo}`;
                let headers = {"Content-Type": "application/json"};

                let response = await axios.get(url, {headers});
                this.imageCount = response.data.data;
                console.log("이미지리스트", this.imageCount);
                
                this.boardImageUrl = `http://localhost:9090/REST/api/board/select/image?boardNo=${boardNo}&priority=`;                
                
                // 답글도 조회
                url = `/REST/api/board/select/reply?boardNo=${boardNo}`;
                headers = {"Content-Type": "application/json"};
                response = await axios.get(url, {headers});                                       
                if (response.data.result === 1) {                    
                    this.reply = response.data.boardReply.content;                                                                                                          
                    console.log(this.reply);
                }                
            },

            // 수정하기 눌렀을때
            async handleUpdateEdit(boardNo) {
                // 다이어로그 표시여부
                this.updateEdit = true;                

                // 데이터 받아오기
                let url = `/REST/api/board/select/update?boardNo=${boardNo}`;
                let headers = {"Content-Type" : "application/json"};
                let response = await axios.get(url, headers);                
                console.log("board/select/one", response);                  
                if (response.data.result === 1) {
                    // 받은 데이터 items변수에 넣기                    
                    this.updateboard = response.data.boardList[0];
                    
                    this.updateTitle = this.updateboard.title;
                    this.updateContent = this.updateboard.content;
                    this.updateReservation = this.updateboard.reservation_No;                    
                    this.value1 = this.updateboard.inquiry;     
                }
                // 이미지 받아오기
                url = `/REST/api/board/image/list?boardNo=${boardNo}`;
                headers = {"Content-Type": "application/json"};
                response = await axios.get(url, {headers});     
                console.log("prority",response);                           
                this.fileList = [];
                if(response.data.data.length > 0) {                    
                    // 이미지 개수만큼 반복수행
                    for(let i = 0; i < response.data.data.length; i++) {       
                        console.log(response.data.data[i].priority);                 
                        const temp = {
                        priority: i,                            
                        url: `http://localhost:9090/REST/api/board/select/image?boardNo=${boardNo}&priority=${response.data.data[i].priority-1}`                        
                        }                                            
                        this.fileList.push(temp);
                    }
                }
                this.PrioritySelect(boardNo);     
            },

            // 1대1 문의 글쓰기
            async handleBoardInsert() {
                if (this.value !== '' && this.titleData.checkFocus && this.contentData.checkFocus) {
                    const url = '/REST/api/board/insert';
                    const headers = {"Content-Type": "multipart/form-data", "token" : sessionStorage.getItem("TOKEN")};

                    const formData = new FormData();
                    formData.append("inquiry", this.value);
                    console.log(this.reservationCode);
                    if(this.reservationCode !== undefined){
                        formData.append("reservationNo", this.reservationCode);
                    }                    
                    // formData.append("name", this.username);
                    // formData.append("phone", this.phone);                
                    // formData.append("email", this.email);          
                    formData.append("title", this.title);
                    formData.append("content", this.content);                    

                    // 이미지 데이터
                    if(this.fileList.length === 1){
                        formData.append("file", this.fileList[0].raw);
                    }else if(this.fileList.length === 2){
                        formData.append("file", this.fileList[0].raw);
                        formData.append("file", this.fileList[1].raw);
                    }else if(this.fileList.length === 3){
                        formData.append("file", this.fileList[0].raw);
                        formData.append("file", this.fileList[1].raw);
                        formData.append("file", this.fileList[2].raw);
                    }

                    const response = await axios.post(url, formData, {headers});

                    console.log(response);

                    if (response.data.result === 1) {
                        alert(response.data.data);
                        this.boardDialogVisible = false;
                        this.handleIndex(5);
                        return this.$router.go();
                    } else {
                        alert('글쓰기 실패했습니다.')
                    }
                } else {
                    alert('모든 항목을 입력해 주세요')
                }
            },

            // 1대1 문의 수정하기
            async handleBoardUpdate(boardNo){      
                if(this.value1 !== '' && this.titleData.checkFocus && this.contentData.checkFocus){
                          
                    const url = `/REST/api/board/update`;
                    const headers = {"Content-Type" : "multipart/form-data", "token" : sessionStorage.getItem("TOKEN")};

                    const formData = new FormData();
                    formData.append("boardNo", `${boardNo}`);
                    formData.append("title", this.updateTitle);
                    formData.append("content", this.updateContent);
                    formData.append("inquiry", this.value1);
                    if(this.updateReservation != undefined){
                        formData.append("reservation", this.updateReservation);
                    }

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
                        this.handleIndex(5);
                        return this.$router.go();
                    }
                } else {
                    alert('모든 항목을 입력해 주세요')
                }
            },

            // BOARD삭제하기
            async handleDelete(boardNo) {          
                this.$confirm('삭제하시겠습니까?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then( async () => {
                    const url = `/REST/api/board/delete?boardNo=${boardNo}`;
                    const headers = {"Content-Type" : "application/json", "token" : sessionStorage.getItem("TOKEN")};
                    const response = await axios.delete(url,{headers});
                    if(response.data.result === 1){
                        console.log("삭제결과",response);
                        this.handleIndex(5);
                        return this.$router.go();
                                            
                    }
                }).catch(() => {
                });
            },

            // 1대1 문의하기 예약조회 라디오
            handleRadio() {
                this.dialogFinding = false
                console.log(this.radioBoard);
                this.reservationCode = this.radioBoard;
                this.updateReservation = this.radioBoard;
            },

            // 1대1 문의 작성 시 이미지 추가, 삭제
            handleImageRemove(file, fileList) {
                console.log("삭제",file, fileList)                          
            },
            handleImageCardPreview(response,file,fileList) {
                console.log("response",response);
                console.log("file",file);
                console.log("fileList",fileList)
                this.fileList = fileList;                
            },

            // 1대1 문의 수정 시 이미지 추가, 삭제
            handlePhotoRemove(file, fileList) {
                if(!this.priorityList.includes(file.priority)) {
                    this.priorityList.push(file.priority);
                }
                console.log("삭제", file, fileList);                
            },
            handlePhotoCardPreview(response, file, fileList) {
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

            // 1대1 문의 날짜 변환
            handleBoarddate(value){
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

            handleClose1() {
                this.boardDialogVisible = false;
                this.updateEdit = false;
                this.updatedialog = false;
                this.reasonVisible = false;
            },
            handleClose2() {
                this.dialogFinding = false;
            },
            // 유효성 검사
            checkId() {
                var regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]*$/i;
                if (this.userEmail == '') {
                    this.emailData.checkId = true;
                    this.emailData.checkText = "이메일을 입력해 주세요.";
                } else if (this.userEmail.match(regExp) == null) {
                    this.emailData.checkId = true;
                    this.emailData.checkText = "이메일 형식을 지켜주세요.";
                } else {
                    this.emailData.checkId = false;
                    this.emailData.checkFocus = true;
                }
            },
            checkPhone() {
                var checkp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
                if (this.userPhone == '') {
                    this.phoneData.checkId = true;
                    this.phoneData.checkText = "번호를 입력해 주세요."
                } else if (this.userPhone.match(checkp) == null) {
                    this.phoneData.checkId = true;
                    this.phoneData.checkText = "번호 형식을 지켜주세요."
                } else {
                    this.phoneData.checkId = false;
                    this.phoneData.checkFocus = true;

                }
            },            
            checkUsername() {
                if (this.userName == '') {
                    this.nameData.checkId = true;
                } else {
                    this.nameData.checkId = false;
                    this.nameData.checkFocus = true;
                }
            },
            checkTitle() {
                if (this.title == '') {
                    this.titleData.checkId = true;
                } else {
                    this.titleData.checkId = false;
                    this.titleData.checkFocus = true;
                }
            },
            checkContent() {
                if (this.content == '') {
                    this.contentData.checkId = true;
                } else {
                    this.contentData.checkId = false;
                    this.contentData.checkFocus = true;
                }
            },
            checkImage() {
                if (this.fileList == '') {
                    this.imageData.checkId = true;
                } else {
                    this.imageData.checkId = false;
                    this.imageData.checkFocus = true;
                }
            },
        },
        data() {
            return {
                // 결제완료시 차트반영
                sellerId : '',
                count : 1,


                // 고객센터 변수
                
                // 1대1 문의 유효성 검사
                nameData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "이름을 입력해주세요.",
                    checkColor: "f00",
                },
                emailData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "이메일을 입력해주세요.",
                    checkColor: "f00",
                    allClear: false
                },
                phoneData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "전화번호를 입력해주세요.",
                    checkColor: "f00",
                    allClear: false
                },
                titleData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "제목을 입력해주세요.",
                    checkColor: "f00",
                },
                contentData: {
                    checkFocus: false,
                    checkId: false,
                    checkText: "내용을 입력해주세요.",
                    checkColor: "f00",
                },

                // 이미지 변수
                boardImageUrl: '',
                reservationImageUrl: '',
                
                // 모든 다이얼로그
                updateEdit: false,
                // 사진 다이얼로그
                imageDialogVisible: false,
                // 다이얼로그
                boardDialogVisible: false,
                // 예약 조회
                dialogFinding: false,                
                subMenu: 1,                
                dialogImageUrl: '',

                // 1대1 문의 게시판 상세페이지
                activeName: "0",

                // 1대1 문의 제출    
                radioBoard: '',            
                reservationCode: this.radioBoard,                
                userName: '',
                userPhone: '',
                userEmail: '',
                title: '',
                content: '',

                // 1대1 문의 수정                
                updateinquiry:'',
                updateReservation: this.radioBoard,
                updateTitle:'',
                updateContent:'',

                //
                reservations: [],
                fileList: [],
                boards: [],
                boardNo: [],
                replies: [],
                imageCount: [],                
                // 문의답변
                reply:[],

                // 문의수정 이미지 정보
                priorityList: [],
                imageList: [],



                // 회원정보수정
                member: '',
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
                    curPasswordClear: false,
                    
                    // 전화번호 유효성 검사
                    phoneFocus  : false,
                    phoneCheck  : false,
                    phoneText   : '휴대폰번호를 입력해주세요.',

                    // 주소 유효성 검사
                    addressFocus: false,
                    addressCheck: false,
                    addressText : '주소를 입력해주세요.'
                },
                urlImage01: "#",
                // 내 활동내역
                information: '',
                informationData: {
                    email: '',
                    name : '',
                    rendBookCount: 0,
                    rentBookCount: 0,
                    boardCount   : 0,
                    reviewCount  : 0
                },
                urlImage02: "#",
                // 메뉴3(탭 위치, 등록한 글, 빌려준 책, 빌린 책)
                myBookList  : [],
                rendBookList: [],
                rentBookList: [],
                tabPosition : 'first',
                reservationNo: '',
                // 리뷰
                reviewDialog: false,
                reviewUpdateDialog: false,
                reviewData: {
                    text    : '',
                    rating  : '',
                    bookNo  : '',
                    memberId: '',
                    reviewList: []
                },
                reviewUpdateData: {
                    text    : '',
                    rating  : '',
                    content : '',
                    memberId: '',
                    reviewNo: ''
                },

                // 여기 이하 변수는 뭘위한건지 파악해야함
                userid :'',
                nowuserpw : '',
                newuserpw :'',
                newuserpw1 : '',
                username : '',
                userbirth : '',
                usernickname : '',
                userphone : '',
                postcode : '',
                address : '',
                index: 2,
                radio: 3,
                dialogVisible: false,
                dialogVisible2: false,
                reasonVisible:false,
                cancleEdit : false,
                textarea1: '',
                options: [
                {
                    value: '교환',
                    label: '교환',
                },
                {
                    value: '환불',
                    label: '환불',
                },
                {
                    value: '취소',
                    label: '취소',
                },
                {
                    value: '주문/결제',
                    label: '주문/결제',
                },
                {
                    value: '회원 관련',
                    label: '회원 관련',
                },
                {
                    value: '기타 문의',
                    label: '기타 문의',
                },
                {
                    value: '신고',
                    label: '신고',
                },
                {
                    value: '기능/작동 오류',
                    label: '기능/작동 오류',
                },
                ],
                value: '',
                // 문의유형 수정                
                options1: [{
                        value: '교환',
                        label: '교환',
                    },
                    {
                        value: '환불',
                        label: '환불',
                    },
                    {
                        value: '취소',
                        label: '취소',
                    },
                    {
                        value: '주문/결제',
                        label: '주문/결제',
                    },
                    {
                        value: '회원 관련',
                        label: '회원 관련',
                    },
                    {
                        value: '기타 문의',
                        label: '기타 문의',
                    },
                    {
                        value: '신고',
                        label: '신고',
                    },
                    {
                        value: '기능/작동 오류',
                        label: '기능/작동 오류',
                    },
                ],
                value1: '',
            }
        }
    }
</script>

<style scoped>
.title_banner {
    width: 100%; 
    height: 280px; 
    background-color: #202E3F; 
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.title_banner_text {
    color: #fff; 
    font-size: 45px;
}
.title_banner_line {
    display: inline-block; 
    width: 110px; 
    height: 4px; 
    background-color: #5B60AE;
}
.main_banner {
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.main_banner_container {
    width: 70%; 
    display: flex; 
    justify-content: space-between; 
    align-items: top;
}
.main_banner_left {
    width: 20%; 
    height: 392px; 
    border-top: 1px solid #E6E6E6; 
    border-left: 1px solid #E6E6E6; 
    border-bottom: 1px solid #E6E6E6; 
    text-align: left;
}
.main_banner_right {
    width: 80%; 
    margin-left: 30px;
    border: 1px solid #E6E6E6;
}
.main_banner_01 {
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.main_banner_02 {
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.main_banner_03 {
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.main_banner_04 {
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.button_round {
    font-family: 'Jua', sans-serif;
    background-color: #656C8E;
}


.df {
    display: flex;
}
.jtc {
    justify-content: center;
}
.ali {
    align-items: center;
}
.gray {
    color: #686666;
}
.index2 {
    width:32%;
    display: table-cell;
}
.number {
    font-size: 30px;
    color: #5450b6;
    align-items: left;
}
.box-card1 {
    width:100%;
    margin:10px;
}
.container {
    padding-bottom: 50px;
}
.btn {
    font-family: 'Jua', sans-serif;
}





.font21 {
    font-size: 23px;
}
.font16 {
    font-size: 17px;
}

.IDbox {
    font-size: 15px;
    text-align: left;
}
.inputBox {
    margin-top: 7px; 
    width:100%;
}
.inputBox_button {
    width: 75%; 
    margin-right: 5px;
}
.text_left {
    text-align: left;

}
.mypage_button {
    width: 25%; 
    margin-top: 5px;

}

.small_btn {
    width: 100%; 
    background-color: #5B6EBC;
}
.mt7{
    margin-top: 7px;
}
.end_btn {
    background-color: #5B6EBC;
}
.jc_between {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
}
.jc_center {
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.wd33 {
    width: 33%;
}
.ta_center {
    text-align: center;
}
.line {
    width: 100%; 
    height: 1px; 
    background-color: #E8E8E8; 
    clear: both; 
    margin-left:auto; 
    margin-right: auto;
}
.table_header {
    width:100%; 
    text-align:center;
    height:30px; 
    margin-bottom:10px;
}
.btn_wd40 {
    width: 40%; 
    background-color: #5B6EBC;
}
</style>