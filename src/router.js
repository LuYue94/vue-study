import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
// import HelloWorld from '@/components/HelloWorld';

// 懒加载

const NotFound = () => import('./views/404.vue');
const Content = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/Content.vue');
const overview = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/overview.vue');
const code = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/code.vue');
const promise = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/promise.vue');
const iterator = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/iterator.vue');
const generator = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/generator.vue');
const async = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/async.vue');
const es6class = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/es6class.vue');
const module = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/module.vue');

const E = () =>
    import( /* webpackChunkName: "group-ele" */ './views/element/Element.vue');

const V = () =>
    import( /* webpackChunkName: "group-vue" */ './views/vue/V.vue');
const Life = () =>
    import( /* webpackChunkName: "group-vue" */ './views/vue/Life.vue');
const Base = () =>
    import( /* webpackChunkName: "group-vue" */ './views/vue/Base.vue');

const Vuex = () =>
    import( /* webpackChunkName: "group-Vuex" */ './views/vue/Vuex.vue');
const Note = () =>
    import( /* webpackChunkName: "group-Note" */ './views/vue/Note.vue');
const VRouter = () =>
    import( /* webpackChunkName: "group-VRouter" */ './views/vue/VRouter.vue');


Vue.use(Router);

function getAbsoultePath() {
    let path = location.pathname
    return path.substring(0, path.lastIndexOf('/') + 1)
}

export default new Router({
    mode: 'history',
    // base: '/',
    routes: [{
        path: '/',
        //   component: Home,
        redirect: '/home/es6/overview'
    },
    // {
    //     path: '/vue.html',
    //     //   component: Home,
    //     redirect: '/home/es6/overview'
    // },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'es6',
            component: Content,
            children: [{
                path: '',
                redirect: 'overview'
                // component: overview
            },
            {
                path: 'overview',
                component: overview
            },
            {
                path: 'code',
                component: code
            },
            {
                path: 'promise',
                component: promise
            }
                ,
            {
                path: 'iterator',
                component: iterator
            }
                ,
            {
                path: 'generator',
                component: generator
            },
            {
                path: 'async',
                component: async
            }
                ,
            {
                path: 'class',
                component: es6class
            }
                ,
            {
                path: 'module',
                component: module
            }
            ]
        }, {
            path: 'ele',
            component: E
        },
        {
            path: 'vue',
            component: V,
            children: [{
                path: '',
                component: Base
            }, {
                path: 'base',
                component: Base
            }, {
                path: 'life',
                component: Life
            },]
        },
        {
            path: 'vuex',
            component: Vuex
        },
        {
            path: 'note',
            component: Note
        },
        {
            path: 'vrouter',
            component: VRouter
        },
        ]
    },
    { path: '*', redirect: '/home/es6/overview' },//全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
    ]
});
