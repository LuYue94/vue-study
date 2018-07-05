import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router.js';
import store from './store/store';

// 代码高亮插件 highlight.js
// 使用方法 https://my.oschina.net/ahaoboy/blog/1634538
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'
Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})


import './directives/demo';
import './filters/capitalize';

Vue.config.productionTip = false;



router.beforeEach((to, from, next) => {
    console.log("%c from", 'color:red', from.fullPath)
    console.log("%c to", "color:red", to.fullPath)

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
