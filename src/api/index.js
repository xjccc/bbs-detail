import fetch from './ajax'

export const DEBUG = true                  // 是否开发模式
const HTTP_DEV = 'https://2b.360che.com'      // 测试地址
const HTTPS = 'https://bbs-api.360che.com'              // 正式地址
const URLS = DEBUG ? HTTP_DEV : HTTPS

class XHR {
// 商家入驻
  ceshi (json) {
    return fetch({
      url: `${URLS}/shopin/shopin.aspx`,
      body: json,
      type: 'POST'
    })
  }
}
export default new XHR()
