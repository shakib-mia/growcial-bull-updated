import React, { useEffect, useRef, useState } from "react";
import activeIcon from "./../../assets/active-icon.png";
import Hamburger from "../Hamburger/Hamburger";
import gsap from "gsap";
import logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setEnrollVisible }) => {
  const [hamcheck, setHamCheck] = useState(false);
  const activeIconRef = useRef(null);
  const phoneNavRef = useRef(null);

  useEffect(() => {
    gsap.to(activeIconRef.current, {
      left:
        document.getElementById("home") &&
        document.getElementById("home").getBoundingClientRect()?.left - 25,
      opacity: 1,
      delay: 1,
      duration: 0.5,
    });

    gsap.to(phoneNavRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  const navLeft = useRef(null);
  const navRight = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navLeft.current,
      {
        left: "-50vw",
      },
      {
        left: 0,
        duration: 1,
      }
    );

    gsap.fromTo(
      navRight.current,
      {
        right: "-50vw",
      },
      {
        right: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div
      className="flex justify-between items-center px-3 lg:px-[80px] lg:py-[29px] absolute top-0 w-screen"
      id="navbar"
    >
      <NavLink to="/" className="w-1/4 lg:w-1/12 relative" ref={navLeft}>
        <img className="" src={logo} alt="Growcial Bull" />
      </NavLink>

      {/* Large Device navbar */}

      <nav className="z-50 w-11/12 relative" ref={navRight}>
        <ul className="lg:flex justify-end hidden">
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/homepage" id="home">
              Home
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/about-us" id="about">
              About Us
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/plans" id="services-nav">
              Our plans
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/facts" id="our-facts">
              Our facts
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/blogs" id="blogs-section">
              Blogs
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/referral" id="referral-section">
              Referral
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/contact" id="contact-us">
              Contact
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>

          <li className="px-[40px] text-[#8383FFC4] text-[18px] font-medium relative">
            <Link to="/faq" id="faq">
              FAQ
            </Link>
            <img
              src={activeIcon}
              alt="active-icon"
              className="active-icon w-[100px] absolute left-0 right-0 m-auto h-auto bottom-18"
            />
          </li>
        </ul>

        {/* {active && <img src={activeIcon} alt="active-icon" className='active-icon w-[100px] absolute h-auto bottom-18' />} */}
      </nav>
      <div className="lg:hidden fixed top-0 right-2 z-[9999999999] cursor-pointer">
        <Hamburger hamcheck={hamcheck} setHamCheck={setHamCheck} />
      </div>

      {/* Small Device Navbar */}

      <nav className="fixed top-0 z-[999999999] w-full left-0">
        {hamcheck && (
          <ul
            className="lg:hidden justify-end w-screen h-screen backdrop-blur-xl pt-10 text-center"
            ref={phoneNavRef}
          >
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link onClick={() => setHamCheck(false)} to="/homepage" id="home">
                Home
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link
                onClick={() => setHamCheck(false)}
                to="/about-us"
                id="about"
              >
                About Us
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link
                onClick={() => setHamCheck(false)}
                to="/plans"
                id="services-nav"
              >
                Our plans
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link
                onClick={() => setHamCheck(false)}
                to="/facts"
                id="our-facts"
              >
                Our facts
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link
                onClick={() => setHamCheck(false)}
                to="/blogs"
                id="blogs-section"
              >
                Blogs
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link
                onClick={() => setHamCheck(false)}
                to="/referral"
                id="referral-section"
              >
                Referral
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link
                onClick={() => setHamCheck(false)}
                to="/contact"
                id="contact-us"
              >
                Contact
              </Link>
            </li>
            <li className="px-[10px] py-[20px] text-[#fff] text-[18px] font-medium">
              <Link onClick={() => setHamCheck(false)} to="/faq" id="faq">
                FAQ
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
