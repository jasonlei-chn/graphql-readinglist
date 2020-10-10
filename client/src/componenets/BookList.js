import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBookQuery = gql`
  {
    books {
      name
      genere
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBookQuery);
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Ops! Something went wrong!</p>;
  }
  return (
    <div>
      <h1>All good! got the data!!</h1>
    </div>
  );
}

export default BookList;
