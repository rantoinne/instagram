export const uploadMedia = async (mediaMeta: any): Promise<{ isSuccess?: boolean, url?: string | null }> => {
  const formdata = new FormData();
  formdata.append("file", mediaMeta);
  formdata.append("upload_preset", "");
  formdata.append("cloud_name", "");

  const requestOptions: any = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  let url: null | string = null;
  let isSuccess = false;
  
  try {
    const res: any = await fetch("https://api.cloudinary.com/v1_1/<KEY>/image/upload", requestOptions);
    const resJson = await res.json();
    console.log({ resJson });
    if ('url' in resJson) {
      url = resJson.url;
      isSuccess = true;
    }
  } catch (e) {
    throw new Error(e);
  }
  return { isSuccess, url };
};
