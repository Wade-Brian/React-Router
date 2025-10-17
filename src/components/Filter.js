import React from 'react';

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prev) => ({ ...prev, rating: Number(e.target.value) }));
  };

  return (
    <div className="filter">
      <input type="text" placeholder="Search by title" onChange={handleTitleChange} />
      <input type="number" placeholder="Min rating (0-5)" onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;
