import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

function DiaplayAuthors() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  console.log(data);
  if (loading) {
    return <option>Loading Authors...</option>;
  }
  if (error) {
    return <option>`Error! ${error.message}`</option>;
  }

  return data.authors.map((author) => {
    return (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    );
  });
}

export default DiaplayAuthors;
