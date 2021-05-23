import React from 'react';
import PropTypes from 'prop-types';
const IconLoading = ({strokeColor, pathFillColor, classNames}) =>{
    return (
        <svg className={classNames} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" 
          stroke={strokeColor} strokeWidth="4">
          </circle>
          <path className="opacity-75" 
          fill= {pathFillColor}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    )
}

IconLoading.propTypes = {
  pathFillColor:PropTypes.string,
  classNames:PropTypes.string
};

IconLoading.defaultProps = {
  pathFillColor: '#000',
  strokeColor:'#000',
  classNames: 'animate-spin h-5 w-5',

};

export default IconLoading