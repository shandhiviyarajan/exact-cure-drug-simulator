import React from 'react';
import PropTypes from 'prop-types';
const IconClose = ({ color, classNames }) => {
    return (
        <svg className={classNames} fill="none" viewBox="0 0 24 24" stroke={color}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
};


IconClose.propTypes = {
    color: PropTypes.node.isRequired,
    classNames: PropTypes.string
};

IconClose.defaultProps = {
    color: '#000',
    classNames: 'h-5 w-5',

};


export default IconClose;