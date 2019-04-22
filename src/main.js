// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/global.scss'
import '@/assets/styles/icons/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'
import echarts from  'echarts'
import store from './store'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
