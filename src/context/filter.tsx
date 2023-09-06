import { ReactNode, createContext, useState } from 'react'
import { Filter, defaultFilter } from '../model/filter'

type FilterContextProps = {
  filter: Filter
  setFilter: (filter: Filter) => void
}

// CONTEXTO GLOBAL del FILTRO
export const FilterContext = createContext<FilterContextProps>({
  filter: defaultFilter,
  setFilter: () => {},
})

// PROVIDER
export function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState(defaultFilter)
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
