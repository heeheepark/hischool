import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  NoticeDetailBoard,
  NoticeDetailButton,
  NoticeDetailITitle,
  NoticeDetailInformation,
  NoticeWrap,
} from "../../styles/notice/NoticeStyle";
import { getNoticeData, patchNoticeHit } from "../../api/notice/noticeAxios";
import { client } from "../../api/login/client";
import { finishLoading, startLoading } from "../../reducers/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/Loading";

const NoticeDetail = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.loading);
  const { noticeId } = useParams();
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();
  const url = window.location.pathname;
  const users = url.substring(1, 8);

  useEffect(() => {
    patchNoticeHit(noticeId);
    client.interceptors.request.use(function (config) {
      dispatch(startLoading({}));
      return config;
    });
    client.interceptors.response.use(config => {
      dispatch(finishLoading({}));
      return config;
    });
    async function fetchNotice() {
      try {
        const fetchedNotice = await getNoticeData(noticeId);
        setNotice(fetchedNotice);
      } catch (error) {
        console.error("Error fetching notice:", error);
        setNotice(null);
      }
    }
    fetchNotice();
  }, [noticeId]);

  if (notice === null) {
    return (
      <div>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : null}
      </div>
    );
  }

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }
  const handleCencle = () => {
    navigate(`/${users}/notice`);
  };

  return (
    <NoticeWrap>
      <h3>공지사항</h3>
      <NoticeDetailITitle>
        {notice.imptYn === 1 ? <span>중요</span> : ""}
        <p>{notice.title}</p>
      </NoticeDetailITitle>
      <NoticeDetailInformation>
        <div>관리자</div>
        <div>
          <p>{notice.hits}</p>
          <p>{notice.createdAt.split("T", 1)}</p>
        </div>
      </NoticeDetailInformation>
      <NoticeDetailBoard
        dangerouslySetInnerHTML={{ __html: notice.content }}
      ></NoticeDetailBoard>
      <NoticeDetailButton>
        <button onClick={handleCencle}>목록</button>
      </NoticeDetailButton>
    </NoticeWrap>
  );
};

export default NoticeDetail;
