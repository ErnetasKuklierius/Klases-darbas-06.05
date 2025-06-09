import React from 'react'

export const ChildE = ( {isCheckedBoth} ) => {
  
  return (
    <div>
      <div style={{
        width: '150px',
        height: '150px',
        backgroundColor: isCheckedBoth ? 'pink' : 'transparent',
        display: 'inline-block'
      }}
    >
    </div>
    </div>
  )
}
