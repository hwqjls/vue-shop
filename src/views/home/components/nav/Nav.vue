<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月31日 16:03:04
* @Description: 
-->
<template>
  <div id='wrapper'>
    <van-grid :column-num="5"
              :border="false">
      <van-grid-item v-for="nav in nav_list"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name"></van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    nav_list: Array
  },
  components: {},
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
</style>