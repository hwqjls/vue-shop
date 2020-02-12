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
      <!-- 给购物车的Tabbar价格ID 方便做加入购物车的小球动画 -->
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
    <!-- 是否缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { setLocalStore, getLocalStore } from '@/util/global.js'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'DashBoard',
  components: {},
  data () {
    return {
      curIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: this.$t('home.home'),
          normal: require('@/assets/images/tabbar/home_default.png'),
          active: require('@/assets/images/tabbar/home_selected.png')
        },
        {
          name: "category",
          title: this.$t('home.category'),
          normal: require('@/assets/images/tabbar/category_default.png'),
          active: require('@/assets/images/tabbar/category_selected.png')
        },
        {
          name: "eat",
          title: this.$t('home.eat'),
          normal: require('@/assets/images/tabbar/eat_default.png'),
          active: require('@/assets/images/tabbar/eat_selected.png')
        },
        {
          name: "cart",
          title: this.$t('home.cart'),
          normal: require('@/assets/images/tabbar/shoppingcart_default.png'),
          active: require('@/assets/images/tabbar/shoppingcart_selected.png')
        },
        {
          name: "mine",
          title: this.$t('home.mine'),
          normal: require('@/assets/images/tabbar/mine_default.png'),
          active: require('@/assets/images/tabbar/mine_selected.png')
        }
      ]
    };
  },
  computed: {
    ...mapState(['shopCart'], ['userInfo']),
    goodsNum () {
      let num = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num
      })
      if (num > 0) {
        return num;
      }
    }
  },
  methods: {
    // 0. 延展mutations方法
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    // 1.点击tabbar触发的方法
    tab (index, val) {
      this.curIndex = index;
      this.$router.push(val);
    },
    // 2.初始化购物车数据
    _initData () {
      this.INIT_SHOP_CART();
      this.INIT_USER_INFO();
    },
    tabbarSelected (item) {
      const mapType = {
        home: 0,
        category: 1,
        eat: 2,
        cart: 3,
        mine: 4
      }
      this.active = mapType[item]
    }
  }
}
</script>

<style lang='less' scoped>
//@import url();
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.moveToCart {
  animation: mymove 0.5s ease-in-out;
}
</style>