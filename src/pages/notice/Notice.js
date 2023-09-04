import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NoticeBoard,
  NoticeInput,
  NoticeTitle,
  NoticeWrap,
} from "../../styles/notice/NoticeStyle";
import NoticePaging from "../../components/notice/NoticePaging";
import { getNoticeList } from "../../api/notice/noticeAxios";

const Notice = () => {
  const location = useLocation();
  const user = location.pathname.split("/")[1];
  const [noticeData, setNoticeData] = useState([]);
  // 현재 페이지 상태를 관리하는 상태 변수
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지당 보여질 일반 공지 개수
  const itemsPerPage = 10;

  // 중요한 공지와 일반 공지를 필터링
  const importantNotices = noticeData.filter(notice => notice.imptYn === 1); //중요공지
  const normalNotices = noticeData.filter(notice => notice.imptYn === 0); //일반공지

  // 중요한 공지 중 마지막 4개를 유지, 나머지 중요한 공지는 일반 공지로 처리
  const last4ImportantNotices = importantNotices
    .slice(-4) // 항상 마지막 4개 선택
    .sort((a, b) => b.noticeId - a.noticeId); // id 역순 정렬
  const otherImportantNotices = importantNotices.slice(0, -4); // 마지막에서 4번째를 제외하고 나머지

  // 마지막에서 4번째를 제외하고 중요한 공지와 일반 공지를 합친 배열
  const combinedNotices = [...otherImportantNotices, ...normalNotices];
  // 총 개수
  const totalcombinedNoticeCount = combinedNotices.length;
  // 역순 배치
  const sortedcombinedNotices = combinedNotices.sort(
    (a, b) => b.noticeId - a.noticeId,
  );

  // 현재 페이지에서 보여줄 공지의 첫 번째와 마지막 인덱스를 계산
  const indexOfLastItem = currentPage * itemsPerPage; // 현재 보여지는 페이지 갯수
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 한페이지에서 보여줄 항목의 갯수

  // 현재 페이지 일반 공지 배열
  const currentNormalItems = sortedcombinedNotices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  useEffect(() => {
    async function fetchData() {
      try {
        await getNoticeList(setNoticeData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setNoticeData]);

  return (
    <NoticeWrap>
      <NoticeTitle>
        <h3>공지사항</h3>
      </NoticeTitle>
      <NoticeInput>
        <div>
          <input type="text" id="search" placeholder="검색어를 입력하세요." />
          <button>검색</button>
        </div>
      </NoticeInput>
      <NoticeBoard>
        <ul className="title-wrap">
          <li className="table-numer">번호</li>
          <li className="table-title">제목</li>
          <li className="table-writer">작성자</li>
          <li className="table-creationdate">등록일</li>
          <li className="table-views">조회수</li>
        </ul>
        <div className="notice-list">
          {last4ImportantNotices.map(notice => (
            <ul key={notice.noticeId} className="important-notice">
              <li>
                <span>중요</span>
              </li>
              <li>
                <Link to={`/${user}/notice/${notice.noticeId}`}>
                  {notice.title}
                </Link>
              </li>
              <li>관리자{notice.userId}</li>
              <li>{notice.createdAt.split("T", 1)}</li>
              <li>{notice.hits}</li>
            </ul>
          ))}
          {currentNormalItems.map((notice, index) => (
            <ul key={notice.noticeId}>
              <li>
                {totalcombinedNoticeCount -
                  (index + itemsPerPage * (currentPage - 1))}
              </li>
              <li>
                <Link to={`/${user}/notice/${notice.noticeId}`}>
                  {notice.title}
                </Link>
              </li>
              <li>관리자</li>
              <li>{notice.createdAt.split("T", 1)}</li>
              <li>{notice.hits}</li>
            </ul>
          ))}
        </div>
      </NoticeBoard>
      <NoticePaging
        page={currentPage}
        setPage={setCurrentPage}
        totalpage={totalcombinedNoticeCount}
        itemsPerPage={itemsPerPage}
      />
    </NoticeWrap>
  );
};

export default Notice;
