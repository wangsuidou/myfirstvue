// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Worldcloud = require('./components/cloud.vue')

const routes = [
  { path: '/', redirect: '/wordcloud' },
  { path: '/wordcloud', component: Worldcloud }
]

// 创建router实例
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
