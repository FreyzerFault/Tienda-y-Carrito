import { Product } from '../model/product'
import { RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function ProductCartCard({ children }: { children: Product }) {
  const product = children

  const { removeFromCart, getQuantity } = useCart()

  return (
    <div className='product' key={product.id}>
      <img
        className='product-thumbnail'
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className='product-name'>
        <strong>{product.title}</strong> {product.price}€
      </h3>
      <p>Cantidad: {getQuantity(product)}</p>
      <button className='remove-button' onClick={() => removeFromCart(product)}>
        <RemoveFromCartIcon />
      </button>
    </div>
  )
}
