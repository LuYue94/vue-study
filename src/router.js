import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
// import HelloWorld from '@/components/HelloWorld';

// 懒加载

const ES6_content = () =>
  import ( /* webpackChunkName: "group-ES6" */ './views/ES6/Content.vue');
const ES6 = () =>
  import ( /* webpackChunkName: "group-ES6" */ './views/ES6/overview.vue');

const E = () =>
  import ( /* webpackChunkName: "group-ele" */ './views/element/Element.vue');

const V = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/V.vue');
const Life = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/Life.vue');
const Base = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/Base.vue');

const Vuex = () =>
  import ( /* webpackChunkName: "group-Vuex" */ './views/vue/Vuex.vue');
const Note = () =>
  import ( /* webpackChunkName: "group-Note" */ './views/vue/Note.vue');
const VRouter = () =>
  import ( /* webpackChunkName: "group-VRouter" */ './views/vue/VRouter.vue');


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
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
              component: ES6
            },
            {
              path: 'es60',
              component: ES6
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
          },{
            path: 'base',
            component: Base
          }, {
            path: 'life',
            component: Life
          }, ]
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
    }
  ]
});
