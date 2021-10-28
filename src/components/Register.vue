<template>
    <div id="banner" class="col bg-dark p-5 rounded">
          <h3 class="mypage">책 등록하기</h3>
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
          <input type="text" class="form-control" placeholder="글제목을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

           <label>글내용</label>
          <div class="form-floating">
                <textarea class="form-control" placeholder="책상태 등 대여에 필요한 정보를 입력하세요" id="floatingTextarea2" style="height: 100px"></textarea>
          </div>
         <br/>

           <div>
          <label>책제목</label>
          <input type="text" class="form-control" placeholder="등록할 책 제목을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

           <div>
          <label>책내용</label>
          <input type="text" class="form-control" placeholder="책에 대해 소개해주세요" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <br/>

          <label>주소</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="책을 대여할 장소를 지정해주세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          <div class="col-sm-4 d-grid gap-2 d-md-block">
            <button class="btn1 btn-primary" type="button">주소검색</button>
          </div>
          </div>
          <br/>

          <label>대여료</label>
          <div class="row">
            <div class="col-sm-8">
              <input type="text" class="form-control" placeholder="가격을 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
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
              <button class="btn btn-primary" type="button">등록하기</button>
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
        
    }
</script>

<style>

</style>