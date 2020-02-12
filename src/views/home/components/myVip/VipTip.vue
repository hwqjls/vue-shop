<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年02月12日 19:30:40
* @Description: 
-->
<template>
  <div id='vipPage'
       @click="gotoMyVip">
    <svg-icon iconClass="vip"
              class="icon" />
    <span class="title">加入会员.每年预计节省806元</span>
    <span class="subTitle">5折开卡</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data () {
    return {

    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    gotoMyVip () {
      if (this.userInfo.token) {
        this.$router.push({ name: 'myVip' });
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='less' scoped>
//@import url();
</style>