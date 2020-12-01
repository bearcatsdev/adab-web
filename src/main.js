import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'

Vue.config.productionTip = false


const DEFAULT_TITLE = 'Adab - Ayo Dengar Ayo Bicara'
router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
