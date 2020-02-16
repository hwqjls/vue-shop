<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月27日 19:53:49
* @Description: 
-->
<template>
  <div id='dashboard'>
    <van-tabbar v-model="active"
                :safe-area-inset-bottom="true"
                class="active_tab"
                active-color="#75a342">
      <van-tabbar-item replace
                       to="/dashboard/home">
        <span>首页</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? home_icon.active : home_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item replace
                       to="/dashboard/category">
        <span>分类</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? category_icon.active : category_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item replace
                       to="/dashboard/eat">
        <span>吃什么</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? eat_icon.active : eat_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item replace
                       to="/dashboard/cart">
        <span>购物车</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? cart_icon.active : cart_icon.normal">
      </van-tabbar-item>

      <van-tabbar-item replace
                       to="/dashboard/mine">
        <span>我的</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? mine_icon.active : mine_icon.normal">
      </van-tabbar-item>

    </van-tabbar>

    <!-- 缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  components: {},
  data () {
    return {
      active: 0,
      home_icon: {
        normal: require('@/assets/images/tabbar/home_default.png'),
        active: require('@/assets/images/tabbar/home_selected.png')
      },
      category_icon: {
        normal: require('@/assets/images/tabbar/category_default.png'),
        active: require('@/assets/images/tabbar/category_selected.png')
      },
      eat_icon: {
        normal: require('@/assets/images/tabbar/eat_default.png'),
        active: require('@/assets/images/tabbar/eat_selected.png')
      },
      cart_icon: {
        normal: require('@/assets/images/tabbar/shoppingcart_default.png'),
        active: require('@/assets/images/tabbar/shoppingcart_selected.png')
      },
      mine_icon: {
        normal: require('@/assets/images/tabbar/mine_default.png'),
        active: require('@/assets/images/tabbar/mine_selected.png')
      }
    };
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
//@import url();
#dashboard {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style> 