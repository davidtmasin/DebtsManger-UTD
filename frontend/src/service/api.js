import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8888/management/'
})

export default api
