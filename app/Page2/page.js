/*function Page(){
    return(
        <>
        
        </>
    )
}
export default Page */
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
            <span className="sub-title mb_20">Product Development</span>
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

            <h3>Our Diverse Portfolio of Capabilities Includes:</h3>
            <ul>
            <li>Advice in regulatory affairs</li>
            <li>Product development planning for generics and biosimilars, including discussions and negotiations with the FDA in pre-IND, pre-ANDA, or pre-BLA settings</li>
            <li>Product development: Active Pharmaceutical Ingredients, Finished dosage forms, and Analytical method development</li>
            <li>Generics formulation, New Drugs/biologics, Combination products</li>
            <li>Site Transfers to intended commercial manufacturing sites worldwide</li>
            <li>Continuous Improvement</li>
            <li>Gap analysis expertise of pre-submission ANDAs/NDAs/DMFs/BLAs for remediation</li>
            <li>Life cycle management support of dossiers filed with the FDA, including submission of supplements, safety reports, and labeling updates</li>
            <li>Literature-based justifications for impurities/excipients and assessments</li>
            <li>Compilation, review, and eCTD submission support of dossiers filed with FDA, including INDs, ANDAs, NDAs, 510K, PMAs, and BLAs</li>
            <li>Support with U.S. Agent activities and interactions</li>
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
