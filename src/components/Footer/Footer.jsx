import React from 'react';
import logo from './../../assets/footer-logo.png';
import insta from "./../../assets/icons/instagrm-stroke.png";
import telegram from "./../../assets/icons/telegram-fill.png";
import facebook from "./../../assets/icons/facebook.png";
import location from './../../assets/footer-location.png';
import phone from './../../assets/phone-green.png';
import email from './../../assets/message-green.png';
import arrow from './../../assets/green-arrow.png';
import 'react-toastify/dist/ReactToastify.css';


import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    const emailVerification = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

    const handleSubscribe = (e) => {
        e.preventDefault()

        if (emailVerification.test(e.target.email.value)) {
            emailjs.sendForm("service_0ik2v69", "template_8csw31j", e.target, 'EseChxnmvljPhAbuW')
                .then(data => {
                    if (data.status === 200) {
                        e.target.reset();
                        toast.success('Thanks for Subscribe!!!', {
                            position: 'bottom-right'
                        })
                    }
                })
                .then(err => console.error(err))
        } else {
            toast.warn('Email is not valid', {
                position: 'bottom-right'
            })
        }
    }


    return (
        <>
            <div className='relative hidden lg:block'>
                <footer>
                    <div className='bg-[#05052061] flex flex-col lg:flex-row lg:items-center lg:justify-center px-[20px] lg:px-[62px] py-[70px] text-[15px]'>
                        <aside className='lg:w-5/12'>
                            <img src={logo} alt="footer-logo" className='w-1/2' />
                        </aside>
                        <aside className='lg:w-7/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <aside>
                                <h2 className='font-black text-[#8383FF] mb-[20px]'>Explore</h2>
                                <ul>
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </li>
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                    </li>
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/plans">Our Plans</NavLink>
                                    </li>
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/referral">Referral</NavLink>
                                    </li>

                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/faq">FAQ</NavLink>
                                    </li>
                                </ul>
                            </aside>

                            <aside>
                                <h2 className='font-black text-[#8383FF] mb-[20px]'>Resource</h2>
                                <ul>
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/testimonials">Testimonial</NavLink>
                                    </li>
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/policies#disclaimer">Disclaimer</NavLink>
                                    </li>
                                    {/* <li className='mb-[20px] text-[#83FF8F]'>Contact</li> */}
                                    <li className='mb-[20px] text-[#83FF8F]'>
                                        <NavLink to="/policies">Privacy Policy</NavLink>
                                    </li>
                                    <li className='mb-[7px] text-[#83FF8F]'>
                                        <NavLink to="/policies#refund-policy">Refund Policy</NavLink>
                                    </li>
                                </ul>
                            </aside>

                            <aside className='hidden lg:block'>
                                <h2 className='font-black text-[#8383FF] mb-[20px]'>Address</h2>
                                <ul>
                                    <li className='mb-[20px] text-[#83FF8F] flex items-center gap-4'>
                                        <img className='w-[8px] lg:w-[19px] lg:h-auto' src={location} alt="" />
                                        <p>748 Pocket-P 5th Floor <br />
                                            sector 40, Gurgaon 122022</p>
                                    </li>
                                    <li className='mb-[20px] text-[#83FF8F] flex items-center gap-4'>
                                        <img className='w-[8px] lg:w-[19px] lg:h-auto' src={phone} alt="" />
                                        <a href='tel:+91 99996-31995'>+91 99996-31995</a>
                                    </li>
                                    <li className='mb-[20px] text-[#83FF8F] flex items-center gap-4'>
                                        <img className='w-[8px] lg:w-[19px] lg:h-auto' src={email} alt="" />
                                        <a href="mailto:Info@growcialbull.com">Info@growcialbull.com</a>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-[25px]" id='social'>
                                            <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[14px] hover:scale-150 transition' src={insta} alt="" />
                                            </a>
                                            <a href="https://t.me/growcialbull" target='_blank' rel='noreferrer'>
                                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[18px] hover:scale-150 transition' src={telegram} alt="" />
                                            </a>
                                            <a href="https://www.facebook.com/Growcialbull?mibextid=ZbWKwL" target='_blank' rel='noreferrer'>
                                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[8px] hover:scale-150 transition' src={facebook} alt="" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </aside>
                        </aside>
                    </div>
                </footer>
                <div className='mt-10 lg:mt-[4px] pb-20'>
                    <h5 className='text-[#8383FF] font-bold text-center'>Subscribe to Our Newsletter</h5>
                    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0 lg:justify-center lg:px-[124px] mt-[15px]">
                        <p className='w-11/12 lg:w-1/3 mx-auto text-[#8383FF] font-medium'>
                            © 2021-2023 <span className='font-black'>GROWCIAL BULL</span>. All rights reserved.
                        </p>
                        <form className='flex items-center gap-[15px] w-1/3 justify-center' onSubmit={handleSubscribe}>
                            <input type="email" name='email' className='border-[2px] border-[#8383FF] px-[16px] py-[8px] bg-[#FFFFFF21] rounded-full focus:outline-0' placeholder='Email' />
                            <button className='bg-[#8383FF] px-[16px] py-[6px] rounded-full'>Subscribe</button>
                        </form>
                        <NavLink to="/policies" className='text-[#8383FF] text-[16px] inline-block lg:w-1/3 text-right'>
                            Terms & conditions
                        </NavLink>
                    </div>
                </div>

                <button onClick={() => window.scrollTo(0, 0)}>
                    <img src={arrow} className='absolute bottom-[137px] right-[61px] rotate-180 w-[32px]' alt="arrow" />
                </button>
            </div>

            <div id='footer-phone'>
                <footer className='lg:hidden relative bg-[#05052061]'>
                    <img src={logo} className='w-2/3 mx-auto' alt="" />
                    <h5 className='text-[#8383FF] font-bold text-center mt-[8px] text-[18px]'>Subscribe to Our Newsletter</h5>
                    <form className='flex items-center gap-[12.5px] justify-center mb-[38px] mt-[11px]' onSubmit={handleSubscribe}>
                        <input type="email" name='email' className='border-[1px] border-[#8383FF] px-[15px] py-[10px] bg-[#FFFFFF21] rounded-full focus:outline-0 text-[8px] font-semibold w-7/12' placeholder='Email' />
                        <button className='bg-[#8383FF] px-[22px] py-[6px] rounded-full text-[12px] font-semibold'>Subscribe</button>
                    </form>

                    <div className="flex gap-[89px] px-[68px] text-[12px] font-light justify-center">
                        <aside>
                            <h2 className='font-black text-[#8383FF] mb-[18px]'>Explore</h2>
                            <ul className='list-disc'>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/about-us">About Us</NavLink>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/blogs">Blogs</NavLink>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/plans">Our Plans</NavLink>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/referral">Referral</NavLink>
                                </li>
                            </ul>
                        </aside>

                        <aside>
                            <h2 className='font-black text-[#8383FF] mb-[18px]'>Resource</h2>
                            <ul className='list-disc'>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/testimonials">Testimonial</NavLink>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/policies#disclaimer">Disclaimer</NavLink>
                                </li>
                                {/* <li className='mb-[7px] text-[#83FF8F]'>Contact</li> */}
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/policies">Privacy Policy</NavLink>
                                </li>
                                <li className='mb-[20px] text-[#83FF8F]'>
                                    <NavLink to="/faq">FAQ</NavLink>
                                </li>
                            </ul>
                        </aside>
                    </div>


                    <button onClick={() => window.scrollTo(0, 0)}>
                        <img src={arrow} className='absolute bottom-[38px] right-[23.82px] rotate-180 w-[32px]' alt="arrow" />
                    </button>
                    {/* <Social /> */}
                    <div className="flex items-center justify-center gap-[80px] mt-[55px]" id='social'>
                        <div className="flex items-center gap-[25px]" id='social'>
                            <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[14px] hover:scale-150 transition' src={insta} alt="" />
                            </a>
                            <a href="https://t.me/growcialbull" target='_blank' rel='noreferrer'>
                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[18px] hover:scale-150 transition' src={telegram} alt="" />
                            </a>
                            <a href="https://www.facebook.com/Growcialbull?mibextid=ZbWKwL" target='_blank' rel='noreferrer'>
                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[8px] hover:scale-150 transition' src={facebook} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-between px-[5px] text-[#8383ff] text-[7px] mt-[26px]">
                        <p>
                            © 2021-2023 <span className='font-medium'>GROWCIAL BULL</span>. All rights reserved.
                        </p>

                        <p>
                            <NavLink to="/policies">Terms & conditions</NavLink>
                        </p>
                    </div>

                    <div className='h-[1px] w-screen bg-[#83FF8F] mt-[9px] mb-2'></div>
                </footer>
            </div>

            <ToastContainer />
        </>
    );
};

export default Footer;