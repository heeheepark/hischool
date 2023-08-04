import styled from "@emotion/styled";

const SJHeader = styled.div`
  margin: 0 3%;
  width: calc(100%-30px);
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
const SJButton = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;
const SJTitle = styled.div`
  margin: 10px auto;
  width: 94%;
  height: 40px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  background: #176b87;
  border: 1px solid #bbb;
  border-radius: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > p {
    width: 120px;
    font-size: 20px;
    margin: auto;
    text-align: center;
    font-weight: 600;
  }
  > strong {
    width: 77px;
    font-size: 20px;
    margin: auto;
    text-align: center;
  }
`;
const SJinput = styled.div`
  margin: 10px auto;
  width: 94%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 15px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  > select {
    width: 120px;
    display: block;
    height: 20px;
    margin: auto;
  }
  > input {
    display: block;
    width: 77px;
    height: 20px;
    margin: auto;
  }
`;
const SJdetail = styled.div`
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
const SJdetailButton = styled.div`
  width: 77px;
  margin: auto;
  text-align: center;
`;
const SJinputR = styled.div`
  width: 65%;
  height: 40px;
  display: flex;
  align-items: center;
`;
const SJButtonWrapper = styled.footer`
  margin: 0 3%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export {
  SJHeader,
  SJTitle,
  SJButton,
  SJinput,
  SJdetail,
  SJdetailButton,
  SJinputR,
  SJButtonWrapper,
};
