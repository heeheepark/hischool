import React from "react";
import Pagination from "react-js-pagination";
import { PaginationContainer } from "../../styles/notice/NoticeStyle";

const NoticePaging = ({ page, setPage, totalpage, itemsPerPage }) => {
  return (
    <PaginationContainer>
      <Pagination
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalpage}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage}
      />
    </PaginationContainer>
  );
};

export default NoticePaging;
