import React from 'react';
import PropTypes from 'prop-types';
const IconSearch = ({color, classNames}) =>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={classNames} fill="none" viewBox="0 0 24 24" stroke={color}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
    )
}

IconSearch.propTypes = {
  color: PropTypes.node.isRequired,
  classNames:PropTypes.string
};

IconSearch.defaultProps = {
  color:'#d8d8d8',
  classNames: 'h-5 w-5',

};


export default IconSearch