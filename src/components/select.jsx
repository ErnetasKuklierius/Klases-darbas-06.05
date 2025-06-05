import React, { useState } from 'react'

export const Select = () => {
const [selectas, setSelectas] = useState("");
const [show, setShow] = useState("");

const handleSelectChange = (e) => {
    setSelectas(e.target.value);
}
  return (
    <div>
        <fieldset>
            <legend>SELECT</legend>
            <select value={selectas} onChange={handleSelectChange}>
                <option value="-">Select an option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>


            </select>
            <button onClick={() => setShow(selectas)}>Get text</button>
            <p>{show}</p>
        </fieldset>
    </div>
  )
}
