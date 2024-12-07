import axios from 'axios';

// Create an instance of axios with common configuration
const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Base API URL
  timeout: 5000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor for centralized error handling
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error); // Propagate the error
  }
);

export default httpClient;
