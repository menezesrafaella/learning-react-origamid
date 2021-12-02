import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
      <Input label="Email" id="email" required/>
      <Input label="Senha" id="password" type="password"/>
      <Button/>
    </div>
  )
}

export default Form
