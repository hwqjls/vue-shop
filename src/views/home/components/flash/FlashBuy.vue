<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月30日 16:11:42
* @Description: 
-->
<template>
  <div id='wrapper'>
    <div class="titleWrapper">
      <div class="title">限时抢购</div>
      <van-count-down :time="time"
                      class="countStyle"
                      format="HH mm ss">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <!-- 更多按钮 -->
      <div class="more">更多</div>
    </div>
    <!-- 限时抢购商品 遍历父组件传来的数据并传给子组件 -->
    <FlashFood :flash_sale_product_list="flash_sale_product_list"></FlashFood>
  </div>
</template>

<script>
import FlashFood from './FlashFood'

export default {
  props: {
    flash_sale_product_list: Array
  },
  components: {
    FlashFood
  },
  data () {
    return {
      time: 30 * 60 * 1000 * 100
    };
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
//@import url();

#wrapper {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
  background-color: white;

  .titleWrapper {
    margin: 0 0.625rem 0.625rem;
    height: 1.5625rem;

    .title {
      display: inline-block;
      height: 1.3125rem;
      padding-left: 0.3125rem;
      border-left: solid 4px #3cb963;
      line-height: 1.3125;
      font-size: 1.1875rem;
      vertical-align: middle;
    }

    .countStyle {
      float: left;
      margin-left: 0.7rem;

      .item {
        display: inline-block;
        width: 22px;
        margin-right: 5px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #000;
      }
    }

    .more {
      float: right;
      color: #3cb963;
      font-size: 0.8rem;
    }
  }
}
</style>