import React from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../../styles/student/liferecord/LifeRecordStyle";
import { useState } from "react";
import { useEffect } from "react";
import { getCareerData } from "../../../api/student/lifeRecordAxios";
import { getSchoolInfo } from "../../../api/login/userInfoAxios";

const CareerStatus = () => {
  const [careerList, setCareerList] = useState([]);
  const [schoolName, setSchoolName] = useState(null);
  const [grade, setGrade] = useState(null);
  const [classNum, setClassNum] = useState(null);

  useEffect(() => {
    getCareerData(setCareerList);
    getSchoolInfo(setSchoolName, setGrade, setClassNum);
  }, []);

  return (
    <CareerStatusDiv>
      <div className="mid-wrap">
        <div className="hope-univ-wrap">
          <h4>희망 대학</h4>
          <label htmlFor="hope-univ" className="label-nm">
            <span>대학명</span>
            <input
              type="text"
              value={
                (careerList.length > 0) & grade
                  ? careerList[grade - 1].hopeUniv
                  : ""
              }
              id="hope-univ"
              name="hope-univ"
              readOnly
            />
          </label>
          <label htmlFor="hope-depart" className="label-nm">
            <span>학부(과)</span>
            <input
              type="text"
              value={
                (careerList.length > 0) & grade
                  ? careerList[grade - 1].hopeDept
                  : ""
              }
              id="hope-depart"
              readOnly
            />
          </label>
        </div>
        <div className="hope-career-wrap">
          <h4>진로 희망 사항</h4>
          <HopeCareerTable>
            <ul>
              <li className="cate-list">
                <ul>
                  <li className="category-nm">학년</li>
                  <li className="category-nm">특기 또는 흥미</li>
                  <li className="category-nm">진로희망</li>
                  <li className="category-detail">학생</li>
                  <li className="category-detail">학부모</li>
                </ul>
              </li>
              {careerList.map((item, index) => (
                <li className="career-list" key={index}>
                  <ul>
                    <li>{item.grade}학년</li>
                    <li>{item.interest}</li>
                    <li>{item.stdHope}</li>
                    <li>{item.parentHope}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </HopeCareerTable>
        </div>
      </div>
      <div className="st-significant">
        <h4>행동 특성 및 종합 의견</h4>
        <div className="detail-significant">
          {careerList.map((item, index) => (
            <label
              htmlFor={`special-note${index}`}
              className="label-nm"
              key={index}
            >
              <span>{item.grade}학년</span>
              <textarea
                cols="30"
                rows="6"
                defaultValue={item.specialNote}
                id={`special-note${index}`}
                readOnly
              ></textarea>
            </label>
          ))}
        </div>
      </div>
    </CareerStatusDiv>
  );
};

export default CareerStatus;
