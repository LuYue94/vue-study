import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router.js';
import store from './store/store'

import './directives/demo';
import './filters/capitalize';

Vue.config.productionTip = false;



router.beforeEach((to, from, next) => {
  console.log("%c from",'color:red',from.fullPath)
  console.log("%c to","color:red",to.fullPath)

  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

// render( createElement ){}
// 返回 vnode
