import { AboutDiv } from "../styles/AboutStyle";
import userImg from "../assets/gangdongwon.jpeg";
import canvaImg from "../assets/canva-logo.png";
import githubImg from "../assets/github-logo.png";
import notionImg from "../assets/Notion-logo.png";

const About = () => {
  return (
    <AboutDiv>
      <div className="service-info-wrap">
        <h3>Hi! School 서비스 소개</h3>
        <p>
          <span>
            고등학교 내신 성적과 모의고사 성적을 간편하게 관리할 수는 없을까?
          </span>
          <br />
          <span>
            동아리 활동이나 대입 정보 교류 등 고등학생을 위한 커뮤니티가 있으면
            좋지 않을까?
          </span>
        </p>
        <p>
          <span>
            그렇게 시작된 고등학교 성적 관리 서비스{" "}
            <strong>‘hi! School’</strong>은
          </span>
          <br />
          <span>
            고등학생과 담임 교사가 직접{" "}
            <strong>내신 성적과 모의고사 성적을 관리</strong>하고, <br />
            이를 바탕으로 원활한 <strong>대입 상담 및 계획</strong>이 이루어질
            수 있도록 돕는 <strong>‘고등학교 통합성적관리 플랫폼’</strong>
            입니다.
          </span>
          <br />
          <span className="info-message">
            ※ 커뮤니티 기능은 추후 업데이트될 예정입니다.
          </span>
        </p>
      </div>
      <div className="developer-wrap">
        <h3>서비스를 만든 사람들</h3>
        <div className="team-info">
          <p>
            <a href="">
              <span>
                <img src={notionImg} alt="노션 아이콘" />
              </span>
              <span>팀 노션</span>
            </a>
            <a href="">
              <span>
                <img src={canvaImg} alt="캔바 아이콘" />
              </span>
              <span>프로젝트 발표 자료</span>
            </a>
          </p>
        </div>
        <h4>Front-end</h4>
        <div className="front-wrap">
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="박주희 이미지" />
              <div>
                <div>
                  <span className="member-name">박주희</span>
                  <div className="icons">
                    <a href="" rel="noreferrer" target="_blank">
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  기획 총괄 / 헤더, 사이드 메뉴 /<br />
                  학생 메인 / 내신 점수 / 모의고사 점수 /<br />
                  급식표 / 선생님 메인 / 성적 관리
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="견기성 이미지" />
              <div>
                <div>
                  <span className="member-name">견기성</span>
                  <div className="icons">
                    <a
                      href="https://github.com/gyeongisung"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  스토리보드 / 로그인 / 회원가입 / <br />
                  마이페이지 / 학생 관리
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="박호진 이미지" />
              <div>
                <div>
                  <span className="member-name">박호진</span>
                  <div className="icons">
                    <a
                      href="https://github.com/devicepac"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  Figma / 모의고사 성적 입력 / <br />
                  내신 성적 입력 / 과목 정보 입력
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="신지호 이미지" />
              <div>
                <div>
                  <span className="member-name">신지호</span>
                </div>
                <span className="roles">
                  내신 점수 / 모의고사 점수 / <br />
                  급식표 초안 작업
                </span>
              </div>
            </div>
          </div>
        </div>
        <h4>Back-end</h4>
        <div className="back-wrap">
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="성수천 이미지" />
              <div>
                <div>
                  <span className="member-name">성수천</span>
                  <div className="icons">
                    <a
                      href="https://github.com/sucheo"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  선생님 메인 / 급식표 / 과목 정보 입력 /<br />
                  내신 성적 입력 / 모의고사 성적 입력
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="남규진 이미지" />
              <div>
                <div>
                  <span className="member-name">남규진</span>
                  <div className="icons">
                    <a
                      href="https://github.com/Minami0717"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  로그인 / 회원가입
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="노정민 이미지" />
              <div>
                <div>
                  <span className="member-name">노정민</span>
                  <div className="icons">
                    <a href="" rel="noreferrer" target="_blank">
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  Notion / 마이페이지 / 학생 관리 <br />
                  가입 대기 명단 / 성적 관리
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="member-detail-wrap">
              <img src={userImg} alt="석민경 이미지" />
              <div>
                <div>
                  <span className="member-name">석민경</span>
                  <div className="icons">
                    <a href="" rel="noreferrer" target="_blank">
                      <img
                        src={githubImg}
                        alt="깃허브 바로가기"
                        className="github"
                      />
                    </a>
                  </div>
                </div>
                <span className="roles">
                  학생 메인 / 내신 점수 / 모의고사 점수 /<br />
                  주간, 월간 급식표 / 시간표
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutDiv>
  );
};
export default About;
