// STYLES
import '../styles/Products.css'

// MODEL
import { Product } from '../model/product'

// COMPONENTS
import { DataList } from './DataList'
import { ProductCard } from './ProductCard'

type ProductsProps = {
  products: Product[]
}

export function Products({ products }: ProductsProps) {
  return (
    <section className='products'>
      <DataList<Product> ComponentTemplate={ProductCard}>{products}</DataList>
    </section>
  )
}
