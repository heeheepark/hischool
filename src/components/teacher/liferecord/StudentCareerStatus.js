import React from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../../styles/student/LifeRecordStyle";
import { useState } from "react";

const StudentCareerStatus = () => {
  const [careerList, setCareerList] = useState([
    {
      userId: 1,
      grade: "1",
      interest: "환경 및 생태학 분야",
      stdHope: "환경 및 생태학 분야 교수",
      parentHope: "의사",
      hopeUniv: "고려대학교 ",
      hopeDept: "환경생태학과",
      specialNote:
        " 환경산업을 새로운 성장동력으로 육성, 기후변화를 새로운 기회요인으로 활용 등 환경적인 문제에 관심이 많음",
    },
    {
      userId: 1,
      grade: "2",
      interest: "환경 및 생태학 분야",
      stdHope: "환경 및 생태학 분야 교수",
      parentHope: "의사",
      hopeUniv: "고려대학교 ",
      hopeDept: "환경생태학과",
      specialNote:
        " 환경산업을 새로운 성장동력으로 육성, 기후변화를 새로운 기회요인으로 활용 등 환경적인 문제에 관심이 많음",
    },
    {
      userId: 1,
      grade: "3",
      interest: "환경 및 생태학 분야",
      stdHope: "환경 및 생태학 분야 교수",
      parentHope: "의사",
      hopeUniv: "고려대학교 ",
      hopeDept: "환경생태학과",
      specialNote:
        " 환경산업을 새로운 성장동력으로 육성, 기후변화를 새로운 기회요인으로 활용 등 환경적인 문제에 관심이 많음",
    },
  ]);

  return (
    <CareerStatusDiv>
      <div className="top-wrap">
        <div className="hope-univ-wrap">
          <h4>희망 대학</h4>
          <label htmlFor="" className="label-nm">
            <span>대학명</span>
            <input
              type="text"
              value={careerList.hopeUniv}
              onChange={e =>
                setCareerList({
                  ...careerList,
                  hopeUniv: e.target.value,
                })
              }
            />
          </label>
          <label htmlFor="" className="label-nm">
            <span>학부(과)</span>
            <input
              type="text"
              value={careerList.hopeDept}
              onChange={e =>
                setCareerList({
                  ...careerList,
                  hopeDept: e.target.value,
                })
              }
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
              {careerList.map(item => (
                <li className="career-list" key={item}>
                  <ul>
                    <li>{item.grade}학년</li>
                    <li>
                      <input type="text" value={item.interest} />
                    </li>
                    <li>
                      <input type="text" value={item.stdHope} />
                    </li>
                    <li>
                      <input type="text" value={item.parentHope} />
                    </li>
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
          {careerList.map(item => (
            <label htmlFor="" className="label-nm" key={item}>
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

export default StudentCareerStatus;
