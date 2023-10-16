import React, { useState } from 'react';
import { GreenGlow } from '../GreenGlow/GreenGlow';
import blueArrow from './../../assets/blue-arrow.png'
import greenArrow from './../../assets/green-arrow.png'
import blueBar from './../../assets/blue-bar.png'
import greenBar from './../../assets/green-bar.png'
import active from './../../assets/plan-active.png'
import inactive from './../../assets/plan.png';

const ServiceItem = ({ service, name, offers, setService, link, linkText }) => {

    const [check, setCheck] = useState(false)

    return (
        <div className={`h-fit px-[55px] 2xl:px-[75px] transition ${service === name ? 'text-[#82FF8F] scale-[1.2]' : 'text-white'}`} style={{ backgroundImage: `url(${service === name ? active : inactive})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 131%', backgroundPosition: '71% center' }} onMouseEnter={() => setService(name)} onMouseLeave={() => setService("Alpha")}>
            <div className="p-[30px] px-4 relative">
                <h1 className={`text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto`}>{name}</h1>
                <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>{name}</h1>
                {service === name && <GreenGlow />}
                <ul className={`mt-[38px] ml-[5px] ${service === name ? 'xl:ml-[32px] 2xl:ml-[50px]' : 'xl:ml-[32px] 2xl:ml-[70px]'} list-disc`}>
                    {offers.slice(0, document.getElementById(name + 'check') && check ? offers.length : 6).map((item, key) => <li key={key} className='text-[18px] leading-[32px] font-light py-[9px]'>{item}</li>)}
                    {/* </>} */}
                </ul>
                <input type="checkbox" id={name + 'check'} className='hidden' onChange={e => setCheck(e.target.checked)} />
                <label htmlFor={name + 'check'}>
                    {!document.getElementById(name + 'check')?.checked && <img src={service === name ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer' alt="" />}
                    {document.getElementById(name + 'check')?.checked && <img src={service === name ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer rotate-180' alt="" />}
                </label>
                {/* <img src={service === 'basic' ? greenBar : blueBar} className="mt-[36px]" alt="" /> */}
                <div className='mx-[30px]'>
                    <a href={link} className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: service === name ? `url(${greenBar})` : `url(${blueBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>{linkText}</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;