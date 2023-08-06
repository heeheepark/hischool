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
    width: 4.5vw;
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

const ISRinput = styled.div`
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
    width: 8vw;
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
    width: 8vw;
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
};

// 기존 코드
// const ISRHeader = styled.div`
//   margin: 0 3%;
//   width: calc(100%-30px);
//   height: 80px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 4px;
//   font-size: 20px;
// `;
// const ISRButton = styled.div`
//   margin: 0 3%;
//   height: 40px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
//   gap: 4px;
// `;
// const ISRTitle = styled.div`
//   margin: 10px auto;
//   width: 94%;
//   height: 40px;
//   display: flex;
//   color: #fff;
//   justify-content: space-between;
//   align-items: center;
//   background: #176b87;
//   border: 1px solid #bbb;
//   border-radius: 15px;
//   box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
//   > p {
//     width: 120px;
//     font-size: 20px;
//     margin: auto;
//     text-align: center;
//     font-weight: 600;
//   }
//   > strong {
//     width: 77px;
//     font-size: 20px;
//     margin: auto;
//     text-align: center;
//   }
// `;
// const ISRinput = styled.div`
//   margin: 10px auto;
//   width: 94%;
//   height: 40px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fff;
//   border: 1px solid #bbb;
//   border-radius: 15px;
//   box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
//   > select {
//     width: 120px;
//     display: block;
//     height: 20px;
//     margin: auto;
//   }
//   > input {
//     display: block;
//     width: 77px;
//     height: 20px;
//     margin: auto;
//   }
// `;
// const ISRdetail = styled.div`
//   margin: 10px auto;
//   width: 94%;
//   height: 40px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fff;
//   border: 1px solid #afafaf;
//   border-radius: 15px;
//   > p {
//     width: 77px;
//     font-size: 20px;
//     margin: auto;
//     text-align: center;
//   }
// `;
// const ISRdetailButton = styled.div`
//   width: 77px;
//   margin: auto;
//   text-align: center;
// `;
// const ISRinputR = styled.div`
//   width: 65%;
//   height: 40px;
//   display: flex;
//   align-items: center;
// `;
// const ISRButtonWrapper = styled.footer`
//   margin: 0 3%;
//   height: 40px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
// `;

// export {
//   ISRHeader,
//   ISRTitle,
//   ISRButton,
//   ISRinput,
//   ISRdetail,
//   ISRdetailButton,
//   ISRinputR,
//   ISRButtonWrapper,
// };
