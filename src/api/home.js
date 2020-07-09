import service from '@utils/request'

export function getList (data) {
  return service({
    url: '/myJk/bim-server/api/rest/management/ExtApiMgmtAuthService/login',
    method: 'post',
    data
  })
}


export function login (data) {
  return service({
    url: '/app/login',
    method: 'post',
    data
  })
}
