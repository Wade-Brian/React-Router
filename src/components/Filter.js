import React from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        style={{ padding: "8px", width: "120px" }}
      />
    </div>
  );
}

export default Filter;
