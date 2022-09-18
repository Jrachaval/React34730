import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import products from './Productsdata'


const Itemdetailcontainer = () => {

    const [item, setItem] = useState({})
    const {slug} = useParams()
    
    useEffect(() => {
        getItem ().then( data => {
            setItem(data)
        })
    }, [])
    
    
    const getItem = () => { 
       return  new Promise((resolve) => {
            setTimeout(() => {
                resolve ( products.find (p => p.slug == slug))                
            }, 2000);
        })
     }
  return (
    <>
        <ItemDetail item={item}/>
    </>
    
  )
}

export default Itemdetailcontainer