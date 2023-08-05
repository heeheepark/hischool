import axios from "axios";
import { getCookie, setCookie } from "./cookie";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

axios.interceptors.request.use(
  async config => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// 토큰 갱신 후 실패한 요청을 저장하는 배열
let failedQueue = [];

// 토큰 갱신 함수
const refreshToken = async () => {
  try {
    const res = await axios.post(`/api/refresh-token`, {
      refreshToken: getCookie("refreshToken"),
    });
    const result = res.data;
    if (result) {
      setCookie("accessToken", result, {
        path: "/",
        secure: true,
        sameSite: "none",
        httpOnly: true,
      });
      processFailedQueue(null, result);
    } else {
      console.log("토큰 갱신 실패");
    }
  } catch (error) {
    processFailedQueue(error, null);
  }
};

// 토큰 갱신 후 실패한 요청을 재시도하는 함수
const processFailedQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.config.headers.Authorization = `Bearer ${token}`;
      prom.resolve(client(prom.config));
    }
  });
  failedQueue = [];
};

// 로그인 함수
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

    // 5분 후에 refreshToken 함수 호출
    setTimeout(refreshToken, 275000);

    return role;
  } catch (error) {
    console.log(error);
  }
};
