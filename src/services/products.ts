import { Product } from '../model/product'
import ProductsMockData from '../mocks/products.json'

export function getProducts(): Product[] {
  return ProductsMockData.products as Product[]
}
