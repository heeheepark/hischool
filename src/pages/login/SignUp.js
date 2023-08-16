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
import { EmailConFirmModal, Modal } from "../../components/Modal";

const SignUp = () => {
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userPic, setUserPic] = useState("");
  const [aprPic, setAprPic] = useState("");
  const [authModal, setAuthModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [houseAddress, setHouseAddress] = useState({
    address: "",
  });
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    pw: "",
    nm: "",
    schoolNm: "",
    grade: "",
    classNum: "",
    birth: "",
    phone: "",
    address: houseAddress.address,
    role: "STD",
    detailAddress: "",
  });
  console.log(payload);

  const birthFormatter = num => {
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
    } catch (err) {
      console.err("Error formatting birth:", err);
      return num;
    }
  };

  const phoneFormatter = num => {
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
    } catch (err) {
      return num;
    }
  };

  const formattedBirth = birthFormatter(payload.birth);
  const formattedPhone = phoneFormatter(payload.phone);

  const checkEmail = () => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const isValid = regex.test(payload.email);
    setErrEmail(isValid ? "" : "유효한 이메일 주소를 입력해주세요.");
  };

  const checkPass = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/g;
    const isValid = regex.test(payload.pw);
    setErrPassword(isValid ? "" : "비밀번호를 확인해주세요.");
  };

  const handleEmail = e => {
    setPayload({ ...payload, email: e.target.value });
  };

  const handlePassWord = e => {
    setPayload({ ...payload, pw: e.target.value });
  };

  useEffect(() => {
    const addressInput = document.getElementById("address-input");
    if (addressInput) {
      addressInput.value = houseAddress.address;
      setPayload({ ...payload, address: houseAddress.address });
    }
  }, [houseAddress.address]);

  const handleEmailConfirm = () => {
    setAuthModal(true);
    postEmail(payload.email);
  };

  const handleModalOpen = () => {
    setAddressModal(true);
  };

  const handleModalClose = () => {
    setAddressModal(false);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setHouseAddress({
      ...houseAddress,
      [name]: value,
    });
  };

  const handleUserTypeChange = e => {
    setPayload({ ...payload, role: e.target.value });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSignUp = e => {
    e.preventDefault();
    e.persist();

    let formData = new FormData();
    formData.append("pic", selectFile);
    formData.append("aprPic", aprPic);
    formData.append("p", JSON.stringify(payload));

    if (!payload.email || errEmail) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }

    if (!emailCheck) {
      alert("이메일 인증이 완료되지 않았습니다. 이메일 인증을 진행해주세요.");
      return;
    }

    if (!payload.pw || errPassword) {
      alert("비밀번호를 확인하세요.");
      return;
    }

    if (payload.pw !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!houseAddress.address) {
      alert("주소를 입력하세요.");
      return;
    }

    if (Object.values(payload).some(value => !value)) {
      alert("모든 항목을 입력 해주세요.");
      return;
    }

    postSignUp(formData);
    // navigate("/");
  };

  const handleChangeFile = e => {
    const file = e.target.files[0];
    setSelectFile(file);
    setUserPic(URL.createObjectURL(file));
  };

  const handleChangeApr = e => {
    const file = e.target.files[0];
    console.log(file);
    setAprPic(file);
    setAprPic(file?.name || "");
  };

  const handleImageUploadClick = () => {
    const realUpload = document.querySelector(".real-upload");
    realUpload.click();
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
                name="role"
                value="TC"
                checked={payload.role === "TC"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="teacher">선생님</label>
              <input
                type="radio"
                id="student"
                name="role"
                value="STD"
                checked={payload.role === "STD"}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="student">학생</label>
            </form>
          </div>
          <SignUpContain>
            <form className="input-form">
              <div className="picture-img">
                <span>프로필사진</span>
                <div className="image-upload" onClick={handleImageUploadClick}>
                  <div>
                    {userPic && <img src={userPic} alt="pic" />}
                    {!userPic ? <span>사진을 업로드 해주세요.</span> : null}
                  </div>
                  <input
                    className="real-upload"
                    type="file"
                    accept="image/*"
                    required
                    multiple
                    onChange={handleChangeFile}
                  />
                </div>
              </div>
              <SignUpUl>
                <LeftForm>
                  <ul>
                    <li className="big-input">
                      <div>
                        <label>이메일</label>
                        {errEmail && <p className="err-message">{errEmail}</p>}
                      </div>
                      <input
                        className="confirm-input"
                        type="email"
                        placeholder="ex) aaa@gmail.com"
                        value={payload.email}
                        onChange={e => handleEmail(e)}
                        onBlur={checkEmail}
                      />
                      <span onClick={handleEmailConfirm}>인증</span>
                      {authModal && (
                        <EmailConFirmModal
                          authModal={authModal}
                          setAuthModal={setAuthModal}
                          setEmailCheck={setEmailCheck}
                        />
                      )}
                    </li>
                    <li className="big-input">
                      <div>
                        <label>비밀번호</label>
                        {errPassword && (
                          <p className="err-message">{errPassword}</p>
                        )}
                      </div>
                      <input
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8~16자리"
                        value={payload.pw}
                        onChange={e => handlePassWord(e)}
                        autoComplete="on"
                        onBlur={checkPass}
                      />
                    </li>
                    <li className="big-input">
                      <label>비밀번호 확인</label>
                      <input
                        type="password"
                        onChange={e => setPasswordConfirm(e.target.value)}
                        autoComplete="on"
                        onBlur={checkPass}
                      />
                    </li>
                    <li className="big-input">
                      <label>학교</label>
                      <input
                        type="text"
                        placeholder="ex) 함지고등학교"
                        value={payload.schoolNm}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            schoolNm: e.target.value,
                          }));
                        }}
                      />
                    </li>
                    <li className="small-input">
                      <div>
                        <label>학년</label>
                        <input
                          type="text"
                          placeholder="ex) 3 "
                          value={payload.grade}
                          onChange={e => {
                            setPayload(payload => ({
                              ...payload,
                              grade: e.target.value,
                            }));
                          }}
                        />
                      </div>
                      <div>
                        <label>반</label>
                        <input
                          type="text"
                          placeholder="ex) 1 "
                          value={payload.classNum}
                          onChange={e => {
                            setPayload(payload => ({
                              ...payload,
                              classNum: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </li>
                    <li>
                      {payload.role === "TC" ? (
                        <div>
                          <p>교원인증사진</p>
                          <div className="apr-input">
                            <input
                              className="upload-name"
                              value={aprPic}
                              placeholder="첨부파일"
                              readOnly
                            />
                            <label htmlFor="file">선택</label>
                            <input
                              type="file"
                              id="file"
                              onChange={handleChangeApr}
                            ></input>
                          </div>
                        </div>
                      ) : null}
                    </li>
                  </ul>
                </LeftForm>
                <RightForm>
                  <ul>
                    <li className="big-input">
                      <label>이름</label>
                      <input
                        type="text"
                        value={payload.nm}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            nm: e.target.value,
                          }));
                        }}
                      />
                    </li>
                    <li className="big-input">
                      <label>생년월일</label>
                      <input
                        type="text"
                        value={formattedBirth}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            birth: e.target.value,
                          }));
                        }}
                      />
                    </li>
                    <li className="big-input">
                      <label>연락처</label>
                      <input
                        type="text"
                        value={formattedPhone}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            phone: e.target.value,
                          }));
                        }}
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
                        value={payload.detailAddress}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            detailAddress: e.target.value,
                          }));
                        }}
                      />
                    </li>
                  </ul>
                </RightForm>
              </SignUpUl>
            </form>
          </SignUpContain>
          <div className="signup-submit">
            <div className="buttons">
              <button type="submit" onClick={handleSignUp}>
                회원가입
              </button>
              <button onClick={handleCancel}>취소</button>
            </div>
          </div>
        </div>
      </SignUpInner>
    </SignUpWrap>
  );
};

export default SignUp;
