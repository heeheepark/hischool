import React, { useEffect, useState } from "react";
import {
  DeleteButton,
  DropDownLi,
  DropDownUl,
  Input,
  InputDiv,
} from "../styles/AutoSearchStyle";
import { getSchoolName } from "../api/signUpAxios";

const AutoSearch = ({ setPayload }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputValue, setIsInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownItem, setDropDownItem] = useState(-1);
  const [schoolList, setSchoolList] = useState([]);

  useEffect(() => {
    getSchoolName(setSchoolList);
  }, []);

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
    console.log(inputValue);
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

  useEffect(showDropDownList, [inputValue]);

  return (
    <>
      <InputDiv isInputValue={isInputValue}>
        <Input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleKey}
        />
        <DeleteButton onClick={() => setInputValue("")}>&times;</DeleteButton>
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
