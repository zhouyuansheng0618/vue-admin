import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://127.0.0.1:8000/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://127.0.0.1:8000/user/info',
    method: 'get',

  })
}

export function logout() {
  return request({
    url: 'http://127.0.0.1:8000/user/logout',
    method: 'post'
  })
}
