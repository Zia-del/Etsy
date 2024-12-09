'use client'
import React, { useState } from 'react'
import Section1 from '../../componets/sectin1/Section1'
import Section2 from '../../componets/section2/Section2'
import Signup from '../../componets/signuppop/Signup'
import Navbar from '../../componets/navbar/Navbar'
import Section3 from '../../componets/section3/Section3'
import Section4 from '../../componets/section4/Section4'
import Section5 from '../../componets/section5/Section5'
import Footer from '../../componets/footer/Footer'

const page = () => {

  const [showPopUp, setShowPopUp] = useState(false)

  const handlePopUp = () => {
    setShowPopUp(!showPopUp)
  }

  
  return (
    <div>
      <Navbar handlePopUp={handlePopUp} />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>

      {
        showPopUp ? <Signup /> : ""
      }
    </div>
  )
}

export default page
