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

export const getSchoolInfo = async (setSchoolName, setGrade, setClassNum) => {
  try {
    const res = await axios.get(`/api/header/school-info`);
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
