import Vue from 'vue';
import App from './App.vue';
import router from './router';


//引用axios，并设置基础URL作为后端服务api地址
let axios = require('axios');
axios.defaults.baseURL = "http://127.0.0.1:8081/fcebs";

//将API方法绑定到全局
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
