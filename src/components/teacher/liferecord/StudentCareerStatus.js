import React, { useEffect } from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../../styles/student/LifeRecordStyle";
import { useState } from "react";
import {
  getHopeUniversity,
  getStudentCareerList,
} from "../../../api/teacher/studentLifeRecordAxios";

const StudentCareerStatus = ({ userId, grade }) => {
  const [careerList, setCareerList] = useState("");
  const [hopeUniv, setHopeUniv] = useState("");
  const [hopeDept, setHopeDept] = useState("");
  const [payload, setPayload] = useState({
    userId: userId,
    grade: grade,
    interest: careerList.interest,
    stdHope: careerList.stdHope,
    parentHope: careerList.parentHope,
    hopeUniv: hopeUniv,
    hopeDept: hopeDept,
    specialNote: careerList.specialNote,
  });

  console.log(payload);

  const handleSave = () => {};

  useEffect(() => {
    getHopeUniversity(userId, setHopeUniv, setHopeDept, setPayload);
    getStudentCareerList(userId, setCareerList);
  }, []);

  useEffect(() => {
    setPayload({
      ...payload,
      hopeUniv: hopeUniv,
      hopeDept: hopeDept,
    });
  }, [hopeUniv, hopeDept]);

  return (
    <CareerStatusDiv>
      <div className="top-wrap">
        <button onClick={handleSave}>저장</button>
      </div>
      <div className="mid-wrap">
        <div className="hope-univ-wrap">
          <h4>희망 대학</h4>
          <label htmlFor="" className="label-nm">
            <span>대학명</span>
            <input
              type="text"
              value={hopeUniv}
              onChange={e => setHopeUniv(e.target.value)}
            />
          </label>
          <label htmlFor="" className="label-nm">
            <span>학부(과)</span>
            <input
              type="text"
              value={hopeDept}
              onChange={e => setHopeDept(e.target.value)}
            />
          </label>
        </div>
        <div className="hope-career-wrap">
          <h4>진로 희망사항</h4>
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
              {careerList.length > 0 &&
                careerList.map((item, index) => (
                  <li className="career-list" key={index}>
                    <ul>
                      <li>{item.grade}학년</li>
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            value={payload.interest || item.interest}
                            onChange={e =>
                              setPayload({
                                ...payload,
                                interest: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.interest}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            value={payload.stdHope || item.stdHope}
                            onChange={e =>
                              setPayload({
                                ...payload,
                                stdHope: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.stdHope}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            value={payload.parentHope || item.parentHope}
                            onChange={e =>
                              setPayload({
                                ...payload,
                                parentHope: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.parentHope}</li>
                      )}
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
          {careerList.length > 0 &&
            careerList.map((item, index) => (
              <label htmlFor="" className="label-nm" key={index}>
                <span>{item.grade}학년</span>
                {grade == index + 1 ? (
                  <textarea
                    cols="30"
                    rows="6"
                    value={payload.specialNote || item.specialNote}
                    onChange={e =>
                      setPayload({
                        ...payload,
                        specialNote: e.target.value,
                      })
                    }
                  ></textarea>
                ) : (
                  <textarea
                    cols="30"
                    rows="6"
                    value={item.specialNote}
                    readOnly
                  ></textarea>
                )}
              </label>
            ))}
        </div>
      </div>
    </CareerStatusDiv>
  );
};

export default StudentCareerStatus;
