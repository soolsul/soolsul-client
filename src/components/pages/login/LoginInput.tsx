import { TextInput } from '@components/Input'
import React, { useState } from 'react'
import styled from 'styled-components'

interface IInputProps {
  id: 'email' | 'password'
  title: string
  placeHolderText: string
}

function LoginInput({ id, title, placeHolderText }: IInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Wrapper>
      <div>{title}</div>
      <Input
        id={'search' + id}
        value={inputValue}
        onChange={handleChangeInputValue}
        placeholder={placeHolderText}
        alt={'입력창'}
      />
    </Wrapper>
  )
}

export default LoginInput

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
`

const Input = styled(TextInput)`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0px;
  text-align: start;
`
