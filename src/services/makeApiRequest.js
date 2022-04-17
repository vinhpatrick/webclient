// import axios from 'axios'
// import configs from '../configs/service'
// import { getLocalData, setLocalData, removeLocalData } from './StorageServices'

// const getToken = () => getLocalData('accessToken')
// const setToken = (token) => setLocalData('accessToken', token)
// const removeToken = () => removeLocalData('accessToken')

// const isAuthenticated = () => !!getLocalData('accessToken')

// const makeAuthRequest = (auth = true) => {
//   const options = {
//     baseURL: configs.url
//   }
//   const instance = axios.create(options)

//   return async (args) => {
//     const additionOptions = {}
//     if (auth) {
//       additionOptions['headers'] = {
//         Authorization: `${getToken()}`
//       }
//     }

//     const res = await instance({ ...additionOptions, ...args })
//     return res
//   }
// }

// export { getToken, setToken, removeToken, isAuthenticated, makeAuthRequest }
