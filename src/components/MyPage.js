import React, { useState, useEffect } from "react";
import {
  TcButtons,
  TcMyPageRightInfo,
  TcMyPageUserInfo,
  TcMyPageWrap,
} from "../styles/MyPageStyle";
import { getUserData } from "../api/myPageAxios";

const MyPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData(setUserData);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Updated Teacher:", userData);
  };

  // 입력 양식을 변경할 때 호출되는 함수입니다.
  const handleChange = e => {
    e.preventDefault();
    setUserData();
  };

  // 사진을 업로드할 때 호출되는 함수입니다.
  const handlePictureUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData(prevTeacher => ({
        ...prevTeacher,
        pic: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  console.log(userData);
  return (
    <TcMyPageWrap onSubmit={handleSubmit}>
      <div className="mypage-top">
        <div className="user-info">
          <div className="user-info-wrap">
            <div className="user-picture-wrap">
              <div className="picture-img">
                <img src={userData.pic} alt="pic" />
              </div>
              <input
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={handlePictureUpload}
              />
            </div>
            <div className="school-info">
              <TcMyPageUserInfo>
                <li>
                  <label>이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    readOnly
                  />
                </li>
                <li>
                  <label>비밀번호</label>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <label>이름</label>
                  <input type="text" name="tnm" value={userData.unm} readOnly />
                </li>
                <li>
                  <label>생년월일</label>
                  <input
                    type="text"
                    name="birth"
                    value={userData.birth}
                    readOnly
                  />
                  {/* `${userData.birth.split("-")[0]}년 ${
                      userData.birth.split("-")[1]
                    }월 ${userData.birth.split("-")[2]}일` */}
                </li>
                <li>
                  <label>연락처</label>
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <label>주소</label>
                  <div className="address-wrap">
                    <div>
                      <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        readOnly
                      />
                      <button>주소 검색</button>
                    </div>
                    <input
                      type="text"
                      name="detailAddress"
                      className="detail-address"
                      value={userData.detailAddress}
                      onChange={handleChange}
                      placeholder="상세 주소를 입력하세요."
                    />
                  </div>
                </li>
                <li>
                  <label>소속 학교</label>
                  <div>
                    <input
                      type="text"
                      name="snm"
                      value={userData.shnm}
                      onChange={handleChange}
                      readOnly
                    />
                    <div>
                      <input
                        type="text"
                        name="grade"
                        value={userData.grade}
                        onChange={handleChange}
                        readOnly
                      />
                      <input
                        type="text"
                        name="van"
                        value={userData.van}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                  </div>
                </li>
                <li></li>
              </TcMyPageUserInfo>
              <TcMyPageRightInfo>
                <ul></ul>
              </TcMyPageRightInfo>
            </div>
          </div>
        </div>
      </div>
      <div className="mypage-bottom">
        <TcButtons>
          <button type="button" className="withdraw-btn">
            회원탈퇴
          </button>
          <div>
            <button type="submit">수정</button>
            <button type="button" className="cancel-btn">
              취소
            </button>
          </div>
        </TcButtons>
      </div>
    </TcMyPageWrap>
  );
};

export default MyPage;
