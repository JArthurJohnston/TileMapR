import React from 'react'
import Input from './Input'

export default function NumberInput(props) {
  const {allowNegatives, } = props

  const isNumber = val => {
    const newVal = +val // unary plus operator converts values to a number
    if(!allowNegatives && newVal < 0){
      return 0
    }
    return newVal
  }


  return(
    <Input {...props} type='number' validate={isNumber}/>
  )
}