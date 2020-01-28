<!--
* @Author: steven.hu
* @Motto: 一见如故,一见倾心
* @Github: https://github.com/hwqjls/vue-shop
* @LastEditTime: 2020年01月28日 16:12:01
* @Description: 
-->
<template>
  <swiper id="swiper"
          :options="swiperOption"
          ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="swing in swing_list"
                  :key="swing.public_id">
      <img :src="swing.icon_url"
           :alt="swing.public_name">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script>
// 引入 swiper.css
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    // 接受父组件传过来的数据
    swing_list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // 进来就加载
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        //配置自动播放
        autoplay: {
          delay: 3000,
          // 最后一个是否停止
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        // 配置速度
        speed: 600,
        // 滑动后回调函数
        on: {
          slideChangeTransitionEnd () {
          },
          //   preventLinksPropagation: false
        }
      }
    }
  },
  computed: {
    // 拿到swiper对象
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  }
}
</script>

<style scoped>
#swiper {
  width: 95%;
  height: 10rem;
  padding-top: 6rem;
  border-radius: 1rem;
}

#swiper img {
  width: 100%;
  height: 100%;
}
/*
 *穿透修改样式
 *只能用在普通样式里面，不用再less，sass里面使用
*/
#swiper >>> .swiper-pagination-bullet-active {
  background-color: #75a342;
}

#swiper >>> .swiper-pagination-bullet {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0;
}
</style>