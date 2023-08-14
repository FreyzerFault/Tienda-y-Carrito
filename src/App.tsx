import { useState, useCallback } from 'react'

// COMPONENTS
import { Products } from './components/Products'
import { FilterSelector } from './components/FilterSelector'

// MODEL
import { ProductCategory, filterProducts } from './model/product'
import { Filter, defaultFilter } from './model/filter'

// SERVICE
import { getProducts } from './services/products'

function App() {
  const [products] = useState(getProducts())
  const [filter, setFilter] = useState<Filter>(defaultFilter)

  const setCategory = useCallback<(category: ProductCategory) => void>(
    (category) => {
      setFilter({
        category,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
      })
    },
    [filter]
  )

  const setMinPrice = useCallback<(minPrice: number) => void>(
    (minPrice) => {
      setFilter({
        category: filter.category,
        minPrice,
        maxPrice: filter.maxPrice,
      })
    },
    [filter]
  )
  const setMaxPrice = useCallback<(maxPrice: number) => void>(
    (maxPrice) => {
      setFilter({
        category: filter.category,
        minPrice: filter.minPrice,
        maxPrice,
      })
    },
    [filter]
  )

  return (
    <>
      <h1 className='cart-title'>Shopping Cart 🛒</h1>
      <FilterSelector
        filter={filter}
        onChangeCategory={setCategory}
        onChangeMinPrice={setMinPrice}
        onChangeMaxPrice={setMaxPrice}
      />
      <Products products={filterProducts(products, filter)} />
    </>
  )
}

export default App
