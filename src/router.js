import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
// import HelloWorld from '@/components/HelloWorld';

// 懒加载
const E = () =>
  import ( /* webpackChunkName: "group-ele" */ './views/element/Element.vue');
const V = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/Vue.vue');
const Vuex = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/Vuex.vue');
const Note = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/Note.vue');
const VRouter = () =>
  import ( /* webpackChunkName: "group-vue" */ './views/vue/VRouter.vue');


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
          path: 'ele',
          component: E
        },
        {
          path: 'vue',
          component: V
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
