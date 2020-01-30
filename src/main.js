import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import FastClick from 'fastclick'

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

// 全局引入UI库 vant
import '@/plugins/vant'
// 全局引入rem
import '@/util/rem'
// 全局引入 Reset-css
import 'reset-css'
//  全局引入 过滤器
import '@/util/filter'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
