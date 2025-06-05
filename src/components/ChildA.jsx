import React, { useState } from 'react'

function ChildA ( {sendValueToParent} ) {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
    }
    function handleClick() {
        sendValueToParent(inputValue)
    }

  return (
    <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleClick}> Send data to a parent</button>
    </div>
  )
}

export default ChildA;