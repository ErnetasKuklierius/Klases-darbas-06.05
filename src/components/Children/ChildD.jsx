import React, { useState, useEffect } from 'react'

export const ChildD = ( {setIsCheckedBoth }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  useEffect(() => {
    if (isChecked && isCheckedTwo) {
      setIsCheckedBoth(true);
    } else {
      setIsCheckedBoth(false);
    }
  }, [isChecked, isCheckedTwo, setIsCheckedBoth]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChangeTwo = () => {
    setIsCheckedTwo(!isCheckedTwo);
  };

  return (
    <>
     <div style={{
        width: '150px',
        height: '150px',
        backgroundColor: isChecked ? 'blue' : 'transparent',
        display: 'inline-block'
      }}
    >
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </label>
    </div>
    <div style={{
        width: '150px',
        height: '150px',
        backgroundColor: isCheckedTwo ? 'green' : 'transparent',
        display: 'inline-block'
      }}
    >
      <label>
        <input type="checkbox" checked={isCheckedTwo} onChange={handleCheckboxChangeTwo} />
      </label>
    </div>
    </>
    
  );
}
