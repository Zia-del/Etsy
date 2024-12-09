import React from 'react'
import Image from 'next/image'

const Section5 = () => {
    return (
        <div>
            <div className='cardholder2'>
                <div className='card5'>
                    <div className='border4'>
                        <Image className='crd2'
                            src={"/image/giftsforher.avif"}
                            width={100}
                            height={100}
                            alt='w'
                        />
                    </div>
                    <p className='s5p'>Gifts for her <br/> up to 60% off</p>
                </div>

                <div className='card5'>
                    <div className='border4'>
                        <Image className='crd2'
                            src={"/image/giftsforhim.avif"}
                            width={100}
                            height={100}
                            alt='w'
                        />
                    </div>
                    <p className='s5p'>Gifts for him <br/> up to 60% off</p>
                </div>

                <div className='card5'>
                    <div className='border4'>
                        <Image className='crd2'
                            src={"/image/giftsforkids.webp"}
                            width={100}
                            height={100}
                            alt='w'
                        />
                    </div>
                    <p className='s5p'>Gifts for kids <br/> up to 60% off</p>
                </div>

                <div className='card5'>
                    <div className='border4'>
                        <Image className='crd2'
                            src={"/image/personalizedgifts.avif"}
                            width={100}
                            height={100}
                            alt='w'
                        />
                    </div>
                    <p className='s5p'>Personalized Gifts <br/> up to 60% off</p>
                </div>

                <div className='card5'>
                    <div className='border4'>
                        <Image className='crd2'
                            src={"/image/giftsforgrandparents.avif"}
                            width={100}
                            height={100}
                            alt='w'
                        />
                    </div>
                    <p className='s5p'>Gifts for Granparents <br/> up to 60% off</p>
                </div>
            </div>
        </div>
    )
}

export default Section5