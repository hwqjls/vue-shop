<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月27日 19:49:58
* @Description: 
-->
<template>
  <div id='home'>
    <Header></Header>
    <Swing :swing_list="swing_list"></Swing>
  </div>
</template>

<script>
import { getHomeData } from './../../serve/api/index.js'
import Header from './components/header/Header'
import Swing from './components/swing/Swing'

export default {
  components: {
    Header,
    Swing
  },
  data () {
    return {
      swing_list: []
    }
  },
  methods: {

  },
  created () {
    getHomeData().then(response => {
      if (response.success) {
        this.swing_list = response.data.list[0].icon_list;
      }
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  },
}
</script>

<style lang='less' scoped>
//@import url();

#home {
  color: rebeccapurple;
}
</style>