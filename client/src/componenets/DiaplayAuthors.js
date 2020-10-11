import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../queries/queries";

function DiaplayAuthors() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  if (loading) {
    return <option disabled>Loading Authors...</option>;
  }
  if (error) {
    return <option disabled>Failed to load authors!</option>;
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
