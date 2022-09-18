import { useState } from "react";

function ItemCount  () {
    const [Counter, setCounter] = useState(1)
    
    const handleClick = () =>{
        setCounter ( Counter + 1 )
    }
/*     const handleClick2 = () =>{
        setCounter ( Counter - 1 )
    }
 */
    return(
        <div>
            <strong className="my-6">TOTAL: {Counter}</strong> <br></br>
            <button onClick={handleClick} class="btn btn-active">+</button>
            {/* <button onClick={handleClick2} class="btn btn-active">-</button> */}
        </div>
    );
}

export default  ItemCount



