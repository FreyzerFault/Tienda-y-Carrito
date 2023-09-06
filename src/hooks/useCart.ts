import { useContext, useEffect } from 'react'
import { CartContext } from '../context/cart'
import { Product } from '../model/product'

export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined)
    throw new Error('useCart must be used within a CartProvider')

  const { cart, addToCart, removeFromCart, clearCart } = context

  function isInCart(product: Product) {
    return cart.some(({ product: _product }) => product.id === _product.id)
  }

  function getQuantity(product: Product) {
    const productCartEntry = cart.find(
      ({ product: _product, quantity }) =>
        product.id === _product.id && quantity > 0
    )
    if (productCartEntry === undefined) return 0
    return productCartEntry.quantity
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return { cart, addToCart, clearCart, getQuantity, isInCart, removeFromCart }
}
