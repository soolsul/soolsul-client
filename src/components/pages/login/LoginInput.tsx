import React, { useState } from 'react';
import styled from 'styled-components';

interface IInputProps {
  id: 'email' | 'password' | 'confirmPassword' | 'phoneNumber' | 'name' | 'nickname';
  title: string;
  placeHolderText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  invalidText: string;
  errorPart: string;
}

function LoginInput({ id, title, placeHolderText, onChange, value, invalidText, errorPart }: IInputProps) {
  console.log(invalidText);
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeHolderText}
        alt={'입력창'}
        type={id.includes('password') || id.includes('confirmPassword') ? 'password' : ''}
      />
      <p>{id === errorPart ? invalidText : null}</p>
    </Wrapper>
  );
}

export default LoginInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin: 5px;

  .title {
    margin-bottom: 7px;
    font-size: 14px;
  }
  p {
    color: tomato;
    font-size: 11px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 0px;
  text-align: start;
  padding: 5px 5px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;
