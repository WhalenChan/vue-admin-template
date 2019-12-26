import Vuex from 'vuex'
const moduleA = {
  state: { },
  mutations: { },
  actions: { },
  getters: { }
}

const moduleB = {
  state: { },
  mutations: { },
  actions: { }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA, // 可以简写
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
