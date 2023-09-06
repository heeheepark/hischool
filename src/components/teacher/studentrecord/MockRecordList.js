import { useEffect } from "react";
import { MockRecordListDiv } from "../../../styles/teacher/studentrecord/StudentRecordStyle";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../../api/login/client";
import { finishLoading, startLoading } from "../../../reducers/loadingSlice";
import Loading from "../../Loading";

const MockRecordList = ({
  studentMockRecordList,
  setMockResultIdList,
  mockResultIdList,
}) => {
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const today = new Date();
  const todayYear = today.getFullYear().toString();
  let resultIdArray = mockResultIdList;

  // 전체 선택
  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".mock-checkbox");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(9)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setMockResultIdList(resultIdArray);
  };

  // 개별 선택
  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const resultId = parseInt(clickList.classList[1].slice(9));
    if (e.target.checked === true) {
      resultIdArray.push(resultId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== resultId);
    }
    setMockResultIdList(resultIdArray);
  };

  useEffect(() => {
    document.querySelector(".mock-all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".mock-checkbox")
      .forEach(item => (item.checked = false));
    setMockResultIdList([]);
  }, [studentMockRecordList]);

  return (
    <MockRecordListDiv>
      <ul className="category">
        <li className="category-th">
          <input
            type="checkbox"
            id="mock-all-checkbox"
            onClick={e => handleAllCheck(e)}
            className="mock-all-checkbox-btn"
          />
        </li>
        <li className="category-th">연도</li>
        <li className="category-th">월</li>
        <li className="category-th">과목 계열</li>
        <li className="category-th">과목명</li>
        <li className="category-th">표준점수</li>
        <li className="category-th">등급</li>
        <li className="category-th">백분위</li>
      </ul>
      <ul className="record-data">
        {/* {loading ? <Loading /> : null} */}
        {studentMockRecordList?.length > 0 ? (
          studentMockRecordList.map((item, index) => (
            <li className="data-table" key={index}>
              <ul>
                <li>
                  {item.year === todayYear ? (
                    <input
                      type="checkbox"
                      id={item.resultId}
                      defaultChecked={false}
                      className={`mock-checkbox resultId0${item.resultId}`}
                      onClick={e => handleCheckBox(e)}
                    />
                  ) : (
                    ""
                  )}
                </li>
                <li>{item.year}</li>
                <li>{`${item.mon}월`}</li>
                <li>{item.cateName}</li>
                <li>{item.nm}</li>
                <li>{item.standardScore}</li>
                <li>{item.rating}</li>
                <li>{`${item.percent}%`}</li>
              </ul>
            </li>
          ))
        ) : (
          <p className="err-message">모의고사 성적 데이터가 없습니다.</p>
        )}
      </ul>
    </MockRecordListDiv>
  );
};

export default MockRecordList;
