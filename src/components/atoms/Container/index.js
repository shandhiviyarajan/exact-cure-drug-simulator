import React from 'react';
import PropTypes from 'prop-types';
import { ContainerElement } from './Container.styles';

const Container = ({ children, className }) => {
  return (
    <ContainerElement className={className}>
      {children}
    </ContainerElement>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};
export default Container;
