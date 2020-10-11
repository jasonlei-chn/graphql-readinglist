import React from "react";
import DiaplayAuthors from './DiaplayAuthors';

function AddBooks() {
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
          <DiaplayAuthors />
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBooks;
