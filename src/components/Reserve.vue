
<template>
    <div id="banner" class="col bg-dark p-5 rounded">
          <h3 class="mypage">책 예약하기</h3>
    </div><br/>


    <div class="allcontainer">
        <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <div id="card1" class="card-body">

                <h5>가까운 곳에서 책을 빌리자!</h5>
                <h2 class="card-title">책예약하기</h2><br/>

                <div>
                    <label>전화번호</label>
                    <input type="text" class="form-control" placeholder="전화번호를 입력하세요" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <br/>
                
                <label>예약날짜</label>
                <p><input type="date"></p><br/>

                <div>
                    <label>대여시간</label>
                    <p><input type="time"></p>
                </div>
                <br/>

                <div>
                    <label>반납시간</label>
                    <p><input type="time"></p>
                </div>
                <br/>
                
                <label>요청사항</label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="호스트에게 요청할 사항을 입력하세요" id="floatingTextarea2" style="height: 100px"></textarea>
                </div>
                <br/>

                    <div id="joinbtn" class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary" type="button">예약하기</button>
                    </div>
                </div>
            </div>


                <div class="col-md-3">
                    <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h5 class="my-0 fw-normal">예약 날짜/시간</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <h5>10월 12일 ~ 10월 14일</h5>
                            <li>대여기간 : 17:00</li>
                            <li>반납기간 : 18:00</li>
                        </ul>
                    </div>
                    </div>
                    <div class="card-header py-3">
                    <h5 class="my-0 fw-normal">거래장소를 확인하세요</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
    
                        </ul>
                    </div>

                </div>

        </div>
    </div>
</div>

</template>

<style>

    .allcontainer {
        padding-left: 300px;
    }

</style>