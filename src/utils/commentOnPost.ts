import { request } from './request';

export const addCommentOnPost = async (payload: any) => {
  return await request.post('/api/v1/add-comment', payload);
};
