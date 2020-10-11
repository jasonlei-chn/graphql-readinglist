import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";

const displayBooks = (loading, error, data) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>`Error! ${error.message}`</p>;
  }
  return data.books.map((book) => {
    return <li key={book.id}>{book.name}</li>;
  });
};

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  return (
    <div>
      <ul id="book-list">{displayBooks(loading, error, data)}</ul>
    </div>
  );
}

export default BookList;
