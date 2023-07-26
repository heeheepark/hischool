import { SideMenuWrap } from "../styles/SideMenuStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faFileInvoice,
  faCalendarDays,
  faCommentDots,
  faLock,
  faRightFromBracket,
  faCircleInfo,
  faHouseChimney,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <SideMenuWrap>
      <div className="user-info-wrap">
        <div className="main-logo">Hi! School</div>
        <div className="user-img" onClick={() => navigate("/mypage")}>
          <span>사용자 사진</span>
        </div>
        <p>
          <span className="user-icon">
            <FontAwesomeIcon icon={faUser} />
            {/* <FontAwesomeIcon icon={faUserTie} /> */}
          </span>
          <ins onClick={() => navigate("/mypage")}>
            <span className="user-name">강동원</span>
          </ins>
          <span>님</span>
          <br />
          <ins onClick={() => navigate("/mypage")}>
            <span className="user-email">(dongwon@gmail.com)</span>
          </ins>
          <br />
          <span>반갑습니다.</span>
        </p>
      </div>
      <div className="gnb-wrap">
        <div className="gnb">
          <ul>
            <NavLink
              to="/student/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faHouseChimney} className="icon" />
                <span>홈</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to="/student/schoolrecord"
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faFileInvoice} className="icon" />
                <span>내신 점수</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to="/student/mockrecord"
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faFileInvoice} className="icon" />
                <span>모의고사 점수</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <NavLink
              to="/student/foodmenu"
              className={({ isActive }) =>
                "nav-link" + (isActive ? "-active" : "")
              }
            >
              <li>
                <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                <span>급식표</span>
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              </li>
            </NavLink>
            <Link className="nav-link">
              <li>
                <FontAwesomeIcon icon={faCommentDots} className="icon" />
                <span>커뮤니티</span>
                <FontAwesomeIcon icon={faLock} className="arrow" />
              </li>
            </Link>
          </ul>
        </div>
        <div className="footer">
          <Link className="btn-logout" to="/">
            <FontAwesomeIcon icon={faRightFromBracket} className="logout" />
            <span> 로그아웃</span>
          </Link>
          {/* <div>
            <FontAwesomeIcon icon={faCircleInfo} className="info" />
          </div> */}
        </div>
      </div>
    </SideMenuWrap>
  );
};
export default SideMenu;
