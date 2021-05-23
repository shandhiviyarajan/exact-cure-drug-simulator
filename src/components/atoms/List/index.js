import React from 'react';
import { ListElement } from './ListElement.styles';

const List = ({children, className}) =>{
    return (
        <ListElement className={className}>
        {children}
    </ListElement>
    )
}

export default List;