import React, { useState } from 'react'

export const ChildF = () => {
    const [isOneChecked, setIsOneChecked] = useState(true)
    const [isTwoChecked, setIsTwoChecked] = useState(false)

    const handleOneChecked = (e) => {
        setIsOneChecked(e.target.checked);
        if (e.target.checked) {
            setIsTwoChecked(false);
            console.log("aaa");
        }
    };

    const handleTwoChecked = (e) => {
        setIsTwoChecked(e.target.checked);
        if (e.target.checked) {
            setIsOneChecked(false);
            console.log("bbb");
        }
    };

  return (
    <div>
        <input type='checkbox' checked={isOneChecked} onChange={handleOneChecked}></input>
        <input type='checkbox' checked={isTwoChecked} onChange={handleTwoChecked}></input>
    </div>
  )
}
