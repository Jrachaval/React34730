import React from 'react'
import Item from './Item'

const Itemlist = ({list}) => {
  return (
    <div>
      {list.length ? list.map( (listitem) => <Item key= {listitem.id} />) : <h2>Loading...</h2>}
    </div>
  )
}

export default Itemlist
