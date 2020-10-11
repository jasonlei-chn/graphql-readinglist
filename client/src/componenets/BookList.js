import React from "react";
import BooksQuery from "./BooksQuery";

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <BooksQuery />
      </ul>
    </div>
  );
}

export default BookList;
