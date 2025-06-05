import { useState } from 'react'

export const Input = () => {
    const [textInput, setTextInput] = useState("");

    const handleInputValue = (e) => {
        setTextInput(e.target.value)
      }
      
      const handleShowText = () => {
        setShowTxt(textInput)
      }

const [textAreaInput, setTextAreaInput] = useState("")

const handleTextAreaChange = (e) => {
  setTextAreaInput(e.target.value)
}

  return (
    <div>

    <input type="text" value={textInput} onChange={handleInputValue}/>
    <button onClick={handleShowText}>Button</button>

    <textarea value={textAreaInput} onChange={handleTextAreaChange}></textarea>
    </div>
  )
}
