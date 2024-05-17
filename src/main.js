import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/sass/reset.scss'
import "@/assets/font/font.css"
// import VChart from '@visactor/vchart';
Vue.config.productionTip = false
// Vue.use(VChart)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
