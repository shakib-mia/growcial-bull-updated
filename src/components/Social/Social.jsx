import React, { useRef } from 'react';
import facebook from "./../../assets/icons/facebook.png"
import insta from "./../../assets/icons/instagrm-stroke.png"
import telegram from "./../../assets/icons/telegram-fill.png"
import whatsapp from "./../../assets/icons/whatsapp.png"
// import call from './../../assets/Sticky Call.png'

const Social = () => {
    // const [onScreen, setOnScreen] = useState(false)
    // window.addEventListener('scroll', () => {
    //     setOnScreen(document.getElementById('social').getBoundingClientRect().top < window.innerHeight);
    // })
    const instaRef = useRef(null)
    const teleRef = useRef(null)
    const fbRef = useRef(null)


    return (
        <>
            <div className='text-center pt-[120px] py-[100px] lg:py-[130px] relative' id='contact-container'>
                <div className="relative h-[51px]">
                    {/* <h1 className='text-[51px] lg:text-[80px] font-black text-[#83ff8f] blur-[2px] lg:blur-[4px] absolute left-0 right-0 m-auto'>Contact</h1> */}
                    <h1 className='text-[51px] lg:text-[80px] font-black text-[#83ff8f] absolute left-0 right-0 m-auto'>Contact</h1>
                </div>
                <div className="flex items-center justify-center gap-[50px] lg:gap-[80px] mt-[48px] lg:mt-[107px]" id='social'>
                    <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                        <img className='drop-shadow-[0_0_2px_#83ff8f] w-[26px] lg:w-[55px] hover:scale-[1.5] transition' src={insta} ref={instaRef} alt="" />
                    </a>
                    <a href="https://t.me/growcialbull" target='_blank' rel='noreferrer'>
                        <img className='drop-shadow-[0_0_2px_#83ff8f] w-[36px] lg:w-[70px] hover:scale-[1.5] transition' src={telegram} ref={teleRef} alt="" />
                    </a>
                    <a href="https://www.facebook.com/Growcialbull?mibextid=ZbWKwL" target='_blank' rel='noreferrer'>
                        <img className='drop-shadow-[0_0_2px_#83ff8f] w-[18px] lg:w-[30px] hover:scale-[1.5] transition' src={facebook} ref={fbRef} alt="" />
                    </a>
                </div>
                {/* <a href="https://wa.me/+919999631995" className='hidden lg:block' target='_blank' rel='noreferrer'>
                    <img className={`drop-shadow-[0_0_4px_#83ff8f] w-[30px] lg:w-[55px] hover:scale-[1.5] transition-[2s] right-5 lg:left-auto lg:right-[51px] ${!onScreen ? 'fixed bottom-[52px]' : 'absolute bottom-0'}`} src={whatsapp} alt="" />
                </a> */}

                <a href="https://wa.me/+919999631995" target='_blank' rel='noreferrer'>
                    <img className={`drop-shadow-[0_0_4px_#83ff8f] w-[30px] lg:w-[55px] hover:scale-[1.5] transition-[2s] left-5 lg:left-auto lg:right-[51px] fixed bottom-[52px] z-[9999]`} src={whatsapp} alt="" />
                </a>
                {/* <p className='fixed bottom-[52px] lg:hidden right-[19px]'>
                    <a href="tel:+919999631995">
                        <img src={call} className='w-[30px] lg:w-[55px] ' alt="" />
                    </a>
                </p> */}
                {/* <div className={!onScreen && "fixed bottom-0"}>
                    whatsapp
                </div> */}
            </div>
        </>
    );
};

export default Social;