<template>
 

 <hrader style="height:100px">
    <Header>
    </Header>
 </hrader>
  
  <main>
    <router-view></router-view>
  </main>

    <footer style="background-color: #d1c4e92d; height:10%">
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
* {
  font-family: 'Jua', sans-serif;
}



</style>
