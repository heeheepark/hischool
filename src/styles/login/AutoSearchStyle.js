import styled from "@emotion/styled";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 21vw;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const DeleteButton = styled.div`
  position: absolute;
  right: 47.2%;
  cursor: pointer;
`;

export const DropDownUl = styled.ul`
  position: absolute;
  width: 21vw;
  height: 74px;
  display: block;
  padding: 10px 0;
  background-color: #fff;
  border: 1px solid #bbb;
  border-top: none;
  border-radius: 0 0 5px 5px;
  list-style-type: none;
  overflow-y: scroll;
`;

export const DropDownLi = styled.li`
  padding: 0 15px;
  font-size: 16px;
  &.selected {
    background-color: lightblue;
  }
`;
