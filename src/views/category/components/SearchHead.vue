<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年02月06日 10:38:37
* @Description: 
-->
<template>
  <div class='searchWrapper'>
    <div class="searchBox">
      <div class="iconSearchWrapper">
        <svg viewBox="0 0 32 32"
             class="icon iconSearch">
          <path fill="#999"
                fill-rule="evenodd"
                d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
        </svg>
      </div>
      <span class="searchPrompt">输入商品名称</span>
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

.searchWrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0.5rem 0.625rem;
  border-bottom: solid 1px #e6e6e6;
  background: #fff;
}
.searchBox {
  display: block;
  height: 1.75rem;
  padding: 0 0.875rem 0 1.75rem;
  border-radius: 1.75rem;
  line-height: 1.75rem;
  font-size: 0.875rem;
  background: #f2f2f2;
}
.iconSearchWrapper {
  position: absolute;
  top: 0.75rem;
  left: 0.9375rem;
  width: 1.25rem;
  height: 1.25rem;
}
.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
.iconSearch {
  width: 100%;
  height: 100%;
}
.searchPrompt {
  color: #b5b5b5;
}
</style>