import '../styles/Products.css'
import { Product } from '../model/product'
import { AddToCartIcon } from './Icons'

type ProductsProps = {
  products: Product[]
}

export function Products(props: ProductsProps) {
  return (
    <main className='products'>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <img
              className='product-thumbnail'
              src={product.thumbnail}
              alt={product.title}
            />
            <h3 className='product-name'>
              <strong>{product.title}</strong> - {product.price}
            </h3>
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
