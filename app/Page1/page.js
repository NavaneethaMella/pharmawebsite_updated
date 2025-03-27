

import Head from "next/head";
import Script from "next/script";

const ServicePage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>MBS Pharma Services</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/page1.css" rel="stylesheet" />
      <section className="service-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Pharmaceutical Consulting</span>
            <h2>Services We Offer at MBS Pharma</h2>
          </div>
          <div className="service-details">
            <p>
              MBS Pharma LLC has over 30 years of experience offering compliance,
              regulatory affairs, and technical services. We offer a full portfolio
              of FDA-related and pharmaceutical consulting services to drive positive
              results for clients as they prevent and resolve compliance problems and
              develop new pharmaceutical products for regulatory submission and approval
              by the FDA.
            </p>
            <p>
              MBS Pharma offers a full spectrum of FDA-related services and employs an
              integrated approach that incorporates the use of scientific and technical
              expertise to provide specific, actionable recommendations to our clients.
            </p>
  <br/>
            <h3>Our Diverse Portfolio of Capabilities Includes:</h3>
            <ul>
              <li>Document preparation and review (including NDAs, INDs, ANDAs, NADAs, and DMFs)</li>
              <li>Responding to FDA 483 inspections, Warning Letters, and other compliance issues, meeting with FDA to resolve disputes, implementing corrective and protective action (CAPA) programs.</li>
              <li>Continuous Improvement</li>
              <li>Data Integrity</li>
              <li>Developing and ensuring Compliance with adverse drug event (ADE) management/reporting</li>
              <li>Review of product labeling</li>
              <li>Regulatory Affairs consulting with strategic focus and assistance</li>
              <li>Preparation of protocols, reports, policies, etc.</li>
            </ul>
          </div>
        </div>
      </section>

      <Script src="js/jquery.js" />
      <Script src="js/bootstrap.min.js" />
      <Script src="js/owl.js" />
      <Script src="js/wow.js" />
      <Script src="js/validation.js" />
      <Script src="js/jquery.fancybox.js" />
      <Script src="js/appear.js" />
      <Script src="js/isotope.js" />
      <Script src="js/parallax-scroll.js" />
      <Script src="js/jquery.nice-select.min.js" />
      <Script src="js/jQuery.style.switcher.min.js" />
      <Script src="js/language.js" />
      <Script src="js/scrolltop.min.js" />
      <Script src="js/gsap.js" />
      <Script src="js/ScrollTrigger.js" />
      <Script src="js/SplitText.js" />
      <Script src="js/odometer.js" />
      <Script src="js/script.js" />
    </>
  );
};

export default ServicePage;







