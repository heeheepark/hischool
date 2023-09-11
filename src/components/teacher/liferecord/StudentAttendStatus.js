import React, { useEffect, useState } from "react";
import {
  AttendStatusDiv,
  AttendTable,
} from "../../../styles/student/liferecord/AttendStyle";
import {
  getAttendData,
  putAttendData,
} from "../../../api/teacher/tcAttendAxios";
import { AttendSaveModal } from "../../modal/teacherModal";

const StudentAttendStatus = ({ userId, grade }) => {
  const [attendList, setAttendList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOk, setAcceptOk] = useState(false);
  const [disabled, setDisabled] = useState({
    1: true,
    2: true,
    3: true,
  });
  const [payload, setPayload] = useState([
    {
      attendId: 0,
      grade: "",
      lessonNum: 0,
      diseaseAbsence: 0,
      unauthAbsence: 0,
      etcAbsence: 0,
      diseaseLate: 0,
      unauthLate: 0,
      etcLate: 0,
      diseaseEarly: 0,
      unauthEarly: 0,
      etcEarly: 0,
      diseaseOut: 0,
      unauthOut: 0,
      etcOut: 0,
      specialNote: "",
    },
  ]);

  useEffect(() => {
    switch (payload.length) {
      case 1:
        setDisabled({ ...disabled, 1: false });
        break;
      case 2:
        setDisabled({ ...disabled, 2: false });
        break;
      case 3:
        setDisabled({ ...disabled, 3: false });
        break;
    }
  }, [payload]);

  useEffect(() => {
    if (acceptOk) {
      setModalOpen(false);
      putAttendData(payload);
      setAcceptOk(false);
    }
    getAttendData(userId, setPayload);
  }, [acceptOk]);

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
              {payload && payload.length == grade ? (
                payload.map(item => (
                  <li className="attend-list" key={item.attendId}>
                    <ul>
                      <li>{item.grade}학년</li>
                      <li>
                        <input
                          type="text"
                          name="lessonNum"
                          value={item.lessonNum}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              lessonNum: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthAbsence"
                          value={item.unauthAbsence}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthAbsence: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseAbsence"
                          value={item.diseaseAbsence}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseAbsence: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcAbsence"
                          value={item.etcAbsence}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcAbsence: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthLate"
                          value={item.unauthLate}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthLate: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseLate"
                          value={item.diseaseLate}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseLate: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcLate"
                          value={item.etcLate}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcLate: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthEarly"
                          value={item.unauthEarly}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthEarly: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseEarly"
                          value={item.diseaseEarly}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseEarly: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcEarly"
                          value={item.etcEarly}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcEarly: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthOut"
                          value={item.unauthOut}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthOut: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseOut"
                          value={item.diseaseOut}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseOut: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcOut"
                          value={item.etcOut}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcOut: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="specialNote"
                          className="etc-text"
                          value={item.specialNote}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              specialNote: e.target.value,
                            })
                          }
                          disabled={disabled[item.grade]}
                        />
                      </li>
                    </ul>
                  </li>
                ))
              ) : (
                <>
                  {payload
                    .filter((item, index) => parseInt(item.grade) === index + 1)
                    .map(item => (
                      <li className="attend-list" key={item.attendId}>
                        <ul>
                          <li>{item.grade}학년</li>
                          <li>
                            <input
                              type="text"
                              name="lessonNum"
                              value={item.lessonNum}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  lessonNum: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="unauthAbsence"
                              value={item.unauthAbsence}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  unauthAbsence: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="diseaseAbsence"
                              value={item.diseaseAbsence}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  diseaseAbsence: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="etcAbsence"
                              value={item.etcAbsence}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  etcAbsence: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="unauthLate"
                              value={item.unauthLate}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  unauthLate: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="diseaseLate"
                              value={item.diseaseLate}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  diseaseLate: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="etcLate"
                              value={item.etcLate}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  etcLate: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="unauthEarly"
                              value={item.unauthEarly}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  unauthEarly: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="diseaseEarly"
                              value={item.diseaseEarly}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  diseaseEarly: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="etcEarly"
                              value={item.etcEarly}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  etcEarly: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="unauthOut"
                              value={item.unauthOut}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  unauthOut: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="diseaseOut"
                              value={item.diseaseOut}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  diseaseOut: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="etcOut"
                              value={item.etcOut}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  etcOut: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
                          <li>
                            <input
                              type="text"
                              name="specialNote"
                              className="etc-text"
                              value={item.specialNote}
                              onChange={e =>
                                setPayload({
                                  ...payload,
                                  specialNote: e.target.value,
                                })
                              }
                              disabled={disabled[item.grade]}
                            />
                          </li>
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
                          onChange={e =>
                            setPayload({
                              ...payload,
                              lessonNum: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthAbsence"
                          value={payload.unauthAbsence}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthAbsence: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseAbsence"
                          value={payload.diseaseAbsence}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseAbsence: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcAbsence"
                          value={payload.etcAbsence}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcAbsence: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthLate"
                          value={payload.unauthLate}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthLate: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseLate"
                          value={payload.diseaseLate}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseLate: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcLate"
                          value={payload.etcLate}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcLate: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthEarly"
                          value={payload.unauthEarly}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthEarly: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseEarly"
                          value={payload.diseaseEarly}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseEarly: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcEarly"
                          value={payload.etcEarly}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcEarly: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="unauthOut"
                          value={payload.unauthOut}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              unauthOut: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="diseaseOut"
                          value={payload.diseaseOut}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              diseaseOut: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="etcOut"
                          value={payload.etcOut}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              etcOut: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="specialNote"
                          className="etc-text"
                          value={payload.specialNote}
                          onChange={e =>
                            setPayload({
                              ...payload,
                              specialNote: e.target.value,
                            })
                          }
                          disabled={disabled[payload.grade]}
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
