<template>
    <div class="container">
        <div>
            <div>
                <h3><strong>오늘의 상품 추천</strong></h3>
            </div>
            <div class="row g-0" v-for="item in 4" :key="item" style="margin-top: 20px;">
                <div class="col-md-3" v-for="item in 4" :key="item" style="text-align: center; ">
                    <div>
                        <div class="card">
                            <div class="card-body" style="padding: 0px;">
                                <div>
                                    <img src="../images/logo2.png" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div style="padding: 10px;">
                                    <div style="text-align: left; font-size: 16px; font-weight: bold;">
                                        <p>맥도날드 인형 대여합니다.</p>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; item-align: center;">
                                        <div style="font-size: 18px; font-weight: bold">
                                            <p>12,000원</p>
                                        </div>
                                        <div>
                                            <p>2시간 전</p>
                                        </div>
                                    </div>
                                </div>
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
        
    }
</script>

<style scoped>

</style>