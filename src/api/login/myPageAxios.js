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

export const putMyPageData = async formData => {
  try {
    const res = await client.put(`/api/mypage/user-info-update`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async () => {
  try {
    const res = await client.delete(`/api/mypage`);
  } catch (err) {
    console.log(err);
  }
};

