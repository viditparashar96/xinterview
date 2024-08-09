import { axios_instance } from "@/lib/axios";

export const createUrl = async ({
  original_url,
  user_id,
}: {
  original_url: string;
  user_id: number;
}) => {
  try {
    const response = await axios_instance.post("/url/create", {
      original_url,
      user_id,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllUrlsById = async ({ user_id }: { user_id: number }) => {
  try {
    const response = await axios_instance.get(`/url/allurls/${user_id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const hitUrl = async ({ id }: { id: string }) => {
  try {
    const response = await axios_instance.get(`/url/hit/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
