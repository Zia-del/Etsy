import React from 'react'
import Image from 'next/image'

const Section2 = () => {
    return (
        <div>
            <div className="section2">
                <div className="section2sub1"><p className='section2p'>Discover the latest trend in small shops</p></div>
                <div className="section2sub">
                    <div className='mushroompillow'>
                        <div className="imagewrapper">
                            <Image className='mushroom'
                                src="/image/mushroommofits.avif"
                                width={90}
                                height={90}
                                alt='hadbag'
                            />
                        </div>

                        <div>
                            Mushroom<br /> Murfits
                        </div>
                    </div>

                    <div className='mushroompillow'>
                        <div className="imagewrapper">
                            <Image className='mushroom'
                                src="/image/vintagetablelinen.avif"
                                width={90}
                                height={90}
                                alt='hadbag'
                            />
                        </div>

                        <div>
                            Vintage Table<br /> Linens
                        </div>
                    </div>

                    <div className='mushroompillow'>
                        <div className="imagewrapper">
                            <Image className='mushroom'
                                src="/image/farmhousetables.avif"
                                width={90}
                                height={90}
                                alt='hadbag'
                            />
                        </div>

                        <div>
                            Farmhouse<br /> Tables
                        </div>
                    </div>

                    <div className='mushroompillow'>
                        <div className="imagewrapper">
                            <Image className='mushroom'
                                src="/image/pumkinspice.avif"
                                width={90}
                                height={90}
                                alt='hadbag'
                            />
                        </div>

                        <div>
                            Pumkin<br /> Spice
                        </div>
                    </div>

                    <div className='mushroompillow'>
                        <div className="imagewrapper">
                            <Image className='mushroom'
                                src="/image/suedehandbag.avif"
                                width={90}
                                height={90}
                                alt='hadbag'
                            />
                        </div>

                        <div>
                            Suede<br /> Handbags
                        </div>
                    </div>

                    <div className='mushroompillow'>
                        <div className="imagewrapper">
                            <Image className='mushroom'
                                src="/image/coolskirt.webp"
                                width={90}
                                height={90}
                                alt='hadbag'
                            />
                        </div>

                        <div>
                          Librarariancore
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Section2