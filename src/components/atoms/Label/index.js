import React from 'react';
import {LabelElement} from "./LabelElement.styles";
const Label = ({children, className, forID}) =>{
    return (
        <LabelElement className={className} htmlFor={forID}>
            {
                children
            }
        </LabelElement>
    )
}

export default Label;