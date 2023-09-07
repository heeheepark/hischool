import React from "react";
import Pagination from "react-js-pagination";
import { PaginationContainer } from "../../styles/notice/NoticeStyle";

const NoticePaging = ({ currentPage, setCurrentPage, totalCount }) => {
  return (
    <PaginationContainer>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={14}
        totalItemsCount={totalCount}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setCurrentPage}
      />
    </PaginationContainer>
  );
};

export default NoticePaging;
