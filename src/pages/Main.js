import React from "react";
import { Outlet } from "react-router";
import { Aside, Content, Header } from "../styles/MainStyle";
import SideMenu from "../components/SideMenu";

const Main = () => {
  return (
    <div>
      <div className="wrap" style={{ display: "flex" }}>
        <Aside>
          <SideMenu />
        </Aside>
        <div>
          <Header>
            <div>
              <div className="school-logo">교표</div>
              <span className="school-name">함지고등학교</span>
              <span className="grade">1학년</span>
              <span className="class-num">1반</span>
            </div>
          </Header>
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Main;
