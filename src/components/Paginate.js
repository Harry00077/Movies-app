import React from "react";
import { Pagination } from "react-bootstrap";

function Paginate({
  noOfMovies,
  noOfMoviesPerPage,
  presentPage,
  handlePaginate,
}) {
  const pages = new Array(Math.ceil(noOfMovies / noOfMoviesPerPage)).fill(0);
  return (
    <Pagination>
      {pages.map((_value, index) => {
        const number = index + 1;
        return(
        <Pagination.Item
          key={number}
          active={number === presentPage}
          onClick={() => handlePaginate(number)}
        >
          {number}
        </Pagination.Item>
        )
    })}
    </Pagination>
  );
}

export default Paginate;