// pages/news.js
import Head from "next/head";
import Script from "next/script";

const NewsPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>News - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/news1.css" rel="stylesheet" />
      <section className="news-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Latest Updates</span>
            <h2>News & Updates at MBS Pharma</h2>
          </div>

          <div className="news-list">
            <div className="news-item">
              <div className="news-date">
                <span>March 16, 2025</span>
              </div>
              <h3 className="news-title">
                <a href="#">MBS Pharma Announces New Collaboration with FDA</a>
              </h3>
              <p className="news-description">
                MBS Pharma is excited to announce a new collaboration with the FDA, aimed at improving regulatory strategies and optimizing drug approval pathways for generic and biologic products.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>

            <div className="news-item">
              <div className="news-date">
                <span>March 10, 2025</span>
              </div>
              <h3 className="news-title">
                <a href="#">MBS Pharma Launches New Regulatory Affairs Service</a>
              </h3>
              <p className="news-description">
                We have launched a new service aimed at providing comprehensive regulatory affairs consulting for new pharmaceutical companies looking to navigate complex FDA regulations.
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>

            <div className="news-item">
              <div className="news-date">
                <span>March 5, 2025</span>
              </div>
              <h3 className="news-title">
                <a href="#">MBS Pharma Successfully Assists in Drug Approval</a>
              </h3>
              <p className="news-description">
                MBS Pharma successfully helped a client gain approval for their new generic drug, working closely with the FDA to ensure compliance with the latest regulations.
              </p>
              <a href="#" className="read-more">Read More</a>
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

export default NewsPage;
