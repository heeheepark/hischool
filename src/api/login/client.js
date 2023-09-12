import axios from "axios";
import { getCookie, setCookie } from "./cookie";

// axios 인스턴스 생성
export const client = axios.create({
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
  err => {
    console.log(err);
    return Promise.reject(err);
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
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(err);
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
  } catch (err) {
    console.log(err);
  }
};
