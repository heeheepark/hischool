import { client } from "../api/client";

export const postEmail = async (email, setValidEmail, setNotValidEmail) => {
  try {
    const res = await client.get(`/api/pw-find?email=${email}`);
    const result = res.data;
    setValidEmail(true);
  } catch (err) {
    setNotValidEmail(true);
  }
};
