import React from 'react'

export default function Input(props) {
  const { label, onChange, validate } = props
  const [val, setVal] = React.useState(props.value)

  const handleChange = e => {
    const newVal = validate(e.target.value)
    setVal(newVal)
    onChange(newVal)
  }

  return (
    <div>
      <label>{label}</label>
      <input {...props} className='nes-input' onChange={handleChange} value={val} />
    </div>
  )
}

Input.defaultProps = {
  validate: v => v,
  onChange: () => { }
}
