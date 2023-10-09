import React from 'react';
import { useState } from 'react';
import Faqlist from './FaqList';
// import Faqlist from './Faqlist';
//import FaqItem from './FaqItem'

export default function FAQ() {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const accordionData = [
        {
            title: "1.  What does Growcialbull offer?",
            details: "Growcialbull offers online courses exclusively on trading in the stock market, providing our students with in-depth knowledge and expertise in this field. We take pride in teaching our own proprietary trading strategies and techniques to help our students achieve their financial goals."
        },

        {
            title: "2.  Who can benefit from Growcialbull's courses?",
            details: "Anyone who is interested in learning about trading in the financial markets can benefit from our courses, whether they are beginners or experienced traders looking to improve their skills and strategies. "
        },

        {
            title: "3.  How can I access Growcialbull's courses? ",
            details: "Our courses are available online and can be accessed through our website. Once you purchase a course, you will have lifetime access to its materials. "
        },

        {
            title: "4.  What sets Growcialbull apart from other trading education providers? ",
            details: "Our trading strategies are unique and have been developed by trader(Mr. Vikash Chaudhary). We also provide ongoing support to our students through our online community and social media channels."
        },
        {
            title: "5.  What is the cost of Growcialbull's courses? ",
            details: "The cost of our courses varies depending on the market and level of expertise you are interested in. We also offer discounts and promotions from time to time, so be sure to check our website and social media channels for updates. "
        },

        {
            title: "6.  How can I get in touch with the Growcialbull team?",
            details: "You can contact us through our website or through our social media channels on Instagram, Facebook, and Telegram. We also have a community forum where you can connect with other traders and get support."
        },

        {
            title: "7.  How long does each course last? ",
            details: "The duration of each course is clearly outlined on our website, so you can choose the course that best fits your schedule and needs. Additionally, we offer one-to-one chat and personal training sessions to help you stay on track and achieve your goals."
        }
    ]




    return (
        <>
            <section className='h-screen pt-44'>
                <div className='px-[20px] w-11/12 xl:max-w-[1000px] mx-auto'>

                    {accordionData.map((data, index) => {
                        return (

                            <Faqlist key={index}
                                open={index === open}
                                title={data.title}
                                details={data.details}
                                toggle={() => toggle(index)}
                            />)

                    })}


                </div>
            </section>

        </>
    )
}

// export default FAQ