import { ProductCategory } from '../model/product'
import { Filter, defaultFilter, MAX_PRICE } from '../model/filter'

import '../styles/FilterSelector.css'

interface FilterSelectorProps {
  filter?: Filter
  onChangeCategory: (category: ProductCategory) => void
  onChangeMinPrice: (minPrice: number) => void
  onChangeMaxPrice: (minPrice: number) => void
}

export function FilterSelector({
  filter = defaultFilter,
  onChangeCategory,
  onChangeMinPrice,
  onChangeMaxPrice,
}: FilterSelectorProps) {
  return (
    <section className='filters'>
      <select
        className='filter-category'
        name='category'
        onChange={(e) => onChangeCategory(e.target.value as ProductCategory)}
        value={filter.category}
      >
        {Object.values(ProductCategory).map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          )
        })}
      </select>

      <div className='filter-price'>
        <input
          type='range'
          max={MAX_PRICE}
          value={filter.minPrice}
          onChange={(e) => {
            const newMin = parseInt(e.target.value)
            if (newMin <= filter.maxPrice) onChangeMinPrice(newMin)
          }}
        />
        <label>
          {filter.minPrice} - {filter.maxPrice}
        </label>
        <input
          type='range'
          max={MAX_PRICE}
          value={filter.maxPrice}
          onChange={(e) => {
            const newMax = parseInt(e.target.value)
            if (newMax >= filter.minPrice) onChangeMaxPrice(newMax)
          }}
        />
      </div>
    </section>
  )
}
