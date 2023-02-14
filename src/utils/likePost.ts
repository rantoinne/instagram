import { request } from './request';

export const likeDislikePost = async (payload: any) => {
  return await request.post('/api/v1/like-post', payload);
};
