import apiClient from '../lib/apiClient';

export const registerUser = (userData) =>
    apiClient.post('/api/auth/register', userData);

export const verifyRegisterOtp = (email, otp) =>
    apiClient.post('/api/auth/verify-otp', { email, otp });