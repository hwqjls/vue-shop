<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年02月01日 14:11:32
* @Description: 
-->
<template>
  <div id='specialZone'>
    <div class="titleWrapper">
      <div class="title">特色专区</div>
    </div>

    <!-- 新品尝鲜 -->
    <div class="wrapperItem">
      <div class="newItem"
           v-for="newItem in newItemList"
           :key="newItem.id">
        <span class="itemTitle">{{newItem.title}}</span>
        <p class="itemSubTitle">{{newItem.subtitle}}</p>
        <img class="itemImg"
             :src="newItem.imageOne">
        <img class="itemImg"
             :src="newItem.imageTwo">
      </div>

      <!-- 九月热卖 -->
      <div class="hotItem"
           v-for="hotItem in hotItemList"
           :key="hotItem.id">
        <span class="itemTitle hotItemTitle">{{hotItem.title}}</span>
        <p class="itemSubTitle">{{hotItem.subtitle}}</p>
        <img class="itemImg"
             :src="hotItem.imageOne">
        <img class="itemImg"
             :src="hotItem.imageTwo">
      </div>

      <!-- VIP专享 -->
      <div class="vipItem"
           v-for="vipItem in vipItemList"
           :key="vipItem.id">
        <span class="itemTitle vipItemTitle">{{vipItem.title}}</span>
        <p class="itemSubTitle">{{vipItem.subtitle}}</p>
        <img class="itemImg"
             :src="vipItem.imageOne">
        <img class="itemImg"
             :src="vipItem.imageTwo">
      </div>

      <!-- 其他列表 -->
      <div class="otherItem"
           v-for="otherItem in otherItemList"
           :key="otherItem.id">
        <p class="otherTitle">{{otherItem.title}}</p>
        <p class="otherSubTitle">{{otherItem.subtitle}}</p>
        <img class="otherImage"
             src="~@/assets/images/special/peanut.jpeg">
      </div>

      <!-- 平价菜场 -->
      <div class="lowPrice"
           v-for="lowPriceItem in lowPriceItemList"
           :key="lowPriceItem.id">
        <p class="otherTitle">{{lowPriceItem.title}}</p>
        <p class="otherSubTitle">{{lowPriceItem.subtitle}}</p>
        <img class="otherImage"
             :src="lowPriceItem.image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      newItemList: [{
        id: 0,
        title: '新品尝鲜',
        subtitle: '不时不食, 又闻棱角香~',
        imageOne: 'http://img.ddimg.mobi/product/1ff533e6f0fe91548468615264.jpg?imageView2/3/w/750/format/q/90',
        imageTwo: 'http://ddimg.ddxq.mobi/d3421059fd5ef1541779787379.jpg?imageView2/3/w/305/format/q/90'      }
      ],
      hotItemList: [{
        id: 1,
        title: '九月爆款',
        subtitle: '世界之大不过一盘番茄炒蛋',
        imageOne: 'https://ddimg.ddxq.mobi/be51d2b7e7cfb1541779541044.jpg?imageMogr2/thumbnail/200x200',
        imageTwo: 'https://ddimg.ddxq.mobi/d9570a42c1a2f1541779412213.jpg?imageMogr2/thumbnail/200x200'      }
      ],
      vipItemList: [{
        id: 2,
        title: 'VIP 专享',
        subtitle: '阳光玫瑰 VIP只要12.9',
        imageOne: 'http://img.ddimg.mobi/product/98a74efe088f81565858857802.jpg?imageView2/3/w/305/format/q/90',
        imageTwo: 'http://img.ddimg.mobi/product/6a422523dbab1564042389882.jpg?imageView2/3/w/305/format/q/90'      }
      ],
      otherItemList: [{
        id: 3,
        title: '吃什么',
        subtitle: '童年落花生',
      }
      ],
      lowPriceItemList: [{
        id: 4,
        title: '平价菜场',
        subtitle: '豆芽0.99',
        image: 'http://ddimg.ddxq.mobi/1fac18844ddea1539673001469.jpg?imageView2/3/w/750/format/q/90',      }
      ]
    };
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
//@import url();

#specialZone {
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem;
  background-color: #fff;
  .titleWrapper {
    margin: 0 0.625rem 0.625rem;
    height: 1.5625rem;

    .title {
      display: inline-block;
      height: 1.3125rem;
      padding-left: 0.3125rem;
      border-left: 4px solid #3cb963;
      line-height: 1.3125rem;
      font-size: 1.1875rem;
      vertical-align: middle;
    }
  }
  .wrapperItem {
    width: 95%;
    height: 10rem;
    border: 0.01rem solid #dddbc0;
    margin-left: 2.5%;

    .newItem {
      float: left;
      width: 49.9%;
      height: 5rem;
      border-right: 0.01rem solid #dddbc0;
      border-bottom: 0.01rem solid #dddbc0;
    }
    .itemTitle {
      width: 100%;
      font-size: 0.625rem;
      background-image: linear-gradient(135deg, red, orange);
      -webkit-background-clip: text;
      color: transparent;
      padding-left: 0.5rem;
      padding-top: 0.5rem;
    }
    .itemSubTitle {
      padding-left: 0.5rem;
      padding-top: 0.3rem;
      font-size: 0.45rem;
      color: grey;
    }
    .hotItem {
      float: left;
      width: 49.9%;
      height: 5rem;
      border-bottom: 0.01rem solid #dddbc0;
    }
    .hotItemTitle {
      background-image: linear-gradient(150deg, #b2233f, #f70d3c);
      -webkit-background-clip: text;
      color: transparent;
    }
    .vipItem {
      float: left;
      width: 49.9%;
      height: 5rem;
      border-right: 0.01rem solid #dddbc0;
    }
    .vipItemTitle {
      background-image: linear-gradient(150deg, #0e9e09, #51b14d);
      -webkit-background-clip: text;
      color: transparent;
    }
    .itemImg {
      width: 3rem;
      height: 2.5rem;
      padding: 0.3rem 0.5rem 0rem 0.7rem;
    }
    .otherItem {
      float: left;
      width: 25%;
      height: 5rem;
      border-right: 0.01rem solid #dddbc0;
    }
    .otherTitle {
      padding-left: 0.5rem;
      padding-top: 0.5rem;
      font-size: 0.625rem;
      color: black;
    }
    .otherSubTitle {
      padding-left: 0.5rem;
      padding-top: 0.3rem;
      font-size: 0.45rem;
      color: grey;
    }
    .otherImage {
      width: 2.5rem;
      height: 2.5rem;
      padding-left: 1rem;
      border-radius: 50%;
    }
    .lowPrice {
      float: left;
      width: 24.5%;
      height: 5rem;
    }
  }
}
</style>