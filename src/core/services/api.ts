import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL as string || "http://localhost:3000/api"

console.log("🌐 API_URL configurada:", API_URL)

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
    // TODO: apagar os consoles depois
    // console.log('🔄 Fazendo requisição para:', config.baseURL + config.url);
    // console.log('🔄 Método:', config.method?.toUpperCase());
    // console.log('🔄 Headers:', config.headers);
    return config
  },
  (error) => {
    // console.error('❌ Erro ao configurar requisição:', error);
    return Promise.reject(error)
  }
)

// Interceptor para debug de respostas
api.interceptors.response.use(
  (response) => {
    // console.log('✅ Resposta recebida de:', response.config.url);
    // console.log('✅ Status:', response.status);
    // console.log('✅ Dados:', response.data);
    return response
  },
  (error) => {
    // console.error('❌ Erro na resposta da API:');
    // console.error('   URL:', error.config?.url);
    // console.error('   Status:', error.response?.status);
    // console.error('   Status Text:', error.response?.statusText);
    // console.error('   Mensagem:', error.message);
    // console.error('   Dados do erro:', error.response?.data);
    // console.error('   Headers:', error.response?.headers);

    // CORS error
    if (error.message === "Network Error") {
      console.error("⚠️ Possível erro de CORS ou rede!")
    }

    return Promise.reject(error)
  }
)

export default api
