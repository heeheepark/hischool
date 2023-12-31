import React, { useEffect } from "react";
import {
  CareerStatusDiv,
  HopeCareerTable,
} from "../../../styles/student/liferecord/LifeRecordStyle";
import { useState } from "react";
import {
  getHopeUniversity,
  getStudentCareerList,
  patchStudentCareerList,
  postStudentCareerList,
} from "../../../api/teacher/studentLifeRecordAxios";
import { CareerRecordSaveModal } from "../../modal/teacherModal";

const StudentCareerStatus = ({ userId, grade }) => {
  const [careerList, setCareerList] = useState("");
  const [hopeUniv, setHopeUniv] = useState("");
  const [hopeDept, setHopeDept] = useState("");
  const [payload, setPayload] = useState("");
  const [existCareerId, setExistCareerId] = useState(false);
  const [confirmPost, setComfirmPost] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOk, setAcceptOk] = useState(false);

  const handleSave = () => {
    setModalOpen(true);
  };

  const saveConfirm = () => {
    if (confirmPost) {
      postStudentCareerList(payload);
    } else {
      patchStudentCareerList(payload);
    }
  };

  useEffect(() => {
    if (acceptOk) {
      saveConfirm();
    } else {
      getHopeUniversity(userId, setHopeUniv, setHopeDept);
      getStudentCareerList(
        grade,
        userId,
        setCareerList,
        setExistCareerId,
        setComfirmPost,
      );
      setComfirmPost(false);
    }
  }, [acceptOk]);

  useEffect(() => {
    if (careerList && existCareerId) {
      setPayload({
        careerId:
          careerList.length > grade - 1 && careerList[grade - 1].careerId,
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
    } else {
      setPayload({
        userId: userId,
        grade: grade,
        interest: "",
        stdHope: "",
        parentHope: "",
        hopeUniv: hopeUniv,
        hopeDept: hopeDept,
        specialNote: "",
      });
    }
  }, [careerList]);

  return (
    <CareerStatusDiv>
      {modalOpen && (
        <CareerRecordSaveModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setAcceptOk={setAcceptOk}
        />
      )}
      <div className="top-wrap">
        <button onClick={handleSave}>저장</button>
      </div>
      <div className="mid-wrap">
        <div className="hope-univ-wrap">
          <h4>희망 대학</h4>
          <label htmlFor="hope-univ" className="label-nm">
            <span>대학명</span>
            <input
              type="text"
              id="hope-univ"
              value={payload.hopeUniv || ""}
              onChange={e =>
                setPayload({ ...payload, hopeUniv: e.target.value })
              }
            />
          </label>
          <label htmlFor="hope-depart" className="label-nm">
            <span>학부(과)</span>
            <input
              type="text"
              id="hope-depart"
              value={payload.hopeDept || ""}
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
              {careerList && careerList.length == grade
                ? careerList.map(
                    (item, index) =>
                      parseInt(item.grade) === index + 1 && (
                        <li className="career-list" key={index}>
                          <ul>
                            <li>{item.grade}학년</li>
                            {grade == index + 1 ? (
                              <li>
                                <input
                                  type="text"
                                  name="grade"
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
                                  name="std-hope"
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
                                  name="parent-hope"
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
                      ),
                  )
                : careerList && (
                    <>
                      {careerList
                        .filter(
                          (item, index) => parseInt(item.grade) === index + 1,
                        )
                        .map((item, index) => (
                          <li className="career-list" key={index}>
                            <ul>
                              <li>{`${index + 1}학년`}</li>
                              <li>{item.interest}</li>
                              <li>{item.stdHope}</li>
                              <li>{item.parentHope}</li>
                            </ul>
                          </li>
                        ))}
                      <li className="career-list">
                        <ul>
                          <li>{`${grade}학년`}</li>
                          <li>
                            <input
                              type="text"
                              name="career-list"
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
                              name="career-list"
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
                              name="career-list"
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
                    </>
                  )}
            </ul>
          </HopeCareerTable>
        </div>
      </div>
      <div className="significant">
        <h4>행동 특성 및 종합 의견</h4>
        <div className="detail-significant">
          {careerList.length == grade
            ? careerList?.map(
                (item, index) =>
                  parseInt(item.grade) === index + 1 && (
                    <label
                      htmlFor={`special-note${index}`}
                      className="label-nm"
                      key={index}
                    >
                      <span>{item.grade}학년</span>
                      {grade == index + 1 ? (
                        <textarea
                          id={`special-note${index}`}
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
                      ) : (
                        <textarea
                          cols="30"
                          rows="6"
                          id={`special-note${index}`}
                          value={item.specialNote}
                          readOnly
                        ></textarea>
                      )}
                    </label>
                  ),
              )
            : careerList && (
                <>
                  {careerList?.map((item, index) => (
                    <label
                      htmlFor={`special-note${index}`}
                      className="label-nm"
                      key={index}
                    >
                      <span>{item.grade}학년</span>
                      <textarea
                        cols="30"
                        rows="6"
                        id={`special-note${index}`}
                        value={item.specialNote}
                        readOnly
                      ></textarea>
                    </label>
                  ))}
                  <label htmlFor={`specialNote${grade}`} className="label-nm">
                    <span>{grade}학년</span>
                    <textarea
                      cols="30"
                      rows="6"
                      id={`specialNote${grade}`}
                      value={payload.specialNote}
                      onChange={e =>
                        setPayload({
                          ...payload,
                          specialNote: e.target.value,
                        })
                      }
                    ></textarea>
                  </label>
                </>
              )}
        </div>
      </div>
    </CareerStatusDiv>
  );
};

export default StudentCareerStatus;
