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
      <Header></Header>
      <!-- 轮播图 -->
      <Swing :swing_list="swing_list"></Swing>
      <!-- tip -->
      <Tip></Tip>
      <!-- Nav -->
      <Nav :nav_list="nav_list"></Nav>
      <!-- 限时抢购 -->
      <FlashBuy :flash_sale_product_list="flash_sale_product_list"></FlashBuy>
    </div>
    <van-loading v-else
                 size="24px"
                 class="loading">数据拼命加载中...</van-loading>
    <!-- 回到顶部按钮 -->
    <BackTop v-if="showBackToTop"
             v-on:scrollToTop="scrollToTop"></BackTop>
  </div>
</template>

<script>
import { getHomeData } from './../../serve/api/index.js'
import { showBackIcon, animate } from './../../util/global.js'

import Header from './components/header/Header'
import Swing from './components/swing/Swing'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import FlashBuy from './components/flash/FlashBuy'
import BackTop from '../../components/backToTop/BackTop'

export default {
  components: {
    Header,
    Swing,
    Tip,
    Nav,
    FlashBuy,
    BackTop
  },
  data () {
    return {
      swing_list: [],
      isShowLoading: true,
      nav_list: [],
      flash_sale_product_list: [],
      showBackToTop: false
    }
  },
  methods: {
    scrollToTop () {
      let documentBody = document.documentElement || document.body;
      // 做缓动动画
      animate(documentBody, { scrollTop: '0' }, 400, 'ease-out');
    }
  },
  created () {
    getHomeData().then(response => {
      if (response.success) {
        this.swing_list = response.data.list[0].icon_list;
        this.nav_list = response.data.list[2].icon_list;
        this.flash_sale_product_list = response.data.list[3].product_list;
        // 数据加载完成后不显示加载中...
        this.isShowLoading = false;

        // 是否显示回到顶部图标
        showBackIcon((status) => {
          this.showBackToTop = status;
        })
      }
    }).catch(error => {
      console.log(error);
    });
  },
}
</script>

<style lang='less' scoped>
//@import url();

#home {
  background-color: "#f5f5f5";
  width: 100%;
  height: 300rem;

  .loading {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%);
  }
}
</style>