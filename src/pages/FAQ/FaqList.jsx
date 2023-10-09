import React from 'react';
import { Collapse } from "react-collapse"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
//import { MdQuestionMark } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Faqlist = ({ open, toggle, title, details }) => {
    return (
        <>
            <div className='pt-[4px]'>
                <div className='bg-[#1e1e5f] py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded-lg' onClick={toggle}>

                    <p className='text-[16px] lg:text-[22px] font-semibold flex justify-between'>{title}</p>
                    <div className='text-[30px] '>
                        {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                    </div>
                </div>

                <Collapse isOpened={open}>
                    <div className='bg-[#5959c0] px-[40px] pb-[30px]'>
                        <br /> <BsFillArrowRightCircleFill /> <br /> {details}

                    </div>

                </Collapse>

            </div>
        </>
    )
}

export default Faqlist