import React, { useState, useEffect } from "react";
import {
  TcButtons,
  TcMyPageRightInfo,
  TcMyPageUserInfo,
  TcMyPageWrap,
} from "../styles/MyPageStyle";
import { getUserData } from "../api/myPageAxios";
import { Modal } from "./Modal";
import DaumPost from "./login/DaumPost";

const MyPage = () => {
  const [userData, setUserData] = useState([]);
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  console.log(houseAddress);
  const [detailAddress, setDetailAddress] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [codeConFirm, setCodeConFirm] = useState(false);

  const handleModalOpen = () => {
    setCodeConFirm(true);
  };

  const handleModalClose = () => {
    setAuthModal(false);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setHouseAddress({
      ...houseAddress,
      [name]: value,
    });
  };
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
              {/* {renderImagePreview} */}
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                // onChange={handleFileChange}
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
                        className="user_enroll_text"
                        id="address-input"
                        type="text"
                        required={true}
                        name="address"
                        onChange={handleInput}
                        onClick={() => setAddressModal(true)}
                        value={houseAddress.address}
                        readOnly
                      />
                      {addressModal && (
                        <Modal
                          isOpen={addressModal}
                          onRequestClose={handleModalClose}
                          onAfterOpen={handleModalOpen}
                        >
                          <DaumPost
                            company={houseAddress}
                            setHouseAddress={setHouseAddress}
                            onComplete={() => setAddressModal(false)}
                          />
                        </Modal>
                      )}
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
