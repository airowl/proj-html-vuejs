<template>
  <div id="app">
    <!-- HEADER -->
    <Header />

    <!-- MAIN -->
    <Main />

    <!-- FOOTER -->
    <Footer />

    <div id="try">
      
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/main-elements/Main.vue'
import Footer from './components/footer-elements/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';


</style>
