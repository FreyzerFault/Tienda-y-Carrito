import { ProductCategory } from '../model/product'
import { MAX_PRICE, MIN_PRICE } from '../model/filter'

import '../styles/Filters.css'
import { Selector } from './Selector'
import { RangeDoubleSelector } from './RangeMinMaxSelector'
import { useFilter } from '../hooks/useFilter'

export function Filters() {
  const { filter, setCategory, setMinPrice, setMaxPrice } = useFilter()

  return (
    <section className='filters'>
      <Selector
        className='filter-category'
        displayLabel='Categoría'
        selectableValues={Object.entries(ProductCategory)}
        value={filter.category}
        onChangeFunc={(value) => setCategory(value as ProductCategory)}
      />
      <RangeDoubleSelector
        className='filter-price'
        min={filter.minPrice}
        max={filter.maxPrice}
        rangeMin={MIN_PRICE}
        rangeMax={MAX_PRICE}
        onChangeMin={setMinPrice}
        onChangeMax={setMaxPrice}
        displayLabel='Precio'
        displayUnit='€'
      />
    </section>
  )
}
