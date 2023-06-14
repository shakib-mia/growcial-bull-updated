import React from 'react';

const Fact = ({ heading, description, id }) => {
    return (
        <>
            {id === 0 ? <div className={` ${id === 2 ? 'lg:text-right lg:w-5/12' : id === 1 ? 'lg:text-center w-auto' : 'lg:text-left w-auto'}`}>
                <h1 className='text-[38px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_1px]'>{heading}</h1>
                <p className={`text-[18px] lg:text-[20px] font-medium ${id !== 2 && 'text-center'}`}>{description}</p>
            </div> : <>
                <div className={` ${id === 2 ? 'lg:text-right lg:w-5/12' : id === 1 ? 'lg:text-center w-auto' : 'lg:text-left w-auto'}`}>
                    <h1 className='text-[38px] lg:text-[80px] font-bold text-[#8383FF] drop-shadow-[0_0_1px]'>{heading}</h1>
                    <p className={`text-[18px] lg:text-[20px] font-medium ${id !== 2 && 'text-center'}`}>{description}</p>
                </div>
            </>}
        </>
    );
};

export default Fact;