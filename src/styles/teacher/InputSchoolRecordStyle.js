import styled from "@emotion/styled";

const InputSchoolRecordWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const InputMockRecordWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 30px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const ISRHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  h3 {
    font-size: 30px;
    margin-right: 10px;
  }
  select {
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 7vw;
    height: 25px;
    text-align: center;
  }
`;

const ISRButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  margin-bottom: 10px;
  > a {
    button {
      width: 120px;
      height: 27px;
      color: #fff;
      background: #64ccc5;
      border: 1px solid #64cbb2;
      border-radius: 3px;
      line-height: 1;
      cursor: pointer;
    }
  }
  > button {
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

const ISRTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  > strong {
    text-align: center;
    font-weight: 400;
  }
`;
const ISTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  > strong {
    text-align: center;
    font-weight: 400;
  }
`;

const ISRinput = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 18px;
  margin-bottom: 10px;
  > select {
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 10vw;
    height: 25px;
    text-align: center;
  }
  > input {
    margin: 0 auto;
    text-align: center;
    width: 7vw;
    border: 1px solid #bbb;
    border-radius: 3px;
    height: 25px;
    text-align: center;
  }
`;
const ISinput = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 18px;
  margin-bottom: 10px;
  > select {
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 7vw;
    height: 25px;
    text-align: center;
  }
  > input {
    margin: 0 auto;
    text-align: center;
    width: 7vw;
    border: 1px solid #bbb;
    border-radius: 3px;
    height: 25px;
    text-align: center;
  }
`;
const ISainput = styled.div`
  margin: auto;
  height: 25px;
  > span {
    color: #000;
    font-size: 15px;
  }
  > input {
    margin: 0 auto;
    text-align: center;
    width: 77px;
    border: 1px solid #bbb;
    border-radius: 3px;
    height: 25px;
  }
`;
const ISJinput = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  > select {
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 20vw;
    height: 25px;
    text-align: center;
  }
`;

const ISRButtonWrapper = styled.footer`
  width: 100%;
  height: 40px;
  text-align: end;
  button {
    width: 90px;
    height: 27px;
    color: #222;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 3px;
    line-height: 1;
    cursor: pointer;
    .icon {
      margin-left: 5px;
    }
  }
`;

const IMRTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  > strong {
    text-align: center;
    font-weight: 400;
  }
`;
const IMREditTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  > strong {
    text-align: center;
    font-weight: 400;
  }
`;

const IMRinput = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  > select {
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 9vw;
    height: 25px;
    text-align: center;
  }
  > input {
    margin: 0 auto;
    text-align: center;
    width: 77px;
    border: 1px solid #bbb;
    border-radius: 3px;
    height: 25px;
    text-align: center;
    :nth-of-type(3) {
      width: 85px;
    }
    :nth-of-type(4) {
      width: 90px;
    }
  }
`;
const IMREdit = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 10px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  > select {
    margin: 0 auto;
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 9vw;
    height: 25px;
    text-align: center;
  }
  > input {
    margin: 0 auto;
    text-align: center;
    width: 77px;
    border: 1px solid #bbb;
    border-radius: 3px;
    height: 25px;
    text-align: center;
    :nth-of-type(3) {
      width: 85px;
    }
    :nth-of-type(4) {
      width: 90px;
    }
  }
`;

export {
  InputSchoolRecordWrap,
  InputMockRecordWrap,
  ISRHeader,
  ISRTitle,
  ISRButton,
  ISRinput,
  ISRButtonWrapper,
  IMRTitle,
  IMRinput,
  ISJinput,
  ISainput,
  IMREdit,
  IMREditTitle,
  ISTitle,
  ISinput,
};
