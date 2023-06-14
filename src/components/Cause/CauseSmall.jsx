import React, { useState } from 'react';
import { causes } from '../Header/Header';

const CauseSmall = ({ img, title, id }) => {
    const [detailsVisible, setDetailsVisible] = useState(false);
    return (
        <>
            <div className='py-[25px] cause lg:hidden' onClick={() => {
                setDetailsVisible(true);
            }}>
                <div className="icon-container flex gap-[12px] lg:gap-[24px] items-center my-auto relative z-0">
                    <img src={img} className="hover:scale-125 transition-all icon w-[48px] h-[48px]" alt={title} />
                    <h2 className='text-[12px] lg:text-[15px] font-bold'>{title}</h2>
                </div>
            </div>

            <div className='py-[25px] cursor-pointer cause hidden lg:block' onClick={() => {
                setDetailsVisible(true);
            }}>
                <div className="icon-container flex gap-[24px] items-center relative z-0">
                    <img src={img} className="hover:scale-125 transition-all icon w-[52px] h-[52px]" alt={title} />
                    <h2 className='text-[10px] lg:text-[15px] font-bold'>{title}</h2>
                </div>
            </div>

            {detailsVisible && <div className='absolute top-0 left-0 h-full w-full backdrop-blur z-50 flex justify-center items-center'>
                <div className='w-11/12 lg:w-1/3 relative text-[#83FF8F]'>
                    <span className='text-5xl absolute -right-4 lg:-right-8 -top-10 lg:-top-5 text-[#83FF8F] cursor-pointer' onClick={() => setDetailsVisible(false)}>&times;</span>
                    <img src={causes[id].phoneDetails} className='w-full' alt="" />
                </div>
            </div>}
        </>
    );
};

export default CauseSmall;