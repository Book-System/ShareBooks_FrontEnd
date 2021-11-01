<template>
          <div class="allcontainer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 card">
                        <div id="card1" class="card-body">
                            <label>리뷰쓰기</label>
                                <div class="star-rating space-x-4">
                                  <input type="radio" id="5-stars" name="rating" value="5" v-model="ratings"/>
                                  <label for="5-stars" class="star pr-4">★</label>
                                  <input type="radio" id="4-stars" name="rating" value="4" v-model="ratings"/>
                                  <label for="4-stars" class="star">★</label>
                                  <input type="radio" id="3-stars" name="rating" value="3" v-model="ratings"/>
                                  <label for="3-stars" class="star">★</label>
                                  <input type="radio" id="2-stars" name="rating" value="2" v-model="ratings"/>
                                  <label for="2-stars" class="star">★</label>
                                  <input type="radio" id="1-star" name="rating" value="1" v-model="ratings" />
                                  <label for="1-star" class="star">★</label>
                                </div>

                            <div class="form-floating">
                                <textarea class="form-control" placeholder="호스트에게 요청할 사항을 입력하세요" id="floatingTextarea2" style="height: 100px"></textarea>
                            </div>
                            <br/>
                            
                        <div class="text-right">
                            <div class="stars starrr" data-rating="0"></div>
                            <a class="btn btn-danger btn-sm" href="#" id="close-review-box" style="display:none; margin-right: 10px;"></a>
                            <!-- <button id="cancel" class="btn btn-danger" type="submit">cancel</button> -->
                            <button class="btn btn-success btn-lg" type="submit">Save</button>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        
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
    .allcontainer {
        padding-left: 500px;
    }

        .star-rating label {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2.3px;
    -webkit-text-stroke-color: #2b2a29;
    cursor: pointer;
    }
    
    .star-rating :checked ~ label {
    -webkit-text-fill-color: gold;
    }
    
    .star-rating label:hover,
    .star-rating label:hover ~ label {
    -webkit-text-fill-color: #fff58c;
    }

    .animated {
    -webkit-transition: height 0.2s;
    -moz-transition: height 0.2s;
    transition: height 0.2s;
    }


    .star-ratings {
    color: #aaa9a9; 
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
    }
    
    .star-ratings-fill {
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
    }
    
    .star-ratings-base {
    z-index: 0;
    padding: 0;
    }

    .star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2.25rem;
    line-height: 2.5rem;
    justify-content: space-around;
    padding: 0 0.2em;
    text-align: center;
    width: 5em;
    }
    
    .star-rating input {
    display: none;
    }
</style>