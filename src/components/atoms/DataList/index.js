import React from 'react'
import { DataListElement } from './DataList.styles'

const DataList = ({children, id, className})=>{
    return (
        <DataListElement id={id} className={className}>
         {
            children
         }
        </DataListElement>
    )
}

export default DataList;