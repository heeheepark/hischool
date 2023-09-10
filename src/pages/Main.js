import React, { useState } from "react";
import { Outlet } from "react-router";
import { Aside, Content, Header, MainDiv } from "../styles/main/MainStyle";
import SideMenu from "../components/SideMenu";
import { useEffect } from "react";
import { getSchoolInfo, getSchoolLogo } from "../api/login/userInfoAxios";

const Main = () => {
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [grade, setGrade] = useState(null);
  const [classNum, setClassNum] = useState(null);

  useEffect(() => {
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
            <div className="main-content-wrap">
              <Outlet />
            </div>
          </Content>
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
