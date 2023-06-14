//Testimonial

import React, { useState } from 'react';
import greenArrow from './../../assets/green-arrow.png'

export const Testimonial = ({ item }) => {
    const { name, image, location, description, rating } = item

    const [full, setFull] = useState(false);
    // console.log(description.includes('<br />'));
    return (
        <div className="item testimonial" >
            <div className='flex items-center flex-col justify-center'>
                <div className='lg:w-[149px] lg:my-[55px] mt-[20px] mb-[4px]'>
                    <img src={image} className="rounded-full avatar" alt={name} />
                </div>
                <h6 className='text-[15px] lg:text-[20px] lg:w-7/12 text-center'>
                    <span className='font-black'>{name}</span>
                </h6>
                <h6 className='text-[15px] lg:text-[20px] lg:w-7/12 text-center'>
                    <span className='font-bold'>({location})</span>
                </h6>
                <p className='w-11/12 lg:w-2/3 text-center text-[12px] lg:text-[18px] font-light lg:font-medium'>
                    {
                        full
                            ?
                            description.includes('<br />')
                                ? <>
                                    {description.split("<br />").map(item => <>
                                        {item}  <br />
                                    </>)}
                                    . <span className='cursor-pointer' onClick={() => setFull(false)}>
                                        <img src={greenArrow} className='rotate-180 arrow' alt="" />
                                    </span>
                                </>
                                :
                                <>{description.slice(0, 105)} <span className='cursor-pointer' onClick={() => setFull(true)}>
                                    <img src={greenArrow} className='arrow' alt="" />
                                </span></>
                            :
                            <>{description.slice(0, 105)} <span className='cursor-pointer' onClick={() => setFull(true)}>
                                <img src={greenArrow} className='arrow' alt="" />
                            </span></>
                    }
                </p>
                <img src={rating} className="rating mt-[19px]" alt="" />
            </div>
        </div>
    )
}



