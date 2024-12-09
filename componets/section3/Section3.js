import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";

const section3 = () => {
  return (
    <div className='section3 mt-10'>
      <div className='cardholder'>
        <div className='card2'>
          <div className='border1'>
            <Image className='crd'
              src={"/image/babycloth.webp "}
              width={100}
              height={100}
              alt='cufflinks'
            />
            <p className='crdp'>Custom Baby Name Sweater, P...</p>
            <p ><span className='crdp1'>USD 24.74</span> <span className='crdp2'>32.59</span> <span className='crdp3'>(25% off)</span></p>
            <p className='crdp4'>4.9 <FaStar /> (491)</p>
          </div>
        </div>

        <div className='card2'>
          <div className='border1'>
            <Image className='crd'
              src={"/image/catsocks.avif"}
              width={100}
              height={100}
              alt='cufflinks'
            />
            <p className='crdp'>Customized Cat Socks - Put Yo...</p>
            <p ><span className='crdp1'>USD 5.64</span> <span className='crdp2'>11.99</span> <span className='crdp3'>(53% off)</span></p>
            <p className='crdp4'>4.9 <FaStar /> (46,818)</p>
          </div>
        </div>

        <div className='card2'>
          <div className='border1'>
            <Image className='crd'
              src={"/image/suedejewerly.webp"}
              width={100}
              height={100}
              alt='cufflinks'
            />
            <p className='crdp'>Suede Jewelry Roll, Italian Velv...</p>
            <p ><span className='crdp1'>USD 19.80</span> <span className='crdp2'>33.00</span> <span className='crdp3'>(30% off)</span></p>
            <p className='crdp4'>4.9 <FaStar /> (29,995)</p>
          </div>
        </div>

        <div className='card2'>
          <div className='border1'>
            <Image className='crd'
              src={"/image/charmnecklace.webp"}
              width={100}
              height={100}
              alt='cufflinks'
            />
            <p className='crdp'>Custom Charm necklaces for W...</p>
            <p ><span className='crdp1'>USD 19.50</span> <span className='crdp2'>27.86</span> <span className='crdp3'>(30% off)</span></p>
            <p className='crdp4'>4.8 <FaStar /> (1,306)</p>
          </div>
        </div>

        <div className='card2'>
          <div className='border1'>
            <Image className='crd'
              src={"/image/chrismasdecor.webp"}
              width={100}
              height={100}
              alt='cufflinks'
            />
            <p className='crdp'>New Home Chrismas Ornamen..</p>
            <p ><span className='crdp1'>USD 11.63</span> <span className='crdp2'>17.89</span> <span className='crdp3'>(35% off)</span></p>
            <p className='crdp4'>4.9 <FaStar /> (24,742)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section3