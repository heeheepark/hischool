import React, { useState } from "react";
import { Outlet } from "react-router";
import { Aside, Content, Header, MainDiv } from "../styles/main/MainStyle";
import SideMenu from "../components/SideMenu";
import { useEffect } from "react";
import { getSchoolInfo, getSchoolLogo } from "../api/userInfoAxios";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { client } from "../api/client";
import { finishLoading, startLoading } from "../reducers/loadingSlice";

const Main = () => {
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [grade, setGrade] = useState(null);
  const [classNum, setClassNum] = useState(null);
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    client.interceptors.request.use(function (config) {
      // 로딩 호출
      dispatch(startLoading({}));
      return config;
    });
    client.interceptors.response.use(config => {
      // 완료 시 로딩창 종료
      dispatch(finishLoading({}));
      return config;
    });
    getSchoolInfo(setSchoolName, setGrade, setClassNum);
    getSchoolLogo(setSchoolLogo);
  }, []);

  return (
    <MainDiv>
      <div className="wrap">
        <Aside>
          <SideMenu />
        </Aside>
        <div className="main-right">
          <Header>
            <div>
              <div className="school-logo">
                <img src={schoolLogo} alt="" />
              </div>
              <span className="school-name">{schoolName}</span>
              <span className="grade">{`${grade} 학년`}</span>
              <span className="class-num">{`${classNum} 반`}</span>
            </div>
          </Header>
          <Content>
            {loading ? <Loading /> : null}
            <div className="content-wrap">
              <Outlet />
            </div>
          </Content>
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
