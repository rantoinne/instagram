import { request } from "./request";

export const uploadPost = async (postMeta: {
  url: string;
  userId: number;
  postType: string;
  description:string;
}) => {
  await request.post('/api/v1/create-post', postMeta);
};

export const getPosts = async (userId: number) => {
  return await request.post('/api/v1/get-posts', { userId });
};

export const getUserPosts = async (userId: number) => {
  return await request.post('/api/v1/get-user-posts', { userId });
};
