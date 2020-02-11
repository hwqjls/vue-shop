// 引入mutation-type
import {
  ADD_GOODS,
  INIT_SHOP_CART,
  REDUCE_GOODS,
  SINGLE_SELECT_GOODS,
  ALL_SELECT_GOODS,
  DELETE_SELECT_GOODS,
  USER_INFO,
  INIT_USER_INFO,
  CHANGE_USER_NICK_NAME,
  USER_INFO_BRITHDAY,
  USER_INFO_SEX,
  LOGIN_OUT,
  INIT_USER_SHOPPING_ADDRESS,
  ADD_USER_SHOPPING_ADDRESS,
  DELETE_USER_SHOPPING_ADDRESS,
  CHANGE_USER_SHOPPING_ADDRESS
} from './mutation-type'
import Vue from 'vue'
import { Toast } from 'vant'
import router from '@/router/router'
// 引入本地存储
import {
  getLocalStore,
  setLocalStore,
  removeLocalStore
} from '../util/global'
import { ADD_TO_CART } from '../util/pubsub_type'

export default {
  // 注意:外界传值的参数一定要和定义的参数一致 例如 goodsID  isCheckedAll
  // 1.添加商品
  [ADD_GOODS] (state, {
    goodsID,
    goodsName,
    smallImage,
    goodsPrice
  }) {
    let shopCart = state.shopCart;
    // 1.1 判断商品是否存在
    if (shopCart[goodsID]) {
      // 让数量goodsID里面的num+1
      shopCart[goodsId]['num']++
    } else {
      // 1.2 不存在则设置默认值

      shopCart[goodsID] = {
        'num': 1,
        'id': goodsID,
        'name': goodsName,
        'smallImage': smallImage,
        'checked': true
      }
      // 1.3 给shopCart产生新对象
      state.shopCart = {
        ...shopCart
      };
    }
    // 1.4 将数据存储到本地
    setLocalStore('shopCart', state.shopCart)
  },
}