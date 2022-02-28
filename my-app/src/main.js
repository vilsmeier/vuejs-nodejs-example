import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from "../router";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// new Vue({
//   render: h => h(App),
//   el: '#app',
//   router,
//
//   // components: { App },
//   // template: '<App/>'
// })

Vue.use(BootstrapVue);

