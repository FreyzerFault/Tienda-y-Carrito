import { useState, useCallback } from 'react'

// MODEL
import { ProductCategory } from '../model/product'
import { Filter, defaultFilter } from '../model/filter'

interface useFilterProps {
  initialFilter?: Filter
}

export function useFilter({ initialFilter = defaultFilter }: useFilterProps) {
  const [filter, setFilter] = useState<Filter>(initialFilter)

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
