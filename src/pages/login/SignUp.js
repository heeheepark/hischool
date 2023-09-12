import React, { useState } from "react";
import { useNavigate } from "react-router";
import DaumPost from "../../components/login/DaumPost";
import { useEffect } from "react";
import { EmailConFirmModal, Modal } from "../../components/modal/Modal";
import {
  getConFirmEmail,
  getSchoolClass,
  postEmail,
  postSignUp,
} from "../../api/login/signUpAxios";
import {
  LeftForm,
  RightForm,
  SignUpContain,
  SignUpInner,
  SignUpUl,
  SignUpWrap,
} from "../../styles/login/SignUpStyle";
import { IntroImage } from "../../styles/login/LoginStyle";
import AutoSearch from "../../components/login/AutoSearch";

const SignUp = () => {
  const [inputValue, setInputValue] = useState("");
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
  const [schoolClassList, setSchoolClassList] = useState("");
  const [aprPicText, setAprPicText] = useState("");
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    pw: "",
    nm: "",
    schoolCode: "",
    schoolNm: "",
    grade: "",
    classNum: "",
    birth: "",
    phone: "",
    address: houseAddress.address,
    role: "STD",
    detailAddress: "",
  });

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

  const handleEmailConfirm = async () => {
    const result = await getConFirmEmail(payload.email);
    if (errEmail || !payload.email) {
      setAuthModal(false);
    } else if (result === 1) {
      setAuthModal(true);
    }
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
    navigate("/");
  };

  const handleChangeFile = e => {
    const file = e.target.files[0];
    setSelectFile(file);
    setUserPic(URL.createObjectURL(file));
  };

  const handleChangeApr = e => {
    const file = e.target.files[0];
    setAprPic(file);
    setAprPicText(file.name || "");
  };

  const handleImageUploadClick = () => {
    const realUpload = document.querySelector(".real-upload");
    realUpload.click();
  };

  useEffect(() => {
    const addressInput = document.getElementById("address-input");
    if (addressInput) {
      addressInput.value = houseAddress.address;
      setPayload({ ...payload, address: houseAddress.address });
    }
  }, [houseAddress.address]);

  useEffect(() => {
    getSchoolClass(payload.schoolCode, payload.grade, setSchoolClassList);
  }, [payload.schoolCode, payload.grade]);

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
                    name="user-pic"
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
                        <label htmlFor="user-email">이메일</label>
                        {errEmail && <p className="err-message">{errEmail}</p>}
                      </div>
                      <input
                        className="confirm-input"
                        type="email"
                        id="user-email"
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
                        <label htmlFor="password">비밀번호</label>
                        {errPassword && (
                          <p className="err-message">{errPassword}</p>
                        )}
                      </div>
                      <input
                        type="password"
                        id="password"
                        placeholder="영문, 숫자, 특수문자 포함 8~16자리"
                        value={payload.pw}
                        onChange={e => handlePassWord(e)}
                        autoComplete="on"
                        onBlur={checkPass}
                      />
                    </li>
                    <li className="big-input">
                      <label
                        htmlFor="password-confirm"
                        className="password-confirm"
                      >
                        비밀번호 확인
                      </label>
                      <input
                        type="password"
                        id="password-confirm"
                        onChange={e => setPasswordConfirm(e.target.value)}
                        autoComplete="on"
                        onBlur={checkPass}
                      />
                    </li>
                    <li className="big-input">
                      <label htmlFor="school">학교</label>
                      <AutoSearch
                        setPayload={setPayload}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        setSchoolClassList={setSchoolClassList}
                      />
                    </li>
                    <li className="small-input">
                      <div>
                        <label htmlFor="grade">학년</label>
                        <select
                          id="grade"
                          value={payload.grade ? payload.grade : ""}
                          onChange={e => {
                            setPayload(payload => ({
                              ...payload,
                              grade: e.target.value,
                            }));
                          }}
                        >
                          <option value={""}>학년 선택</option>
                          <option value={"1"}>1학년</option>
                          <option value={"2"}>2학년</option>
                          <option value={"3"}>3학년</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="class">반</label>
                        <select
                          id="class"
                          onChange={e => {
                            setPayload(payload => ({
                              ...payload,
                              classNum: e.target.value,
                            }));
                          }}
                        >
                          <option value={""}>반 선택</option>
                          {schoolClassList.length > 0 &&
                            schoolClassList.map((item, index) => (
                              <option value={item} key={index}>
                                {item}반
                              </option>
                            ))}
                        </select>
                      </div>
                    </li>
                    <li>
                      {payload.role === "TC" ? (
                        <div>
                          <p>교원인증사진</p>
                          <div className="apr-input">
                            <input
                              className="upload-name"
                              name="teacher-auth"
                              value={aprPicText}
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
                      <label htmlFor="user-name">이름</label>
                      <input
                        type="text"
                        value={payload.nm}
                        id="user-name"
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            nm: e.target.value,
                          }));
                        }}
                      />
                    </li>
                    <li className="big-input">
                      <label htmlFor="birth">생년월일</label>
                      <input
                        type="text"
                        id="birth"
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
                      <label htmlFor="phone-num">연락처</label>
                      <input
                        type="text"
                        id="phone-num"
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
                      <label htmlFor="address-input">주소</label>
                      <input
                        className="user_enroll_text"
                        type="text"
                        required={true}
                        id="address-input"
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
                      <label htmlFor="detail-address">상세주소</label>
                      <input
                        type="text"
                        id="detail-address"
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
