import { request } from "./request";

export const uploadPost = async (data) => {
  await request.post('/api/v1/post/create', data);
};

export const getPosts = async () => {
  return await request.get('/api/v1/post/get-feed');
};

export const getUserPosts = async (userId: number) => {
  return await request.post('/api/v1/get-user-posts', { userId });
};
