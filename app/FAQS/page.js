// pages/faqs.js
import Head from "next/head";
import Script from "next/script";

const FaqsPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>FAQs - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/faqs.css" rel="stylesheet" />
      <section className="faqs-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Frequently Asked Questions</span>
            <h2>FAQ - MBS Pharma</h2>
          </div>

          <div className="faqs-content">
            <div className="faq-item">
              <h3>What services does MBS Pharma offer?</h3>
              <p>
                MBS Pharma offers a full spectrum of FDA-related services, including regulatory affairs consulting, compliance services, document preparation, and technical support for pharmaceutical product development.
              </p>
            </div>

            <div className="faq-item">
              <h3>How can MBS Pharma assist with FDA submission?</h3>
              <p>
                We specialize in FDA submission support, including the preparation of INDs, ANDAs, NDAs, DMFs, and other regulatory documents. We also provide advice and consultation during FDA inspections and respond to FDA 483 observations.
              </p>
            </div>

            <div className="faq-item">
              <h3>What experience does MBS Pharma have in pharmaceutical consulting?</h3>
              <p>
                With over 30 years of experience, MBS Pharma has successfully helped numerous pharmaceutical companies navigate the complexities of FDA regulations and achieve product approval in the U.S. market.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can MBS Pharma help with compliance and regulatory issues?</h3>
              <p>
                Yes, we assist with compliance issues including responding to FDA 483s, Warning Letters, and implementing corrective and preventive actions (CAPA) to resolve regulatory concerns.
              </p>
            </div>

            <div className="faq-item">
              <h3>How can I get in touch with MBS Pharma for consultations?</h3>
              <p>
                You can reach out to us via our website’s contact page or call us directly at +1-760-845-1576 for consultations and inquiries.
              </p>
            </div>
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
};

export default FaqsPage;
