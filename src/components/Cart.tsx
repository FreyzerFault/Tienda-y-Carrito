import { useId } from 'react'

// COMPONENTS
import { CartIcon, ClearCartIcon } from './Icons'
import { DataList } from './DataList'

// STYLES
import '../styles/Cart.css'
import { useCart } from '../hooks/useCart'
import { ProductCartCard } from './ProductCartCard'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <DataList ComponentTemplate={ProductCartCard}>
          {cart.map(({ product }) => product)}
        </DataList>

        <button className='clear-cart-button' onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
