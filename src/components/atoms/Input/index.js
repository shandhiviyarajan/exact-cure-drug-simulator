import React from 'react';
import { InputElement } from './InputElement';

const Input = ({className, name, type, placeholder, list, onChange, onKeyUp, value, required}) => {
  return (
    <InputElement 
    name={name}
    onChange={onChange} 
    list={list} 
    placeholder={placeholder} 
    className={className} 
    onKeyUp={onKeyUp}
    value={value}
    type={type}
    required = {required}
    />
  );
};
export default Input;
