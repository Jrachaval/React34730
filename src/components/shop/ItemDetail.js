import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({item: {name, price}}) => {
  return (
    <div>
        <li>{name}</li>
        <li>{price}</li>

        <ItemCount/>
    </div>
    
  )
}

export default ItemDetail