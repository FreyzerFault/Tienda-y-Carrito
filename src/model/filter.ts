import { ProductCategory } from './product'

export const MAX_PRICE = 2000

export type Filter = {
  category: ProductCategory
  minPrice: number
  maxPrice: number
}

export const defaultFilter: Filter = {
  category: ProductCategory.Any,
  minPrice: 0,
  maxPrice: MAX_PRICE,
}
