import Head from "next/head";
import Script from 'next/script';

function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>MBS Pharmas</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* CSS Stylesheets */}
        <link href="/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/css/flaticon.css" rel="stylesheet" />
        <link href="/css/owl.css" rel="stylesheet" />
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/nice-select.css" rel="stylesheet" />
        <link href="/css/elpath.css" rel="stylesheet" />
        <link href="/css/color/theme-color.css" id="jssDefault" rel="stylesheet" />
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
      </Head>

      <section className="service-style-two pt_120 pb_120">
        <div
          className="bg-layer parallax-bg"
          data-parallax='{"y": 100}'
          style={{ backgroundImage: "url(/img/service-bg.png)" }}
        />
        <div className="auto-container">
          <div className="sec-title centred mb_70 sec-title-animation animation-style2">
            <span className="sub-title mb_20 title-animation">Our Services</span>
            <h2 className="title-animation">Services We Provide</h2>
          </div>
          <div className="tabs-box">
            <div className="tab-btn-box p_relative mb_110">
              <ul className="tab-btns tab-buttons clearfix">
                <li className="tab-btn active-btn" data-tab="#tab-1">Service 1</li>
                <li className="tab-btn" data-tab="#tab-2">Service 2</li>
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
                          <li>Nam aliquam ligula at lectus ultricies, eu aliquam enim iaculis.</li>
                          <li>Fusce varius lacus quis nunc facilisis placerat.</li>
                          <li>In facilisis libero eget ligula hendrerit congue.</li>
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
                        <img src="img/service-2.png" alt="" />
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
                          <li>Nam aliquam ligula at lectus ultricies, eu aliquam enim iaculis.</li>
                          <li>Fusce varius lacus quis nunc facilisis placerat.</li>
                          <li>In facilisis libero eget ligula hendrerit congue.</li>
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
                        <img src="img/service-1.png" alt="" />
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
        <div className="bg-layer" style={{ backgroundImage: "url(/img/parx2.png)" }} />
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: "url(/img/shape/shape-7.png)" }} />
        </div>
        <div className="auto-container">
          <div className="sec-title light mb_70 sec-title-animation animation-style2">
            <span className="sub-title mb_20 title-animation">Our Speciality</span>
            <h2 className="title-animation">
              Morbi varius magna dictum lacus pellentesque
            </h2>
          </div>
          <div className="row clearfix">
            {["Morbi varius magna", "Morbi varius magna", "Morbi varius magna", "Morbi varius magna"].map((title, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 speciality-block">
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
                    <h3><a href="#">{title}</a></h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* External Scripts */}
      <Script src="/js/jquery.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/owl.js" />
      <Script src="/js/wow.js" />
      <Script src="/js/validation.js" />
      <Script src="/js/jquery.fancybox.js" />
      <Script src="/js/appear.js" />
      <Script src="/js/isotope.js" />
      <Script src="/js/parallax-scroll.js" />
      <Script src="/js/jquery.nice-select.min.js" />
      <Script src="/js/jQuery.style.switcher.min.js" />
      <Script src="/js/language.js" />
      <Script src="/js/scrolltop.min.js" />
      <Script src="/js/gsap.js" />
      <Script src="/js/ScrollTrigger.js" />
      <Script src="/js/SplitText.js" />
      <Script src="/js/odometer.js" />
      <Script src="/js/script.js" />
    </>
  );
}

export default Index;

