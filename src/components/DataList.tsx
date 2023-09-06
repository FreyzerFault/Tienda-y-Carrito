import React from 'react'

interface DataListProps<T> {
  children: T[]
  ComponentTemplate: React.ElementType
}

// Muestra una lista de elementos
// REQUISITOS
// Cada elemento DEBE tener una propiedad [id]!!!!
// El Component debe tener un argumento [data]
export function DataList<T>({ ComponentTemplate, children }: DataListProps<T>) {
  if (children === null) return

  return (
    <>
      {Array.isArray(children) && children?.length > 0 ? (
        <>
          {children.map((child, index) => {
            return <ComponentTemplate key={index}>{child}</ComponentTemplate>
          })}
        </>
      ) : Array.isArray(children) && children.length === 0 ? (
        // Cuando la lista esté vacía
        <p className='no-results'>No hay resultados...</p>
      ) : (
        <></>
      )}
    </>
  )
}
