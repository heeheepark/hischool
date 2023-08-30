import React from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../styles/student/LifeRecordStyle";
import { useState } from "react";
import { useEffect } from "react";
import { getCareerData } from "../../api/student/lifeRecordAxios";

const CareerStatus = () => {
  const [careerList, setCareerList] = useState([]);

  useEffect(() => {
    getCareerData(setCareerList);
  }, []);

  return (
    <CareerStatusDiv>
      <div className="top-wrap">
        <div className="hope-univ-wrap">
          <h4>희망 대학</h4>
          <label htmlFor="" className="label-nm">
            <span>대학명</span>
            <input type="text" value={"경북대학교"} readOnly />
          </label>
          <label htmlFor="" className="label-nm">
            <span>학부(과)</span>
            <input type="text" value={"신문방송학과"} readOnly />
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
      <div className="significant">
        <h4>행동 특성 및 종합 의견</h4>
        <div className="detail-significant">
          {careerList.map((item, index) => (
            <label htmlFor="" className="label-nm" key={index}>
              <span>{item.grade}학년</span>
              <textarea
                cols="30"
                rows="6"
                defaultValue={item.specialNote}
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
