import React from 'react';
import greenBull from './../../assets/Layer 7.png';
// import circleBg from './../../assets/circle-bg.png'

const AboutUs = () => {


    return (
        <div className='pt-[80px] lg:pt-[150px] flex flex-col-reverse lg:flex-row justify-center pb-[90px] lg:pb-[208px] overflow-x-hidden text-right lg:text-left bg-[cover] lg:bg-[length:35%]' id='about-us'>
            <div className="lg:w-7/12 w-full mr-auto relative z-[0]">
                <h1 className='px-[28px] pl-0 lg:px-[116px] text-[50px] lg:text-[114px] font-bold text-[#83FF8F] leading-[48px] lg:leading-[98px]'><span className='drop-shadow-[0_0_2px_#83FF8F]'>About</span> <span className='text-white lg:text-[#83FF8F] drop-shadow-[0_0_2px_#fff] lg:drop-shadow-[0_0_2px_#83FF8F]'>Us</span></h1>
                <h6 className='px-[28px] lg:px-[116px] lg:text-[30px] font-semibold'><span className='text-[#83FF8F]'>Welcome to Growcial Bull -</span> The brand that's passionate
                    about teaching people how?</h6>
                {/* <h6 className='pr-[28px] lg:px-[116px] lg:hidden lg:text-[30px] text-[18px] font-light mt-[8px]'>Growcial Bull is The brand that's <br />
                    passionate about teaching people how?</h6> */}
                <div className="bg-[#07072480] lg:bg-transparent py-[16px] px-[12px] mt-[12px] ml-[56px] lg:ml-0">
                    <p className='lg:ml-[16px] text-[#83FF8F] text-[12px] lg:text-[18px] pr-[16px] lg:px-[90px] lg:py-0 rounded-l-[10px]'>
                        Growcialbull have developed our own proven methods to help our clients succeed in the stock market. Our mission is to provide comprehensive education and practical training to help individuals become profitable traders. We offer a range of courses, mentorship programs, and resources to equip our clients with the knowledge and skills needed to succeed in the financial markets. Whether you're a beginner or an experienced trader, our programs are tailored to meet your needs and help you achieve your goals.
                    </p>

                </div>
            </div>

            <div className="lg:w-3/12 w-full relative z-[0] h-1/2 lg:h-auto hidden lg:block">
                <img src={greenBull} className='z-10 mx-auto absolute left-0 right-0 top-10 m-auto' alt="" />
                {/* <img src={greenBull} className='z-0 mx-auto absolute blur left-0 right-0 top-10 m-auto' alt="" /> */}
            </div>
        </div>
    );
};

export default AboutUs;