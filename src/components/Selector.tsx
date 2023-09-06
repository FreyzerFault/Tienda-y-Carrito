import { useId } from 'react'
import '../styles/Selector.css'

type SelectorProps = {
  className: string
  displayLabel: string
  selectableValues: [string, string][]
  value: string
  onChangeFunc: (value: string) => void
}

export function Selector(props: SelectorProps) {
  const { className, displayLabel, selectableValues, value, onChangeFunc } =
    props

  const selectorId = useId()

  return (
    <div className={`selector ${className}`}>
      <label htmlFor={selectorId}>{displayLabel}</label>
      <select
        id={selectorId}
        onChange={(e) => onChangeFunc(e.target.value)}
        value={value}
      >
        {selectableValues.map(([label, value], index) => {
          return (
            <option key={index} value={value}>
              {label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
