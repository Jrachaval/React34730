import React from 'react'
import { useEffect, useState } from 'react';
import itemsjson from "../components/Milista.json"
import Itemlist from "../components/Itemlist"


const Itemlistconainer = () => {
  const [items, setItems] = useState([]);

      const getItems = (data, time)=> new Promise((resolve,reject) =>{
        setTimeout(() => {
          if (data){
            resolve (data);
          } else {
            reject ("Error");
          }
        }, time);
      });

      useEffect (()=>{
        getItems(itemsjson, 2000). then ((res) =>{
        setItems(res)
        }).catch((err)=> console.log (err,": sin datos"));
      },[])


  return (
    <div>
      <Itemlist list={items} />
      
    </div>
  );
};

export default Itemlistconainer