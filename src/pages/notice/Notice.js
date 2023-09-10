import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NoticeBoard,
  NoticeInput,
  NoticeTitle,
  NoticeWrap,
} from "../../styles/notice/NoticeStyle";
import NoticePaging from "../../components/notice/NoticePaging";
import { getNoticeList, searchNotice } from "../../api/notice/noticeAxios";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../api/login/client";
import { finishLoading, startLoading } from "../../reducers/loadingSlice";
import { Loading } from "../../components/Loading";

const Notice = () => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const location = useLocation();
  const user = location.pathname.split("/")[1];
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchedNotice, setSearchedNotice] = useState([]);
  const [searchTotal, setSearchTotal] = useState("");

  const important = notices.filter(notice => notice.imptYn === 1);
  const normal = notices.filter(notice => notice.imptYn === 0);
  const importantsearch = searchedNotice.filter(notice => notice.imptYn === 1);
  const normalsearch = searchedNotice.filter(notice => notice.imptYn === 0);

  const lastImportant = important
    .slice(-important.length)
    .sort((a, b) => b.noticeId - a.noticeId);
  const lastImportantsearch = importantsearch
    .slice(-importantsearch.length)
    .sort((a, b) => b.noticeId - a.noticeId);

  const totalItemsCount = totalCount - lastImportant.length;

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      await searchNotice(search, 1, setSearchedNotice, setSearchTotal);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnterKey = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    client.interceptors.request.use(function (config) {
      dispatch(startLoading({}));
      return config;
    });
    client.interceptors.response.use(config => {
      dispatch(finishLoading({}));
      return config;
    });
    async function fetchData() {
      try {
        await getNoticeList(setNotices, setTotalCount, currentPage);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setNotices, setTotalCount, currentPage]);

  return (
    <NoticeWrap>
      <NoticeTitle>
        <h3>공지사항</h3>
      </NoticeTitle>
      <NoticeInput>
        <form>
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            name="search-bar"
            value={search}
            onChange={handleChange}
            onKeyPress={handleEnterKey}
          />
          <button type="button" onClick={handleSearch}>
            검색
          </button>
        </form>
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
          {loading ? <Loading /> : null}
          {searchedNotice.length > 0 ? (
            <>
              {lastImportantsearch.map(notice => (
                <ul key={notice.noticeId} className="important-notice">
                  <li>
                    <span>중요</span>
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
              {normalsearch.map(notice => (
                <ul key={notice.noticeId}>
                  <li>{notice.noticeId}</li>
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
            </>
          ) : (
            <>
              {lastImportant.map(notice => (
                <ul key={notice.noticeId} className="important-notice">
                  <li>
                    <span>중요</span>
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
              {normal.map(notice => (
                <ul key={notice.noticeId}>
                  <li>{notice.noticeId}</li>
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
            </>
          )}
        </div>
      </NoticeBoard>
      <NoticePaging
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={searchedNotice.length > 0 ? searchTotal : totalItemsCount}
        last4Important={searchedNotice.length > 0 ? 0 : lastImportant}
      />
    </NoticeWrap>
  );
};

export default Notice;
