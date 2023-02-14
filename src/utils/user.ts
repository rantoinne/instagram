import { request } from "./request";

export const getUserInfo = async (userId: number) => {
  return await request.post('/api/v1/user-info', { userId });
};
