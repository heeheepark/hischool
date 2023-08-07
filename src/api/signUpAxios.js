import axios from "axios";

export const postSignUp = async userData => {
  try {
    const res = await axios.post("/api/sign-up", {
      userData,
    });
    console.log("성공했니?:", res.data);
  } catch (error) {
    console.error("실패니..?", error);
  }
};

export const postEmail = async idEmail => {
  try {
    const res = await axios.post(`/api/mail-confirm?email=${idEmail}`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const postEmailCodeConFirm = async emailConFirm => {
  try {
    const res = await axios.post(`/api/code-confirm?code=${emailConFirm}`);
    console.log(res.data);
    if (res.data === 1) {
      alert("이메일 인증이 완료되었습니다");
    } else {
      alert("코드가 틀렸습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};
