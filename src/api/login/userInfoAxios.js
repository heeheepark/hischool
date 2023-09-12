import { client } from "./client";

export const getUserInfo = async (setUserImg, setUserName, setUserEmail) => {
  try {
    const res = await client.get(`/api/side`);
    const result = res.data;
    const userName = result.nm;
    const userEmail = result.email;
    const userImg = result.pic;
    if (setUserImg) {
      setUserImg(userImg);
    }
    if (setUserName) {
      setUserName(userName);
    }
    if (setUserEmail) {
      setUserEmail(userEmail);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolLogo = async setSchoolLogo => {
  try {
    const res = await client.get(`/api/header/school-logo`);
    const result = res.data.logo;
    setSchoolLogo(result);
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolInfo = async (setSchoolName, setGrade, setClassNum) => {
  try {
    const res = await client.get(`/api/header/school-info`);
    const result = res.data;
    const userSchool = result.nm;
    const userGrade = result.grade;
    const userClass = result.van;
    console.log(result);
    setSchoolName(userSchool);
    setGrade(userGrade);
    setClassNum(userClass);
  } catch (err) {
    console.log(err);
  }
};
