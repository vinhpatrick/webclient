import axiosClient from './axiosClient'
export const register = (payload) => {
  return axiosClient({
    url: 'users/signup',
    method: 'POST',
    data: payload,
  })
}
