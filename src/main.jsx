
import { createRoot } from 'react-dom/client'
import './index.css'
import SingleCard from './SingleCard.jsx'
import Data from './Data.js'
import { useState } from 'react'

createRoot(document.getElementById('root')).render(
<div >
     <header className="page-header">
        <h1>WANDERLUST DESTINATIONS</h1>
      </header>
    
<div className="cards-container">
  {Data.map((item,index)=>(
  
  <SingleCard  key={index} item={item}/>
  ))}
 
 </div>
  </div>
)

export default function Button(){

     const [like,setLike]=useState(0);
    return(
       <div>
        <button onClick={()=>setLike(like+1)}>
        Click Here {like}
        </button>
       </div>
    )
}
 