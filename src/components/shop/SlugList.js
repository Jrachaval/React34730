import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import products from './Productsdata'

const Sluglist = () => {

    const [slugs, setSlugs] = useState([])

    useEffect(() => {
        setSlugs(products)
    }, [])
    
  

  return (
    <div>
        {slugs.map (i =>
        <Link to={'/shop/item/ ${i.slug}'} key={i.id}>
        <div >  {i.name} </div>
        </Link>
             
    )}
    </div>
  )
}

export default Sluglist