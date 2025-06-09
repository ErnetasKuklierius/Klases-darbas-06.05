import React, { useState } from 'react'
import { ChildD } from './Children/ChildD'
import { ChildE } from './Children/ChildE'
import { ChildF } from './Children/ChildF'
import { ChildG } from './Children/ChildG'
import { ChildH } from './Children/ChildH'


export const Parent = () => {
  const [isCheckedBoth, setIsCheckedBoth] = useState(false);
  const [dataFromChild, setDataFromChild] = useState(false)
  const [colorFromChild, setColorFromChild] = useState("")
  return (
    <div>
        <ChildD setIsCheckedBoth={setIsCheckedBoth} />
        <ChildE isCheckedBoth={isCheckedBoth} />
        <hr></hr>
        <ChildF />
        <hr></hr>
        <ChildG setColorFromChild={setColorFromChild} />
        <ChildH colorFromChild={colorFromChild} />
    </div>
  )
}
