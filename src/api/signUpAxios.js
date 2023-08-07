import axios from "axios";

const postSignUp = async userData => {
  try {
    const res = await axios.post("/api/sign-up", {
      userData,
    });
    console.log("성공했니?:", res.data);
  } catch (error) {
    console.error("실패니..?", error);
  }
};

export { postSignUp };
