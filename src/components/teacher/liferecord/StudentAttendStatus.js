import React, { useEffect, useState } from "react";
import {
  AttendStatusDiv,
  AttendTable,
} from "../../../styles/student/liferecord/AttendStyle";
import {
  getAttendData,
  postAttendData,
  putAttendData,
} from "../../../api/teacher/tcAttendAxios";
import { AttendSaveModal } from "../../modal/teacherModal";

const StudentAttendStatus = ({ userId, grade }) => {
  const [attendList, setAttendList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [existAttenId, setExistAttenId] = useState("");
  const [confirmPost, setComfirmPost] = useState(false);
  const [acceptOk, setAcceptOk] = useState(false);
  const [payload, setPayload] = useState("");

  const saveConfirm = () => {
    if (confirmPost) {
      postAttendData(payload);
    } else {
      putAttendData(payload);
    }
  };

  useEffect(() => {
    if (acceptOk) {
      saveConfirm();
    } else {
      getAttendData(
        grade,
        userId,
        setAttendList,
        setExistAttenId,
        setComfirmPost
      );
    }
    setComfirmPost(false);
  }, [acceptOk]);

  useEffect(() => {
    if (attendList && existAttenId) {
      setPayload({
        attendId:
          attendList.length > grade - 1 && attendList[grade - 1].attendId,
        lessonNum:
          attendList.length > grade - 1 ? attendList[grade - 1].lessonNum : "",
        diseaseAbsence:
          attendList.length > grade - 1
            ? attendList[grade - 1].diseaseAbsence
            : "",
        unauthAbsence:
          attendList.length > grade - 1
            ? attendList[grade - 1].unauthAbsence
            : "",
        etcAbsence:
          attendList.length > grade - 1 ? attendList[grade - 1].etcAbsence : "",
        diseaseLate:
          attendList.length > grade - 1
            ? attendList[grade - 1].diseaseLate
            : "",
        unauthLate:
          attendList.length > grade - 1 ? attendList[grade - 1].unauthLate : "",
        etcLate:
          attendList.length > grade - 1 ? attendList[grade - 1].etcLate : "",
        diseaseEarly:
          attendList.length > grade - 1
            ? attendList[grade - 1].diseaseEarly
            : "",
        unauthEarly:
          attendList.length > grade - 1
            ? attendList[grade - 1].unauthEarly
            : "",
        etcEarly:
          attendList.length > grade - 1 ? attendList[grade - 1].etcEarly : "",
        diseaseOut:
          attendList.length > grade - 1 ? attendList[grade - 1].diseaseOut : "",
        unauthOut:
          attendList.length > grade - 1 ? attendList[grade - 1].unauthOut : "",
        etcOut:
          attendList.length > grade - 1 ? attendList[grade - 1].etcOut : "",
        specialNote:
          attendList.length > grade - 1
            ? attendList[grade - 1].specialNote
            : "",
      });
    } else {
      setPayload({
        userId: userId,
        grade: grade,
        lessonNum: "",
        diseaseAbsence: "",
        unauthAbsence: "",
        etcAbsence: "",
        diseaseLate: "",
        unauthLate: "",
        etcLate: "",
        diseaseEarly: "",
        unauthEarly: "",
        etcEarly: "",
        diseaseOut: "",
        unauthOut: "",
        etcOut: "",
        specialNote: "",
      });
    }
  }, [attendList]);

  const handleSaveBt = () => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && (
        <AttendSaveModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setAcceptOk={setAcceptOk}
        />
      )}
      <AttendStatusDiv>
        <div>
          <div className="attend-top-bt">
            <h4>출결 현황</h4>
            <button onClick={handleSaveBt}>저장</button>
          </div>
          <AttendTable>
            <ul>
              <li className="cate-list">
                <ul>
                  <li className="category-nm">학년</li>
                  <li className="category-nm">수업일수</li>
                  <li className="category-nm">결석</li>
                  <li className="category-detail">무단</li>
                  <li className="category-detail">질병</li>
                  <li className="category-detail">기타</li>
                  <li className="category-nm">지각</li>
                  <li className="category-detail">무단</li>
                  <li className="category-detail">질병</li>
                  <li className="category-detail">기타</li>
                  <li className="category-nm">조퇴</li>
                  <li className="category-detail">무단</li>
                  <li className="category-detail">질병</li>
                  <li className="category-detail">기타</li>
                  <li className="category-nm">결과</li>
                  <li className="category-detail">무단</li>
                  <li className="category-detail">질병</li>
                  <li className="category-detail">기타</li>
                  <li className="category-nm">특이사항</li>
                </ul>
              </li>
              {attendList && attendList.length == grade ? (
                attendList.map((item, index) => (
                  <li className="attend-list" key={index}>
                    <ul>
                      <li>{item.grade}학년</li>
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="lessonNum"
                            value={payload.lessonNum}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                lessonNum: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.lessonNum}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="unauthAbsence"
                            value={payload.unauthAbsence}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                unauthAbsence: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.unauthAbsence}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="diseaseAbsence"
                            value={payload.diseaseAbsence}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                diseaseAbsence: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.diseaseAbsence}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="etcAbsence"
                            value={payload.etcAbsence}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                etcAbsence: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.etcAbsence}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="unauthLate"
                            value={payload.unauthLate}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                unauthLate: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.unauthLate}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="diseaseLate"
                            value={payload.diseaseLate}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                diseaseLate: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.diseaseLate}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="etcLate"
                            value={payload.etcLate}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                etcLate: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.etcLate}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="unauthEarly"
                            value={payload.unauthEarly}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                unauthEarly: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.unauthEarly}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="diseaseEarly"
                            value={payload.diseaseEarly}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                diseaseEarly: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.diseaseEarly}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="etcEarly"
                            value={payload.etcEarly}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                etcEarly: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.etcEarly}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="unauthOut"
                            value={payload.unauthOut}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                unauthOut: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.unauthOut}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="diseaseOut"
                            value={payload.diseaseOut}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                diseaseOut: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.diseaseOut}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="etcOut"
                            value={payload.etcOut}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                etcOut: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.etcOut}</li>
                      )}
                      {grade == index + 1 ? (
                        <li>
                          <input
                            type="text"
                            name="specialNote"
                            className="etc-text"
                            value={payload.specialNote}
                            onChange={(e) =>
                              setPayload({
                                ...payload,
                                specialNote: e.target.value,
                              })
                            }
                          />
                        </li>
                      ) : (
                        <li>{item.specialNote}</li>
                      )}
                    </ul>
                  </li>
                ))
              ) : (
                <>
                  {attendList
                    .filter((item, index) => parseInt(item.grade) === index + 1)
                    .map((item, index) => (
                      <li className="attend-list" key={index}>
                        <ul>
                          <li>{`${index + 1}학년`}</li>
                          <li>{item.lessonNum}</li>
                          <li>{item.diseaseAbsence}</li>
                          <li>{item.unauthAbsence}</li>
                          <li>{item.etcAbsence}</li>
                          <li>{item.diseaseLate}</li>
                          <li>{item.unauthLate}</li>
                          <li>{item.etcLate}</li>
                          <li>{item.diseaseEarly}</li>
                          <li>{item.unauthEarly}</li>
                          <li>{item.etcEarly}</li>
                          <li>{item.diseaseOut}</li>
                          <li>{item.unauthOut}</li>
                          <li>{item.etcOut}</li>
                          <li>{item.specialNote}</li>
                        </ul>
                      </li>
                    ))}
                  <li className="attend-list">
                    <ul>
                      <li>{grade}학년</li>
                      <li>
                        <input
                          type="text"
                          name="lessonNum"
                          value={payload.lessonNum}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              lessonNum: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthAbsence"
                          value={payload.unauthAbsence}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              unauthAbsence: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseAbsence"
                          value={payload.diseaseAbsence}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              diseaseAbsence: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcAbsence"
                          value={payload.etcAbsence}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              etcAbsence: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthLate"
                          value={payload.unauthLate}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              unauthLate: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseLate"
                          value={payload.diseaseLate}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              diseaseLate: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcLate"
                          value={payload.etcLate}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              etcLate: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthEarly"
                          value={payload.unauthEarly}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              unauthEarly: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseEarly"
                          value={payload.diseaseEarly}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              diseaseEarly: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcEarly"
                          value={payload.etcEarly}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              etcEarly: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthOut"
                          value={payload.unauthOut}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              unauthOut: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseOut"
                          value={payload.diseaseOut}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              diseaseOut: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcOut"
                          value={payload.etcOut}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              etcOut: e.target.value,
                            })
                          }
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="specialNote"
                          className="etc-text"
                          value={payload.specialNote}
                          onChange={(e) =>
                            setPayload({
                              ...payload,
                              specialNote: e.target.value,
                            })
                          }
                        />
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </AttendTable>
        </div>
      </AttendStatusDiv>
    </>
  );
};

export default StudentAttendStatus;
