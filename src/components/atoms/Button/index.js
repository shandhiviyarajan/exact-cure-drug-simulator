import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, children, className, onClick, disabled }) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default Button;