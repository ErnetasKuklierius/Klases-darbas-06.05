import { useState } from 'react'

export const Textarea = () => {
const [showTxt, setShowTxt] = useState("")

  return (
    <>
    <fieldset>
      <legend>TEXTAREA</legend>
      <button onClick={() => setShowTxt(textAreaInput)}>Get text area</button>
    </fieldset>
    </> 
  )
}
