<template>
  <div id="allMenuWrapper">
    <div class="menuLists"
         ref="menuLists"
         v-show="isShowMenuList">
      <div class="menuWrapper">
        <span class="menuCategoryTitle"
              v-if="recentlyChooseLists.length>0">{{$t('eat.recent')}}</span>
        <ul class="contentTip">
          <li v-for="item in recentlyChooseLists"
              :key="item.id"
              class="item">{{item.name}}</li>
        </ul>
        <span class="menuCategoryTitle">{{$t('eat.menuDevide')}}</span>
        <ul class="contentTip">
          <li v-for="(item,index) in todayMenuCategoryLists"
              :key="item.id"
              @click="menuTitleClick(index)"
              class="item">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <!-- 使用vue-waterfall2 组件 完成的瀑布流 效果良好-->
    <MenuWaterFall v-show="!isShowMenuList"></MenuWaterFall>
  </div>
</template>

<script>
import MenuWaterFall from './MenuWaterFall'

// 引入通知
import Pubsub from 'pubsub-js'
import { EAT_MENUTITLE_CLICK } from '@/util/pubsub_type.js'

// 导入本地存储
import { setLocalStore, getLocalStore } from '@/util/global.js'


export default {
  props: {
    // 父组件传下来的数据
    todayMenuCategoryLists: Array,
    isShowMenuList: Boolean,
  },
  components: {
    MenuWaterFall
  },
  data () {
    return {
      recentlyChooseLists: []
    }
  },
  methods: {
    menuTitleClick (index) {
      // 1.发送通知改变顶部标题的选中
      Pubsub.publish(EAT_MENUTITLE_CLICK, index);
      // 2.通知父组件来隐藏当前菜单栏
      this.$emit('hiddenMenu');
      // 3.将选中的值赋值给最近选中的数组里且保证数组只有8个 
      if (this.recentlyChooseLists.length <= 7) {
        // 3.1 添加到数组的第一个
        this.recentlyChooseLists.unshift(this.todayMenuCategoryLists[index]);
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists));
      } else {
        // 3.2 先末尾移除一个
        this.recentlyChooseLists.pop();
        // 3.3 数组开头添加一个
        this.recentlyChooseLists.unshift(this.todayMenuCategoryLists[index])
        // 3.4 数组去重
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists));
      }
    }
  }
}
</script>

<style  lang="less" scoped>
.menuLists {
  width: 100%;
  padding: 0.5rem;
  background-color: white;
  overflow: auto;
  .menuWrapper {
    .menuCategoryTitle {
      font-size: 0.6rem;
      color: grey;
    }

    .contentTip {
      display: flex;
      flex-flow: row wrap;
      padding: 0.5rem;

      .item {
        width: 3.3rem;
        height: 1.5rem;
        margin: 0.4rem 1.45rem 0 0;
        border: 1px solid #dedede;
        border-radius: 1rem;
        line-height: 1.5rem;
        text-align: center;
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.6rem;
      }
    }
  }
}
</style>