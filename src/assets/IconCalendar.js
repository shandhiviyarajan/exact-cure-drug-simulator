import React from 'react';
import PropTypes from 'prop-types';
const IconCalendar = ({color, classNames}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classNames} fill="none" viewBox="0 0 24 24" stroke={color}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    )
}

IconCalendar.propTypes = {
    color: PropTypes.node.isRequired,
    classesWidthHeight: PropTypes.string
  };
  
  IconCalendar.defaultProps = {
    classNames: 'h-5 w-5',
    color:'#000'
  };

export default IconCalendar;