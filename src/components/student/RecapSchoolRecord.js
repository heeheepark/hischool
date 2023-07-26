import React from "react";
import { SchoolRecordDiv } from "../../styles/student/StudentHomeStyle";

const RecapSchoolRecord = () => {
  return (
    <SchoolRecordDiv>
      <div
        style={{
          width: "50%",
          height: "300px",
          background: "gray",
          marginBottom: "10px",
        }}
      >
        RecapSchoolRecord
      </div>
      <div>
        <h4>최근 내신 성적</h4>
        <div>
          <span>최근에 응시한 </span>
          <ins>
            <span>2023학년도 2학기 중간고사</span>
          </ins>
          <span>의</span>
        </div>
        <ul>
          <li>
            <p>
              <span>국어 등급은 </span>
              <span>
                <ins>3</ins>
                등급
              </span>
            </p>
            <p>
              <span>수학 등급은 </span>
              <span>
                <ins>2</ins>
                등급
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>영어 등급은 </span>
              <span>
                <ins>3</ins>
                등급
              </span>
            </p>
            <p>
              <span>한국사 등급은 </span>
              <span>
                <ins>2</ins>
                등급
              </span>
            </p>
          </li>
        </ul>
      </div>
    </SchoolRecordDiv>
  );
};

export default RecapSchoolRecord;
