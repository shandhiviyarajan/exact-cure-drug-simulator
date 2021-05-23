import React from 'react';
import {TextElement} from './TextElement.styles'
const Text = ({children, className, value}) =>{
    return (
        <TextElement  className={className}>
            {
                children
            }
            </TextElement>
    )
}

export default Text