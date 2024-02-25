import { request } from "./request";

export const uploadPost = async (data) => {
  // await request.post('/api/v1/post/create', data, `multipart/form-data;`);
  const res = await fetch(`${request.apiUrl}/api/v1/post/create`, {
    method: 'POST',
    body: data,
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${request.authToken}`,
    }
  });
  console.log({ res });
};

export const getPosts = async () => {
  return await request.get('/api/v1/post/get-feed');
};

export const getUserPosts = async (userId: number) => {
  return await request.post('/api/v1/get-user-posts', { userId });
};
