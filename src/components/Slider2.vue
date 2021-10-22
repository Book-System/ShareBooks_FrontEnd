<template>
    <div id="banner" class="col bg-dark p-5 rounded">
          <h3 class="mypage">이달의 대여</h3><br/>
          <h5 class="mypage">가장 많이 대여한 이달의 대여는?!</h5>
    </div><br/>

<div class="container">
  
  <div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators mb-0 pb-0">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner no-padding my-5">
    <div class="carousel-item active">
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://www.greenart.co.kr/upimage/new_editor/201712/20171213171136.jpg">
        </a>
        <p></p>
      </div>

      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top rounded-bottom" src="http://www.greenart.co.kr/upimage/new_editor/201712/20171213171136.jpg">
        </a>
        <p></p>
      </div>

      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top rounded-bottom" src="http://www.greenart.co.kr/upimage/new_editor/201712/20171213171136.jpg">
        </a>
        <p> </p>
      </div>

    </div>
    <div class="carousel-item">
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://via.placeholder.com/300x300">
          <div class="card-img-overlay t_img">
            <span class="float-left text-uppercase">article</span>
            <span class="float-right text-uppercase">2345 views</span>
          </div>
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quam obcaecati maiores atque labore fugiat tenetur tempore veritatis temporibus!</p>

      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://via.placeholder.com/300x300">
          <div class="card-img-overlay t_img">
            <span class="float-left text-uppercase">article</span>
            <span class="float-right text-uppercase">2345 views</span>
          </div>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quam obcaecati maiores atque labore fugiat tenetur tempore veritatis temporibus!
        </p>

      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://via.placeholder.com/300x300">
          <div class="card-img-overlay t_img">
            <span class="float-left text-uppercase">article</span>
            <span class="float-right text-uppercase">2345 views</span>
          </div>
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quam obcaecati maiores atque labore fugiat tenetur tempore veritatis temporibus!</p>

      </div>
    </div>
    <div class="carousel-item">
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://via.placeholder.com/300x300">
          <div class="card-img-overlay t_img">
            <span class="float-left text-uppercase">article</span>
            <span class="float-right text-uppercase">2345 views</span>
          </div>
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quam obcaecati maiores atque labore fugiat tenetur tempore veritatis temporibus!</p>

      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://via.placeholder.com/300x300">
          <div class="card-img-overlay t_img">
            <span class="float-left text-uppercase">article</span>
            <span class="float-right text-uppercase">2345 views</span>
          </div>
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quam obcaecati maiores atque labore fugiat tenetur tempore veritatis temporibus!</p>

      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
        <a href="#" onclick=abc(this) class="slider_info">
          <img class="img-fluid card-img-top" src="http://via.placeholder.com/300x300">
          <div class="card-img-overlay t_img">
            <span class="float-left text-uppercase">article</span>
            <span class="float-right text-uppercase">2345 views</span>
          </div>
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt quam obcaecati maiores atque labore fugiat tenetur tempore veritatis temporibus!
        </p>

      </div>
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
     <span class="carousel-control-prev-icon sp"></span>
                </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon sp"></span>
                </a>
</div>
</div>





    
</template>

<script>
    
</script>

<style>

.col-md-4{
  display: inline-block;
  margin-left:-10px;
}
.col-md-4 img{
  width:100%;
  height:auto;
}
  
body .carousel-control-prev-icon,
body .carousel-indicators li,
body .carousel-control-next-icon{
  background-color:#000;
}

span.carousel-control-prev-icon {
 position: relative;
 bottom: 40px;
 right: 40px;
}

span.carousel-control-next-icon {
 position: relative;
 bottom: 40px;
}

</style>