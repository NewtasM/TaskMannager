import { userServiceAPI } from '../utils/api';

const authService = {
  // Register a new user
  register: async (username, email, password, fullName) => {
    const response = await userServiceAPI.post('/auth/register', {
      username,
      email,
      password,
      fullName,
    });
    return response.data;
  },

  // Login user
  login: async (emailOrUsername, password) => {
    const response = await userServiceAPI.post('/auth/login', {
      emailOrUsername,
      password,
    });

    if (response.data.success && response.data.data) {
      const { token, user } = response.data.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return response.data;
    }

    throw new Error(response.data.message || 'Login failed');
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user from localStorage
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

export default authService;
