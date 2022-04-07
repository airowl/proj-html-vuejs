<template>
  <div id="app">
    <!-- HEADER -->
    <Header />

    <!-- MAIN -->
    <Main />

    <!-- FOOTER -->
    <Footer />

    <div id="try">
      <h1>Lorem Ipsum H1</h1>
      <h2>Lorem Ipsum H2</h2>
      <h5>Lorem Ipsum H5</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur sed autem dolorem harum dignissimos natus assumenda illo labore nulla cumque, nam inventore, consectetur, facilis perferendis quia cupiditate libero ut.</p>
      <p>Uppercase Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur sed autem dolorem harum dignissimos natus assumenda illo labore nulla cumque, nam inventore, consectetur, facilis perferendis quia cupiditate libero ut.</p>
      <a href="#">
        Lorem Ipsum
      </a>
      <a href="#">
        Lorem Ipsum uppercase
      </a>
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
