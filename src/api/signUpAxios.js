import axios from "axios";
import { client } from "./client";

export const postSignUp = async formData => {
  try {
    const res = await axios.post("/api/sign-up", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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
      alert("코드가 틀렸습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};
