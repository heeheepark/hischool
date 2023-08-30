import React, { useEffect } from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../../styles/student/LifeRecordStyle";
import { useState } from "react";
import {
  getHopeUniversity,
  getStudentCareerList,
  postSutdentCareerList,
} from "../../../api/teacher/studentLifeRecordAxios";

const StudentCareerStatus = ({ userId, grade }) => {
  const [careerList, setCareerList] = useState("");
  const [hopeUniv, setHopeUniv] = useState("");
  const [hopeDept, setHopeDept] = useState("");
  const [payload, setPayload] = useState("");

  console.log(careerList);
  console.log(payload);
  console.log(payload.length);

  const handleSave = () => {
    postSutdentCareerList(payload);
  };

  useEffect(() => {
    getHopeUniversity(userId, setHopeUniv, setHopeDept);
    getStudentCareerList(userId, setCareerList);
  }, []);

  useEffect(() => {
    if (careerList)
      setPayload({
        userId: userId,
        grade: grade,
        interest:
          careerList.length > grade - 1 ? careerList[grade - 1].interest : "",
        stdHope:
          careerList.length > grade - 1 ? careerList[grade - 1].stdHope : "",
        parentHope:
          careerList.length > grade - 1 ? careerList[grade - 1].parentHope : "",
        hopeUniv: hopeUniv,
        hopeDept: hopeDept,
        specialNote:
          careerList.length > grade - 1
            ? careerList[grade - 1].specialNote
            : "",
      });
  }, [careerList]);

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
              value={payload?.hopeUniv}
              onChange={e =>
                setPayload({ ...payload, hopeUniv: e.target.value })
              }
            />
          </label>
          <label htmlFor="" className="label-nm">
            <span>학부(과)</span>
            <input
              type="text"
              value={payload?.hopeDept}
              onChange={e =>
                setPayload({ ...payload, hopeDept: e.target.value })
              }
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
              {careerList.length > grade - 1 ? (
                careerList.map((item, index) => (
                  <li className="career-list" key={index}>
                    <ul>
                      <li>{item.grade}학년</li>
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            value={payload.interest}
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
                            value={payload.stdHope}
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
                            value={payload.parentHope}
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
                ))
              ) : (
                <li className="career-list">
                  <ul>
                    <li>{grade}학년</li>
                    <li>
                      <input
                        type="text"
                        value={payload.interest}
                        onChange={e =>
                          setPayload({
                            ...payload,
                            interest: e.target.value,
                          })
                        }
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        value={payload.stdHope}
                        onChange={e =>
                          setPayload({
                            ...payload,
                            stdHope: e.target.value,
                          })
                        }
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        value={payload.parentHope}
                        onChange={e =>
                          setPayload({
                            ...payload,
                            parentHope: e.target.value,
                          })
                        }
                      />
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </HopeCareerTable>
        </div>
      </div>
      <div className="significant">
        <h4>행동 특성 및 종합 의견</h4>
        <div className="detail-significant">
          {careerList.length > grade - 1
            ? careerList.map((item, index) => (
                <label htmlFor="" className="label-nm" key={index}>
                  <span>{item.grade}학년</span>
                  {grade == index + 1 ? (
                    <textarea
                      cols="30"
                      rows="6"
                      value={payload.length > 0 && payload.specialNote}
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
              ))
            : careerList.map((item, index) => (
                <label htmlFor="" className="label-nm" key={index}>
                  <span>{item.grade}학년</span>
                  <textarea
                    cols="30"
                    rows="6"
                    value={payload.specialNote}
                    onChange={e =>
                      setPayload({
                        ...payload,
                        specialNote: e.target.value,
                      })
                    }
                  ></textarea>
                </label>
              ))}
        </div>
      </div>
    </CareerStatusDiv>
  );
};

export default StudentCareerStatus;
