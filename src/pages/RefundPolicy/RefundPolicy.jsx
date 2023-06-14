import React from 'react';

const RefundPolicy = () => {
    return (
        <div id="refund-policy">
            <h1 className='text-[18px] lg:text-[28px] font-black text-center pt-10'>Refund Policy</h1>
            <div className=' px-5 lg:px-32 mx-auto'>
                <p className='text-md mb-10 text-center'>
                    Refund and Cancellation Policy <br />
                    Last updated: April 12, 2023 <br />
                    Thank you for choosing Growcialbull.
                </p>

                <h2 className='text-[18px] lg:text-[28px] font-medium mt-4'>Conditions for Refund</h2>
                <p className="lg:text-xl">We offer exceptional learning experiences through our plans at Growcialbull. As with any online purchase experience, the below are the terms and conditions that govern the Refund Policy. When you buy a plan on Growcialbull, you agree to our Privacy Policy, Terms of Use and the conditions covered below.</p>

                <h2 className='text-[18px] lg:text-[28px] font-medium mt-4'>Cancellation & Refunds: Online Training</h2>
                <p className="lg:text-xl">There is no cancellation or refund available once you access the plan due to the confidential nature of the information and videos shared. Our thing is confidential, and the purchase of a plan enables access to the videos and other confidential information that cannot be refunded.</p>
                <h2 className='text-[18px] lg:text-[28px] font-medium mt-4'>Refunds: Duplicate payment</h2>
                <p className="lg:text-xl">Refund of the duplicate payment made by the customer will be processed via the same source (original method of payment) within 7 to 21 working days after intimation by the customer.</p>
                <p className="lg:text-xl mt-4 lg:w-1/2">If you have any questions about our Returns and Refunds Policy, please contact us at <a href="mailto:info@growcialbull.com" className='underline hover:no-underline'>info@growcialbull.com</a>.</p>
            </div>
        </div>
    );
};

export default RefundPolicy;