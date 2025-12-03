import { userServiceAPI } from '../utils/api';

const userService = {
  // Get all users
  getAllUsers: async () => {
    const response = await userServiceAPI.get('/users');
    return response.data;
  },

  // Get user by ID
  getUserById: async (id) => {
    const response = await userServiceAPI.get(`/users/${id}`);
    return response.data;
  },

  // Update user
  updateUser: async (id, updateData) => {
    const response = await userServiceAPI.put(`/users/${id}`, updateData);
    return response.data;
  },

  // Delete user
  deleteUser: async (id) => {
    const response = await userServiceAPI.delete(`/users/${id}`);
    return response.data;
  },

  // Assign role to user
  assignRole: async (userId, roleId) => {
    const response = await userServiceAPI.post('/users/assign-role', {
      userId,
      roleId,
    });
    return response.data;
  },

  // Remove role from user
  removeRole: async (userId, roleId) => {
    const response = await userServiceAPI.delete(`/users/${userId}/roles/${roleId}`);
    return response.data;
  },
};

export default userService;
