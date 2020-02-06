<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年02月01日 14:14:21
* @Description: 
-->
<template>
  <div id='tabbarItem'>
    <van-tabs v-model="active"
              ref="tabs"
              animated
              swipeable
              :border="false"
              :offset-top="47"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list"></ProduceItem>
      </van-tab>
      <!-- 晚餐 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
      <!-- 人气 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <!-- 心选 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/javascript">
import ProduceItem from './ProduceItem'

export default {
  props: {
    tabbar_all_product_list: Array,
    flash_sale_product_list: Array
  },
  components: {
    ProduceItem
  },
  data () {
    return {
      active: 0,
      itemsTitle: ['全部', '晚餐', '人气', '心选']
    }
  }
}
</script>

<style lang="less" scoped>
#tabbarItem {
  width: 100%;
}
</style>