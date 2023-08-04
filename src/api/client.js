import axios from "axios";
import { getCookie, setCookie } from "./cookie";
import { Cookies } from "react-cookie";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// Request 처리
axios.interceptors.request.use(
  async config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    // if (expireTime <= Date.now() && refreshToken) {
    //   const {data} = await axios.post('url', { refreshToken });
    //   config.headers.Authorization = `Bearer ${data.accessToken}`;
    // }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// 쿠키 set 하기
export const fetchLogin = async (email, pw, setRole) => {
  try {
    const res = await client.post(`/api/sign-in`, {
      email: email,
      pw: pw,
    });
    console.log(res.data);
    const result = await res.data;
    setCookie("refreshToken", result.refreshToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    setCookie("accessToken", result.accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    setRole(result.role);
    const { data } = await axios.get(`/api/mypage/user-mypage`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// logout시 쿠키 지우기
// export const fetchLogout = () => {
//   Cookies.remove("refreshToken", { path: "" });
//   Cookies.remove("accessToken", { path: "" });
// };
