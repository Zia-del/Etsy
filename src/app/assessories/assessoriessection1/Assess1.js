'use client'
import React from 'react'
import Image from 'next/image';


const Assess1 = ({handlePopUp}) => {

   
    return (
        <div className='showmore'>
            <div className='p-h1holder'>
                <h1 className='assesoriresh1'>Accessories</h1>
                <p className='assesorireshp'>Scarves, hats, and hair accessories that tie it all together</p>
            </div>

            <div>
                <div className='pageimageholder'>
                    <div className='imageholder'>
                        <Image className='image'
                            src={"/image/sunglasses.avif"}
                            width={100}
                            height={100}
                            alt='sunglasses'
                        />
                        <p className='assesorireshp'>Sunglasses & Eyewear</p>
                    </div>

                    <div className='imageholder'>
                        <Image className='image'
                            src={"/image/scarfs.webp"}
                            width={100}
                            height={100}
                            alt='scarves'
                        />
                        <p className='assesorireshp'>Scarfs & Wraps</p>
                    </div>

                    <div className='imageholder'>
                        <Image className='image'
                            src={"/image/keychains.webp"}
                            width={100}
                            height={100}
                            alt='keychains'
                        />
                        <p className='assesorireshp'>Keychains & Lanyards</p>
                    </div>

                    <div className='imageholder'>
                        <Image className='image'
                            src={"/image/hats.webp"}
                            width={100}
                            height={100}
                            alt='hats'
                        />
                        <p className='assesorireshp'>Hats & Caps</p>
                    </div>

                    <div className='imageholder'>
                        <Image className='image'
                            src={"/image/hairbow.webp"}
                            width={100}
                            height={100}
                            alt='hair accessories'
                        />
                        <p className='assesorireshp'>Hair Accessories</p>
                    </div>

                    <div className='imageholder'>
                        <Image className='image'
                            src={"/image/paches.webp"}
                            width={100}
                            height={100}
                            alt='patches'
                        />
                        <p className='assesorireshp'>Patches & Pins</p>
                    </div>
                </div>
                
                
            </div>

            <div className='popoup'>

                <button onClick={handlePopUp} >Show more (9)</button>
            </div>
        </div>
    );
}

export default Assess1;
