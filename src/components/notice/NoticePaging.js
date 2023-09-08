import React from "react";
import Pagination from "react-js-pagination";
import { PaginationContainer } from "../../styles/notice/NoticeStyle";

const NoticePaging = ({
  currentPage,
  setCurrentPage,
  totalCount,
  last4Important,
}) => {
  let itemsCount = 14 - Math.min(last4Important.length);

  return (
    <PaginationContainer>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsCount}
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
