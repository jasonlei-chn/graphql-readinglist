import React from "react";
import DisplayBooks from "./DisplayBooks";

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <DisplayBooks />
      </ul>
    </div>
  );
}

export default BookList;
