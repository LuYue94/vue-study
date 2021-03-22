import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress' // progress bar
// import '@/components/NProgress/nprogress.less' // progress bar custom style
import router from './router.js';
import store from './store/store';
import { setDocumentTitle, domTitle } from '@/utils/domUtil'

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

// global filters
import * as filters from './filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false;
Vue.use(ElementUI)


NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${(to.meta.title)} - ${domTitle}`))
    console.log("%c from", 'color:red', from.fullPath)
    console.log("%c to", "color:red", to.fullPath)
    NProgress.done()

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
