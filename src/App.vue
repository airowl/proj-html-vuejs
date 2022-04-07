<template>
  <div id="app">

    <!-- HEADER -->
    <Header />

    <!-- MAIN -->
    <Main />

    <!-- FOOTER -->
    <Footer />
    
    <button class="empty">
      Read more
    </button>
    <button class="full">
      Get in touch
    </button>
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
