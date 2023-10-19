import React, { useState } from 'react';
import greenArrow from './../../assets/green-arrow.png'
import greenBar from './../../assets/green-bar.png'

const ServicesSlide = ({ name, key, offers, link, linkText }) => {
    const [check, setCheck] = useState(false);

    return <div className='item px-12 mx-auto z-0 mt-[70px]' id={name} key={key}>
        <h1 className='text-center opacity-30 font-medium text-[22px] uppercase blur-[8px] absolute top-[38px] left-0 right-0 m-auto'>{name}</h1>
        <h1 className='text-center font-medium text-[22px] uppercase absolute top-[38px] left-0 right-0 m-auto'>{name}</h1>
        <div className="flex justify-center">
            <div className='green-glow w-1/2 md:w-1/3 lg:w-[600px] mt-0'></div>
        </div>

        <ul className='mt-[10px] mx-[5px] list-disc px-[10px] flex flex-col gap-[5px]'>
            {name === 'basic' ? offers.slice(0, document.getElementById(name + 'check') && check ? offers.length : 6).map((item, key) => <li key={key} className='text-[12px] leading-[22px] font-light'>{item}</li>) : offers.slice(0, document.getElementById(name + 'check') && check ? offers.length : 6).map((item, key) => <li key={key} className='text-[12px] leading-[22px] font-light'>{item}</li>)}
        </ul>

        {name !== 'Basic' && <label>
            <input type="checkbox" className='hidden' onChange={e => setCheck(e.target.checked)} />
            <img src={greenArrow} className={`w-[29px] mx-auto mt-[15px] cursor-pointer ${check ? 'rotate-180' : 'rotate-0'}`} alt="" />
        </label>}
        <div className='mx-[10px]'>
            <a href={link} className='py-[12px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[11px] font-medium' style={{ backgroundImage: `url(${greenBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>{linkText}</a>
        </div>
    </div>;
};

export default ServicesSlide;