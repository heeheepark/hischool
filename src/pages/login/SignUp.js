import React, { useRef, useState } from "react";
import { IntroImage } from "../../styles/login/LoginStyle";
import {
  LeftForm,
  RightForm,
  SignUpContain,
  SignUpInner,
  SignUpUl,
  SignUpWrap,
} from "../../styles/login/SignUpStyle";
import { useNavigate } from "react-router";
import DaumPost from "../../components/login/DaumPost";
import { useEffect } from "react";
import { postSignUp, postEmail } from "../../api/signUpAxios";
import { Modal } from "../../components/Modal";
import ConFirm from "../../components/login/ConFirm";

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
  const [userPic, setUserPic] = useState("");
  const [aprPic, setAprPic] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const [detailAddress, setDetailAddress] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [codeConFirm, setCodeConFirm] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const navigate = useNavigate();

  const birthFormatter = num => {
    console.log(birth);
    try {
      num = num.replace(/\s/gi, "");
      if (num.length === 8) {
        return num.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
      } else if (num.length === 7) {
        return num.replace(/(\d{4})(\d{2})(\d{1})/, "$1-$2-$3");
      } else if (/^02/.test(num) && num.length === 6) {
        return num.replace(/(\d{4})(\d{1})(\d{1})/, "$1-$2-$3");
      } else {
        return num;
      }
    } catch (error) {
      console.error("Error formatting birth:", error);
      return num;
    }
  };

  const phoneFormatter = num => {
    console.log(phone);
    try {
      num = num.replace(/\s/gi, "");

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

  const formattedBirth = birthFormatter(birth);
  const formattedPhone = phoneFormatter(phone);

  useEffect(() => {
    const addressInput = document.getElementById("address-input");
    if (addressInput) {
      addressInput.value = houseAddress.address;
    }
  }, [houseAddress.address]);

  const handleEmailConfirm = () => {
    setAuthModal(true);
    postEmail(idEmail);
  };

  const handleModalOpen = () => {
    setCodeConFirm(true);
  };

  const handleModalClose = () => {
    setAuthModal(false);
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

  const handleCancel = () => {
    navigate("/");
  };

  const handleSignUp = e => {
    e.preventDefault();
    e.persist();

    if (!userType || !idEmail || !password || !passwordConfirm) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    const collectUserData = {
      email: idEmail,
      pw: password,
      nm: name,
      schoolNm: schoolName,
      grade,
      classNum: classNumber,
      birth,
      phone,
      address: houseAddress.address,
      role: userType,
      detailAddress,
    };
    let formData = new FormData();
    formData.append("pic", selectFile);
    formData.append("p", JSON.stringify(collectUserData));

    postSignUp(formData);
    navigate("/");
  };

  const handleChangeFile = e => {
    const file = e.target.files[0];
    setSelectFile(file);
    setUserPic(URL.createObjectURL(file));
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
                <div className="picture-img">
                  {userPic && <img src={userPic} alt="pic" />}
                </div>
                <input
                  type="file"
                  accept="image/jpg, image/png, image/gif, image/jpeg"
                  onChange={handleChangeFile}
                />
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
                        <span onClick={handleEmailConfirm}>인증</span>
                      </div>
                      {authModal && (
                        <Modal isOpen={authModal} setAuthModal={setAuthModal}>
                          <ConFirm setAuthModal={setAuthModal} />
                        </Modal>
                      )}
                    </li>
                    <li className="big-input">
                      <label>비밀번호</label>
                      <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="on"
                      />
                    </li>
                    <li className="big-input">
                      <label>비밀번호 확인</label>
                      <input
                        type="password"
                        onChange={e => setPasswordConfirm(e.target.value)}
                        autoComplete="on"
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
