<template>
  <div id="app">

    <!-- HEADER -->
    <Header />

    <!-- MAIN -->
    <Main 
      @features="getFeatures"
    />

    <!-- FOOTER -->
    <Footer 
      :featuresElements="features"
    />
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
  },
  data: function(){
    return{
      features: [],
    }
  },
  methods: {
    getFeatures(arrayObj){
      this.features = arrayObj
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';


</style>
