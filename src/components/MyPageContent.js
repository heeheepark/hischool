import React, { useState, useEffect } from "react";
import {
  TcButtons,
  TcMyPageUserInfo,
  TcMyPageWrap,
} from "../styles/MyPageStyle";
import { deleteUser, getUserData, putMyPageData } from "../api/myPageAxios";
import DaumPost from "./login/DaumPost";
import { useLocation, useNavigate } from "react-router";
import { Cookies } from "react-cookie";
import { Modal } from "./modal/Modal";
import { DeleteUserModal } from "./modal/studentModal";

const MyPageContent = () => {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
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

  const cookies = new Cookies();

  const handleDeleteCookie = () => {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    setTimeout(() => {
      navigate("/");
    }, 500);
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
      handleDeleteCookie();
      deleteUser();
    }
  }, [cancelOk]);

  // 유저 삭제 모달 오픈 함수
  const handleDeleteModalOpen = () => {
    setModalOpen(true);
  };

  const handleImageUploadClick = () => {
    const realUpload = document.querySelector(".real-upload");
    realUpload.click();
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
                  <label>이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    readOnly
                  />
                </li>
                <li>
                  <div>
                    <label>비밀번호</label>
                    <input
                      type="password"
                      name="password"
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
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    defaultValue={userData.confirmPassword}
                    onChange={handleChangeConfPass}
                    autoComplete="on"
                    onBlur={checkPass}
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
              </TcMyPageUserInfo>
            </div>
          </div>
        </div>
      </div>
      <div className="mypage-bottom">
        <TcButtons>
          {modalOpen && (
            <DeleteUserModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setCancelOk={setCancelOk}
            />
          )}
          {userRole === "student" && (
            <button className="withdraw-btn" onClick={handleDeleteModalOpen}>
              회원탈퇴
            </button>
          )}
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
