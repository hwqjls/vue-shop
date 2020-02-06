<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月27日 19:48:31
* @Description: 
-->
<template>
  <div class='category'>
    <div v-if="!isShowLoading">
      <!-- 头部搜索栏 -->
      <SearchHead></SearchHead>
      <!-- 左边列表菜单栏 -->
      <CategoryItems :categoryLists="categoryLists"></CategoryItems>
      <!-- 右边内容栏 -->
      <CategoryContent></CategoryContent>
    </div>
    <van-loading v-else
                 size="24px"
                 class="loading">
      数据拼命加载中...
    </van-loading>
  </div>
</template>

<script>
import SearchHead from './components/SearchHead'
import CategoryItems from './components/CategoryItems'
import CategoryContent from './components/CategoryContent'

import { getCategoryData, getCategoryDetailData } from '../../serve/api/index.js'

export default {
  components: {
    SearchHead,
    CategoryItems,
    CategoryContent
  },
  data () {
    return {
      isShowLoading: false,
      categoryLists: [],
      categoryDetail: []
    };
  },
  methods: {
    async initData () {
      let leftRes = await getCategoryData();
      if (leftRes.success) {
        this.categoryLists = leftRes.data.cate;
      }
      this.isShowLoading = false;
    }
  },
  created () {
    this.initData();
  }
}
</script>

<style lang='less' scoped>
//@import url();

.category {
  width: 100%;
  height: 100%;
}
</style>