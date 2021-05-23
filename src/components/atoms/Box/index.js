import React from 'react';
import PropTypes from 'prop-types';
import { BoxElement } from "./Box.styles"
const Box = ({ children, className, width, height, margin, padding, onClick }) => {
    return (
        <BoxElement
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            onClick={onClick}
            className={className}>
            {children}
        </BoxElement>
    )
}

Box.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    onClick: PropTypes.func
}
export default Box