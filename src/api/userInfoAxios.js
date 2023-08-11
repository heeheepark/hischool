import axios from "axios";
import { client } from "./client";

export const getUserInfo = async (setUserImg, setUserName, setUserEmail) => {
  try {
    const res = await client.get(`/api/side`);
    // const resImg = await client.get(`/api/side`);
    const result = res.data;
    const userName = result.nm;
    const userEmail = result.email;
    // console.log(resImg.data);
    const userImg = result.pic;
    console.log(userImg);
    // console.log(result.email);
    if (setUserImg) {
      setUserImg(userImg);
    }
    if (setUserName) {
      setUserName(userName);
    }
    if (setUserEmail) {
      setUserEmail(userEmail);
    }
    // setUserImg(resImg.data);
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolLogo = async setSchoolLogo => {
  try {
    const res = await client.get(`/api/mypage/user-mypage`);
    const result = res.data[0].pic;
    const test = `http://192.168.0.144:5003/${result}`;
    // console.log(test);
    // setSchoolLogo(test);
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolInfo = async (setSchoolName, setGrade, setClassNum) => {
  try {
    const res = await client.get(`/api/header/school-info`);
    const result = res.data;
    const userSchool = result[0].nm;
    const userGrade = result[0].grade;
    const userClass = result[0].van;
    setSchoolName(userSchool);
    setGrade(userGrade);
    setClassNum(userClass);
  } catch (err) {
    console.log(err);
  }
};
