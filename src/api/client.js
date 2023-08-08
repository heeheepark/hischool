import axios from "axios";
import { getCookie, setCookie } from "./cookie";

// axios 인스턴스 생성
export const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 요청 인터셉터 설정
client.interceptors.request.use(
  async config => {
    const token = getCookie("accessToken");
    if (token) {
      console.log("잘나오니?", token);
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
    console.log("리스퐌쯔 성공?", response);
    return response;
  },
  async error => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      try {
        await refreshToken();
        console.log(getCookie("accessToken"));
        config.headers.Authorization = `Bearer ${getCookie("accessToken")}`;
        return client(config);
      } catch (error) {
        console.log("리스뽠쯔 에러 왔니?", error);
      }
    }
    return Promise.reject(error);
  },
);

// 토큰 갱신 함수
const refreshToken = async () => {
  try {
    const res = await client.post(`/api/refresh-token`, {
      refreshToken: getCookie("refreshToken"),
    });
    const result = res.data;
    if (result) {
      setCookie("accessToken", result.accessToken, {
        path: "/",
        secure: true,
        sameSite: "none",
        httpOnly: true,
      });
      client.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.accessToken}`;
      console.log("AccessToken 업뎃 :", result);
    } else {
      console.log("토큰 갱신 실패");
    }
  } catch (error) {
    console.error("토큰 갱신 에러:", error);
  }
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
    return role;
  } catch (error) {
    console.log(error);
    return null;
  }
};
