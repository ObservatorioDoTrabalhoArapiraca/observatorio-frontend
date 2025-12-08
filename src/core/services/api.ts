import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string || 'https://observatorio-backend-production.up.railway.app/api/', 
});
console.log("🌐 API configurada para:", import.meta.env.VITE_API_URL)
export default api;