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
