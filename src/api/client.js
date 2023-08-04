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
// axios.interceptors.response.use(
//   response => {
//     // 정상적인 응답 처리
//     return response;
//   },
//   async error => {
//     const originalRequest = error.config;
//     const refreshToken = getCookie("refreshToken");
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       refreshToken &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const res = await client.post(`/api/refresh-token`, {
//           refreshToken: refreshToken,
//         });
//         const newAccessToken = res.data.accessToken;
//         setCookie("accessToken", newAccessToken, {
//           path: "/",
//           secure: true,
//           sameSite: "none",
//           httpOnly: true,
//         });
//         // 원래 요청 재시도
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return client(originalRequest);
//       } catch (error) {
//         // refreshToken이 만료되었거나 에러가 발생한 경우 로그아웃 처리 등을 할 수 있음
//         console.log("토큰 갱신 실패:", error);
//         // 로그아웃 등 처리
//       }
//     }
//     return Promise.reject(error);
//   },
// );
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
export const fetchLogin = async (email, pw) => {
  try {
    const res = await client.post(`/api/sign-in`, {
      email: email,
      pw: pw,
    });
    console.log(res.data);
    const result = await res.data;
    const role = result.role;
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
    return role;
  } catch (error) {
    console.log(error);
  }
};
