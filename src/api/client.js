import axios from "axios";
import { getCookie, setCookie } from "./cookie";

// axios 인스턴스 생성
export const client = axios.create({
  baseURL: "http://192.168.0.144:5003/",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정
client.interceptors.request.use(
  async config => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정
client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { config, response } = error;
    const refreshToken = getCookie("refreshToken");
    if (response.status === 401 && refreshToken) {
      try {
        const { data } = await client.post(`/api/refresh-token`, {
          refreshToken,
        });
        const accessToken = data;
        setCookie("accessToken", accessToken);
        config.headers.Authorization = `Bearer ${accessToken}`;

        // 토큰 갱신 후 재시도
        const retryResponse = await client(config);
        return retryResponse;

      } catch (error) {
        console.log(error);
      }
    }
    return Promise.reject(error);
  },
);

// 로그인 함수
export const fetchLogin = async (email, password) => {
  try {
    const res = await client.post(`/api/sign-in`, {
      email: email,
      pw: password,
    });
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
