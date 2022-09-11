import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const product = {
    name: 'ticket',
    price: 600
}
const Itemdetailcontainer = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItem ().then( data => {
            setItem(data)
        })
    }, [])
    
    
    const getItem = () => { 
       return  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve ( 'Item')                
            }, 2000);
        })
     }
  return (
        <ItemDetail item={item}/>
    
  )
}

export default Itemdetailcontainer