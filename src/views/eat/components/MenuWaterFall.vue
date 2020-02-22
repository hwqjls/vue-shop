<template>
  <div class="container-water-fall">
    <waterfall :col='col'
               :data="data"
               @loadmore="loadmore">
      <div class="cell-item"
           v-for="item in data"
           :key="item.id">
        <img v-lazy="item.image">
        <div class="item-body">
          <div class="item-desc">{{item.name}}</div>
          <div class="item-footer">
            <img class="avatar"
                 v-lazy="item.author_avatar"
                 alt="">
            <div class="name">{{item.author_name}}</div>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script type="text/javascript">
import { getTodayMenuDetail } from '@/serve/api/index.js'
import { Toast } from 'vant';

export default {
  data () {
    return {
      data: [],
      col: 2,
      menulistDetail: [],
      page: 1
    }
  },
  computed: {
  },
  mounted () {
    this._initData();
  },
  methods: {
    // 1.数据请求
    async _initData () {
      // 第一条数据
      let ref = await getTodayMenuDetail('/lk01');
      if (ref.success) {
        this.menulistDetail = ref.data.big_recommend.list;
        this.data = ref.data.big_recommend.list;
      }
    },
    loadmore (num) {
      let index = ++this.page;
      let param;
      if (index > 31) {
        Toast({
          message: $t('eat.tip_bottom'),
          duration: 800
        });
        return;
      } else {
        param = index >= 10 ? `/lk${index}` : `/lk0${index}`;
      }
      getTodayMenuDetail(param).then(response => {
        if (response.success) {
          let newArray = response.data.big_recommend.list;
          this.data = this.data.concat(newArray);
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.container-water-fall {
  width: 100vw;
  background-color: #f5f5f5;
  box-sizing: border-box;
  .vue-waterfall {
    padding-bottom: 2rem;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  h4 {
    padding: 0.56rem 0 1rem;
    letter-spacing: 1px;
    font-family: PingFangSC-Medium;
    font-size: 2rem;
    color: #000;
    text-align: justify;
  }
  .cell-item {
    width: 100%;
    margin-bottom: 1px;
    padding: 0.3rem;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      border-radius: 12px;
      background-size: contain;
      background-image: url("~@/assets/images/placeholderImg/product-img-load.png");
    }
    .item-body {
      padding: 0.6rem;
      .item-desc {
        line-height: 1rem;
        color: #333;
        font-size: 0.8rem;
        font-weight: bold;
      }
      .item-footer {
        display: flex;
        position: relative;
        align-items: center;
        margin-top: 1rem;
        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 0.75rem;
          color: #999999;
        }
      }
    }
  }
}
</style>