import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { contents } from '../../Blogscontent';
import Blog from '../Blog/Blog';
import ReactOwlCarousel from 'react-owl-carousel';


const Blogs = () => {
    const location = useLocation();
    const blogs = location.pathname === '/' || location.pathname === '/about-us' || location.pathname === '/plans' || location.pathname === '/facts' || location.pathname === '/referral' || location.pathname === '/faq' ? contents.slice(0, 4) : contents;

    // alert(contents.length)

    return (
        <div className={`py-[74px] pb-[90px] lg:pt-[110px] lg:pb-[222px] px-[31px] lg:px-[116px] overflow-x-hidden`} id={`${location.pathname === '/' ? 'blogs' : 'blog-page'}`}>
            <h1 className='text-[48px] text-right lg:text-left lg:text-[68px] text-[#83FF8F] drop-shadow-[0_0_2px] font-bold font-["Poppins sans-serif"]'>Blogs</h1>
            <h6 className='font-["Poppins sans-serif"] text-right lg:text-left font-medium lg:font-black text-[12px] lg:text-[24px] opacity-60'>Read Blogs that will inspire and educate you to earn money !!</h6>

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-x-[296px] mt-[70px]">
                {blogs.map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
            </div>

            <div className="bg-[#05052080] lg:hidden px-[22px] py-[32px] rounded-[16px] mt-[31px]">
                <ReactOwlCarousel dots items={1}>
                    <div className='w-full'>
                        {/* {contents.length} */}
                        {contents.slice(0, 3).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                    </div>

                    <div className='w-full'>
                        {contents.slice(3, 6).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                    </div>

                    {location.pathname === '/blogs' && <>
                        <div className='w-full'>
                            {contents.slice(6, 9).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                        </div>

                        <div className='w-full'>
                            {contents.slice(9, 12).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                        </div>

                        <div className='w-full'>
                            {contents.slice(12, 15).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                        </div>

                        <div className='w-full'>
                            {contents.slice(15, 18).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                        </div>

                        <div className='w-full'>
                            {contents.slice(18, 21).map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
                        </div>
                    </>}
                </ReactOwlCarousel>
            </div>

            {location.pathname === '/' || location.pathname === '/about-us' || location.pathname === '/plans' || location.pathname === '/facts' || location.pathname === '/referral' || location.pathname === '/faq' ? <div className="text-center mt-[86px]">
                <NavLink to='/blogs' className="text-[#fff] border border-[#83FF8F] px-[24px] py-[18px] rounded-full hover:bg-[#83FF8F] hover:text-black transition-all">Read more blogs &rarr;</NavLink>
            </div> : <></>}
        </div>
    );
};

export default Blogs;