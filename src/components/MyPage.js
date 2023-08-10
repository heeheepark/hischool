import React, { useState, useEffect } from "react";
import {
  TcButtons,
  TcMyPageRightInfo,
  TcMyPageUserInfo,
  TcMyPageWrap,
} from "../styles/MyPageStyle";
import { getUserData, patchMyPageData } from "../api/myPageAxios";
import { Modal } from "./Modal";
import DaumPost from "./login/DaumPost";
import { useNavigate } from "react-router";

const MyPage = () => {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const [detailAddress, setDetailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [codeConFirm, setCodeConFirm] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [userPic, setUserPic] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUserData(setUserData);
  }, []);

  const handleModalOpen = () => {
    setCodeConFirm(true);
  };

  const handleModalClose = () => {
    setAuthModal(false);
  };

  const handleChangeAddress = e => {
    e.preventDefault();
    e.target.value = setHouseAddress();
    // const { name, value } = e.target;
    // setHouseAddress({
    //   ...houseAddress,
    //   [name]: value,
    // });
  };

  const handleCancel = e => {
    e.preventDefault();
    navigate(-1);
  };

  const handleChangePass = e => {
    e.preventDefault();
    setPassword();
  };
  const handleChangeConfPass = e => {
    e.preventDefault();
    setPasswordConfirm();
  };
  const handleChangePhone = e => {
    e.preventDefault();
    setPhone();
  };
  const handleChangeDetailAddr = e => {
    e.preventDefault();
    setDetailAddress();
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Updated Teacher:", userData);
  };

  const handlePatch = e => {
    e.preventDefault();
    e.persist();

    const userPatchData = {
      nm: name,
      phone,
      address: houseAddress.address,
      detailAddr: detailAddress,
      pw: password,
      confirmPw: passwordConfirm,
      pic: selectFile,
    };

    let formData = new FormData();
    formData.append("pic", selectFile);
    formData.append("data", JSON.stringify(userPatchData));

    patchMyPageData();
    navigate("/myapge");
  };

  const handleChangeFile = e => {
    const file = e.target.files[0];
    setSelectFile(file);
    setUserPic(URL.createObjectURL(file));
  };

  return (
    <TcMyPageWrap onSubmit={handleSubmit}>
      <div className="mypage-top">
        <div className="user-info">
          <div className="user-info-wrap">
            <div className="user-picture-wrap">
              <div className="picture-img">
                {<img src={userData.pic} alt="pic" />}
              </div>
              <input
                type="file"
                accept="image/jpg, image/png, image/gif, image/jpeg"
                onChange={handleChangeFile}
              />
            </div>
            <div className="school-info">
              <TcMyPageUserInfo>
                <li>
                  <label>이메일</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={userData.email}
                    readOnly
                  />
                </li>
                <li>
                  <label>비밀번호</label>
                  <input
                    type="password"
                    name="password"
                    defaultValue={userData.password}
                    onChange={handleChangePass}
                    autoComplete="on"
                  />
                </li>
                <li>
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    defaultValue={userData.confirmPassword}
                    onChange={handleChangeConfPass}
                    autoComplete="on"
                  />
                </li>
                <li>
                  <label>이름</label>
                  <input
                    type="text"
                    name="tnm"
                    defaultValue={userData.unm}
                    readOnly
                  />
                </li>
                <li>
                  <label>생년월일</label>
                  <input
                    type="text"
                    name="birth"
                    defaultValue={userData.birth}
                    readOnly
                  />
                </li>
                <li>
                  <label>연락처</label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={userData.phone}
                    onChange={handleChangePhone}
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
                        onChange={handleChangeAddress}
                        onClick={() => setAddressModal(true)}
                        value={houseAddress.address || userData.address}
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
                    </div>
                    <input
                      type="text"
                      name="detailAddress"
                      className="detail-address"
                      defaultValue={userData.detailAddr}
                      onChange={handleChangeDetailAddr}
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
                      defaultValue={userData.schnm}
                      readOnly
                    />
                    <div>
                      <input
                        type="text"
                        name="grade"
                        defaultValue={userData.grade}
                        readOnly
                      />
                      <input
                        type="text"
                        name="van"
                        defaultValue={userData.van}
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
            <button type="submit" onClick={handlePatch}>
              수정
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              취소
            </button>
          </div>
        </TcButtons>
      </div>
    </TcMyPageWrap>
  );
};

export default MyPage;
