import { request } from "./request";

export const signUpUser = async (payload: any) => {
  return await request.post('/api/v1/user/signup', payload);
};

export const loginUser = async (payload: any) => {
  return await request.post('/api/v1/user/login', payload);
};

export const userNameAvailability = async (payload: any) => {
  return await request.post('/api/v1/user-name-availility', payload);
};
