import Vue from 'vue'
import Router from 'vue-router'

// 解决多次点击重复路由报错
const originPush = Router.prototype.push
Router.prototype.push = (location) => {
  return originPush.call(this, location).catch(err => err)
}

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'
import state from '@/store/state'

// 懒加载二级组件 Tarbar
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Eat = () => import('../views/eat/Eat.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Mine = () => import('../views/mine/Mine.vue')


// Mine的子组件 用户中心
// 绿卡会员
const MyVip = () => import('../views/mine/children/MyVip.vue')
// 我的订单
const Order = () => import('../views/order/Order.vue')
Vue.use(Router)

const router = new Router({
  //解决路由跳转页面没有置顶
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  // !!注意: 二级路由不需要加 '/'
  routes: [{
    path: '/',
    redirect: '/dashboard',
    meta: {
      keepAlive: true
    }
  }, {
    // 根页面
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [{
      path: '/dashboard',
      redirect: '/dashboard/home',
      meta: {
        keepAlive: true
      }
    }, {
      //主页
      path: 'home',
      name: 'home',
      component: Home,
      meta: {
        // 是否数据缓存
        keepAlive: true
      }
    }, {
      //分类
      path: 'category',
      name: 'category',
      component: Category,
      // 是否数据缓存
      meta: {
        keepAlive: true
      }
    }, {
      // 吃什么
      path: 'eat',
      name: 'eat',
      component: Eat,
      meta: {
        keepAlive: true
      }
    }, {
      // 购物车
      path: 'cart',
      name: 'cart',
      component: Cart,
      meta: {
        keepAlive: true
      }
    }, {
      // 我的
      path: 'mine',
      name: 'mine',
      component: Mine,
      children: [{
        // 绿卡会员
        path: 'myVip',
        name: 'myVip',
        component: MyVip,
      }]
    }, {
      path: 'order',
      name: 'order',
      component: Order
    }]
  }]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (state.userInfo.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router