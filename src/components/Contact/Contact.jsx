import React, { useRef, useState } from 'react';
import pindrop from "./../../assets/pin-drop.png"
import mail from "./../../assets/email.png"
import phone from "./../../assets/phone.png"
import InputField from '../InputField/InputField';
import TextArea from '../TextArea/TextArea';
import emailjs from "@emailjs/browser"
import Social from './../../components/Social/Social';
import Footer from '../Footer/Footer';
import clock from './../../assets/clock.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        toast.success('Email Sent Successfully', {
            position: 'bottom-right'
        })

        emailjs.sendForm("service_0ik2v69", "template_r8u7i08", e.target, 'EseChxnmvljPhAbuW')
            .then(data => {
                if (data.status === 200) {
                    e.target.reset();
                    toast.success('Email Sent Successfully', {
                        position: 'bottom-right'
                    })
                }
            })
            .then(err => console.error(err))
    }

    const leftRef = useRef(null);
    const headRef = useRef(null);
    const rightRef = useRef(null);
    const paraRef = useRef(null);
    const addressRef = useRef(null);
    const emailRef = useRef(null);
    const contactRef = useRef(null);
    const operationRef = useRef(null);
    const [accept, setAccept] = useState(false)

    return (
        <div className=' overflow-x-hidden bg-[length:35%]' id='contact'>

            <Social />
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-[139px] lg:text-left' id='contact-section'>
                <aside className='lg:w-2/3' ref={leftRef}>
                    {/* <h5 className='font-black text-[15px] lg:text-[20px] relative'>CONTACT DETAILS</h5> */}
                    <h3 className='font-black text-[28px] lg:text-[40px] relative text-center lg:text-left' ref={headRef}>Get in Touch</h3>
                    <p className='mt-[5px] text-[14px] lg:text-[17px] relative text-center lg:text-left mx-[34px] lg:mx-0' ref={paraRef}>Have any queries? or want to know more?Contact us and we will be happy to help.</p>

                    {/* <div className='pt-[20px] pl-[17px] lg:pl-0'> */}
                    <div className="flex flex-col lg:flex-row items-center gap-[5px] lg:gap-[72px] mt-[25px] lg:relative" ref={addressRef}>
                        <aside>
                            <img src={pindrop} className="w-[32px] h-auto hover:scale-125 transition-[1s]" alt="" />
                        </aside>

                        <aside>
                            <h2 className='text-[18px] lg:text-[20px] leading-[25px] font-black text-center lg:text-left'>Our Address</h2>
                            <p className='text-[16px] lg:text-[15px] mt-[5px] text-center lg:text-left leading-[18px]'>748 Pocket-P 5th Floor <br />
                                sector 40, Gurgaon 122022</p>
                        </aside>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-[5px] lg:gap-[72px] mt-4 lg:mt-[25px] relative" ref={emailRef}>
                        <aside>
                            <img src={mail} className="w-[32px] h-auto hover:scale-125 transition-[1s]" alt="" />
                        </aside>

                        <aside>
                            <h2 className='leading-[25px] text-[20px] lg:text-[20px] font-black text-center lg:text-left'>Email</h2>
                            <a href='mailto:Info@growcialbull.com' className='text-[16px] lg:text-[15px] mt-[5px] inline-block text-center lg:text-left leading-[18px]'>Info@growcialbull.com</a>
                        </aside>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-[5px] lg:gap-[72px] mt-4 lg:mt-[25px] relative" ref={contactRef}>
                        <aside>
                            <img src={phone} className="w-[32px] h-auto hover:scale-125 transition-[1s]" alt="" />
                        </aside>

                        <aside>
                            <h2 className='leading-[25px] text-[20px] lg:text-[20px] font-black text-center lg:text-left'>Contact</h2>
                            <p className='text-[16px] lg:text-[15px] mt-[5px] text-center lg:text-left leading-[18px]'>
                                <a href="tel:+919999631995">+91 99996-31995</a>
                            </p>
                        </aside>
                    </div>
                    {/* </div> */}
                    <div className='flex flex-col lg:flex-row items-center gap-[5px] lg:gap-[72px] mt-4 lg:mt-[30px] relative' ref={operationRef}>
                        <aside>
                            <img src={clock} className="w-[36px] h-auto hover:scale-125 transition-[1s]" alt="" />
                        </aside>

                        <aside>
                            <h2 className='leading-[25px] text-[14px] lg:text-[20px] font-black text-center lg:text-left'>Hours of Operation</h2>
                            <p className='text-[10px] lg:text-[15px] mt-[5px] font-medium text-center lg:text-left leading-[18px]'>Everyday : 10:00 AM - 07:00 PM IST</p>
                        </aside>
                    </div>
                </aside>
                <div className="px-[34px] pb-[90px]" id='form'>
                    <div className='bg-[#8383FF] mx-[5px] lg:mx-0 px-[18px] py-[20px] lg:pl-[50px] lg:pr-[45px] lg:pt-[34px] lg:pb-[36px] mt-5 lg:mt-0 rounded-[12px] lg:rounded-[29px] relative z-0' ref={rightRef}>
                        <h1 className='text-[18px] lg:text-[40px] mb-[4px] font-black text-center lg:text-left leading-[50.48px]'>Ready to get started?</h1>
                        <p className='text-[10px] lg:text-[17px] font-medium text-center lg:text-left leading-[20px]'>Fill Up The Form to get a Call from our Academic Counselor & to Download our Brochure*</p>

                        <form className='mt-[11px] lg:mt-[24px]' onSubmit={handleFormSubmit}>
                            <InputField className="focus:outline-none text-black w-full bg-[#D9D9D9] placeholder:text-[rgba(131,131,255,90%)] placeholder:font-medium placeholder:text-[8px] lg:placeholder:text-[16px] py-[7px] px-[6px] lg:px-[12px] text-[8px] lg:text-[19px] mb-[8px] lg:mb-[19px]" placeholder="Name" name="from_name" />
                            <InputField className="focus:outline-none text-black w-full bg-[#D9D9D9] placeholder:text-[rgba(131,131,255,90%)] placeholder:font-medium placeholder:text-[8px] lg:placeholder:text-[16px] py-[7px] px-[6px] lg:px-[12px] text-[8px] lg:text-[19px] mb-[8px] lg:mb-[21px]" placeholder="Mobile" name="from_mobile" />
                            <InputField className="focus:outline-none text-black w-full bg-[#D9D9D9] placeholder:text-[rgba(131,131,255,90%)] placeholder:font-medium placeholder:text-[8px] lg:placeholder:text-[16px] py-[7px] px-[6px] lg:px-[12px] text-[8px] lg:text-[19px] mb-[8px] lg:mb-[22px]" placeholder="Email ID" name="from_email" />
                            <TextArea className="focus:outline-none text-black w-full bg-[#D9D9D9] placeholder:text-[rgba(131,131,255,90%)] placeholder:font-medium placeholder:text-[8px] lg:placeholder:text-[16px] py-[7px] px-[6px] lg:px-[12px] text-[8px] lg:text-[19px] overflow-hidden" rows={1} placeholder="Message" name="message" />
                            <div className='pt-[11px] pb-[16px] lg:py-[27px] flex items-center gap-[9px]'>
                                <input type="checkbox" onChange={e => setAccept(e.target.checked)} id='check' />
                                {/* <label className='text-[12px] lg:text-[16px] font-medium' htmlFor="check">Accept <a className='underline hover:no-underline' target="_blank" rel='noreferrer' href="https://boomingbulls.com/terms-conditions/">terms</a> and <a className='underline hover:no-underline' target="_blank" rel='noreferrer' href="https://boomingbulls.com/terms-conditions/">privacy policy</a>.</label> */}
                                <label className='text-[12px] lg:text-[16px] font-medium' htmlFor="check">Accept <a className='underline hover:no-underline' rel='noreferrer' href="/policies">terms</a> and <a className='underline hover:no-underline' href='/policies'>privacy policy</a>.</label>
                            </div>

                            <input type="submit" value="Send Message" disabled={!accept} className='bg-[#434399] text-white lg:px-[24px] px-[14px] lg:py-[12px] py-[2px] rounded-[6px] cursor-pointer disabled:cursor-auto disabled:bg-[#4343998c] text-[12px] lg:text-[18px] font-semibold' />

                            {/* <div className="flex justify-center items-center gap-3">
                        <div className='bg-white h-[1px] w-[40%]'></div>
                        <div>or</div>
                        <div className='bg-white h-[1px] w-[40%]'></div>
                    </div> */}

                            {/* <div className="flex flex-col justify-center items-end gap-5 mt-3 fixed bottom-24 right-14 z-auto">
                        <a href={`https://wa.me/+919999631995`} className="ring-1 ring-[#25D366] transition-all hover:bg-[#25D366] rounded-full flex items-center p-[10px]" target="_blank" rel='noreferrer' onMouseEnter={() => setWhatsappShow(true)} onMouseLeave={() => setWhatsappShow(false)}>
                            <img src={whatsapp} className="w-[28px] rounded-full" alt="" />
                            {whatsappShow && <span className='text-white'>+919999631995</span>}
                        </a>
                        <a href="tel:+919999631995" className='ring-1 ring-white rounded-full transition-all hover:bg-white flex items-center p-[10px]' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                            <img src={show ? makeCallDark : makeCall} className="w-[28px]" alt="" />
                            {show && <span className='text-black'>+919999631995</span>}
                        </a>
                        <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=">
                            <img
                                src={instagramImage}
                                onMouseEnter={() => setInstagramImage(instagramStroke)}
                                onMouseLeave={() => setInstagramImage(instagramFill)}
                                className="w-[48px] cursor-pointer rounded-full"
                                alt=""
                            />
                        </a>
                        <a href="https://t.me/growcialbull">
                            <img
                                src={telegramImage}
                                onMouseEnter={() => setTelegramImage(telegramStroke)}
                                onMouseLeave={() => setTelegramImage(telegramFill)}
                                className="w-[48px] cursor-pointer"
                                alt=""
                            />
                        </a>
                    </div> */}
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;