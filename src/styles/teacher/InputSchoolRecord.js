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
  > strong {
    width: 77px;
    font-size: 20px;
    margin: auto;
    text-align: center;
  }
`;
const ISRinput = styled.div`
  margin: 10px auto;
  width: 94%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d4d4d4;
  border: 1px solid #afafaf;
  border-radius: 15px;
  > select {
    width: 120px;
    display: block;
    height: 20px;
    margin: 0 10px;
  }
  > input {
    display: block;
    width: 77px;
    height: 20px;
    margin: 0 30px;
  }
`;
const ISRdetail = styled.div`
  margin: 10px auto;
  width: 94%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #afafaf;
  border-radius: 15px;
  > p {
    width: 77px;
    font-size: 20px;
    margin: auto;
    text-align: center;
  }
`;
const ISRdetailButton = styled.div`
  width: 77px;
  margin: auto;
  text-align: center;
`;
const ISRinputR = styled.div`
  width: 65%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export {
  ISRHeader,
  ISRTitle,
  ISRButton,
  ISRinput,
  ISRdetail,
  ISRdetailButton,
  ISRinputR,
};