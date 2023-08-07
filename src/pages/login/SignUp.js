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
import {
  postSignUp,
  postEmail,
  postEmailCodeConFirm,
} from "../../api/signUpAxios";
import Modal from "../../components/Modal";
import ConFirm from "../../components/ConFirm";

const SignUp = () => {
  const [userType, setUserType] = useState("STD");
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
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const navigate = useNavigate();

  const birthFormatter = num => {
    if (!num) {
      return "";
    }
    var formatNum = "";
    num = num.replace(/\s/gi, "");
    if (num.length === 8) {
      formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    } else {
      formatNum = num;
    }
    return formatNum;
  };

  const phoneFormatter = num => {
    try {
      num = num.replace(/\s/gi, ""); // 공백 제거

      if (num.length === 11) {
        return num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      } else if (num.length === 10) {
        return num.replace(/(\d{3})(\d{4})(\d{3})/, "$1-$2-$3");
      } else if (/^02/.test(num) && num.length === 9) {
        return num.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
      } else {
        return num;
      }
    } catch (e) {
      return num;
    }
  };

  useEffect(() => {
    const addressInput = document.getElementById("address-input");
    if (addressInput) {
      addressInput.value = houseAddress.address;
    }
  }, [houseAddress.address]);

  const handleCodeConfirm = () => {
    postEmailCodeConFirm(idEmail);
  };

  const handleModalOpen = () => {
    setPopup(true);
    setCodeConFirm(true);
  };

  const handleModalClose = () => {
    setPopup(false);
    setCodeConFirm(false);
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

  const formattedBirth = birthFormatter(birth);
  const formattedPhone = phoneFormatter(phone);

  // ConFirm 컴포넌트가 닫힐 때 호출되는 콜백 함수
  const handleConFirmClose = () => {
    setConfirmModalOpen(false);
    setCodeConFirm(false);
  };

  // ConFirm 컴포넌트에서 확인 버튼 클릭 시 호출되는 콜백 함수
  const handleConFirmConfirm = () => {
    // 필요한 작업 수행
    handleConFirmClose(); // 모달 닫기
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
                value="TC"
                checked={userType === "TC"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="teacher">선생님</label>
              <input
                type="radio"
                id="student"
                name="userType"
                value="STD"
                checked={userType === "STD"}
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
                      <div>
                        <input
                          type="email"
                          style={{ display: "inline-block" }}
                          value={idEmail}
                          onChange={e => setIdEmail(e.target.value)}
                        ></input>
                        <span onClick={handleCodeConfirm}>인증</span>
                      </div>
                      {codeConFirm && (
                        <Modal
                          isOpen={codeConFirm}
                          onRequestClose={handleModalClose}
                          onAfterOpen={handleCodeConfirm}
                        >
                          <ConFirm
                            emailConFirm={idEmail}
                            onClose={handleConFirmClose}
                            onConfirm={handleConFirmConfirm}
                          />
                        </Modal>
                      )}
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
                        value={formattedBirth}
                        onChange={e => setBirth(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>연락처</label>
                      <input
                        type="text"
                        value={formattedPhone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </li>
                    <li className="big-input">
                      <label>주소</label>
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
                      <label>상세주소</label>
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
