<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="padding: 30px; background-color: #fff;">
            <div class="container-fluid" style="padding-left:200px">
                <a class="navbar-brand" href="#" @click="handleHome">책 시스템</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>   
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex mx-auto order-0">
                        <input class="form-control me-2" type="search" placeholder="지역 이름을 검색하세요!" aria-label="Search" style="width:300px">
                    </form>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="handleLogin">로그인</a>
                        </li>
                        <li class="nav-item" v-if="!flag">
                            <a class="nav-link" href="#" @click="handleJoin">회원가입</a>
                        </li>
                        <li class="nav-item dropdown" v-if="flag">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                boolce
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">내정보보기</a></li>
                                <li><a class="dropdown-item" href="#">책예약내역</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">로그아웃</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        methods: {
            handleHome() {
                this.$router.push({path: '/'});
            },
            handleLogin() {
                this.$router.push({path: '/login'});
            },
            handleJoin() {
                this.$router.push({path:'/join'});
            }
        }

    }
</script>

<style scoped>


</style>