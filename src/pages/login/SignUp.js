import React, { useState } from "react";
import { IntroImage } from "../../styles/LoginStyle";
import {
  LeftForm,
  RightForm,
  SignUpContain,
  SignUpInner,
  SignUpUl,
  SignUpWrap,
} from "../../styles/login/SignUpStyle";
import { useNavigate } from "react-router";
import DaumPost from "../../components/DaumPost";
import { useEffect } from "react";
import { postSignUp } from "../../api/signUpAxios";
import Modal from "../../components/Modal";
import ConFirm from "../../components/ConFirm";

const SignUp = () => {
  const [userType, setUserType] = useState("student");
  const [idEmail, setIdEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const [detailAddress, setDetailAddress] = useState("");
  const [userPic, setUserPic] = useState("");
  const [aprPic, setAprPic] = useState("");
  const [popup, setPopup] = useState(false);
  const [codeConFirm, setCodeConFirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const addressInput = document.getElementById("address-input");
    if (addressInput) {
      addressInput.value = houseAddress.address;
    }
  }, [houseAddress.address]);

  const handleCodeConfirm = () => {
    setCodeConFirm(prev => !prev);
  };

  const handleModalOpen = () => {
    setPopup(true);
  };

  const handleModalClose = () => {
    setPopup(false);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setHouseAddress({
      ...houseAddress,
      [name]: value,
    });
  };

  const handleUserTypeChange = e => {
    setUserType(e.target.value);
  };

  const collectUserData = () => {
    return {
      email: idEmail,
      pw: password,
      nm: name,
      schoolNm: schoolName,
      grade,
      classNum: classNumber,
      birth,
      phone,
      address: houseAddress,
      role: userType,
      pic: userPic,
      aprPic,
    };
  };

  const handleSignUp = e => {
    e.preventDefault();

    if (!userType || !idEmail || !password || !passwordConfirm) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    const userData = collectUserData();

    postSignUp(userData);

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <SignUpWrap>
      <IntroImage>
        <img src="/images/intro.png" />
      </IntroImage>
      <SignUpInner>
        <div className="signup-box">
          <div className="signup-radio">
            <h3>Sign Up</h3>
            <form>
              <input
                type="radio"
                id="teacher"
                name="userType"
                value="teacher"
                checked={userType === "teacher"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="teacher">선생님</label>
              <input
                type="radio"
                id="student"
                name="userType"
                value="student"
                checked={userType === "student"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="student">학생</label>
            </form>
          </div>
          <SignUpContain>
            <form className="input-form">
              <div className="image-upload">
                <img src="" alt="pic" />
              </div>
              <SignUpUl>
                <LeftForm>
                  <ul>
                    <li className="big-input">
                      <label>이메일</label>
                      <button type="button" onClick={handleCodeConfirm}>
                        인증
                      </button>
                      {codeConFirm && (
                        <Modal
                          isOpen={codeConFirm}
                          onRequestClose={handleModalClose}
                        >
                          <ConFirm />
                        </Modal>
                      )}
                      <input type="text"></input>
                    </li>
                    <li className="big-input">
                      <label>비밀번호</label>
                      <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>비밀번호 확인</label>
                      <input
                        type="password"
                        onChange={e => setPasswordConfirm(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>학교</label>
                      <input
                        type="text"
                        value={schoolName}
                        onChange={e => setSchoolName(e.target.value)}
                      />
                    </li>
                    <li className="small-input">
                      <div>
                        <label>학년</label>
                        <input
                          type="text"
                          value={grade}
                          onChange={e => setGrade(e.target.value)}
                        />
                      </div>
                      <div>
                        <label>반</label>
                        <input
                          type="text"
                          value={classNumber}
                          onChange={e => setClassNumber(e.target.value)}
                        />
                      </div>
                    </li>
                  </ul>
                </LeftForm>
                <RightForm>
                  <ul>
                    <li className="big-input">
                      <label>이름</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>생년월일</label>
                      <input
                        type="text"
                        value={birth}
                        onChange={e => setBirth(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>연락처</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>주소입력</label>
                      <input
                        className="user_enroll_text"
                        id="address-input"
                        type="text"
                        required={true}
                        name="address"
                        onChange={handleInput}
                        onClick={() => setPopup(true)}
                        value={houseAddress.address}
                        readOnly
                      />
                      {popup && (
                        <Modal
                          isOpen={popup}
                          onRequestClose={handleModalClose}
                          onAfterOpen={handleModalOpen}
                        >
                          <DaumPost
                            company={houseAddress}
                            setHouseAddress={setHouseAddress}
                            onComplete={handleModalClose}
                          />
                        </Modal>
                      )}
                    </li>
                    <li className="big-input">
                      <label>상세주소 입력</label>
                      <input
                        type="text"
                        value={detailAddress}
                        onChange={e => setDetailAddress(e.target.value)}
                      />
                    </li>
                    {userType === "teacher" ? (
                      <li className="big-input">
                        <label>교원 인증 사진</label>
                        <input
                          type="file"
                          value={aprPic}
                          onChange={e => setAprPic(e.target.value)}
                        />
                      </li>
                    ) : null}
                  </ul>
                </RightForm>
              </SignUpUl>
            </form>
          </SignUpContain>
          <div className="signup-submit">
            <button type="submit" onClick={handleSignUp}>
              회원가입
            </button>
            <button onClick={handleCancel}>취소</button>
          </div>
        </div>
      </SignUpInner>
    </SignUpWrap>
  );
};

export default SignUp;
