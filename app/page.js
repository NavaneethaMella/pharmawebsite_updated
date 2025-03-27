/*import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}*/
/*import Script from 'next/script'
import Head from 'next/head'
function Home(){
  return(
    <>
  <Head>
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

  </Head>
<div className="boxed_wrapper ltr">
  <div id="search-popup" className="search-popup">
    <div className="popup-inner">
      <div className="upper-box clearfix">
        <figure className="logo-box pull-left">
          <a href="#">
            <img src="assets/img/logo.png" alt="" />
          </a>
        </figure>
        <div className="close-search pull-right">
          <span className="far fa-times" />
        </div>
      </div>
      <div className="overlay-layer" />
      <div className="auto-container">
        <div className="search-form">
          <form method="post" action="#">
            <div className="form-group">
              <fieldset>
                <input
                  type="search"
                  className="form-control"
                  name="search-input"
                  defaultValue=""
                  placeholder="Type your keyword and hit"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* main header *//*}
  <header className="main-header header-style-two">
    {/* header-lower *//*}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
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
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li className="current dropdown">
                    <a href="">Services</a>
                    <ul>
                      <li>
                        <a href="#">Page 1</a>
                      </li>
                      <li>
                        <a href="#">Page 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
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
                <img src="assets/img/logo.png" alt="" />
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
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn">
      <i className="fas fa-times" />
    </div>
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="#">
          <img src="assets/img/logo.png" alt="" title="" />
        </a>
      </div>
      <div className="menu-outer" />
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>MBS Pharma, USA</li>
          <li>
            <a href="tel:+8801682648101">+1-760-845-1576</a>
          </li>
          <li>
            <a href="mailto:info@example.com">info@mbapharmas.com</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="#">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <main className="main-content">
    <section className="banner-style-two p_relative">
      <div
        className="bg-layer"
        style={{ backgroundImage: "url(assets/img/banner4.png)" }}
      />
      <div className="bg-color" />
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/img/shape/shape-11.png)" }}
      />
      <div className="auto-container">
        <div className="content-box">
          <span className="sub-title mb_20">
            Dedication, Experience &amp; Quality
          </span>
          <h2>
            MBS <span>Pharma</span>
          </h2>
          <p>
            We offer a full portfolio of FDA-related and pharmaceutical
            consulting services to drive positive results for clients as they
            prevent and resolve compliance problems and develop new
            pharmaceutical products for regulatory submission and approval by
            FDA
          </p>
          <div className="btn-box">
            <a href="#" className="theme-btn">
              Contact Us <span />
              <span />
              <span />
              <span />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="clients-section style-two">
      <div className="outer-container">
        <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
          <figure className="clients-logo">
            <a href="#">
              <img src="assets/img/client.png" alt="" />
            </a>
          </figure>
        </div>
      </div>
    </section>
    <section className="about-style-two pt_120 pb_120">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/img/shape/shape-13.png)" }}
        />
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/img/shape/shape-14.png)" }}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box mt_25 mr_70 sec-title-animation animation-style2">
                <div className="sec-title mb_25">
                  <span className="sub-title mb_20 title-animation">
                    Pharma
                  </span>
                  <h2 className="title-animation">
                    We Offer Trusted and Premium Service
                  </h2>
                </div>
                <div className="text-box mb_45 title-animation">
                  <p>
                    MBS Pharma offers a full spectrum of FDA-related services
                    and employs an integrated approach—that incorporates the use
                    of scientific and technical expertise—to provide specific,
                    actionable recommendations to our clients
                  </p>
                  <ul className="list-style-one clearfix">
                    <li>
                      Document preparation and review (including NDAs, INDs,
                      ANDAs, NADAs, and DMFs)
                    </li>
                    <li>Continuous Improvement</li>
                    <li>Data Integrity</li>
                  </ul>
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn">
                    Contact Us
                    <span />
                    <span />
                    <span />
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-inner">
                <div className="image-shape">
                  <div
                    className="shape-1"
                    style={{
                      backgroundImage: "url(assets/img/shape/shape-12.png)"
                    }}
                  />
                  <div
                    className="shape-2"
                    style={{
                      backgroundImage: "url(assets/img/shape/shape-12.png)"
                    }}
                  />
                </div>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <div className="image-box">
                      <figure className="image mb_30">
                        <img src="assets/img/about2.png" alt="" />
                      </figure>
                      <div className="experience-box bounce-slide">
                        <div className="inner p_relative pt_5 pb_5">
                          <h2>
                            30 <span>Years</span>
                          </h2>
                          <h3>
                            of experience offering compliance, regulatory
                            affairs, and technical services
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                    <figure className="image pt_100 mt_15">
                      <img src="assets/img/about3.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="service-style-two pt_120 pb_120">
      <div
        className="bg-layer parallax-bg"
        data-parallax='{"y": 100}'
        style={{ backgroundImage: "url(assets/img/service-bg.png)" }}
      />
      <div className="auto-container">
        <div className="sec-title centred mb_70 sec-title-animation animation-style2">
          <span className="sub-title mb_20 title-animation">Our Services</span>
          <h2 className="title-animation">Services We Provide</h2>
        </div>
        <div className="tabs-box">
          <div className="tab-btn-box p_relative mb_110">
            <ul className="tab-btns tab-buttons clearfix">
              <li className="tab-btn active-btn" data-tab="#tab-1">
                Service1
              </li>
              <li className="tab-btn" data-tab="#tab-2">
                Service 2
              </li>
            </ul>
          </div>
          <div className="tabs-content">
            <div className="tab active-tab" id="tab-1">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_two">
                    <div className="content-box mr_50">
                      <h2>Nullam augue lorem, sollicitudin ac purus quis</h2>
                      <p>
                        Nullam augue lorem, sollicitudin ac purus quis,
                        imperdiet volutpat elit. Nam convallis, neque et
                        tincidunt accumsan
                      </p>
                      <ul className="list-style-two mb_40 clearfix">
                        <li>
                          Nam aliquam ligula at lectus ultricies, eu aliquam
                          enim iaculis.
                        </li>
                        <li>
                          Fusce varius lacus quis nunc facilisis placerat.
                        </li>
                        <li>
                          In facilisis libero eget ligula hendrerit congue.
                        </li>
                      </ul>
                      <div className="btn-box">
                        <a href="#" className="theme-btn btn-one">
                          Details
                          <span />
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box ml_80">
                    <figure className="image">
                      <img src="assets/img/service-2.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab" id="tab-2">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_two">
                    <div className="content-box mr_50">
                      <h2>Nullam augue lorem, sollicitudin ac purus quis</h2>
                      <p>
                        Nullam augue lorem, sollicitudin ac purus quis,
                        imperdiet volutpat elit. Nam convallis, neque et
                        tincidunt accumsan
                      </p>
                      <ul className="list-style-two mb_40 clearfix">
                        <li>
                          Nam aliquam ligula at lectus ultricies, eu aliquam
                          enim iaculis.
                        </li>
                        <li>
                          Fusce varius lacus quis nunc facilisis placerat.
                        </li>
                        <li>
                          In facilisis libero eget ligula hendrerit congue.
                        </li>
                      </ul>
                      <div className="btn-box">
                        <a href="#" className="theme-btn btn-one">
                          Details
                          <span />
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box ml_80">
                    <figure className="image">
                      <img src="assets/img/service-1.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="speciality-section pt_120 centred sec-title-animation animation-style1">
      <div className="bg-color" />
      <div
        className="bg-layer"
        style={{ backgroundImage: "url(assets/img/parx2.png)" }}
      />
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/img/shape/shape-7.png)" }}
        />
      </div>
      <div className="auto-container">
        <div className="sec-title light mb_70 sec-title-animation animation-style2">
          <span className="sub-title mb_20 title-animation">
            Our Speciality
          </span>
          <h2 className="title-animation">
            Morbi varius magna dictum lacus pellentesque
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 speciality-block">
            <div className="speciality-block-one p_relative z_1 title-animation">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="r-hex">
                    <div className="r-hex-inner" />
                  </div>
                  <div className="icon">
                    <i className="icon-2" />
                  </div>
                </div>
                <h3>
                  <a href="#">Morbi varius magna</a>
                </h3>
                <p>Morbi varius magna dictum lacus pellentesque</p>
                <div className="btn-box p_relative">
                  <div className="link-icon">
                    <a href="#">
                      <i className="icon-23" />
                    </a>
                  </div>
                  <div className="link-text">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 speciality-block">
            <div className="speciality-block-one p_relative z_1 title-animation">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="r-hex">
                    <div className="r-hex-inner" />
                  </div>
                  <div className="icon">
                    <i className="icon-2" />
                  </div>
                </div>
                <h3>
                  <a href="#">Morbi varius magna</a>
                </h3>
                <p>Morbi varius magna dictum lacus pellentesque</p>
                <div className="btn-box p_relative">
                  <div className="link-icon">
                    <a href="#">
                      <i className="icon-23" />
                    </a>
                  </div>
                  <div className="link-text">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 speciality-block">
            <div className="speciality-block-one p_relative z_1 title-animation">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="r-hex">
                    <div className="r-hex-inner" />
                  </div>
                  <div className="icon">
                    <i className="icon-2" />
                  </div>
                </div>
                <h3>
                  <a href="#">Morbi varius magna</a>
                </h3>
                <p>Morbi varius magna dictum lacus pellentesque</p>
                <div className="btn-box p_relative">
                  <div className="link-icon">
                    <a href="#">
                      <i className="icon-23" />
                    </a>
                  </div>
                  <div className="link-text">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 speciality-block">
            <div className="speciality-block-one p_relative z_1 title-animation">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="r-hex">
                    <div className="r-hex-inner" />
                  </div>
                  <div className="icon">
                    <i className="icon-2" />
                  </div>
                </div>
                <h3>
                  <a href="#">Morbi varius magna</a>
                </h3>
                <p>Morbi varius magna dictum lacus pellentesque</p>
                <div className="btn-box p_relative">
                  <div className="link-icon">
                    <a href="#">
                      <i className="icon-23" />
                    </a>
                  </div>
                  <div className="link-text">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="working-style-two centred pt_120 pb_110">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/img/shape/shape-6.png)" }}
        />
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/img/shape/shape-11.png)" }}
        />
      </div>
      <div className="auto-container">
        <div className="sec-title mb_70 sec-title-animation animation-style2">
          <span className="sub-title mb_20 title-animation">Our Process</span>
          <h2 className="title-animation">How We Work</h2>
        </div>
        <div className="lower-content">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(assets/img/shape/shape-16.png)"
                    }}
                  />
                  <div className="icon-box">
                    <div className="r-hex">
                      <div className="r-hex-inner" />
                    </div>
                    <div className="icon">
                      <i className="icon-25" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">Step 1</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(assets/img/shape/shape-16.png)"
                    }}
                  />
                  <div className="icon-box">
                    <div className="r-hex">
                      <div className="r-hex-inner" />
                    </div>
                    <div className="icon">
                      <i className="icon-26" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">Step 2</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="r-hex">
                      <div className="r-hex-inner" />
                    </div>
                    <div className="icon">
                      <i className="icon-27" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">Step 3</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="events-style-two pt_120">
      <div
        className="bg-layer"
        style={{ backgroundImage: "url(assets/img/parx1.png)" }}
      />
      <div className="auto-container">
        <div className="sec-title light mb_70 centred sec-title-animation animation-style2">
          <span className="sub-title mb_20 title-animation">Events</span>
          <h2 className="title-animation">Upcoming Events</h2>
        </div>
        <div className="inner-content p_relative">
          <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
            <div className="events-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <a href="#">
                    <img src="assets/img/event2.png" alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <div className="post-date">
                    <h2>
                      01<span>APR</span>
                    </h2>
                  </div>
                  <h3>
                    <a href="#">
                      Fusce condimentum felis nec odio porta, non mattis diam
                      posuere
                    </a>
                  </h3>
                  <p>
                    Nam ullamcorper risus eget interdum sagittis Nam ullamcorper
                    risus eget interdum sagittis
                  </p>
                  <div className="lower-box">
                    <div className="btn-box">
                      <a href="#" className="theme-btn btn-one">
                        View Event
                        <span />
                        <span />
                        <span />
                        <span />
                      </a>
                    </div>
                  </div>
                  <ul className="event-info">
                    <li>
                      <i className="icon-1" />
                      10AM
                    </li>
                    <li>
                      <i className="icon-18">Test Location</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="faq-section pt_120 pb_120">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/img/shape/shape-17.png)" }}
        />
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/img/shape/shape-18.png)" }}
        />
        <div
          className="pattern-3"
          style={{ backgroundImage: "url(assets/img/shape/shape-19.png)" }}
        />
      </div>
      <div className="auto-container">
        <div className="sec-title mb_70 centred sec-title-animation animation-style2">
          <span className="sub-title mb_20 title-animation">FAQs</span>
          <h2 className="title-animation">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <div className="inner-container">
          <ul className="accordion-box">
            <li className="accordion block">
              <div className="acc-btn">
                <h4>
                  <span>1.</span>What is Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.?
                </h4>
              </div>
              <div className="acc-content">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <h4>
                  <span>2.</span>What is Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.l?
                </h4>
              </div>
              <div className="acc-content">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  <footer className="main-footer">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(assets/img/footer-bg2.png)" }}
    />
    <div className="auto-container">
      <div className="footer-top">
        <div className="top-inner">
          <figure className="footer-logo">
            <img src="assets/img/logo.png" alt="" style={{ width: 200 }} />
          </figure>
          <ul className="footer-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
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
    <Script src="assets/js/jquery.nice-select.min.js"></Script>
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
export default Home
*/
/*import Banner from './componenets/Banner';
import Client from './componenets/Client';
import About from './componenets/About';

export default function Home() {
  return (
    <div>
      <Banner />
      <Client />
      <About />
    </div>
  );
}*/




import Index from './Components/Index'  
export default function HomePage() {
  return (
    <div>
     <Index/>
    </div>
  );
}

