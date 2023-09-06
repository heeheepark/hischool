import React, { useState, useEffect } from "react";
import DaumPost from "./DaumPost";
import { useLocation, useNavigate } from "react-router";
import {
  deleteUser,
  getUserData,
  putMyPageData,
} from "../../api/login/myPageAxios";
import {
  TcButtons,
  TcMyPageUserInfo,
  TcMyPageWrap,
} from "../../styles/login/MyPageStyle";
import { Modal } from "../modal/Modal";

const MyPageContent = () => {
  const [userData, setUserData] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const [detailAddress, setDetailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [addressModal, setAddressModal] = useState(false);
  const [codeConFirm, setCodeConFirm] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [userPic, setUserPic] = useState("");
  const [cancelOk, setCancelOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errPassword, setErrPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const checkPass = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/g;
    const isValid = regex.test(password);
    setErrPassword(isValid ? "" : "비밀번호를 확인 해주세요.");
  };


  const userRole = location.pathname.split("/")[1];
  // get axios 담는 함수
  useEffect(() => {
    getUserData(setUserData);
  }, []);

  const handleModalOpen = () => {
    setCodeConFirm(true);
  };

  const handleModalClose = () => {
    setAddressModal(false);
    setCodeConFirm(false);
  };

  const handleChangeAddress = e => {
    setHouseAddress(e.target.value);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleChangePass = e => {
    setPassword(e.target.value);
  };

  const handleChangeConfPass = e => {
    setPasswordConfirm(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleChangeDetailAddr = e => {
    setDetailAddress(e.target.value);
  };

  // 이벤트 방지 함수
  const handleSubmit = e => {
    e.preventDefault();
  };

  // 회원정보 수정 함수
  const handlePatch = e => {
    e.preventDefault();
    e.persist();

    const userPdata = {
      phone: phone || userData.phone,
      address: houseAddress.address || userData.address,
      detailAddr: detailAddress || userData.detailAddr,
      pw: password || userData.pw,
    };

    let formData = new FormData();
    selectFile && formData.append("pic", selectFile);
    formData.append("p", JSON.stringify(userPdata));

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!password && !passwordConfirm) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    putMyPageData(formData);

    userRole === "teacher"
      ? navigate("/teacher/home")
      : navigate("/student/home");
  };

  // 이미지 미리보기 함수
  const handleChangeFile = e => {
    const file = e.target.files[0];
    setSelectFile(file);
    setUserPic(file ? URL.createObjectURL(file) : null);
  };

  // Modal에 확인 버튼 클릭시 유저 삭제
  useEffect(() => {
    if (cancelOk === true) {
      setModalOpen(false);
      setCancelOk(false);
    }
  }, [cancelOk]);

  const handleImageUploadClick = () => {
    const realUpload = document.querySelector(".real-upload");
    realUpload.click();
  };

  const handleAdrressModal = () => {
    setAddressModal(true);
  };

  return (
    <TcMyPageWrap onSubmit={handleSubmit}>
      <div className="mypage-top">
        <div className="user-info">
          <div className="user-info-wrap">
            <div className="user-picture-wrap" onClick={handleImageUploadClick}>
              <div className="picture-img">
                <img src={userPic || userData.pic} alt="pic" />
              </div>
              <input
                className="real-upload"
                type="file"
                id="user-pic"
                accept="image/jpg, image/png, image/gif, image/jpeg"
                required
                multiple
                onChange={handleChangeFile}
                style={{ display: "none" }}
              />
            </div>
            <div className="school-info">
              <TcMyPageUserInfo>
                <li>
                  <label htmlFor="user-email">이메일</label>
                  <input
                    type="email"
                    id="user-email"
                    defaultValue={userData.email}
                    readOnly
                  />
                </li>
                <li>
                  <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                      type="password"
                      id="password"
                      defaultValue={userData.password}
                      onChange={handleChangePass}
                      autoComplete="on"
                      onBlur={checkPass}
                    />
                    {errPassword && (
                      <p className="err-message">{errPassword}</p>
                    )}
                  </div>
                </li>
                <li>
                  <label htmlFor="password-confirm">비밀번호 확인</label>
                  <input
                    type="password"
                    id="password-confirm"
                    defaultValue={userData.confirmPassword}
                    onChange={handleChangeConfPass}
                    autoComplete="on"
                    onBlur={checkPass}
                  />
                </li>

                <li>
                  <label htmlFor="user-name">이름</label>
                  <input
                    type="text"
                    id="user-name"
                    defaultValue={userData.unm}
                    readOnly
                  />
                </li>
                <li>
                  <label htmlFor="birth">생년월일</label>
                  <input
                    type="text"
                    id="birth"
                    defaultValue={userData.birth}
                    readOnly
                  />
                </li>
                <li>
                  <label htmlFor="user-phone">연락처</label>
                  <input
                    type="text"
                    id="user-phone"
                    defaultValue={userData.phone}
                    onChange={handleChangePhone}
                  />
                </li>
                <li>
                  <label htmlFor="address-input">주소</label>
                  <div className="address-wrap">
                    <div>
                      <input
                        className="user_enroll_text"
                        id="address-input"
                        type="text"
                        required={true}
                        onChange={handleChangeAddress}
                        onClick={handleAdrressModal}
                        defaultValue={houseAddress.address || userData.address}
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
                  <label htmlFor="school">소속 학교</label>
                  <div>
                    <input
                      type="text"
                      id="school"
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
              </TcMyPageUserInfo>
            </div>
          </div>
        </div>
      </div>
      <div className="mypage-bottom">
        <TcButtons>
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

export default MyPageContent;
