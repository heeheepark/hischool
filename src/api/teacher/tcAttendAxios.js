import { client } from "../login/client";

export const getAttendData = async (
  grade,
  userId,
  setAttendList,
  setExistAttenId,
  setComfirmPost,
) => {
  try {
    const res = await client.get(`/api/attendance?userId=${userId}`);
    const result = res.data;
    if (result.length == grade) {
      setExistAttenId(true);
      setAttendList(result);
      setComfirmPost(false);
    } else {
      setAttendList(result);
      setComfirmPost(true);
    }
  } catch (err) {
    console.log(err);
  }
};

export const postAttendData = async payload => {
  try {
    const res = await client.post(`/api/attendance`, payload);
  } catch (err) {
    console.log(err);
  }
};

export const putAttendData = async payload => {
  try {
    const res = await client.put(`/api/attendance`, payload);
  } catch (err) {
    console.log(err);
  }
};
