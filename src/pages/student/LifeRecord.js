import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getStudentInfo } from "../../api/student/lifeRecordAxios";
import { LifeRecordDiv } from "../../styles/student/liferecord/LifeRecordStyle";
import RecordStatus from "../../components/student/liferecord/RecordStatus";
import AttendStatus from "../../components/student/liferecord/AttendStatus";
import CareerStatus from "../../components/student/liferecord/CareerStatus";

const LifeRecord = () => {
  const [categoryLi, setCategoryLi] = useState(null);
  const [activeCateName, setActiveCateName] = useState("grade");
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    getStudentInfo(setStudentInfo);
    setCategoryLi(document.querySelectorAll(".category-wrap li"));
  }, []);

  const handleCategory = e => {
    categoryLi.forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    setActiveCateName(e.target.classList[0]);
  };

  return (
    <LifeRecordDiv>
      <h3>생활기록부</h3>
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
        {activeCateName === "grade" && <RecordStatus />}
        {activeCateName === "attendance" && <AttendStatus />}
        {activeCateName === "career" && <CareerStatus />}
      </div>
    </LifeRecordDiv>
  );
};

export default LifeRecord;
