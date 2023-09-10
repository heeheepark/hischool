import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  getStudentData,
  patchSignCancel,
} from "../../../api/teacher/studentListAxios";
import { StudentCancelModal } from "../../../components/modal/teacherModal";
import {
  StudentListContent,
  StudentListTitle,
  StudentListWrap,
} from "../../../styles/teacher/studentlist/StudentListStyle";
import { Loading } from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../api/login/client";
import { finishLoading, startLoading } from "../../../reducers/loadingSlice";

const StudentList = () => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const [studentListData, setStudentListData] = useState([]);
  const [cancelOk, setCancelOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userPk, setUserPk] = useState(null);
  const navigate = useNavigate();

  // Modal 확인 클릭 시
  useEffect(() => {
    if (cancelOk) {
      setModalOpen(false);
      patchSignCancel(userPk);
      setCancelOk(false);
    }
    getStudentData(setStudentListData);
    // 로딩 호출
    client.interceptors.request.use(function (config) {
      dispatch(startLoading({}));
      return config;
    });
    // 로딩 완료
    client.interceptors.response.use(config => {
      dispatch(finishLoading({}));
      return config;
    });
  }, [cancelOk]);

  const handleSginClick = () => {
    navigate("/teacher/studentlist/signlist");
  };

  // 승인 취소
  const handleOk = e => {
    const resultUserId = e.target.classList[0].slice(6);
    setModalOpen(true);
    setUserPk(resultUserId);
  };

  return (
    <StudentListWrap>
      {modalOpen && (
        <StudentCancelModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setCancelOk={setCancelOk}
        />
      )}
      <StudentListTitle>
        <div>
          <h3>학생관리</h3>
        </div>
        <div>
          <button onClick={handleSginClick}>가입대기 명단</button>
        </div>
      </StudentListTitle>
      <StudentListContent>
        <ul className="list-title">
          <li className="list-title-th">순번</li>
          <li className="list-title-th">이름</li>
          <li className="list-title-th">생년월일</li>
          <li className="list-title-th">연락처</li>
          <li className="list-title-th">이메일</li>
          <li className="list-title-th">승인취소</li>
        </ul>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : null}
        <ul className="data-list">
          {studentListData?.map((item, index) => (
            <li className="class" key={index}>
              <ul>
                <li>{index + 1}</li>
                <li
                  className="student-name"
                  onClick={() => {
                    navigate(
                      `/teacher/studentlist/studentliferecord/${item.userId}`,
                      {
                        state: {
                          userId: item.userId,
                          studentName: item.snm,
                          studentBirth: item.birth,
                        },
                      },
                    );
                  }}
                >
                  {item.snm}
                </li>
                <li>{item.birth}</li>
                <li>{item.phone}</li>
                <li>{item.email}</li>
                <li>
                  <button
                    className={`cancel${item.userId}`}
                    onClick={e => handleOk(e)}
                  >
                    취소
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </StudentListContent>
    </StudentListWrap>
  );
};

export default StudentList;
