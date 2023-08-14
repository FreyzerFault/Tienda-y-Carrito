import { Filter } from './filter'

export enum ProductCategory {
  Any = 'any',
  HomeDecoration = 'home-decoration',
  Laptops = 'laptops',
  Smartphones = 'smartphones',
  Fragrances = 'fragrances',
  Skincare = 'skincare',
  Groceries = 'groceries',
}

export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: ProductCategory
  thumbnail: string
  images: string[]
}

export function filterProducts(products: Product[], filter: Filter): Product[] {
  return products.filter((product) => {
    return (
      product.price >= filter.minPrice &&
      product.price <= filter.maxPrice &&
      (filter.category === ProductCategory.Any ||
        product.category === filter.category)
    )
  })
}
