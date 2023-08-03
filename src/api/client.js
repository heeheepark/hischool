import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// Request 처리
axios.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// 쿠키 set 하기
export const fetchLogin = async (email, pw) => {
  try {
    const res = await client.post(`/api/sign-in?email=${email}&pw=${pw}`, {
      email: email,
      pw: pw,
    });
    console.log(res.data);
    const result = await res.data;
    cookies.set("token", result.token, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃은 토큰을 리무브 해야함
// logout시 쿠키 지우기
// export const fetchLogout = () => {
//   cookies.remove("token");
// };
