// pages/about.js
import Head from "next/head";
import Script from "next/script";

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>About Us - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/about.css" rel="stylesheet" />
      <section className="about-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Who We Are</span>
            <h2>About MBS Pharma</h2>
          </div>

          <div className="about-content">
            <p>
              MBS Pharma is a leading pharmaceutical consulting company with over
              30 years of experience. Our expertise spans regulatory affairs, compliance,
              and technical services that help pharmaceutical companies navigate complex
              FDA regulations and ensure product success.
            </p>
            <p>
              We are committed to providing our clients with actionable, scientific, and
              technical recommendations to ensure compliance with FDA guidelines, drive
              innovation, and enable the successful approval of pharmaceutical products.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide world-class consulting services that enable
              pharmaceutical companies to efficiently and effectively bring their products
              to market while maintaining the highest levels of compliance, quality, and
              patient safety.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>Integrity: We prioritize transparency and honesty in all our dealings.</li>
              <li>Excellence: We strive for excellence in every project we undertake.</li>
              <li>Innovation: We encourage innovative approaches to overcome challenges.</li>
              <li>Collaboration: We believe in working closely with our clients to achieve shared success.</li>
            </ul>
            <h3>Our Leadership Team</h3>
            <div className="team-section">
              <div className="team-member">
                <img src="/img/team-member-1.jpg" alt="Team Member 1" />
                <h4>Michael Smith</h4>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <img src="/img/team-member-2.jpg" alt="Team Member 2" />
                <h4>Jane Doe</h4>
                <p>Chief Operating Officer</p>
              </div>
              <div className="team-member">
                <img src="/img/team-member-3.jpg" alt="Team Member 3" />
                <h4>John Williams</h4>
                <p>VP of Regulatory Affairs</p>
              </div>
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

export default AboutPage;
