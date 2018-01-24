import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import {
  ADD_COUNT_1,
  REDUCE_COUNT_1
} from './mutation-types'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count1: 10,
  count2: 10,
  count3: 10,
  sum: 0,
  count4: 'hello',
  count5: 'o',
  count6: '0',
  get: 'getA,getB'
}


const getters = {
  count4: function (state) {
    console.log("before gettes:", state);
    return state.count4 += ' world'
  },
  sum: function (state) {
    state.sum = state.count1 + state.count2 + state.count3
    return state.sum
  }
}

// 定义所需的 mutations
const mutations = {
  [ADD_COUNT_1](state) {
    state.count1++
  },
  [REDUCE_COUNT_1](state) {
    state.count1--
  },
  add2(state) {
    state.count2 += 2
  },
  reduce2(state) {
    state.count2 -= 2
  },
  add3(state, n) {
    state.count3 += n
  },
  reduce3(state, n) {
    state.count3 -= n
  },
  action_test(state) {
    state.count5 += 'o'
  },
  action_test_fail(state) {
    state.count6 += '0'
  },
  getA(state, n) {
    state.get = 'get A success'
  },
  getB(state, n) {
    state.get = 'get B success'
  }
}


const actions = {
  action_test(context) {
    console.log(context);
    setTimeout(() => {
      Math.random() >= 0.5 ?
        context.commit('action_test') :
        context.commit('action_test_fail')
    }, 300);
  },
  async actionA({
    dispatch,
    commit,
    state
  }) {
    state.get = 'downloading A ...'
    commit('getA', await ajaxA())
  },
  async actionB({
    dispatch,
    commit
  }) {
    await dispatch('actionA') // 等待 acitonA 完成
    await sleep(1000)
    state.get = 'downloading B ...'
    await sleep(1000)
    commit('getB', await ajaxB())
  }
}

function ajaxA() {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      return resolve()
    }, 1000);
  })
}

function ajaxB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve()
    }, 1000);
  })
}

async function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, timeout);
  });
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
