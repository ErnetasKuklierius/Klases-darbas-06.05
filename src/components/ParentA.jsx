import React, { useState }  from 'react'
import ChildA from './ChildA'

export const ParentA = ( ) => {
    const [childValue, setChildValue] = useState("");

    const handleChildValue = (inputValue) => {
        setChildValue(inputValue)
    }
  return (
    <div>
        <button onClick={handleChildValue}>Display child value</button>
        <p>{childValue}</p>
        <ChildA sendDataToParent={handleChildValue} />
    </div>
  )
}
