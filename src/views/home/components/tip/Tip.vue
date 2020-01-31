<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月31日 16:17:29
* @Description: 
-->
<template>
  <div id='tip'>
    <div class="tipBox">
      <img src="~@/assets/images/icon/transport.png">
      <span class="tipText">最快29分钟送达</span>
    </div>
    <div class="tipBox">
      <img src="~@/assets/images/icon/money.png">
      <span class="tipText">0元起送 0配送费</span>
    </div>
    <div class="tipBox">
      <img src="~@/assets/images/icon/seal.png">
      <span class="tipText">安心退</span>
    </div>
    <div>
      <img class="adImg"
           src="http:\/\/img.ddimg.mobi\/o_1dkib68ka1t1i1l0cctkvgi1s0e10.jpg">
      <div class="adTitle">点击<br />
        领取</div>
    </div>
  </div>
</template>

<script>
export default {
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

#tip {
  position: relative;
  margin-top: 0.3rem;

  .tipBox {
    float: left;
    width: 33%;
    text-align: center;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
      vertical-align: middle;
    }

    .tipText {
      font-size: 0.6rem;
      color: #45c763;
    }
  }

  .adImg {
    width: 100%;
    height: 6rem;
    margin-top: 0.5rem;
  }

  .adTitle {
    position: absolute;
    top: 3.4rem;
    right: 0.3rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
    line-height: 1.4rem;
    font-size: 0.6rem;
    color: gold;
    text-align: center;
    -webkit-animation-name: scaleDraw; /*关键帧名称*/
    -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
    -webkit-animation-iteration-count: infinite; /*动画播放的次数*/
    -webkit-animation-duration: 3s; /*动画所花费的时间*/
  }

  @keyframes scaleDraw {
    /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0% {
      transform: scale(1); /*开始为原始大小*/
    }
    25% {
      transform: scale(1.1); /*放大1.1倍*/
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
  }
}
</style>