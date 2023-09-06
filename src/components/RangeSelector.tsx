type RangeSelectorProps = {
  id: string
  min: number
  max: number
  value: number
  onChangeValue: (value: number) => void
}

export function RangeSelector(props: RangeSelectorProps) {
  const { id, min, max, value, onChangeValue } = props

  return (
    <input
      type='range'
      id={id}
      min={min}
      max={max}
      value={value}
      onChange={(e) => {
        const newValue = parseInt(e.target.value)
        onChangeValue(newValue)
      }}
    />
  )
}
