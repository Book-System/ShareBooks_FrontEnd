<template>
    <div id="banner" class="col bg-dark p-5 rounded">
          <h3 class="mypage">마이페이지</h3>
    </div><br/>

  <div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">마이페이지</h3>
                </div>
                    <ul class="list-group">
                        <a href="./Updatemypage" class="list-group-item">내 정보수정</a>
                        <a href="./Myactive" class="list-group-item">나의 활동내역</a>
                        <a href="./Mypagewriting" class="list-group-item">글 관리</a>
                        <a href="#" class="list-group-item">책 추천</a>
                        <a href="#" class="list-group-item">즐겨찾기</a>
                    </ul>
              </div>
        </div>

        <div class="col-md-7">
          <div class="card" style="padding:30px">
              <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>내 프로필</h4>
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <form>
                              <label>아이디</label>
                              <input type="text" class="form-control" placeholder="alal@1212" aria-label="Username" aria-describedby="basic-addon1">
                              <br/>

                              <div>
                              <label>현재 비밀번호</label>
                              <input type="text" class="form-control" placeholder="현재 비밀번호" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <div>
                              <label>새 비밀번호</label>
                              <input type="text" class="form-control" placeholder="새 비밀번호" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <div>
                              <label>새 비밀번호</label>
                              <input type="text" class="form-control" placeholder="새 비밀번호 재확인" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <div>
                              <label>이름</label>
                              <input type="text" class="form-control" placeholder="나나나" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              
                              <div>
                              <label>생년월일</label>
                              <input type="text" class="form-control" placeholder="999999" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <label>닉네임</label>
                              <div class="row">
                                <div class="col-sm-7">
                                  <input type="text" class="form-control" placeholder="ㅁㅁㅁ" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                              <div class="col-sm-4 d-grid gap-2 d-md-block">
                                <button class="btn1 btn-primary" type="button">중복확인</button>
                              </div>
                              </div>
                              <br/>

                              <div>
                              <label>전화번호</label>
                              <input type="text" class="form-control" placeholder="010-0000-1111" aria-label="Username" aria-describedby="basic-addon1">
                              </div>
                              <br/>

                              <label>주소</label>
                              <div class="row">
                                <div class="col-sm-7">
                                  <input type="text" v-model="postcode" class="form-control" placeholder="06000" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                              <div class="col-sm-4 d-grid gap-2 d-md-block">
                                <button class="btn1 btn-primary" type="button" @click="execDaumPostcode()">우편번호 찾기</button>
                              </div>
                                <div class="col-sm-12">
                                  <input type="text" class="form-control" v-model="address" placeholder="부산광역시 사상구" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                              </div>
                              <br/>

                        <div id="joinbtn" class="d-grid gap-2 d-md-block">
                          <button class="btn btn-primary" type="button">수정하기</button>
                        </div>

                            </form>
                        </div>
                    </div>   
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
    };
  },
  methods: {
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
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
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
        },
      }).open();
    },
  },
};
</script>

<style>
  .mypage {
    color: white;
    text-align: center;
  }
  .update{
    margin-left: 180px;
  }
</style>