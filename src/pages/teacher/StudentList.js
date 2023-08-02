import React, { useEffect, useState } from "react";

import {
  StudentListTitle,
  StudentListWrap,
  TimeTableDiv,
} from "../../styles/teacher/StudentListStyle";
import { useNavigate } from "react-router";

const StudentList = () => {
  const [studentListData, setStudentListData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
    {
      unm: "김한무한무",
      birth: "1997-09-01",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "김수한무",
      birth: "1997-10-01",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "이휘파람",
      birth: "1997-04-01",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "이무쌍",
      birth: "1997-10-03",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "박아무개",
      birth: "1997-04-05",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "병나발",
      birth: "1997-08-12",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "참이슬",
      birth: "1997-06-19",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "처음처럼",
      birth: "1997-11-09",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "블랙라벨",
      birth: "1997-07-18",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "블루라벨",
      birth: "1997-04-25",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "조니워커",
      birth: "1997-09-07",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "박혁거세",
      birth: "1997-04-31",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "주몽",
      birth: "1997-02-21",
      phone: "010-1997-2233",
      email: "asdf@naver.com",
    },
    {
      unm: "광개토대왕",
      birth: "1997-01-01",
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

  useEffect(() => {
    const filteredData = data.filter(item => {
      if (item.unm) {
        return item.unm.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    });

    const sortedData = filteredData.sort((a, b) => a.unm.localeCompare(b.unm));

    setSearchResults(sortedData);
  }, [searchTerm, data]);

  const handleSginClick = () => {
    navigate("/teacher/signlist");
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <StudentListWrap>
      <StudentListTitle>
        <div>
          <h3>학생관리</h3>
        </div>
        <div className="list-buttons">
          <input
            type="search"
            value={searchTerm}
            onChange={handleChange}
            placeholder="검색어를 입력하세요"
          />
          {searchTerm && (
            <ul>
              {searchResults.map(item => (
                <li key={item.unm}>
                  <p>{item.unm}</p>
                  {searchResults.filter(dataItem => dataItem.unm === item.unm)
                    .length > 1 && <p>생년월일: {item.birth}</p>}
                </li>
              ))}
            </ul>
          )}
          <div>
            <button onClick={handleSginClick}>가입대기 명단</button>
          </div>
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
            </ul>
          </li>
          {data.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>{index + 1}</li>
                <li>{item.unm}</li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
              </ul>
            </li>
          ))}
        </ul>
      </TimeTableDiv>
    </StudentListWrap>
  );
};

export default StudentList;
