import axios from 'axios'
import { baseUrl } from '../shared/baseUrl'
const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const bearer = 'Bearer ' + localStorage.getItem('token')
    config.headers = {
      Authorization: bearer,
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // const statusCode = error.response.status
    // if (statusCode === 403 || statusCode === 401) {
    //   useDispatch()(logoutUser)
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosClient
