import React, { useEffect } from 'react';
import Contact from '../../components/Contact/Contact';
import EnrollContent from '../../components/EnrollContent/EnrollContent';
import Header from '../../components/Header/Header';
import Testimonials from '../../components/Testimonials/Testimonials'
import Services from './../../pages/Services/Services'
import Blogs from './../../components/Blogs/Blogs';
import Referral from '../../components/Referral/Referral';
import { useLocation } from 'react-router-dom';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = ({ enrollVisible, setEnrollVisible }) => {
    const location = useLocation();

    useEffect(() => {
        const id = location.pathname.slice(1, location.pathname.length)
        if (location.pathname && id) {
            window.scrollTo(0, document.getElementById(id).offsetTop)
        }
    }, [location.pathname])

    return (
        <div id='home' className='z-0 mx-auto'>
            <Header />
            <AboutUs />
            <Services />
            <Testimonials />
            {/* <AboutUs /> */}
            <div id="blogs-and-referral">
                <Blogs />
                <Referral />
            </div>
            <Contact />
            {enrollVisible && <EnrollContent setEnrollVisible={setEnrollVisible} />}
            {/* <Footer /> */}
        </div>
    );
};

export default Home;