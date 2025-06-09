import React from 'react'

export const ChildH = ( {colorFromChild} ) => {

  return (
    <div>
        <div style={{
        width: '150px',
        height: '150px',
        backgroundColor: colorFromChild,
        display: 'inline-block'
        }}>

        </div>
    </div>
  )
}
