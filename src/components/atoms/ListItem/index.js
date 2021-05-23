import React from 'react';
import { ListItemElement } from './ListItemElement.styles';

const List = ({children, className, onClick}) =>{
    return (
        <ListItemElement className={className} onClick={onClick}>
            {
                children
            }
        </ListItemElement>
    )
}

export default List;