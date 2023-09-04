import React, { useEffect, useState } from "react";
import { getSchoolName } from "../../api/login/signUpAxios";
import {
  DeleteButton,
  DropDownLi,
  DropDownUl,
  Input,
  InputDiv,
} from "../../styles/login/AutoSearchStyle";

const AutoSearch = ({
  setPayload,
  inputValue,
  setInputValue,
  setSchoolClassList,
}) => {
  const [isInputValue, setIsInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownItem, setDropDownItem] = useState(-1);
  const [schoolList, setSchoolList] = useState([]);

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsInputValue(false);
      setDropDownList([]);
    } else {
      const selectList = schoolList.filter(item =>
        item.nm.includes(inputValue),
      );
      setDropDownList(selectList);
    }
  };

  const changeInputValue = e => {
    setInputValue(e.target.value);
    setIsInputValue(true);
    setSchoolClassList("");
    setPayload(payload => ({
      ...payload,
      schoolCode: "",
      grade: "",
    }));
  };

  const handleClickItem = e => {
    console.log(e);
    setInputValue(e.nm);
    setIsInputValue(false);
    setPayload(payload => ({
      ...payload,
      schoolNm: e.nm,
      schoolCode: e.schoolCode,
    }));
  };

  const handleKey = e => {
    if (isInputValue) {
      if (e.key === "ArrowDown" && dropDownList.length - 1 > dropDownItem) {
        setDropDownItem(dropDownItem + 1);
      }
      if (e.key === "ArrowUp" && dropDownItem >= 0)
        setDropDownItem(dropDownItem - 1);
      if (e.key === "Enter" && dropDownItem >= 0) {
        handleClickItem(dropDownList[dropDownItem]);
        setDropDownItem(-1);
      }
    }
  };

  const handleRemoveBtn = () => {
    setInputValue("");
    setSchoolClassList("");
    setPayload(payload => ({
      ...payload,
      schoolCode: "",
      grade: "",
    }));
  };

  useEffect(() => {
    getSchoolName(setSchoolList);
  }, []);

  useEffect(showDropDownList, [inputValue]);

  return (
    <>
      <InputDiv isInputValue={isInputValue}>
        <Input
          type="text"
          id="school"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleKey}
        />
        <DeleteButton onClick={handleRemoveBtn}>&times;</DeleteButton>
      </InputDiv>
      {isInputValue && (
        <DropDownUl>
          {dropDownList.length === 0 && (
            <DropDownLi>해당하는 학교가 없습니다</DropDownLi>
          )}
          {dropDownList.map((item, index) => {
            return (
              <DropDownLi
                key={index}
                onClick={() => handleClickItem(item)}
                onMouseOver={() => setDropDownItem(index)}
                className={dropDownItem === index ? "selected" : ""}
              >
                {item.nm}
              </DropDownLi>
            );
          })}
        </DropDownUl>
      )}
    </>
  );
};

export default AutoSearch;
