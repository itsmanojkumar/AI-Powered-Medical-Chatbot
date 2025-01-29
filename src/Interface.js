import React, { useState } from 'react'
import './Interface.css';


function Interface() {
  const [text,setText]=useState("")
  const [showText, setShowText] = useState(false);
  const handle=()=>{
    setShowText(true);
  };
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className='all'>
    <div className='border'>
      {showText && <p>TEXT:{text}</p>}
        <div className='border2'>
       
          <input type='text' value={text} className='input' onChange={handleInputChange} placeholder='Enter your Question'></input>
           <button onClick={handle}>Enter</button>
           
          
        </div>
      </div>
    </div>


  )
}

export default Interface