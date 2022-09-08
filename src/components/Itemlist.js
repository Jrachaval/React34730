import React from 'react'


const itemlist = () => {
const [products, setproducts] = useState([])
    useEffect(() => {
        setTimeout (() => {

        },2000)
        console.log ('2 segundos')
       
 
    }, [])
    
    useEffect(() => {
      const getProducts = new Promise (() => {
        resolve ( ['id','title', 'description','price', 'picture'])
      })

      getProducts
      .then ( data => {
        console.log (data);
        setproducts (data)
      })

   

        
    }, [])
    

  return (
    <> {products}
    </>
  )

}

export default itemlist
