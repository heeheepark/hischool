import React, { useEffect } from "react";
import MyPage from "../components/MyPage";
import { MypageDiv } from "../styles/MyPageStyle";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../api/client";
import { finishLoading, startLoading } from "../reducers/loadingSlice";
import Loading from "../components/Loading";

const Mypage = () => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    client.interceptors.request.use(function (config) {
      dispatch({
        type: startLoading,
      });
      return config;
    });
    client.interceptors.response.use(config => {
      dispatch({
        type: finishLoading,
      });
      return config;
    });
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <MypageDiv>
        <h3>회원 정보 수정</h3>
        <MyPage />
      </MypageDiv>
    </>
  );
};

export default Mypage;
