import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Blog = ({ image, heading, text, link, id }) => {
    // console.log(id);
    const blogRef = useRef(null)

    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/') {
            if (id % 2 === 0) {
                gsap.fromTo(blogRef.current, {
                    left: '140vw',
                    opacity: 0
                }, {
                    left: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: location.pathname === '/' && '#blogs'
                    }
                })
            } else {
                gsap.fromTo(blogRef.current, {
                    left: '-40vw',
                    opacity: 0
                }, {
                    left: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: location.pathname === '/' && '#blogs'
                    }
                })
            }
        }
    }, [id, location])

    const [fullHeading, setFullHeading] = useState(false)

    return (
        <div className='flex flex-row items-center gap-[9px] lg:gap-[60px] relative mb-[58px] lg:mb-0' id={id} ref={blogRef}>
            <a href={link}>
                <img src={image} alt={heading} className="w-[155px] h-[95px] rounded-[8px] lg:hover:scale-[1.325] transition" />
            </a>
            <aside>
                <h1 className='text-[16px] lg:text-[24px] font-medium'>
                    {fullHeading ? <>{heading} <span className=' text-green-500 cursor-pointer' onClick={() => setFullHeading(false)}> read less</span></> : <>{heading.slice(0, 20)} <span className='cursor-pointer' onClick={() => setFullHeading(true)}>...</span></>}
                </h1>
                <p className='text-[8px] text-[#83FF8F] lg:text-[18px] opacity-60 mt-[4px] mb-[12px]'>{text.slice(0, 100)}...</p>
                <a href={link} className="text-[11px] lg:text-[18px] text-white">Learn more</a>
            </aside>
        </div>
    );
};

export default Blog;