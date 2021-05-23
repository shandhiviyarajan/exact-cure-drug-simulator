import React from 'react';

const IconArrow = ({className}) =>{
    return (
        <svg className={className} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    )
}

export default IconArrow;