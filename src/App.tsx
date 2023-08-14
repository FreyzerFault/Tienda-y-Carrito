// HOOKS
import { useState } from 'react'
import { useFilter } from './hooks/useFilter'

// COMPONENTS
import { Products } from './components/Products'

// MODEL
import { filterProducts } from './model/product'

// SERVICE
import { getProducts } from './services/products'
import { Header } from './components/Header'

function App() {
  const [products] = useState(getProducts())
  const { filter, setCategory, setMinPrice, setMaxPrice } = useFilter({})

  return (
    <>
      <Header
        filter={filter}
        setCategory={setCategory}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <Products products={filterProducts(products, filter)} />
    </>
  )
}

export default App
