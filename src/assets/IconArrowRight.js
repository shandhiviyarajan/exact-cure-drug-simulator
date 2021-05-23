import React from 'react';
import PropTypes from 'prop-types';
const IconArrowRight = ({classNames}) =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classNames} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>

    )
}


IconArrowRight.propTypes = {
    color: PropTypes.node.isRequired,
    classesWidthHeight: PropTypes.string
  };
  
  IconArrowRight.defaultProps = {
    classNames: 'h-5 w-5',
  };

export default IconArrowRight