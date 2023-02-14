export const uploadMedia = async (mediaMeta: any): Promise<{ isSuccess?: boolean, url?: string | null }> => {
  const formdata = new FormData();
  formdata.append("file", mediaMeta);
  formdata.append("upload_preset", "rantoinne");
  formdata.append("cloud_name", "dbr1a4zrz");

  const requestOptions: any = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  let url: null | string = null;
  let isSuccess = false;
  
  try {
    const res: any = await fetch("https://api.cloudinary.com/v1_1/dbr1a4zrz/image/upload", requestOptions);
    const resJson = await res.json();
    url = resJson.url;
    isSuccess = true;
  } catch (e) {
    throw new Error(e);
  }
  return { isSuccess, url };
};
