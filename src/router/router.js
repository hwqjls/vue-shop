import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Eat = () => import('../views/eat/Eat.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Mine = () => import('../views/mine/Mine.vue')
const Order = () => import('../views/order/Order.vue')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/dashboard'
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [{
      path: '/dashboard',
      redirect: '/dashboard/home'
    }, {
      path: 'home',
      name: 'home',
      component: Home,
      meta: {
        // 是否数据缓存
        keepAlive: true
      }
    }, {
      path: 'category',
      name: 'category',
      component: Category
    }, {
      path: 'eat',
      name: 'eat',
      component: Eat
    }, {
      path: 'cart',
      name: 'cart',
      component: Cart
    }, {
      path: 'mine',
      name: 'mine',
      component: Mine
    }, {
      path: 'order',
      name: 'order',
      component: Order
    }]
  }]
})