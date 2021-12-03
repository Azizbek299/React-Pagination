import React from "react";

export default function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination__ul">
        {pageNumbers.map((number) => {
          return (
            <li className="pagination__li" key={number}>
              <span onClick={() => props.paginate(number)}>{number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
