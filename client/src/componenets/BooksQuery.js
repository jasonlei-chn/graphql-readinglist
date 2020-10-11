import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

function BooksQuery() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>`Error! ${error.message}`</p>;
  }

  return data.books.map((book) => {
    return <li key={book.id}>{book.name}</li>;
  });
}

export default BooksQuery;
