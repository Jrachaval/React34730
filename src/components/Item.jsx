import React from 'react'

const Item = ({id,title, description}) => {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{description}</h3>
    
    </div>
  )
}

export default Item