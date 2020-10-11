import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../queries/queries";

const displayAuthors = (loading, error, data) => {
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
};

function AddBooks() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors(loading, error, data)}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBooks;
