<template>
<div class="container">
  <div class="row">
    <div class="col">
    </div>
      <div class="col-md-6 card">
        <div id="card1" class="card-body">
          <h1 class="card-title">회원가입</h1><br/>

          <label>아이디</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="아이디를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <button class="btn1 btn-primary" type="button">중복확인</button>
          </div>
          </div>
          <br/>

          <label>닉네임</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="닉네임을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <button class="btn1 btn-primary" type="button">중복확인</button>
          </div>
          </div>
          <br/>

          <div>
          <label>비밀번호</label>
          <input type="text" class="form-control" placeholder="비밀번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <div>
          <label>비밀번호 확인</label>
          <input type="text" class="form-control" placeholder="비밀번호를 다시 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <div>
          <label>이름</label>
          <input type="text" class="form-control" placeholder="이름을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <div>
          <label>전화번호</label>
          <input type="text" class="form-control" placeholder="'-' 빼고 숫자만 입력" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <label>주소</label>
          <div class="row">
            <div class="col-sm-6">
              <input type="text" v-model="postcode" class="form-control" placeholder="우편번호" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <button class="btn1 btn-primary" type="button"  @click="execDaumPostcode()">우편번호 찾기</button>
          </div>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="address" placeholder="주소" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
          <br/>
          <br/>

            <div id="joinbtn" class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button">회원가입</button>
            </div>

        </div>
        
      </div>

        <div class="col" style="width: 100rem;">
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

<style scoped>
#join {
  padding-right: 50px;
}
#joinbtn {
  padding-left: 150px;
}
.container{
    padding-top:200px;
    padding-bottom:100px;
}
</style>