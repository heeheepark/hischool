import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null, // 키명?
  pic: null, // 사진
  displayName: null, // 이름
  email: null, // 이메일
  userSelected: null, // 유저 선택
  isAuthReady: false, // 로그인상태 체크
  errMessage: "", // 에러 메시지
  isLoading: false, // 비동기 처리
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // login: (state, action) => {},
    // login: (state, action) => {},
    // login: (state, action) => {},
    // login: (state, action) => {},
    // login: (state, action) => {},
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
