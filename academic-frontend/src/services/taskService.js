import { taskServiceAPI } from '../utils/api';

const taskService = {
  // Get all tasks
  getAllTasks: async () => {
    const response = await taskServiceAPI.get('/tasks');
    return response.data;
  },

  // Get task by ID
  getTaskById: async (id) => {
    const response = await taskServiceAPI.get(`/tasks/${id}`);
    return response.data;
  },

  // Get tasks by course ID
  getTasksByCourse: async (courseId) => {
    const response = await taskServiceAPI.get(`/tasks/course/${courseId}`);
    return response.data;
  },

  // Get tasks by user ID
  getTasksByUser: async (userId) => {
    const response = await taskServiceAPI.get(`/tasks/user/${userId}`);
    return response.data;
  },

  // Get tasks assigned to user
  getAssignedTasks: async (userId) => {
    const response = await taskServiceAPI.get(`/tasks/assigned/${userId}`);
    return response.data;
  },

  // Create task
  createTask: async (taskData) => {
    const response = await taskServiceAPI.post('/tasks', taskData);
    return response.data;
  },

  // Update task
  updateTask: async (id, updateData) => {
    const response = await taskServiceAPI.put(`/tasks/${id}`, updateData);
    return response.data;
  },

  // Delete task
  deleteTask: async (id) => {
    const response = await taskServiceAPI.delete(`/tasks/${id}`);
    return response.data;
  },

  // Task Submissions
  getSubmissionById: async (id) => {
    const response = await taskServiceAPI.get(`/tasksubmissions/${id}`);
    return response.data;
  },

  getSubmissionsByTask: async (taskId) => {
    const response = await taskServiceAPI.get(`/tasksubmissions/task/${taskId}`);
    return response.data;
  },

  getSubmissionsByUser: async (userId) => {
    const response = await taskServiceAPI.get(`/tasksubmissions/user/${userId}`);
    return response.data;
  },

  createSubmission: async (submissionData) => {
    const response = await taskServiceAPI.post('/tasksubmissions', submissionData);
    return response.data;
  },

  gradeSubmission: async (id, gradeData) => {
    const response = await taskServiceAPI.post(`/tasksubmissions/${id}/grade`, gradeData);
    return response.data;
  },

  deleteSubmission: async (id) => {
    const response = await taskServiceAPI.delete(`/tasksubmissions/${id}`);
    return response.data;
  },
};

export default taskService;
