import React from 'react'

export default function Button({ label, onClick, disabled }) {
  return (
    <button
      className={`nes-btn${disabled ? ' is-disabled' : ''}`}
      onClick={onClick}
    >{label}
    </button>
  )
}