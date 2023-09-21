import { Product } from '../model/product'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function ProductCard({ children }: { children: Product }) {
  const product = children

  const { addToCart } = useCart()

  return (
    <div className='product' key={product.id}>
      <img
        className='product-thumbnail'
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className='product-name'>
        <strong>{product.title}</strong>
        {product.price}€
      </h3>
      <button className='add-button' onClick={() => addToCart(product)}>
        <AddToCartIcon />
      </button>
    </div>
  )
}
