import { RangeSelector } from './RangeSelector'
import '../styles/RangeSelector.css'
import { useId } from 'react'

type RangeDoubleSelectorProps = {
  className: string
  displayLabel: string
  displayUnit: string
  rangeMax: number
  rangeMin: number
  max: number
  min: number
  onChangeMin: (min: number) => void
  onChangeMax: (max: number) => void
}

export function RangeDoubleSelector(props: RangeDoubleSelectorProps) {
  const {
    className,
    displayLabel,
    displayUnit,
    rangeMax,
    rangeMin,
    max,
    min,
    onChangeMax,
    onChangeMin,
  } = props

  const minId = useId()
  const maxId = useId()

  return (
    <div className={`range-double-selector ${className}`}>
      <label>{displayLabel}</label>
      <RangeSelector
        id={minId}
        min={rangeMin}
        max={rangeMax}
        value={min}
        onChangeValue={(newMin) => {
          if (newMin <= max) onChangeMin(newMin)
        }}
      />

      <div className='range-label'>
        <span>{'['}</span>
        <label htmlFor={minId}>{min}</label>
        <span> - </span>
        <label htmlFor={maxId}>{max}</label>
        <span>{`] ${displayUnit}`}</span>
      </div>

      <RangeSelector
        id={maxId}
        min={rangeMin}
        max={rangeMax}
        value={max}
        onChangeValue={(newMax) => {
          if (newMax >= min) onChangeMax(newMax)
        }}
      />
    </div>
  )
}
