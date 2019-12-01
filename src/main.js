import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHtml2Canvas from 'vue-html2canvas';


import App from './App.vue'

import routes from './routes';


Vue.use(VueRouter);
Vue.use(VueHtml2Canvas);



const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
