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
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <SideMenuWrap>
      <div className="user-info-wrap">
        <div className="main-logo">성적관리 프로그램</div>
        <div className="user-img">
          <span>사용자 사진</span>
        </div>
        <p>
          <span className="user-icon">
            <FontAwesomeIcon icon={faUser} />
            {/* <FontAwesomeIcon icon={faUserTie} /> */}
          </span>
          <ins>
            <span className="user-name">강동원</span>
            <span>님 </span>
            <br />
            <span className="user-id">(dongwon@gmail.com)</span>
          </ins>
          <br />
          <span>반갑습니다.</span>
        </p>
      </div>
      <div className="gnb-wrap">
        <div className="gnb">
          <ul>
            <li className="active">
              <FontAwesomeIcon icon={faHouseChimney} className="icon" />

              <Link to="/student">
                <span>홈</span>
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
            </li>
            <li>
              <FontAwesomeIcon icon={faFileInvoice} className="icon" />
              <Link to="/student/schoolrecord">
                <span>내신 점수</span>
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
            </li>
            <li>
              <FontAwesomeIcon icon={faFileInvoice} className="icon" />
              <Link to="/student/mockrecord">
                <span>모의고사 점수</span>
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <Link to="/student/foodmenu">
                <span>급식표</span>
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCommentDots} className="icon" />
              <span>커뮤니티</span>
              <FontAwesomeIcon icon={faLock} className="arrow" />
            </li>
          </ul>
        </div>
        <div className="footer">
          <div>
            <FontAwesomeIcon icon={faRightFromBracket} className="logout" />
            <span> 로그아웃</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleInfo} className="info" />
          </div>
        </div>
      </div>
    </SideMenuWrap>
  );
};
export default SideMenu;
