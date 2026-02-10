// rm -rf node_modules/.vite

import axios from "axios"

const API_URL =  import.meta.env.VITE_API_URL 


if (!API_URL) {
  console.error("❌ VITE_API_URL não está definida!")
}

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

// Interceptor para debug de requisições
api.interceptors.request.use(
  (config) => {
 
    return config
  },
  (error) => {
    
    return Promise.reject(error)
  }
)

// Interceptor para debug de respostas
api.interceptors.response.use(
  (response) => {
  

    return response
  },
  (error) => {
 

    // CORS error
    if (error.message === "Network Error") {
      console.error("⚠️ Possível erro de CORS ou rede!")
    }

    return Promise.reject(error)
  }
)

export default api
