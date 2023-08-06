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

// 기존 코드
// const SJHeader = styled.div`
//   margin: 0 3%;
//   width: calc(100%-30px);
//   height: 80px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 20px;
// `;
// const SJButton = styled.div`
//   height: 40px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
//   gap: 4px;
// `;
// const SJTitle = styled.div`
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
// const SJinput = styled.div`
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
// const SJdetail = styled.div`
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
// const SJdetailButton = styled.div`
//   width: 77px;
//   margin: auto;
//   text-align: center;
// `;
// const SJinputR = styled.div`
//   width: 65%;
//   height: 40px;
//   display: flex;
//   align-items: center;
// `;
// const SJButtonWrapper = styled.footer`
//   margin: 0 3%;
//   height: 40px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-end;
// `;

// export {
//   InputSubJectWrap,
//   SJHeader,
//   SJTitle,
//   SJButton,
//   SJinput,
//   SJdetail,
//   SJdetailButton,
//   SJinputR,
//   SJButtonWrapper,
// };
