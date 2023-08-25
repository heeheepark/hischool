import { client } from "../api/client";

export const postEmail = async (email, setValidEmail, setNotValidEmail) => {
  try {
    console.log(email);
    const encodedEmail = encodeURIComponent(email);
    const res = await client.get(`/api/pw-find?email=${email}`);
    const result = res.data;
    console.log(result);
    setValidEmail(true);
  } catch (err) {
    setNotValidEmail(true);
  }
};
