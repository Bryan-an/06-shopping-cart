import { useState, useId } from 'react';
import { useFiltersStore } from '../hooks';
import './Filters.css';

interface Props {}

export function Filters({}: Props) {
  const {
    setFilters,
    filters: { minPrice, category }
  } = useFiltersStore();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
    setFilters((prevState) => ({ ...prevState, minPrice: value }));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let value = event.target.value;
    setFilters((prevState) => ({ ...prevState, category: value }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>From price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>$ {minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          value={category}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
