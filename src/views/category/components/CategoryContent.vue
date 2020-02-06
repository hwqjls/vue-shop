<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年02月06日 11:26:20
* @Description: 
-->
<template>
  <div class='categoryContent'>
    <!-- 顶部子菜单栏 -->
    <div class="subTitleWrapper">
      <ul class="subTitleContent"
          ref="ulContent">
        <li class="title"
            :class="{selected:currentSubTitle === index}"
            v-for="(detailItem,index) in detailContentData"
            :key="detailItem.id"
            ref="subTitle"
            @click="subTitleClick(index)"
            :productContentData="detailItem.product">
          {{detailItem.name}}
        </li>
      </ul>
    </div>
    <!-- 内容栏目 -->

  </div>
</template>

<script>
//引入发布订阅
import PubSub from 'pubsub-js'
import { CATEGORY_ITEM_CLICK } from '../../../util/pubsub_type.js'
import ProductItem from './../components/ProductItem'
import { getCategoryDetailData } from '../../../serve/api/index.js'
// 引入滑动组件BetterScroll
import BScroll from 'better-scroll'

export default {
  components: {
    ProductItem
  },
  data () {
    return {
      currentIndex: -1,
      currentSubTitle: 0,
      detailContentData: [],
      isShowMore: true,
      productContentData: [],
    }
  },
  methods: {
    // 初始化数据
    _initData () {
      // 拿到第一条数据
      let detailContent = getCategoryDetailData('/lk001').then(response => {
        if (response.success) {
          this.detailContentData = response.data.cate;
          this.detailContentData.forEach((produces, item) => {
            this.productContentData.push(item);
          });
        }
      });
    },
    // 通过左边点击的发布来订阅item的index数据
    getItemIndex () {
      PubSub.subscribe(CATEGORY_ITEM_CLICK, (msg, itemIndex) => {
        if (itemIndex == 0) this.isShowMore = true;
        if (this.currentIndex !== itemIndex) {
          this.currentIndex = itemIndex;
          // 是否显示或隐藏 查看更多
          this.isShowMore = itemIndex > 0 ? false : true;
          // 更新右边的数据
          let detailContent = getCategoryDetailData(`/lk00${itemIndex + 1}`).then(response => {
            if (response.success) {
              this.detailContentData = response.data.cate;
              this.currentSubTitle = 0;
              console.log(this.detailContentData);
              this.$nextTick(() => {
                this._initSubTitleScroll();
              });
            }
          });
        }
      });
    },
    // 让内容上部分的子标题可以滚动
    _initSubTitleScroll () {
      let contentWrapperWidth = 0;
      let el = this.$refs.subTitle;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 给ul设置值
      this.$refs.ulContent.style.width = contentWrapperWidth + 'px';
      if (!this.scroll) {
        this.scroll = new BScroll('.subTitleWrapper', {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical",
        });
      } else {
        this.scroll.refresh();
      }
    },
    // 处理点击subTitle的事件
    subTitleClick (index) {
      this.currentSubTitle = index;
      let el = this.$refs.subTitle[index];
      this.scroll.scrollToElement(el, 500);
    },
    // 点击了销量
    salesClick () {
      alert('销量');
    },
    // 点击了价格
    priceClick () {
      alert('价格');
    },
    moreClick () {
      alert('查看更多');
    }
  },
  mounted () {
    this._initData();
    this.getItemIndex();
  },
}
</script>

<style lang='less' scoped>
//@import url();

.categoryContent {
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  right: 0;
  width: 75%;
  overflow: hidden;
  .subTitleWrapper {
    width: 100%;
    height: 2.8rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    .title {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
  }
  .content {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.73rem;
    padding-left: 0.5rem;
    border-bottom: solid 0.01rem #e8e9e8;
    color: grey;
    list-style: none;
    .contentTitle {
      list-style: none;
      .rightTitle {
        float: right;
        // height: 2rem;
        padding: 0 0.5rem;
        span {
          padding: 0 0.5rem;
        }
      }
    }
    .detailContent {
      display: inline-block;
      padding-bottom: 1rem;
      border-bottom: solid 1px #e8e9e8;
      .detailImg {
        float: left;
        width: 30%;
        height: 5rem;
        background-color: aquamarine;
      }
    }
    .detailMessage {
      position: relative;
      float: left;
      width: 70%;
      height: auto;
      .buyCar {
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        right: 1rem;
        bottom: 0rem;
      }
      .detailTitle {
        padding: 0 0.2rem;
        font-size: 0.828rem;
        color: black;
      }
      .detailSubTitle {
        padding-left: 0.2rem;
        padding-right: 1rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 2.5rem;
        line-height: 1.25rem;
        font-size: 0.8125rem;
        word-break: break-all;
        font-size: 0.628rem;
        color: grey;
      }
      .nowPrice {
        padding-left: 0.2rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.6875rem;
        color: #fe6263;
      }
      .originPrice {
        padding-left: 0.5rem;
        font-size: 0.6875rem;
        color: #999999;
        text-decoration: line-through;
      }
    }
  }
}
</style>