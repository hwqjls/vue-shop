<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月27日 19:49:58
* @Description: 
-->
<template>
  <div id='home'>
    <div v-if="!isShowLoading">
      <!-- 头部地理位置和搜索框 -->
      <div class="head">
        <Header></Header>
        <!-- 轮播图 -->
        <Swing :swing_list="swing_list" />
        <!-- tip -->
        <Tip :home_ad="home_ad" />
      </div>
      <!-- Nav -->
      <Nav :nav_list="nav_list" />
      <!-- 跳转到会员界面 -->
      <VipTip></VipTip>
      <!-- 限时抢购 -->
      <FlashBuy :flash_sale_product_list="flash_sale_product_list"></FlashBuy>
      <!-- 特色专区 -->
      <SpecialZone></SpecialZone>
      <!-- TabbarItem 商品 -->
      <TabbarGoodsItem :tabbar_all_product_list="tabbar_all_product_list"
                       :flash_sale_product_list="flash_sale_product_list"></TabbarGoodsItem>
    </div>
    <van-loading v-else
                 size="24px"
                 class="loading">数据拼命加载中...</van-loading>
    <!-- 回到顶部按钮 -->

  </div>
</template>

<script>
import { getHomeData } from '@/serve/api/index.js'
// import { showBackIcon, animate } from '@/util/global.js'

// 引入Vuex
import { mapMutations, mapState } from 'vuex'

import { ADD_TO_CART } from '@/util/pubsub_type.js'

// 引入页面组件
import Header from './components/header/Header'
import Swing from './components/swing/Swing'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import VipTip from './components/myVip/VipTip'
import FlashBuy from './components/flash/FlashBuy'
import SpecialZone from './components/special/SpecialZone'
import TabbarGoodsItem from './components/tabbar/TabbarGoodsItem'
import Loading from '@/components/loading/Loading'

export default {
  components: {
    Header,
    Swing,
    Tip,
    Nav,
    VipTip,
    FlashBuy,
    SpecialZone,
    TabbarGoodsItem,
    Loading
  },
  data () {
    return {
      swing_list: [],             // 首页轮播图数据
      isShowLoading: true,        // 是否加载动画
      nav_list: [],
      flash_sale_product_list: [],  // 限时枪口
      tabbar_all_product_list: [],
      specialZone: {},              // 特色专区数据
      home_ad: ''
    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    // Vuex中的方法
    ...mapMutations(['ADD_GOODS', 'ADD_TO_CART']),
    async _initData () {
      const response = await getHomeData();

      if (response.success) {
        const data = response.data

        // 给轮播组件 sowing_list赋值
        this.swing_list = data.list[0].icon_list;
        // navList 赋值
        this.nav_list = data.list[2].icon_list;
        // 给限时抢购赋值
        this.flash_sale_product_list = data.list[3].product_list;
        // 给Tabbar 商品列表赋值
        this.tabbar_all_product_list = data.list[12].product_list;
        this.isShowLoading = false
        // 给特色专区赋值
        this.specialZone = data.special_zone;
        // 获取首页广告图
        this.home_ad = data.home_ad.image_url;
      }
    }
  },
  mounted () {
    this._initData()
  }
}
</script>

<style lang='less' scoped>
//@import url();

#home {
  background-color: "#f5f5f5";
  width: 100%;
  height: 300rem;
  .head {
    width: 100%;
    margin-top: -1.5rem;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }

  .loading {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%);
  }
}
</style>