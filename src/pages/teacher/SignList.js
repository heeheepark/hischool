import React, { useState } from "react";
import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../../styles/teacher/SignListStyle";
import { useNavigate } from "react-router";

const SignList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const navigate = useNavigate();

  const data = [
    {
      unm: "김수한무",
      birth: "1997-09-01",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "김수리수리",
      birth: "1997-09-01",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
  ];

  // useEffect(() => {
  // const getStudentData = async () => {
  // try {
  // const res = await axios.get(`api/teacher/signed?${}`);
  // const result = res.data
  // setStudentListData(result);
  // } catch (err) {
  //  console.error(err);
  // }
  // };
  // getStudentData();
  // }, []);

  const handleCancel = () => {
    navigate("/teacher/studentlist");
  };

  return (
    <StudentListWrap>
      <StudentListTitle>
        <div>
          <h3>가입대기 명단</h3>
        </div>
        <div className="ListButtons">
          <button type="submit" onClick={handleCancel}>
            저장
          </button>
          <button onClick={handleCancel}>취소</button>
        </div>
      </StudentListTitle>
      <TimeTableDiv>
        <ul>
          <li className="day-list">
            <ul>
              <li className="time-table-th">순번</li>
              <li className="time-table-th">이름</li>
              <li className="time-table-th">생년월일</li>
              <li className="time-table-th">연락처</li>
              <li className="time-table-th">이메일</li>
              <li className="time-table-th">승인</li>
              <li className="time-table-th">거부</li>
            </ul>
          </li>
          {studentListData.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>{index + 1}</li>
                <li>{item.unm}</li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
                <li>
                  <input type="checkbox" />
                </li>
                <li>
                  <input type="checkbox" />
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
    </StudentListWrap>
  );
};

export default SignList;
