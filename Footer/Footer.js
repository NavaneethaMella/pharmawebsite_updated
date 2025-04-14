'use client'
import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
//import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/Fa';
//import FaLinkedin from 'react-icons/fa/FaLinkedin';
//import FaTwitter from 'react-icons/fa/FaTwitter';
//import FaFacebook from 'react-icons/fa/FaFacebook';
//import FaInstagram from 'react-icons/fa/FaInstagram';
/*import dynamic from 'next/dynamic';

const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), { ssr: false });
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter), { ssr: false });
const FaFacebook = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });*/

/*const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState({ type: "", message: "" });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscriptionStatus({ type: "error", message: "Please enter your email address" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }
    setSubscriptionStatus({ type: "success", message: "Thank you for subscribing!" });
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Logo and Navigation *//*}
        <div className="py-8 border-b border-black-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                alt="MBS Pharma Logo"
                className="h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150x50?text=MBS+Pharma";
                }}
              />
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
                {["Home", "About", "FAQs", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition duration-300" 
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Section 2: Company Info and Quick Links *//*}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Company</h3>
            <p className="mb-4">Leading pharmaceutical company dedicated to improving global health through innovative medical solutions.</p>
            <div>
              <p className="mb-2">Email: info@mbspharmas.com</p>
              <p>Phone: +1 760 845 1576</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Company", "Services", "Resources", "Events", "Support"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and updates</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-blue-700 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {subscriptionStatus.message && (
                <p
                  className={`text-sm ${subscriptionStatus.type === "error" ? "text-red-300" : "text-green-300"}`}
                >
                  {subscriptionStatus.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Section 3: Copyright and Social Media *//*}
        <div className="py-6 border-t border-black-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2025 MBS Pharma, Inc. All Rights Reserved
            </p>
            <div className="flex space-x-6">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="hover:text-blue-200 transition duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;*/

/*import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div
        className="bg-layer"
        style={{ backgroundImage: "url(/assets/img/footer-bg2.png)" }}
      />
      <div className="auto-container">
        <div className="footer-top">
          <div className="top-inner">
            <figure className="footer-logo">
              <img src="/assets/img/logo.png" alt="Logo" style={{ width: 200 }} />
            </figure>
            <ul className="footer-menu">
              <li>
                <Link href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">
               About Us
                </Link>
              </li>
              <li>
                <Link href="#">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget-section">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget about-widget">
                <div className="widget-title">
                  <h3>About Us</h3>
                </div>
                <div className="widget-content">
                  <p>
                    MBS Pharma LLC has over 30 years of experience offering
                    compliance, regulatory affairs, and technical services.
                  </p>
                  <ul className="info clearfix">
                    <li>
                      <div href="mailto:info@mbspharmas.com">info@mbspharmas.com</div>
                    </li>
                    <li>
                      <div href="tel:1760-845-1576">+1-760-845-1576</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_80">
                <div className="widget-title">
                  <h3>Quick Link</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link href="#">
                       About Company
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>Resources</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <Link href="#">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget newsletter-widget">
                <div className="widget-title">
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="widget-content">
                  <p>
                    To add complexity, this is happening against a backdrop of
                    significant challenges.
                  </p>
                  <div className="newsletter-form">
                    <form method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                        <button type="submit" className="theme-btn">
                          Get in Touch
                          <span />
                          <span />
                          <span />
                          <span />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-inner">
            <div className="copyright">
              <p>
                Copyright © 2025 <a href="#">mbspharmas</a>, Inc. All Rights
                Reserved
              </p>
            </div>
            <ul className="social-links">
              <li>
                <h4>Follow Us On</h4>
              </li>
              <li>
                
                  <i className="fab fa-facebook-f" />
              
              </li>
              <li>
             
                  <i className="fab fa-twitter" />
         
              </li>
              <li>
               
                  <i className="fab fa-linkedin-in" />
             
              </li>
              <li>
             
                  <i className="fab fa-dribbble" />
            
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;*/
/* <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget newsletter-widget">
              <div className="widget-title">
                <h3>Subscribe Newsletter</h3>
              </div>
              <div className="widget-content">
                <p>
                  To add complexity, this is happening against a back drop of
                  significant challenges
                </p>
                <div className="newsletter-form">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required=""
                      />
                      <button type="submit" className="theme-btn">
                        Get in Touch
                        <span />
                        <span />
                        <span />
                        <span />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>*/

          
        
          import contact from '../../app/contact';
          
         
import Head from "next/head"
import Script from 'next/script'
function Index(){
    return(
        <>
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <title>MBS Pharmas</title>
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link
    href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
  <link href="assets/css/flaticon.css" rel="stylesheet" />
  <link href="assets/css/owl.css" rel="stylesheet" />
  <link href="assets/css/bootstrap.css" rel="stylesheet" />
  <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
  <link href="assets/css/animate.css" rel="stylesheet" />
  <link href="assets/css/nice-select.css" rel="stylesheet" />
  <link href="assets/css/elpath.css" rel="stylesheet" />
  <link
    href="assets/css/color/theme-color.css"
    id="jssDefault"
    rel="stylesheet"
  />
 <link href="assets/css/switcher-style.css" rel="stylesheet" />
  <link href="assets/css/odometer.css" rel="stylesheet" />
  <link href="assets/css/rtl.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/module-css/banner.css" rel="stylesheet" />
  <link href="assets/css/module-css/clients.css" rel="stylesheet" />
  <link href="assets/css/module-css/about.css" rel="stylesheet" />
  <link href="assets/css/module-css/service.css" rel="stylesheet" />
  <link href="assets/css/module-css/speciality.css" rel="stylesheet" />
  <link href="assets/css/module-css/working.css" rel="stylesheet" />
  <link href="assets/css/module-css/video.css" rel="stylesheet" />
  <link href="assets/css/module-css/events.css" rel="stylesheet" />
  <link href="assets/css/module-css/faq.css" rel="stylesheet" />
  <link href="assets/css/module-css/cta.css" rel="stylesheet" />
  <link href="assets/css/responsive.css" rel="stylesheet" />
 
</>
       
  <footer className="main-footer">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(/assets/img/footer-bg2.png)" }}
    />
    <div className="auto-container">
      <div className="footer-top">
        <div className="top-inner">
          <figure className="footer-logo">
            <img src="/assets/img/logo.png" alt="" style={{ width: 200 }} />
          </figure>
          <ul className="footer-menu">
            <li>
              <a href="/Components/Home">Home</a>
            </li>
            <li>
              <a href="/Components/About">About Us</a>
            </li>
            <li>
              <a href="/Components/FAQS">FAQs</a>
            </li>
            <li>
              <a href="/Components/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget-section">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget about-widget">
              <div className="widget-title">
                <h3>About Us</h3>
              </div>
              <div className="widget-content">
                <p>
                  MBS Pharma LLC has over 30 years of experience offering
                  compliance, regulatory affairs, and technical services.
                </p>
                <ul className="info clearfix">
                  <li>
                    <a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a>
                  </li>
                  <li>
                    <a href="tel:1760-845-1576">+1-760-845-1576</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_80">
              <div className="widget-title">
                <h3>Quick Link</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li>
                    <a href="#">About Company</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget">
              <div className="widget-title">
                <h3>Resources</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
       
        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget newsletter-widget">
              <div className="widget-title">
                <h3>Request a call back</h3>
              </div>
              <div className="widget-content">
                
                <div className="newsletter-form">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required=""
                      />
                      <button type="submit" className="theme-btn">
                        Get in Touch
                        <span />
                        <span />
                        <span />
                        <span />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
       
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-inner">
          <div className="copyright">
            <p>
              Copyright © 2025 <a href="#">mbspharmas</a>, Inc. All Rights
              Reserved
            </p>
          </div>
          <ul className="social-links">
            <li>
              <h4>Follow Us On</h4>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dribbble" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
 
<div className="scroll-to-top">
  <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div>

<Script src="assets/js/jquery.js"></Script>
    <Script src="assets/js/bootstrap.min.js"></Script>
    <Script src="assets/js/owl.js"></Script>
    <Script src="assets/js/wow.js"></Script>
    <Script src="assets/js/validation.js"></Script>
    <Script src="assets/js/jquery.fancybox.js"></Script>
    <Script src="assets/js/appear.js"></Script>
    <Script src="assets/js/isotope.js"></Script>
    <Script src="assets/js/parallax-scroll.js"></Script>
    <Script src="asssets/js/jquery.nice-select.min.js"></Script>
    <Script src="assets/js/jQuery.style.switcher.min.js"></Script>
    <Script src="assets/js/language.js"></Script>
    <Script src="assets/js/scrolltop.min.js"></Script>
    <Script src="assets/js/gsap.js"></Script>
    <Script src="assets/js/ScrollTrigger.js"></Script>
    <Script src="assets/js/SplitText.js"></Script>
    <Script src="assets/js/odometer.js"></Script>
    <Script src="assets/js/script.js"></Script>
</>

    )
}
export default Index
