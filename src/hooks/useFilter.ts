import { useCallback, useContext } from 'react'

// MODEL
import { ProductCategory } from '../model/product'
import { FilterContext } from '../context/filter'

export function useFilter() {
  // const [filter, setFilter] = useState<Filter>(initialFilter)
  const { filter, setFilter } = useContext(FilterContext)

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

  return { filter, setCategory, setMinPrice, setMaxPrice }
}
