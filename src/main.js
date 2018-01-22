import Vue from 'vue';
import App from './App';
import router from './router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './directives/demo';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// render( createElement ){}
// 返回 vnode
