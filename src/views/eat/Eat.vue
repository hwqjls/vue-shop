<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月27日 19:49:34
* @Description: 
-->
<template>
  <div class='eatWrapper'>
    <!-- 搜索栏 -->
    <Search></Search>
    <!-- 今日菜单 -->
    <TodayMenu></TodayMenu>
  </div>
</template>

<script>
import Search from './components/Search'
import TodayMenu from './components/TodayMenu'

export default {
  components: {
    Search,
    TodayMenu
  },
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
//@import url();

#eatWrapper {
  background-color: "#f5f5f5";
}
</style>