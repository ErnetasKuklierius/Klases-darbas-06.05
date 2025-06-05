import { useState } from 'react'
import './App.css'
import { Textarea } from './components/textarea'
import { Input } from './components/input'
import { Select } from './components/select'
import { Checkbox } from './components/checkbox'
import { Radio } from './components/radio'
import { ParentA } from './components/ParentA'

function App() {

return (
<>
<Textarea />
<hr></hr>
<Input />
<hr></hr>
<Select />
<hr></hr>
<Checkbox />
<hr></hr>
<Radio />
<hr></hr>
<ParentA />
</> 
)
}

export default App
