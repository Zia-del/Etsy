import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div>
      <div className='cardholder1'>
        <div className='card4'>
          <div className='border2'>
            <Image className='crd1'
              src={"/image/walldecore.avif"}
              width={100}
              height={100}
              alt='w'
            />
          </div>
          <p className='crd4p'>Wall decor</p>
        </div>

        <div className='card4'>
          <div className='border2'>
            <Image className='crd1'
              src={"/image/digitalprints.avif"}
              width={100}
              height={100}
              alt='wall'
            />
          </div>
          <p className='crd4p'>Digital Prints</p>
        </div>

        <div className='card4'>
          <div className='border2'>
            <Image className='crd1'
              src={"/image/chrisorna.webp"}
              width={100}
              height={100}
              alt='wall'
            />
          </div>
          <p className='crd4p'>Chrismas Ornaments</p>
        </div>

        <div className='card4'>
          <div className='border2'>
            <Image className='crd1'
              src={"/image/signs.avif"}
              width={100}
              height={100}
              alt='wall'
            />
          </div>
          <p className='crd4p'>Signs</p>
        </div>

        <div className='card4'>
          <div className='border2'>
            <Image className='crd1'
              src={"/image/digitalpims.avif"}
              width={100}
              height={100}
              alt='wall'
            />
          </div>
          <p className='crd4p'>Digital Prints</p>
        </div>

        <div className='card4'>
          <div className='border2'>
            <Image className='crd1'
              src={"/image/chrisorna.jpg"}
              width={100}
              height={100}
              alt='wall'
            />
          </div>
          <p className='crd4p'>Chrismas Ornaments</p>
        </div>       
      </div>
    </div>
  )
}

export default Section4