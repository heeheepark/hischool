import { client } from "./client";

export const postEmail = async (email, setValidEmail, setNotValidEmail) => {
  try {
    const res = await client.get(`/api/pw-find?email=${email}`);
    setValidEmail(true);
  } catch (err) {
    setNotValidEmail(true);
  }
};
