import { client } from "../login/client";

// 공지사항 리스트
export const getNoticeList = async setNoticeData => {
  try {
    const res = await client.get(`/api/notice`, { timeout: 1000 });
    const result = res.data;
    setNoticeData(result);
  } catch (err) {
    console.error(err);
  }
};

// 게시판 글 가져오기
export const getNoticeData = async noticeId => {
  try {
    const res = await client.get(`/api/notice/bynotice?noticeId=${noticeId}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const patchNoticeHit = async noticeId => {
  try {
    const response = await client.patch(
      `/api/notice/hits?noticeId=${noticeId}`,
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
