import React from 'react';
import PropTypes from 'prop-types';
import { FormElement } from './Form.styles';

const Form = ({ children, className, onSubmit }) => {
  return (
    <FormElement
      onSubmit={onSubmit}
      className={className}>
      {children}
    </FormElement>
  );
};

Form.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func
}
export default Form;

