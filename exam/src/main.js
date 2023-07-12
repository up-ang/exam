// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import store from '@/vuex/store'

Vue.use(ElementUI)
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.bus = new Vue() //事件总线对象
Vue.prototype.$echarts = echarts//将 echarts 库挂载到 Vue 实例的原型上，以便在 Vue 组件中可以通过 this.$echarts 来访问和使用 echarts 库的功能
//引入axios,Vue.prototype.$axios = axios 将axios赋值给Vue原型上的$axios属性。
// 这样，在Vue实例中就可以通过this.$axios来使用axios库提供的方法，例如发起HTTP请求。
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
