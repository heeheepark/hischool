import styled from "@emotion/styled";

const SchoolRecordFilterDiv = styled.div`
  text-align: start;
  select {
    border: 1px solid #bbb;
    border-radius: 3px;
    width: 4.5vw;
    height: 24px;
    text-align: center;
    :not(:last-of-type) {
      margin-right: 5px;
    }
  }
`;

export { SchoolRecordFilterDiv };
