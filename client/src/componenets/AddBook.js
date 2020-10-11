import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading, error, data } = useQuery(GET_AUTHORS);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);
  };
  
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors(loading, error, data)}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBooks;
