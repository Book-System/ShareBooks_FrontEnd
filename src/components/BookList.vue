<template>
    <div class="container">
        <div class="row g-0">
            <div class="col-md-7" style="background-color: #eee; text-align: center; ">
                <div style="width: 100%; height: 80%;">
                    <h1>지도</h1>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">아니 왜 가운데 정렬이 안돼?</button>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card" style="padding: 10px;">
                    <h5>플레이스</h5>
                    <div class="card-body" v-for="item in 4" :key="item">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../assets/logo.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <p>빌려주는 사람님의 홈짐</p>
                                <p>[도시뷰_인하우스 홈짐] 강남역이 코앞, 분당 서현역에서 차로 20분</p>
                                <p>리뷰가 없습니다.</p>
                                <p>서울 강남구 가로수길 5</p>
                            </div>
                        </div>
                        <hr>
                    </div>
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

</style>