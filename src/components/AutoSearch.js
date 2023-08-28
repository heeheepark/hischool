import React, { useEffect, useState } from "react";
import {
  DeleteButton,
  DropDownLi,
  DropDownUl,
  Input,
  InputDiv,
} from "../styles/AutoSearchStyle";

const schoolList = [
  "오성고등학교",
  "육성고등학교",
  "칠성고등학교",
  "성지고등학교",
  "성니고등학교",
  "성미고등학교",
  "함지고등학교",
  "함비고등학교",
  "함기고등학교",
  "함리고등학교",
  "영진고등학교",
  "청구고등학교",
  "운암고등학교",
  "계성고등학교",
];

const AutoSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputValue, setIsInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(schoolList);
  const [dropDownItem, setDropDownItem] = useState(-1);

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsInputValue(false);
      setDropDownList([]);
    } else {
      const selectList = schoolList.filter(item => item.includes(inputValue));
      setDropDownList(selectList);
    }
  };

  const changeInputValue = e => {
    setInputValue(e.target.value);
    setIsInputValue(true);
  };

  const handleClickItem = e => {
    setInputValue(e);
    setIsInputValue(false);
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
                {item}
              </DropDownLi>
            );
          })}
        </DropDownUl>
      )}
    </>
  );
};

export default AutoSearch;
