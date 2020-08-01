import http from '@utils/axios/http'

export default {
  getListAPI (params) {
    return http.get(`./data/getList.json`, params)
  },
  postFormAPI (params) {
    return http.post(`postForm.json`, params)
  }
}

/**
 * 调用示例
 * 1。import api from '@api/home'
 * 2。api.getListAPI({page:8}).then(res => {
        console.log(res);
      });

   3。post
   let params = this.$qs.stringify({
     startime: ''
   });

 */
