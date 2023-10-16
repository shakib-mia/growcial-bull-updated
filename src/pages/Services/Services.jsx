import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import ServiceItem from '../../components/ServiceItem/ServiceItem';
import ServicesSlide from '../../components/ServicesSlide/ServicesSlide';

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

        name: 'Premium', offers: [
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
            "Position Sizing",
            "How To Entry, Exit & Targets",
            "Trading Psychology Buildup",
            "Live & Recorded Interactive Class",
        ],
        link: 'https://cosmofeed.com/view_ch/04b73455-a8df-4972-9f66-7de76eb9a3ee',
        linkText: <>&#8377; 9999</>
    }, {
        name: "Standard", offers: [
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
                {plans.map((props, key) => <ServiceItem {...props} setService={setService} service={service} key={key} />)}
            </div>

            {/* small device */}

            <div className="lg:hidden z-0">
                <ReactOwlCarousel items={1.4} center theme loop dots={true} margin={15} startPosition={1} autoplayHoverPause>
                    {plans.map((props, key) => <ServicesSlide {...props} key={key} />)}
                </ReactOwlCarousel>
            </div>
        </div>
    );
};

export default Services;