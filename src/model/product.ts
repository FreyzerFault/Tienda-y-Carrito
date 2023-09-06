import { Filter } from './filter'

export enum ProductCategory {
  Todos = 'any',
  Hogar = 'home-decoration',
  Portatiles = 'laptops',
  Móviles = 'smartphones',
  Perfumes = 'fragrances',
  Cosméticos = 'skincare',
  Alimentación = 'groceries',
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
  quantity: number
}

export function filterProducts(products: Product[], filter: Filter): Product[] {
  return products.filter((product) => {
    return (
      product.price >= filter.minPrice &&
      product.price <= filter.maxPrice &&
      (filter.category === ProductCategory.Todos ||
        product.category === filter.category)
    )
  })
}
