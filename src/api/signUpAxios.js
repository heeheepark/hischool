import axios from "axios";
import { client } from "./client";

export const postSignUp = async formData => {
  try {
    const res = await axios.post("/api/sign-up", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(formData);
  } catch (err) {
    console.error(err);
  }
};

export const postEmail = async idEmail => {
  try {
    const res = await client.post(`/api/mail-confirm?email=${idEmail}`);
  } catch (err) {
    console.log(err);
  }
};

export const postEmailCodeConFirm = async (emailConFirm, setEmailCheck) => {
  try {
    const res = await client.post(`/api/code-confirm?code=${emailConFirm}`);
    if (res.data === 1) {
      alert("이메일 인증이 완료되었습니다");
      setEmailCheck(true);
    } else {
      alert("인증 코드가 틀렸습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolName = async setSchoolList => {
  try {
    const res = await client.get("/api/school-list");
    const result = res.data;
    setSchoolList(result);
  } catch (err) {
    console.log(err);
  }
};

export const getSchoolClass = async (schoolCode, grade, setSchoolClassList) => {
  try {
    console.log(schoolCode, grade);
    if (schoolCode && grade) {
      const res = await client.get(
        `/api/class-list?schoolCode=${schoolCode}&grade=${grade}`,
      );
      const result = res.data;
      setSchoolClassList(result);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getConFirmEmail = async email => {
  try {
    const res = await client.get(`/api/mail-check?email=${email}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
