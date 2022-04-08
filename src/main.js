import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faBriefcase, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUser, faChartSimple, faPlaneUp, faEarthAsia, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faUser, faArrowRight, faBriefcase, faChartSimple, faPlaneUp, faEarthAsia, faFolderOpen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
