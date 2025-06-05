import React, { useState } from 'react'

export const Radio = () => {
const [radio, setRadio] = useState("cat")
const [show, setShow] = useState("");

const radioChange = (e) => {
    setRadio(e.target.value)
    setShow(e.target.value)
}
  return (
    <div>
        <form>
        <label>
            <input type="radio" value="Cat" name="animal" checked={radio==="Cat"} onChange={radioChange}/>Cat
        </label>
        <label>
            <input type="radio" value="Dog" name="animal" checked={radio==="Dog"} onChange={radioChange}/>Dog
        </label>
        <label>
            <input type="radio" value="Mouse" name="animal" checked={radio==="Mouse"} onChange={radioChange}/>Mouse
        </label>
        <label>
            <input type="radio" value="Duck" name="animal" checked={radio==="Duck"} onChange={radioChange}/>Duck
        </label>
        </form>
        <p>{show}</p>
    </div>
  )
}
