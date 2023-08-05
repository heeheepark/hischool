import styled from "@emotion/styled";

export const MypageDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 60px 300px;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  h3 {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const TcMyPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  .mypage-top {
    display: flex;
    justify-content: space-between;
    .user-info {
      width: 100%;
      height: 100%;
      .user-info-wrap {
        display: flex;
        justify-content: space-between;
        .user-picture-wrap {
          display: flex;
          flex-flow: column;
          align-items: start;
          margin-right: 20px;
          .picture-img {
            width: 300px;
            height: 300px;
            border: 1px solid gray;
            background: gray;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

export const TcMyPageUserInfo = styled.ul`
  width: 100%;
  font-size: 21px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    label {
      display: inline-block;
      width: 150px;
    }
    input {
      width: 21vw;
      height: 35px;
      border: 1px solid #bbb;
      border-radius: 3px;
      padding-left: 10px;
      margin-right: 5px;
      font-size: 18px;
    }
    :nth-of-type(7) {
      align-items: start;
      .address-wrap {
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        gap: 10px;
        > div {
          display: flex;
          align-items: center;
          button {
            width: 80px;
            height: 35px;
            font-size: 15px;
            color: #333;
            border: 1px solid #bbb;
            border-radius: 3px;
            background: #ccc;
            cursor: pointer;
          }
        }
      }
    }
    :nth-of-type(8) {
      display: flex;
      align-items: start;
      > div {
        > div {
          margin-top: 10px;
          input {
            width: 10.35vw;
          }
        }
      }
    }
  }
`;

export const TcMyPageSchoolInfo = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  font-size: 21px;
  font-weight: 500;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    label {
      display: inline-block;
      width: 100px;
    }
    input {
      width: 12vw;
      height: 35px;
      border: 1px solid #bbb;
      border-radius: 3px;
      padding-left: 10px;
      margin-right: 5px;
      font-size: 18px;
    }
  }
`;

export const TcMyPageRightInfo = styled.div`
  margin-right: 30%;
  font-size: 20px;
  font-weight: 800;
  li {
    padding-bottom: 10px;
    input {
      display: block;
      border-radius: 20px;
      font-size: 18px;
      height: 30px;
      width: 300px;
      padding: 0 10px;
      margin: 5px 0;
    }
  }
`;

export const TcButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 80px;
    height: 35px;
    font-size: 15px;
    color: #fff;
    border: none;
    border-radius: 3px;
    background: #64ccc5;
    cursor: pointer;
  }
  div {
    button {
      :first-of-type {
        margin-right: 10px;
        background: #176b87;
        border: none;
        color: #fff;
      }
      :last-of-type {
        border: 1px solid #ccc;
        color: #000;
        background: #fff;
      }
    }
  }
`;

// 기존 코드

// export const TcMyPageWrap = styled.div`
//   padding: 5% 5% 0 5%;
//   list-style: none;
//   > div {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     gap: 40px;
//     .TcMypagePic {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 200px;
//       height: 200px;
//       border: 1px solid yellow;
//       background: crimson;
//       input {
//       }
//     }
//   }
// `;

// export const TcMyPageTopInfo = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   vertical-align: middle;
//   gap: 10px;
//   font-size: 20px;
//   font-weight: 800;
//   li {
//     gap: 15px;
//     display: flex;
//     justify-content: space-between;
//     input {
//       border-radius: 20px;
//       font-size: 18px;
//       height: 30px;
//       width: 300px;
//       padding: 0 10px;
//     }
//   }
// `;

// export const TcMyPageDownInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 5%;
// `;

// export const TcMyPageLeftInfo = styled.div`
//   gap: 10px;
//   font-size: 20px;
//   font-weight: 800;
//   ul {
//     li {
//       input {
//         display: block;
//         border-radius: 20px;
//         font-size: 18px;
//         height: 30px;
//         width: 300px;
//         padding: 0 10px;
//         margin: 5px 0;
//       }
//     }
//     .grade-van {
//       display: flex;
//       justify-content: space-between;
//       div {
//         input {
//           font-size: 20px;
//           width: 100px;
//           height: 30px;
//           padding-left: 25%;
//           padding-right: 25%;
//           border-radius: 20px;
//           margin: 5px 0;
//         }
//       }
//     }
//   }
// `;
// export const TcMyPageRightInfo = styled.div`
//   margin-right: 30%;
//   font-size: 20px;
//   font-weight: 800;
//   li {
//     padding-bottom: 10px;
//     input {
//       display: block;
//       border-radius: 20px;
//       font-size: 18px;
//       height: 30px;
//       width: 300px;
//       padding: 0 10px;
//       margin: 5px 0;
//     }
//   }
// `;

// export const TcButtons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 12%;
//   padding-right: 10%;
//   button {
//     width: 80px;
//     height: 28px;
//     font-size: 16px;
//     font-weight: 600;
//     border: none;
//     border-radius: 5px;
//     background: #176b87;
//     color: #fff;
//     cursor: pointer;
//   }
//   div {
//     display: flex;
//     gap: 15px;
//   }
// `;
