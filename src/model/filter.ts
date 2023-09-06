import { ProductCategory } from './product'

export const MIN_PRICE = 0
export const MAX_PRICE = 2000

export type Filter = {
  category: ProductCategory
  minPrice: number
  maxPrice: number
}

export const defaultFilter: Filter = {
  category: ProductCategory.Todos,
  minPrice: 0,
  maxPrice: MAX_PRICE,
}
