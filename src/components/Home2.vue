<template>
<div class="home">
    <div class="main background-color-pink">
        <div class="container"  >
            <div class="main1-box1"  >
                <div class="main1-box1-sub">
                <div class="main1-text1">
                    Search for Books
                </div>
                <div class="main1-text2">
                     around you
                </div>
                <div class="main-text-btn">
                  <a href="./BookList2" class="myButton">Take a look</a>
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
                <div class="main2-text1">
                    Sharing
                </div>
                <div class="main1-text2">
                   Unused Books
                </div>
                <div class="main-text-btn">
                  <a href="./Register" class="myButton">Register</a>
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
                    Book of the
                </div>
                 <div class="main1-text1">
                   Month
                </div>
                <div class="main-text-btn">
                  <a href="./Slider2" class="myButton">Recommend</a>
                </div>
                </div>
            </div>
            <div class="main1-box2">
                <img src="../assets//images/Winners1.png" style="width:300px; height:300px; " />
            </div>
        </div>

    </div>
    <div class="main background-color-white">
         <div class="container"  >
            <div class="main2-box1">
                <img src="../assets//images/chatting2.png" style="width:300px; height:300px; " />
            </div>
            <div class="main1-box1"  >
                <div class="main2-box2-sub">
                <div class="main1-text1">
                    Reserve
                </div>
                <div class="main1-text2">
                     By Chat
                </div>
                <div class="main-text-btn">
                  <a href="./Reserve" class="myButton">Reservation</a>
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
                  Recommendation through
                </div>
                <div class="main1-text1">
                   taste analysis
                </div>
              
                <div class="main-text-btn">
                  <a href="./Join" class="myButton">Please Join</a>
                </div>
                </div>
            </div>
            <div class="main1-box2">
                <img src="../assets//images/analyzing.png" style="width:300px; height:300px; " />
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
    font-size: 55px;
    font-weight: bold;
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
	font-size:20px;
	padding:13px 17px;
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