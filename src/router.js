import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
// import HelloWorld from '@/components/HelloWorld';

// 懒加载

const NotFound = () => import('./views/404.vue');
const ES6_content = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/Content.vue');
const ES6_overview = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/overview.vue');
const ES6_code = () =>
    import( /* webpackChunkName: "group-ES6" */ './views/ES6/code.vue');

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

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        //   component: Home,
        redirect: '/home/es6'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'es6',
            component: ES6_content,
            children: [{
                path: '',
                component: ES6_overview
            },
            {
                path: 'es6overview',
                component: ES6_overview
            },
            {
                path: 'es6code',
                component: ES6_code
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
    { path: '*', component: NotFound },//全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
    ]
});
