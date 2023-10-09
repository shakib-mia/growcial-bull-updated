import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import greenArrow from './../../assets/green-arrow.png'
import greenBar from './../../assets/green-bar.png'
import ReactOwlCarousel from 'react-owl-carousel';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

const Services = () => {
    const [service, setService] = useState('Alpha');
    // const headerRef = useRef(null);
    const basicRef = useRef(null);
    const premiumRef = useRef(null);
    const standardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(premiumRef.current, {
            opacity: 0,
            top: 50
        }, {
            opacity: 1,
            top: 0,
            duration: 0.4,
            scrollTrigger: {
                trigger: premiumRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

        gsap.fromTo(basicRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            // top: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: basicRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

        gsap.fromTo(standardRef.current, {
            opacity: 0,
            // top: 50
        }, {
            opacity: 1,
            // top: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: standardRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

    }, [])
    const [check, setCheck] = useState(false)


    // const membershipPlan = ["DAILY CHART ANALYSIS ",
    //     "F&O LIVE TRADES",
    //     "TREND TIME CYCLE UPDATES",
    //     "LEARNING BASE TUTORIALS",
    //     "DYNAMIC & STATIC CALCULATOR",
    //     "TRENDY INDICATERS",
    //     "E-BOOK PDFs",
    //     "HOW TO ENTRY,EXIT & TARGET",
    //     "LIVE Q&A"]

    const plans = [{
        name: "Basic",
        offers: [
            "Demo Services",
            "Our Social Channels",
            "Counseling",
            "E-books",
            "Market News Updates",
            "After Market Data"
        ],
        link: 'https://chat.whatsapp.com/LYZFkiXpuJTF0J5Cxh9lSW',
        linkText: "Join"
    }, {

        name: 'Alpha', offers: [
            "Mastery In F&O Equity",
            "Live 1 To 1 Mentorship",
            "21 Sessions",
            "Time And Date Cycle",
            "Smart Money Concepts",
            "Golden Rules Of Price Action",
            "Advanced Option Strategy",
            "WD Gann Secret Methods",
            "Big Foot Player Entries",
            "Dynamic & Static Calculator",
            "Lunar/Astro Cycles",
            "Elliot Wave Structures",
            "World Market Sense",
            "Stock Picking Technique",
            "BTST/Swing/Positional Method",
            "Expertise In Fundamental Analyst",
            "WD Gann 7/99/144 Method",
            "Position Sizing",
            "How To Entry, Exit & Targets",
            "Trading Psychology Buildup",
        ],
        link: 'https://cosmofeed.com/view_ch/04b73455-a8df-4972-9f66-7de76eb9a3ee',
        linkText: <>&#8377; 9999</>
    }, {
        name: "Membership", offers: [
            "Daily Chart Analysis",
            "F&O Live Trades",
            "Trend Time Cycle Updates",
            "Learning Base Tutorials",
            "Dynamic & Static Calculator",
            "Trendy Indicators",
            "E-Book PDFs",
            "How To Entry, Exit & Target",
            "Live Q&A"
        ],
        link: 'https://cosmofeed.com/view_group/64f6f29d38bb81001ea50a0b',
        linkText: <>&#8377; 2499</>
    }]

    return (
        <div className='mb-[118px]' id='plans'>
            <h1 className='text-[38px] leading-[48px] lg:leading-normal lg:text-[68px] text-[#8383FF] drop-shadow-[0_0_6px] font-bold text-center font-["Poppins sans-serif"]'>Our Plans</h1>

            <div className='blue-glow w-1/2 md:w-1/3 lg:w-[600px] mx-auto'></div>

            <div className="hidden lg:grid grid-cols-3 px-[20px] lg:px-[106px] mt-[40px] lg:mt-[120px]">
                {plans.map((props, key) => <ServiceItem {...props} setService={setService} service={service} />)}
            </div>

            {/* small device */}

            <div className="lg:hidden z-0">
                <ReactOwlCarousel items={1.4} center theme loop dots={true} margin={15} startPosition={1} autoplayHoverPause autoPlay={false}>
                    {plans.map(({ name, offers, link, linkText }, key) => <div className='item px-12 mx-auto z-0 mt-[80px]' id={name} key={key}>
                        <h1 className='text-center opacity-30 font-medium text-[22px] uppercase blur-[8px] absolute top-[45px] left-0 right-0 m-auto'>{name}</h1>
                        <h1 className='text-center font-medium text-[22px] uppercase absolute top-[45px] left-0 right-0 m-auto'>{name}</h1>
                        {/* <div className="flex justify-center">
                            <div className='green-glow w-1/2 md:w-1/3 lg:w-[600px] mt-0'></div>
                        </div> */}

                        <ul className='mt-[10px] mx-[5px] list-disc px-[10px] flex flex-col gap-[16px]'>
                            {offers.slice(0, document.getElementById(name + 'check') && check ? offers.length - 1 : 6).map((item, key) => <li key={key} className='text-[12px] font-light'>{item}</li>)}
                        </ul>
                        {/* <img src={greenArrow} onClick={() => basicLength = basicList.length} className='w-[29px] mx-auto mt-[48px] cursor-pointer' alt="" /> */}
                        <label>
                            <input type="checkbox" className='hidden' onChange={e => setCheck(e.target.checked)} />
                            <img src={greenArrow} className={`w-[29px] mx-auto mt-[15px] cursor-pointer ${check ? 'rotate-180' : 'rotate-0'}`} alt="" />
                            {/* {document.getElementById(name + 2 + 'check')?.checked && <img src={greenArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer rotate-180' alt="" />} */}
                        </label>
                        <div className='mx-[10px]'>
                            <a href={link} className='py-[12px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[11px] font-medium' style={{ backgroundImage: `url(${greenBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>{linkText}</a>
                        </div>
                    </div>)}
                </ReactOwlCarousel>
            </div>
        </div>
    );
};

export default Services;