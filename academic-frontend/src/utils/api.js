import axios from 'axios';

// API base URLs
export const API_URLS = {
  USER_SERVICE: 'http://localhost:54894/api',
  TASK_SERVICE: 'http://localhost:5000/api',
  ACADEMIC_SERVICE: 'http://localhost:5003/api',
};

// Create axios instances for each service
export const userServiceAPI = axios.create({
  baseURL: API_URLS.USER_SERVICE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskServiceAPI = axios.create({
  baseURL: API_URLS.TASK_SERVICE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const academicServiceAPI = axios.create({
  baseURL: API_URLS.ACADEMIC_SERVICE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests
const addAuthToken = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// Response interceptor for handling errors
const handleResponseError = (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
  return Promise.reject(error);
};

// Add interceptors to all instances
[userServiceAPI, taskServiceAPI, academicServiceAPI].forEach((api) => {
  api.interceptors.request.use(addAuthToken, (error) => Promise.reject(error));
  api.interceptors.response.use(
    (response) => response,
    handleResponseError
  );
});
