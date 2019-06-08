import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.filter('currency', (value) => {
  return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2}) + ' TL';
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
