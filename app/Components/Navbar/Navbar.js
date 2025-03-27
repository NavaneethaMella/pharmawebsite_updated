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

       
      
  {/* main header */}
  <header className="main-header header-style-two">
    {/* header-lower */}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light clearfix">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/About">About</a>
                  </li>
                  <li className="current dropdown">
                    <a href="/Services">Services</a>
                    <ul>
                      <li>
                        <a href="/Page1">Page 1</a>
                      </li>
                      <li>
                        <a href="/Page2">Page 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/News">News</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix"></nav>
          </div>
        </div>
      </div>
    </div>
  </header>




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