import React from "react";
import { LifeRecordDiv } from "../../styles/student/LifeRecordStyle";
import AttendStatus from "../../components/student/AttendStatus";
import RecordStatus from "../../components/student/RecordStatus";
import CareerStatus from "../../components/student/CareerStatus";
import { useState } from "react";
import { useEffect } from "react";
import StudentRecordStatus from "../../components/teacher/liferecord/StudentRecordStatus";
import StudentAttendStatus from "../../components/teacher/liferecord/StudentAttendStatus";
import StudentCareerStatus from "../../components/teacher/liferecord/StudentCareerStatus";
import { useLocation } from "react-router";
import { getGrade } from "../../api/teacher/studentLifeRecordAxios";

const StudentLifeRecord = () => {
  const { state } = useLocation();
  console.log("userId", state);
  const [categoryLi, setCategoryLi] = useState(null);
  const [activeCateName, setActiveCateName] = useState("grade");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    setCategoryLi(document.querySelectorAll(".category-wrap li"));
    getGrade(setGrade);
  }, []);

  const handleCategory = e => {
    categoryLi.forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    setActiveCateName(e.target.classList[0]);
  };

  return (
    <LifeRecordDiv>
      <h3>학생 생활기록부{" - 김수현(2005-12-25)"}</h3>
      <ul className="category-wrap">
        <li className="grade active" onClick={handleCategory}>
          성적현황
        </li>
        <li className="attendance" onClick={handleCategory}>
          출결현황
        </li>
        <li className="career" onClick={handleCategory}>
          진로지도
        </li>
      </ul>
      <div className="content-wrap">
        {activeCateName === "grade" && (
          <StudentRecordStatus userId={state} grade={grade} />
        )}
        {activeCateName === "attendance" && (
          <StudentAttendStatus userId={state} grade={grade} />
        )}
        {activeCateName === "career" && (
          <StudentCareerStatus userId={state} grade={grade} />
        )}
      </div>
    </LifeRecordDiv>
  );
};

export default StudentLifeRecord;