// 本地化存储
export const setLocalStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

// 本地化获取
export const getLocalStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

//本地化删除
export const removeLocalStore = name => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

/**
 * @desc 判断是否为手机号
 * @param {String|Number} str
 * @return {Boolean}
 */
export const isPhoneNum = str => {
  return /^(0|86|17951)?(13[0-9]14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/.test(str)
}