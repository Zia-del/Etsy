'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';



const Assessoriespopup = () => {

    

    return (
        <div>
            <div className='pageimageholder' id='pageimageholder'>
                <div className='imageholder'>
                    <Image className='image'
                        src={"/image/coustume.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Cousetume Assessories</p>
                </div>

                <div className='imageholder'>
                    <Image className='image'
                        src={"/image/belt.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Belts & Suspenders</p>
                </div>

                <div className='imageholder' id='imageholder'>
                    <Image className='image'
                        src={"/image/umbrella.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Umbrellas & Assessories</p>
                </div>

                <div className='imageholder' id='imageholder'>
                    <Image className='image'
                        src={"/image/suit.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Suit & Ties Assesories</p>
                </div>

                <div className='imageholder'>
                    <Image className='image'
                        src={"/image/gloves.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Gloves & Mittens</p>
                </div>

                <div className='imageholder'>
                    <Image className='image'
                        src={"/image/baby.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Baby Assessories</p>
                </div>
            </div>

            <div className='pageimageholder' id='pageimageholder'>
                <div className='imageholder'>
                    <Image className='image'
                        src={"/image/hamdfan.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Cousetume Assessories</p>
                </div>

                <div className='imageholder'>
                    <Image className='image'
                        src={"/image/bogue.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Belts & Suspenders</p>
                </div>

                <div className='imageholder' id='imageholder'>
                    <Image className='image'
                        src={"/image/facemask.webp"}
                        width={100}
                        height={100}
                        alt='suglasses'
                    />
                    <p className='assesorireshp'>Umbrellas & Assessories</p>
                </div>
            </div>
            
            {/* <div className='assess'>das</div> */}
        </div>
    )
}

export default Assessoriespopup