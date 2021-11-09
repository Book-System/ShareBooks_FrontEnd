<template>
<div class="home">
    <div class="main background-color-pink">
        <div class="container"  >
            <div class="main1-box1"  >
                <div class="main1-box1-sub">
                <div class="main1-text2">
                    주변에서 빌릴 수 
                </div>
                 <div class="main1-text2">
                     있는 책을
                </div>
                <div class="main1-text1">
                     찾아보세요!
                </div>
                <div class="main-text-btn">
                  <a href="./BookList2" class="myButton">목록보기</a>
                </div>
                </div>
            </div>
            <div class="main1-box2">
                <img src="../assets//images/neighbor.png" style="width:300px; height:300px; " />
            </div>
        </div>

    </div>
    <div class="main background-color-white" >
        <div class="container"  >
            <div class="main2-box1">
                <img src="../assets//images/bookshelves.png" style="width:300px; height:300px; " />
            </div>
            <div class="main1-box1"  >
                <div class="main2-box2-sub">
                <div class="main1-text2">
                    안쓰는 책을 
                </div>
                <div class="main1-text1">
                  공유해보세요!
                </div>
                <div class="main-text-btn">
                  <a href="./Register" class="myButton">책 등록하기</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main background-color-blue">
         <div class="container"  >
            <div class="main1-box1"  >
                <div class="main1-box1-sub">
               
                <div class="main1-text2">
                    이번달 제일 많이 빌려간 책
                </div>
                 <div class="main1-text2">
                   순위를 확인해보세요
                </div>
                <div class="main-text-btn">
                  <a href="./Slider" class="myButton">이달의 책 추천</a>
                </div>
                </div>
            </div>
            <div class="main1-box2">
                <img src="../assets/images/Winners1.png" style="width:300px; height:300px; " />
            </div>
        </div>

    </div>
    <div class="main background-color-white">
         <div class="container"  >
            <div class="main2-box1">
                <img src="../assets/images/chatting2.png" style="width:300px; height:300px; " />
            </div>
            <div class="main1-box1"  >
                <div class="main2-box2-sub">
                <div class="main1-text2">
                    예약은 손쉽게
                </div>
                <div class="main1-text2">
                     채팅으로
                </div>
                
                <div class="main-text-btn">
                  <a href="./Reserve" class="myButton">예약하기</a>
                </div>
                </div>
            </div>
          
        </div>

    </div>
    <div class="main background-color-yellow">
         <div class="container"  >
            <div class="main1-box1"  >
                <div class="main1-box1-sub">
                <div class="main1-text2">
                 내 취향의 책을
                </div>
                <div class="main1-text1">
                   추천받아보세요
                </div>
              
                <div class="main-text-btn">
                  <a href="./Join" class="myButton">회원되기</a>
                </div>
                </div>
            </div>
            <div class="main1-box2">
                <img src="../assets/images/analyzing.png" style="width:300px; height:300px; " />
            </div>
        </div>

    </div>

</div>


</template>

<script>
    export default {
        
        
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jua&family=Yantramanav&display=swap');
* {
    padding: 0;
    margin :0;
    font-family: 'Jua';
}  


.container {
    display: flex; 
    margin-top: 200px;  
 
}
.main{
    display:flex;
    width:100%;
    height:800px;
}
.main1-box1 {
    flex: 1;
    text-align: center;
  
}
.main1-box1-sub{
    width:500px;
    float:right;
   
}
.main1-box2{
    flex: 1;   
     
}
.main1-text1{
    font-size: 45px;
    font-weight: normal;
}
.main1-text2{
    font-size: 30px;
    font-weight: normal;
}
.myButton {
	background-color:#ffcdd2;
	border-radius:16px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Trebuchet MS;
	font-size:18px;
	padding:10px 17px;
	text-decoration:none;
}
.myButton:hover {
	background-color:#b2dfdb;
}
.myButton:active {
	position:relative;
	top:1px;
}
.main2-box1{
    flex: 1; 
   text-align:right;   
}

.main2-box2-sub{
    width:300px;
    float:left;
   
}
.background-color-pink{
    background:#ffcdd22f;
}
.background-color-white{
    background:#ffffff;
}
.background-color-blue{
    background:#b2dfdb2f;
}
.background-color-yellow{
    background:#fff9c42f;
}
.main2-text1{
    font-size: 55px;
    font-weight: bold; 
}


</style>