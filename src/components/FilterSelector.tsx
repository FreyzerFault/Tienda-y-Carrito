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
      <div className='filter-category'>
        <label htmlFor='category'>Categoría</label>
        <select
          id='category'
          name='category'
          onChange={(e) => onChangeCategory(e.target.value as ProductCategory)}
          value={filter.category}
        >
          {Object.entries(ProductCategory).map(
            ([key, value]: [string, ProductCategory]) => {
              return (
                <option key={key} value={value}>
                  {key}
                </option>
              )
            }
          )}
        </select>
      </div>

      <div className='filter-price'>
        <input
          type='range'
          id='min-price'
          max={MAX_PRICE}
          value={filter.minPrice}
          onChange={(e) => {
            const newMin = parseInt(e.target.value)
            if (newMin <= filter.maxPrice) onChangeMinPrice(newMin)
          }}
        />
        <div className='price-label'>
          <label htmlFor='min-price'>
            {'['}
            {filter.minPrice}
          </label>
          <span> - </span>{' '}
          <label htmlFor='max-price'>
            {filter.maxPrice}
            {']'} €
          </label>
        </div>
        <input
          type='range'
          id='max-price'
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
