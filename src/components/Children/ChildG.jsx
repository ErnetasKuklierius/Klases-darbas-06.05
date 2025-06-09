import React, {useState, useEffect} from 'react'

export const ChildG = ( { setColorFromChild }) => {
 const [isChecked, setIsChecked] = useState(false);
 const [color, setColor] = useState("");

 const handleChange = () => {
 setIsChecked(!isChecked);
 }

 const handleButton = () => {
    if (isChecked) {
        setColor("red")

    } else if (!isChecked) {
        setColor("blue")
    }
 }

 useEffect(() => {
    if (color === "blue") {
        console.log("melyna")
        setColorFromChild("blue")
    } else if (color === "red") {
        console.log("raudona")
        setColorFromChild("red")
    }
        
 }, [color, setColorFromChild])

//  useEffect(() => {
//     if (!isChecked) {
//         setDataFromChild(true)
//     } else {
//         setDataFromChild(false)
//     }
//  }, [isChecked, setDataFromChild])

  return (
    <div>
        <input type="checkbox" checked={isChecked} onChange={handleChange}></input>
        <button onClick={handleButton}>Click me</button>
    </div>
  )
}
