<template>
  <div id="nav">
    <router-link to="/"></router-link>
  </div>

  <header>
    <Header>
    </Header>
    </header>
  <main>
    <router-view></router-view>
  </main>
  <footer >
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





</style>
