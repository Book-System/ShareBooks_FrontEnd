<template>
 

 <hrader style="height:100px">
    <Header>
    </Header>
 </hrader>
  
  <main>
    <router-view></router-view>
  </main>
  <footer style="background-color: #ECE2E1; height:10%">
    <Footer>
    </Footer>
  </footer>





</template>



<script>

import Header from './components/Header3.vue';
import Footer from './components/Footer2.vue';

export default {
  components: {
    Header,
    Footer,
  }
}

</script>

<style>

  /* main {
    padding-top:200px;
    padding-bottom: 100px;
  } */
footer {
  margin-top: 30px;
  margin-bottom: 30px;
}

* {
  font-family: 'Jua', sans-serif;
}

</style>
