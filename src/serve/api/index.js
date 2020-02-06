import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

/*****Home 模块*******/
export const getHomeData = () => ajax(BASE_URL + 'homeApi');
// 特色专区
export const getHomeSpecialZone = () => ajax(BASE_URL + 'homeApi/specialZone');

/***** 分类(Category) 模块 *******/
// Category 列表页面数据
export const getCategoryData = () => ajax(BASE_URL + 'homeApi/categories');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (params) => ajax(BASE_URL + 'homeApi/categoriesdetail' + params);
