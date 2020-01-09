import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// '@/' 见jsconfig.js =>"@/*": ["src/*"]

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 写法一
new Vue({
  el: '#app',
  router, // (缩写) 相当于 routes: routes
  // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
  store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  // 视图渲染 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例
  render: h => h(App)
  // components: { App } //不起作用
})
// 写法二 可行
/* new Vue({
  el: '#app',
  router,
  store,
  components: { App }, // 注释掉这行 不可行
  render(createElement) {
    return createElement('App')
  }
}) */

// 写法三 不可行
/* new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
}) */

// new Vue({
//  render: function(h) {
//    return h(App)
//  }
// }).$mount('#app')
