import React from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../styles/student/LifeRecordStyle";

const CareerStatus = () => {
  return (
    <CareerStatusDiv>
      <div className="hope-career-wrap">
        <h4>진로 희망 사항</h4>
        <HopeCareerTable>
          <ul>
            <li className="day-list">
              <ul>
                <li className="day">학년</li>
                <li className="day">특기 또는 흥미</li>
                <li className="day">진로희망</li>
              </ul>
            </li>
            <li className="lunch-menu-list">
              <ul>
                <li>안녕</li>
              </ul>
            </li>
          </ul>
        </HopeCareerTable>
      </div>
      <div className="hope-career-wrap">
        <h4>희망 대학</h4>
        <HopeCareerTable>
          <ul>
            <li className="day-list">
              <ul>
                <li className="day">학년</li>
                <li className="day">특기 또는 흥미</li>
                <li className="day">진로희망</li>
              </ul>
            </li>
            <li className="lunch-menu-list">
              <ul>
                <li>안녕</li>
              </ul>
            </li>
          </ul>
        </HopeCareerTable>
      </div>
    </CareerStatusDiv>
  );
};

export default CareerStatus;
