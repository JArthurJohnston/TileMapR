import React from 'react'

export default function Checkbox({ label, onChange, startingVal }) {
  const [isChecked, setIsChecked] = React.useState(startingVal || false)

  const toggle = () => {
    const newVal = !isChecked
    setIsChecked(newVal)
    onChange(newVal)
  }

  return (
    <label>
      <input type="checkbox" className="nes-checkbox" checked={isChecked} onChange={toggle} />
      <span>{label}</span>
    </label>
  )
}