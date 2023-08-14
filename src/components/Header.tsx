// COMPONENTS
import { FilterSelector } from './FilterSelector'

import { Filter } from '../model/filter'
import { ProductCategory } from '../model/product'

import '../styles/Header.css'

interface HeaderProps {
  filter: Filter
  setCategory: (category: ProductCategory) => void
  setMinPrice: (minPrice: number) => void
  setMaxPrice: (maxPrice: number) => void
}

export function Header(props: HeaderProps) {
  const { filter, setCategory, setMinPrice, setMaxPrice } = props

  return (
    <>
      <h1 className='title'>ENNOVE SHOP 🛒</h1>
      <FilterSelector
        filter={filter}
        onChangeCategory={setCategory}
        onChangeMinPrice={setMinPrice}
        onChangeMaxPrice={setMaxPrice}
      />
    </>
  )
}
