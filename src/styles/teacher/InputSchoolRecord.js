import styled from "@emotion/styled";

const ISRHeader = styled.div`
  margin: 0 3%;
  width: calc(100%-30px);
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 20px;
`;
const ISRButton = styled.div`
  margin: 0 3%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;
const ISRTitle = styled.div`
  margin: 10px auto;
  width: 94%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d4d4d4;
  border: 1px solid #afafaf;
  border-radius: 15px;
`;
const ISRFont = styled.strong`
  font-size: 20px;
  margin: auto;
`;

export { ISRHeader, ISRTitle, ISRFont, ISRButton };
