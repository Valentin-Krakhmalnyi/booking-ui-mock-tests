import React, { useState } from 'react';

const defaultFilters = {
  price: '',
  rating: '',
};

export const FilterPanel: React.FC = () => {
  const [filters, setFilters] = useState(defaultFilters);

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <div>
      <h3>Filters</h3>
      <button onClick={handleResetFilters}>Reset Filters</button>
      <div>
        <p>Price: {filters.price}</p>
        <p>Rating: {filters.rating}</p>
      </div>
    </div>
  );
};
