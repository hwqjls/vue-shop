<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年02月12日 19:46:09
* @Description: 
-->
<template>
  <div class='loading_container'>
    <div class="load_img"
         :style="{backgroundPositionY:-(positionY%7)*2.5 + 'rem'}">
    </div>
    <svg-icon iconClass=loading
              style="width:1.5rem;height:1.5rem" />
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      positionY: 0,
      timer: null
    };
  },
  methods: {

  },
  mounted () {
    this.timer = setInterval(() => {
      this.positionY++;
    }, 600)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang='less' scoped>
//@import url();
@keyframes load {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes ellipse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
.loading_container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 2.5rem;
  height: 2.5rem;
}

.load_img {
}
</style>