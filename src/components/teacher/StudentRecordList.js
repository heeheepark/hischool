import { useEffect, useState } from "react";
import {
  MockRecordListDiv,
  SchoolRecordListDiv,
  StudentListDiv,
} from "../../styles/teacher/StudentRecordStyle";
import { getStudentCount, getStudentList } from "../../axios/teacherAxios";

const StudentSearchList = () => {
  const [studentList, setStudentList] = useState(null);

  const handleStudentList = e => {
    const allStudentList = document.querySelectorAll(".student-detail-list");
    allStudentList.forEach(item => item.classList.remove("active"));
    const clickList = e.currentTarget;
    clickList.classList.add("active");
  };

  useEffect(() => {
    getStudentList(setStudentList);
  }, []);

  return (
    <StudentListDiv>
      <ul className="category">
        <li className="category-th">연번</li>
        <li className="category-th">이름</li>
        <li className="category-th">생년월일</li>
        <li className="category-th">연락처</li>
        <li className="category-th">이메일</li>
      </ul>
      <ul className="list-wrap">
        <li
          className="student-detail-list active"
          onClick={e => handleStudentList(e)}
        >
          <ul>
            <li>1</li>
            <li>홍길동</li>
            <li>20050808</li>
            <li>010-1234-1234</li>
            <li>gildong-hong@hong.com</li>
          </ul>
        </li>
        <li className="student-detail-list" onClick={e => handleStudentList(e)}>
          <ul>
            <li>2</li>
            <li>고길동</li>
            <li>20050725</li>
            <li>010-4321-4321</li>
            <li>ddong@hong.com</li>
          </ul>
        </li>
        <li className="student-detail-list" onClick={e => handleStudentList(e)}>
          <ul>
            <li>3</li>
            <li>김길동</li>
            <li>20050730</li>
            <li>010-4322-4322</li>
            <li>ddonggil@hong.com</li>
          </ul>
        </li>
      </ul>
    </StudentListDiv>
  );
};

const SchoolRecordList = () => {
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".school-checkbox");
    if (e.target.checked === true) {
      allCheckBox.forEach(item => (item.checked = true));
    } else {
      allCheckBox.forEach(item => (item.checked = false));
    }
  };
  return (
    <SchoolRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input type="checkbox" onClick={e => handleAllCheck(e)} />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">학기</li>
        <li className="category-th">시험 구분</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">반석차</li>
        <li className="category-th">전교석차</li>
      </ul>
      <ul className="record-data">
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="school-checkbox" />
            </li>
            <li>2023</li>
            <li>2</li>
            <li>중간</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>2/25</li>
            <li>10/360</li>
          </ul>
        </li>
      </ul>
    </SchoolRecordListDiv>
  );
};

const MockRecordList = () => {
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".mock-checkbox");
    if (e.target.checked === true) {
      allCheckBox.forEach(item => (item.checked = true));
    } else {
      allCheckBox.forEach(item => (item.checked = false));
    }
  };
  return (
    <MockRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input type="checkbox" onClick={e => handleAllCheck(e)} />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">월</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">표준점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">백분위</li>
      </ul>
      <ul className="record-data">
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>3</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>6</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>9</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
        <li className="data-table">
          <ul>
            <li>
              <input type="checkbox" className="mock-checkbox" />
            </li>
            <li>2023</li>
            <li>1</li>
            <li>국어</li>
            <li>언어와매체</li>
            <li>97</li>
            <li>1</li>
            <li>96%</li>
          </ul>
        </li>
      </ul>
    </MockRecordListDiv>
  );
};

export { StudentSearchList, SchoolRecordList, MockRecordList };
