import React from 'react';
import PropTypes from 'prop-types';
const IconSad = ({ color, classNames }) => (
    <svg className={classNames} fill="none" viewBox="0 0 24 24" stroke={color}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

export default IconSad;

IconSad.propTypes = {
    color: PropTypes.node.isRequired,
    classNames: PropTypes.string
};

IconSad.defaultProps = {
    color: '#fff',
    classNames: 'h-5 w-5',

};