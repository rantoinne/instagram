import { uploadPost } from "./post";
import { request } from "./request";

export const uploadMedia = async (mediaMeta: any) => {
  const formdata = new FormData();
  formdata.append('image', {...mediaMeta});
  console.log({ mediaMeta });

  // const boundary = Date.now().toString(16);
  // console.log({ formdata: JSON.stringify(formdata) })
  await uploadPost(formdata)
};
