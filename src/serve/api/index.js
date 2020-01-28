import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

/*****Home 模块*******/
export const getHomeData = () => ajax(BASE_URL + 'homeApi');