import axios from "axios";

export const getUserInfo = async (setUserName, setUserEmail) => {
  try {
    const res = await axios.get(`/api/mypage/user-mypage`);
    const result = res.data;
    const userName = result[0].unm;
    const userEmail = result[0].email;
    setUserName(userName);
    setUserEmail(userEmail);
  } catch (err) {
    console.log(err);
  }
};
