import AxiosInstance from 'axios'

const isProduction = import.meta.env.MODE == 'production'
const baseURL = isProduction ? '/api' : 'http://localhost:3001/api'

const axios = AxiosInstance.create({ baseURL })

export default axios
