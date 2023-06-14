import React from 'react';
import bg from './../../assets/referral-bg.png'

const Referral = () => {
    return (
        <div id='referral'>
            <div className="relative h-auto ">
                {/* <h1 className='text-[48px] lg:text-[80px] font-black text-[#83FF8F] left-0 right-0 mx-auto text-center blur-[2px] lg:blur-sm absolute'>Referral</h1> */}
                <h1 className='text-[48px] lg:text-[80px] font-black text-[#83FF8F] left-0 right-0 mx-auto text-center'>Referral</h1>
            </div>

            <div className='py-[60px] lg:pt-[82px] lg:pb-[100px] xl:pt-[124px] xl:pb-[140px] 2xl:py-[170px] lg:mt-[0px] text-[#56FF6C] text-center bg-[length:145%] lg:bg-[length:100%] 2xl:bg-[length:70%] xl:bg-[length:90%]' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h1 className='text-[14px] lg:text-[28px] lg:mt-0 text-center font-medium'>Open Demat in Zerodha with our Referral link and </h1>
                <h1 className='w-9/12 mx-auto lg:w-fit text-[8px] font-light lg:font-normal lg:text-[18px] mt-[2px] mb-[17px] lg:mt-[14px] lg:mb-[65px] text-center'>whatsapp (+91 9999-631995) your ID to get 10% Instant Discout on our all Plans or 10 Days free our standard services </h1>
                {/* <h1 className='text-[28px] mt-10 text-center'>Open Demat in Zerodha with our Referral link and </h1> */}
                <a href="https://zerodha.com/?c=NG6309&s=CONSOLE" className='text-[12px] lg:text-[18px] border-[1px] lg:border-[2px] border-[#39FE50] focus:bg-[#83FF8F69] font-medium px-[12px] py-[7px] lg:px-[40px] lg:py-[21px] rounded-full' target="_blank" rel='noreferrer'>Open Demat</a>
                {/* <h1 className='text-[28px] mt-10 text-center'>Open Demat in Zerodha with our Referral link and </h1> */}
            </div>

        </div>
    );
};

export default Referral;