import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TcButtons,
  TcMyPageDownInfo,
  TcMyPageLeftInfo,
  TcMyPageRightInfo,
  TcMyPageUserInfo,
  TcMyPageSchoolInfo,
  TcMyPageTopInfo,
  TcMyPageWrap,
} from "../../styles/teacher/TeacherMyPageStyle";
import axios from "axios";

const TeacherMyPage = () => {
  const { userid } = useParams();
  const [teacher, setTeacher] = useState({
    userId: 6,
    tnm: "김담임",
    email: "teacher11@naver.com",
    pic: "123123",
    birth: "1981-01-15",
    phone: "01014142323",
    classId: null,
    grade: "1",
    van: "2",
    schoolId: "1",
    snm: "함지고등학교",
    address: "12323",
  });

  useEffect(() => {
    const getTeacherData = async () => {
      try {
        const res = await axios.get(
          `api/mypage/teacher_mypage?userid=${userid}`,
        );
        const data = res.data;
        setTeacher(data);
      } catch (err) {
        console.error(err);
      }
    };
    getTeacherData();
  }, [userid]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Updated Teacher:", teacher);
  };

  // 입력 양식을 변경할 때 호출되는 함수입니다.
  const handleChange = e => {
    const { name, value } = e.target;
    setTeacher(prevTeacher => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  // 사진을 업로드할 때 호출되는 함수입니다.
  const handlePictureUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTeacher(prevTeacher => ({
        ...prevTeacher,
        pic: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <TcMyPageWrap onSubmit={handleSubmit}>
      <div className="mypage-top">
        <div className="user-info">
          <div className="user-info-wrap">
            <div className="user-picture-wrap">
              <div className="picture-img">
                {teacher.pic ? (
                  <img src={teacher.pic} alt="pic" />
                ) : (
                  <img src={teacher.profilePic} alt="pic" />
                )}
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
                    value={teacher.email}
                    readOnly
                  />
                </li>
                <li>
                  <label>비밀번호</label>
                  <input
                    type="password"
                    name="password"
                    value={teacher.password}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <label>비밀번호 확인</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={teacher.confirmPassword}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <label>이름</label>
                  <input type="text" name="tnm" value={teacher.tnm} readOnly />
                </li>
                <li>
                  <label>생년월일</label>
                  <input
                    type="text"
                    name="birth"
                    value={`${teacher.birth.split("-")[0]}년 ${
                      teacher.birth.split("-")[1]
                    }월 ${teacher.birth.split("-")[2]}일`}
                    readOnly
                  />
                </li>
                <li>
                  <label>연락처</label>
                  <input
                    type="text"
                    name="phone"
                    value={teacher.phone}
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
                        value={teacher.address}
                        onChange={handleChange}
                        readOnly
                      />
                      <button>주소 검색</button>
                    </div>
                    <input
                      type="text"
                      name="detailAddress"
                      className="detail-address"
                      value={teacher.detailAddress}
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
                      value={teacher.snm}
                      onChange={handleChange}
                      readOnly
                    />
                    <div>
                      <input
                        type="text"
                        name="grade"
                        value={`${teacher.grade}학년`}
                        onChange={handleChange}
                        readOnly
                      />
                      <input
                        type="text"
                        name="van"
                        value={`${teacher.van}반`}
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
    // <TcMyPageWrap onSubmit={handleSubmit}>
    //   <div>
    //     <div className="TcMypagePic">
    //       {teacher.pic ? (
    //         <img src={teacher.pic} alt="pic" />
    //       ) : (
    //         <img src={teacher.profilePic} alt="pic" />
    //       )}
    //       <input
    //         type="file"
    //         accept="image/jpg, image/png, image/jpeg"
    //         onChange={handlePictureUpload}
    //       />
    //     </div>
    //     <TcMyPageTopInfo>
    //       <li>
    //         <label>이름</label>
    //         <input
    //           type="text"
    //           name="tnm"
    //           value={teacher.tnm}
    //           onChange={handleChange}
    //         />
    //       </li>
    //       <li>
    //         <label>생년월일</label>
    //         <input
    //           type="text"
    //           name="birth"
    //           value={teacher.birth}
    //           onChange={handleChange}
    //         />
    //       </li>
    //       <li>
    //         <label>연락처</label>
    //         <input
    //           type="text"
    //           name="phone"
    //           value={teacher.phone}
    //           onChange={handleChange}
    //         />
    //       </li>
    //       <li>
    //         <label>주소</label>
    //         <input
    //           type="text"
    //           name="address"
    //           value={teacher.address}
    //           onChange={handleChange}
    //         />
    //       </li>
    //       <li>
    //         <label>상세주소</label>
    //         <input
    //           type="text"
    //           name="detailAddress"
    //           value={teacher.detailAddress}
    //           onChange={handleChange}
    //         />
    //       </li>
    //     </TcMyPageTopInfo>
    //   </div>
    //   <TcMyPageDownInfo>
    //     <TcMyPageLeftInfo>
    //       <ul>
    //         <li>
    //           <label>학교</label>
    //           <input
    //             type="text"
    //             name="snm"
    //             value={teacher.snm}
    //             onChange={handleChange}
    //           />
    //         </li>
    //         <li className="grade-van">
    //           <div>
    //             <label>학년</label>
    //             <input
    //               type="text"
    //               name="grade"
    //               value={teacher.grade}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div>
    //             <label>반</label>
    //             <input
    //               type="text"
    //               name="van"
    //               value={teacher.van}
    //               onChange={handleChange}
    //             />
    //           </div>
    //         </li>
    //       </ul>
    //     </TcMyPageLeftInfo>
    //     <TcMyPageRightInfo>
    //       <ul>
    //         <li>
    //           <label>이메일</label>
    //           <input
    //             type="email"
    //             name="email"
    //             value={teacher.email}
    //             onChange={handleChange}
    //           />
    //         </li>
    //         <li>
    //           <label>비밀번호</label>
    //           <input
    //             type="password"
    //             name="password"
    //             value={teacher.password}
    //             onChange={handleChange}
    //           />
    //         </li>
    //         <li>
    //           <label>비밀번호 확인</label>
    //           <input
    //             type="password"
    //             name="confirmPassword"
    //             value={teacher.confirmPassword}
    //             onChange={handleChange}
    //           />
    //         </li>
    //       </ul>
    //     </TcMyPageRightInfo>
    //   </TcMyPageDownInfo>
    //   <TcButtons>
    //     <button type="button">회원탈퇴</button>
    //     <div>
    //       <button type="submit">수정</button>
    //       <button type="button">취소</button>
    //     </div>
    //   </TcButtons>
    // </TcMyPageWrap>
  );
};

export default TeacherMyPage;
