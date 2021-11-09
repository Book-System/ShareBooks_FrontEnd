<template>
<div class="main">
        <div class="banner" >
          <img src="../assets/images/bookimage3.png" style="width:350px; height:240px;margin-top:0px; margin-left:520px; " /> 
        </div><br/>   
<div class="container">
 
  <div class="row">
    <div class="col">
    </div>
      <div class="col-md-6 card">
        <div id="card1" class="card-body">

          <h5>내가 가진 책을 등록해보세요!</h5>
          <h2 class="card-title">책등록하기</h2><br/>

          <div>
          <label>글제목</label>
          <input type="text" class="form-control" placeholder="글제목을 입력하세요"  aria-describedby="basic-addon1">
          </div>
          <br/>

           <label>글내용</label>
          <div class="form-floating">
                <textarea class="form-control" placeholder="책상태 등 대여에 필요한 정보를 입력하세요" id="floatingTextarea2" style="height: 100px"></textarea>
          </div>
         <br/>

           <div>
          <label>책제목</label>
          <input type="text" class="form-control" placeholder="등록할 책 제목을 입력하세요"  aria-describedby="basic-addon1">
          </div>
          <br/>

           <div>
          <label>책내용</label>
          <input type="text" class="form-control" placeholder="책에 대해 소개해주세요"  aria-describedby="basic-addon1">
          </div>
          <br/>

          <label>주소</label>
          <div class="row">
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="postcode" placeholder="우편번호" aria-describedby="basic-addon1">
            </div>
            <div class="col-sm-4 ">
              <input type="button" class="btn" @click="execDaumPostcode()" value="우편번호 찾기"><br/>
            </div>
            <div class="col-sm-8">
              <input type="text" class="form-control" v-model="address" placeholder="주소"  aria-describedby="basic-addon1"><br>
            </div>
          </div>

          

          <label>대여료</label>
          <div class="row">
            <div class="col-sm-8">
               
              <input type="text"  id="price" v-model="value" @input="e=>value=changeNum(e.target.value)" class="form-control" placeholder="가격을 숫자로만 입력하세요" >
            </div>
          </div>
          <br/>
            <label>#키워드</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="키워드를 입력하세요(ex: #따듯한,#슬픔)"  aria-describedby="basic-addon1">
            </div>
          </div>
          <br/>

          <label>카테고리</label>
          <br>
          
           <div class="form-check form-check-inline">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                카테고리1
                 </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              카테고리2
            </label>
            </div>

            
           <div class="form-check form-check-inline">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                카테고리3
                 </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              카테고리4
            </label>
            </div>

            
           <div class="form-check form-check-inline">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                카테고리5
                 </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              카테고리6
            </label>
            </div>

            

            
            
       
          <br/><br/>

        <label>대표 이미지 첨부</label>
        <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02">
        </div>

        <label>추가 이미지 첨부</label>
        <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02">
        </div>
        <br/>     
       

            <div id="joinbtn" class="d-grid gap-2 d-md-block">
               <a href="#" class="myButton">등록하기</a>
            </div>

        </div>
      </div>
        <div class="col" style="width: 100rem;">
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
      value:"",
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
     }
  },
   filters:{
        inputNumberFormat(val){
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    } 
  
};
</script>

<style scoped>
.main{
  padding-top:80px;
}

.banner{
    background-color:#6ac0cf42;
     width:100%;
     height:200px;

}
.container{ 
  padding-bottom:100px;
}
#joinbtn {
  padding-left: 230px;
}
.myButton {
	background-color:#6ac0cfa6;
	border-radius:6px;
	display:inline-block;
	cursor:pointer;
	color:#fff;
	font-family:Verdana;
	font-size:18px;
	padding:5px 20px;
	text-decoration:none;
	text-shadow:0px 0px 0px #6ac0cfa6;
}
.myButton:hover {
	background-color:#6ac0cfa6;
}
.myButton:active {
	position:relative;
	top:1px;
}

.btn {
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 15px;
  background: #6ac0cfa6;
  padding: 6px 9px 3px 9px;
  text-decoration: none;
}

.btn:hover {
  background: #6ac0cf;
  text-decoration: none;
}
</style>