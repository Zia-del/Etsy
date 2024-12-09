'use client'
import { useState } from 'react'
import React from 'react'
import Assess1 from './assessoriessection1/Assess1'
import Assessoriespopup from './assessoriespopup/Assessoriespopup'
import Assess2 from './assessoriessection2/Assess2'

const page = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  const handlePopUp = () => {
    setShowPopUp(!showPopUp)
  }

  return (
    <div>
      <Assess2 />
      <Assess1 handlePopUp={handlePopUp}/>
     {
     showPopUp ? <Assessoriespopup /> : "" 
     }

    </div>
  )
}

export default page