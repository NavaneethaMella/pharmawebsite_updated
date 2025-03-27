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
  <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
  <link
    href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link href="/css/font-awesome-all.css" rel="stylesheet" />
  <link href="/css/flaticon.css" rel="stylesheet" />
  <link href="/css/owl.css" rel="stylesheet" />
  <link href="/css/bootstrap.css" rel="stylesheet" />
  <link href="/css/jquery.fancybox.min.css" rel="stylesheet" />
  <link href="/css/animate.css" rel="stylesheet" />
  <link href="/css/nice-select.css" rel="stylesheet" />
  <link href="/css/elpath.css" rel="stylesheet" />
  <link
    href="/css/color/theme-color.css"
    id="jssDefault"
    rel="stylesheet"
  />
 <link href="/css/switcher-style.css" rel="stylesheet" />
  <link href="/css/odometer.css" rel="stylesheet" />
  <link href="/css/rtl.css" rel="stylesheet" />
  <link href="/css/style.css" rel="stylesheet" />
  <link href="/css/module-css/banner.css" rel="stylesheet" />
  <link href="/css/module-css/clients.css" rel="stylesheet" />
  <link href="/css/module-css/about.css" rel="stylesheet" />
  <link href="/css/module-css/service.css" rel="stylesheet" />
  <link href="/css/module-css/speciality.css" rel="stylesheet" />
  <link href="/css/module-css/working.css" rel="stylesheet" />
  <link href="/css/module-css/video.css" rel="stylesheet" />
  <link href="/css/module-css/events.css" rel="stylesheet" />
  <link href="/css/module-css/faq.css" rel="stylesheet" />
  <link href="/css/module-css/cta.css" rel="stylesheet" />
  <link href="/css/responsive.css" rel="stylesheet" />
 
</>
       
  <footer className="main-footer">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(img/footer-bg2.png)" }}
    />
    <div className="auto-container">
      <div className="footer-top">
        <div className="top-inner">
          <figure className="footer-logo">
            <img src="img/logo.png" alt="" style={{ width: 200 }} />
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

<Script src="js/jquery.js"></Script>
    <Script src="js/bootstrap.min.js"></Script>
    <Script src="js/owl.js"></Script>
    <Script src="js/wow.js"></Script>
    <Script src="js/validation.js"></Script>
    <Script src="js/jquery.fancybox.js"></Script>
    <Script src="js/appear.js"></Script>
    <Script src="js/isotope.js"></Script>
    <Script src="js/parallax-scroll.js"></Script>
    <Script src="js/jquery.nice-select.min.js"></Script>
    <Script src="js/jQuery.style.switcher.min.js"></Script>
    <Script src="js/language.js"></Script>
    <Script src="js/scrolltop.min.js"></Script>
    <Script src="js/gsap.js"></Script>
    <Script src="js/ScrollTrigger.js"></Script>
    <Script src="js/SplitText.js"></Script>
    <Script src="js/odometer.js"></Script>
    <Script src="js/script.js"></Script>
</>

    )
}
export default Index