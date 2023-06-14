import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

const Facts = () => {
    const [counton, setCounton] = useState(true)

    return (
        <div className='pb-[48px] lg:pb-[70px] px-[29px] lg:py-[63px] lg:px-[140px]' id='facts'>
            {/* Large Device */}

            <ScrollTrigger onEnter={() => setCounton(true)} onExit={() => setCounton(false)}>

                <div className="hidden lg:flex justify-between items-center mt-[37px] lg:mt-0">

                    <div className='text-center'>
                        <h1 className='text-[48px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_2px]'>{counton && <CountUp decimals={1} start={0} end={12.7} duration={2} delay={0} className='text-[48px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_2px]' />}K+</h1>

                        <p className='text-[12px] lg:text-[20px] font-medium'>Our Subscribers</p>

                    </div>
                    <div className='text-center'>
                        <h1 className='text-[48px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_2px]'>{counton && <CountUp decimals={1} start={0} end={4.2} duration={2} delay={0} />}K+</h1>
                        <p className='text-[12px] lg:text-[20px] font-medium'>Student Mentored</p>

                    </div>
                    <div className={` lg:text-right lg:w-5/12`}>
                        <h1 className='text-[38px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_1px]'>Our Fact</h1>
                        <p className={`text-[18px] lg:text-[20px] font-medium`}>At Growcialbull, we provide valuable insights and strategies for traders seeking to make consistent profits in the market. Our expertise in Banknifty trading sets us apart as a leading provider of effective solutions for your investment needs. Partner with us and let our proven track record help you achieve your financial goals.</p>
                    </div>
                </div>
            </ScrollTrigger>

            {/* Small Device */}

            <div className='lg:hidden'>
                <h1 className='text-[48px] lg:text-[80px] font-bold text-[#83FF8F] lg:text-[#8383FF] drop-shadow-[0_0_3px]'>Our Fact</h1>
                <p className='text-[12px] lg:text-[20px] font-medium'>At Growcialbull, we provide valuable insights and strategies for traders seeking to make consistent profits in the market. Our expertise in Banknifty trading sets us apart as a leading provider of effective solutions for your investment needs. Partner with us and let our proven track record help you achieve your financial goals.</p>
                <ScrollTrigger onEnter={() => setCounton(true)} onExit={() => setCounton(false)}>
                    <div className="flex justify-around pt-[37px] lg:mt-0">
                        <div className='text-center'>
                            <h1 className='text-[48px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_2px]'>12.7K+</h1>

                            <p className='text-[12px] lg:text-[20px] font-medium'>Our Subscribers</p>

                        </div>
                        <div className='text-center'>
                            <h1 className='text-[48px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_2px]'>4.2K+</h1>
                            <p className='text-[12px] lg:text-[20px] font-medium'>Student Mentored</p>

                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Facts;