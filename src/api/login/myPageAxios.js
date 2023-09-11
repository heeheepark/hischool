import { client } from "./client";

export const getUserData = async setUserData => {
  try {
    const res = await client.get(`/api/mypage/user-mypage`);
    const result = res.data;
    setUserData(result);
  } catch (err) {
    console.error(err);
  }
};

export const patchMyPageData = async formData => {
  try {
    const res = await client.patch(`/api/mypage/user-info`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (err) {
    console.log(err);
  }
};

