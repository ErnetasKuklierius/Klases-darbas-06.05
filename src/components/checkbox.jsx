import React, { useState } from 'react'

export const Checkbox = () => {
const [checkboxas, setCheckboxas] = useState(false);
const [checkedOne, setCheckedOne] = useState(false)
const [checkedTwo, setCheckedTwo] = useState(false)
const [value, setValue] = useState("")
const [show, setShow] = useState("")

const handleChangeZero = (e) => {
setCheckboxas((prev) => (prev ? false : true))
setValue(e.target.name)
}

const handleChangeOne = (e) => {
setCheckedOne((prev) => (prev ? false : true))
setValue(e.target.name)
}
const handleChangeTwo = (e) => {
setCheckedTwo((prev) => (prev ? false : true))
setValue(e.target.name)
}

  return (
    <div>
        <fieldset>
            <legend>checkbox</legend>
            <input type="checkbox" name="Zero" checked={checkboxas} onChange={handleChangeZero}></input>
            <label>
            <input type="checkbox" name="First" checked={checkedOne} onChange={handleChangeOne}></input>
            aaaa
            </label>
            <label>
            <input type="checkbox" name="Two" checked={checkedTwo} onChange={handleChangeTwo}></input>
            bbbb
            </label>
            <button onClick={() => setShow(value)}>Get text</button>
            <p>{show}</p>
        </fieldset>
    </div>
  )
}
