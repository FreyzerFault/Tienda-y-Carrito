// HOOKS
import { useMemo, useState } from 'react'
import { useFilter } from './hooks/useFilter'

// COMPONENTS
import { Products } from './components/Products'
import { Footer } from './components/Footer'

// MODEL
import { filterProducts } from './model/product'

// SERVICE
import { getProducts } from './services/products'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const [products] = useState(getProducts())
  const { filter } = useFilter()

  const filteredProducts = useMemo(
    () => filterProducts(products, filter),
    [products, filter]
  )

  return (
    <>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
      </CartProvider>
      <Footer
        title='Prueba técnica de React ⚛️'
        subtitle='Shopping Cart con useContext & useReducer'
        debugInfo={filter}
      />
    </>
  )
}

export default App
