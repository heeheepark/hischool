import axios from "axios";
import { client } from "../api/client";

export const getUserData = async setUserData => {
  try {
    const res = await client.get(`/api/mypage/user-mypage`);
    const result = res.data;
    console.log(result);
    setUserData(result);
  } catch (err) {
    console.error(err);
  }
};

export const putMyPageData = async formData => {
  try {
    console.log(formData);

    const res = await client.put(`/api/mypage/user-info-update`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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
