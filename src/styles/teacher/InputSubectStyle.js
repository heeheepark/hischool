import styled from "@emotion/styled";

const InputSubJectWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const SJHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 15px;
  h3 {
    font-size: 30px;
    margin-right: 10px;
  }
`;

const SJButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  button {
    width: 50px;
    height: 27px;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    line-height: 1;
    cursor: pointer;
    :first-of-type {
      background: #176b87;
      border: 0;
      color: #fff;
    }
  }
`;

const SJTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 18px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  background: #176b87;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  > p {
    text-align: center;
  }
`;

export { InputSubJectWrap, SJHeader, SJButton, SJTitle };