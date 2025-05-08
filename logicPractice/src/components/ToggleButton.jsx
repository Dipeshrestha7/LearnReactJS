import React, { useState } from 'react'

function ToggleButton() {
    const [ison, setIson] =useState("ON");

    const togglebtn = ()=>{
        if(ison ==="ON"){
            setIson("OFF")
        }
        else{
            setIson("ON")
        }
    }

  return (
    <div>
        
        <button onClick={togglebtn}>{ison}</button>
    </div>
  )
}

export default ToggleButton