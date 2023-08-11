import { client } from "../api/client";

export const getUserData = async setUserData => {
  try {
    const res = await client.get(`/api/mypage/user-mypage`);
    const result = res.data;
    console.log(result);
    setUserData(result[0]);
  } catch (err) {
    console.error(err);
  }
};

export const patchMyPageData = async () => {
  try {
    const res = await client.patch(`/api/mypage/userr-info-update`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async () => {
  try {
    // const res = await client.delete(`/api/mypage`);
    // const result = res.data;
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};
