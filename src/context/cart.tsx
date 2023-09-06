import { ReactNode, createContext, useReducer } from 'react'
import { Product } from '../model/product'

type Cart = { product: Product; quantity: number }[]

enum CartActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR = 'CLEAR',
}

interface CartAction {
  type: CartActionType
  payload?: Product
}

type Reducer<S, A> = (prevState: S, action: A) => S

const reducer: Reducer<Cart, CartAction> = (
  state: Cart,
  action: CartAction
) => {
  const { type, payload } = action
  const { id = 0 } = payload ? payload : {}
  const productIndex = state.findIndex(({ product }) => id === product.id)
  const newCart = structuredClone(state)
  const quantity = state[productIndex]?.quantity
  switch (type) {
    case 'ADD_PRODUCT':
      // Añade 1
      if (productIndex >= 0) newCart[productIndex].quantity++
      // Añade el producto con cantidad = 1
      else newCart.push({ product: payload as Product, quantity: 1 })

      return newCart
    case 'REMOVE_PRODUCT':
      if (!state[productIndex]) return state

      // Hay mas de uno
      if (quantity > 1) newCart[productIndex].quantity--
      // Hay 1
      else newCart.splice(productIndex, 1)
      return newCart
    case 'CLEAR':
      return []
  }
  return state
}

interface CartContextProps {
  cart: Cart
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  clearCart: () => void
}

const cartContextDefaultProps: CartContextProps = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
}

export const CartContext = createContext(cartContextDefaultProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('cart')!)
  )

  const addToCart = (product: Product) =>
    dispatch({ type: CartActionType.ADD_PRODUCT, payload: product })

  const removeFromCart = (product: Product) =>
    dispatch({ type: CartActionType.REMOVE_PRODUCT, payload: product })

  const clearCart = () => dispatch({ type: CartActionType.CLEAR })

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
