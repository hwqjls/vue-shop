<template>
  <div id="search">
    <div class="searchBox"
         @click="clickSearch">
      <div class="iconSearchWrapper">
        <svg-icon iconClass="search"
                  class="icon" />
      </div>
      <span class="searchPrompt">{{$t('eat.pleaseHolder')}}</span>
      <div class="collection">
        <!-- 收藏 -->
        <svg-icon iconClass="collection"
                  @click="clickCollection" />
      </div>
    </div>
    <div class="todayMenu">{{$t('eat.menu')}}</div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  methods: {
    clickCollection () {
      Toast({
        message: this.$('common.unrealized'),
        duration: 800
      })
    },
    clickSearch () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      })
    }
  }
}
</script>

<style lang="less" scoped>
#search {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0.5rem 0.625rem;
  background: #fff;
  .searchBox {
    display: block;
    right: 2rem;
    width: 80%;
    height: 1.75rem;
    padding: 0 0.875rem 0 1.75rem;
    background: #f2f2f2;
    border-radius: 1.75rem;
    line-height: 1.75rem;
    font-size: 0.875rem;
    .iconSearchWrapper {
      position: absolute;
      top: 0.6rem;
      left: 0.9375rem;
      width: 1.25rem;
      height: 1.25rem;
      .icon {
        fill: #999;
        width: 1rem;
        height: 1rem;
      }
    }
  }
  .searchPrompt {
    margin: 0 auto;
    color: #b5b5b5;
  }
  .collection {
    position: absolute;
    top: 0.6rem;
    right: -1.1rem;
    width: 2.5rem;
    height: 2rem;
  }
  .todayMenu {
    height: 1.5rem;
    margin-top: 0.9rem;
    padding-left: 0.4rem;
    border-left: 0.25rem solid #75a342;
    line-height: 1.5rem;
    font-size: 0.6728;
    font-weight: 2000;
  }
}
</style>