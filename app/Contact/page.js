// pages/contact.js
import Head from "next/head";
import Script from "next/script";

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Contact Us - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/contact1.css" rel="stylesheet" />
      <section className="contact-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Get in Touch</span>
            <h2>Contact Us at MBS Pharma</h2>
          </div>

          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <ul>
              <li>
                <strong>Phone:</strong> <a href="tel:+17608451576">+1-760-845-1576</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:abc@mbspharmas.com">abc@mbspharmas.com</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Pharma Street, City, Country
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form action="#" method="POST" id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit" className="theme-btn">Submit</button>
            </form>
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

export default ContactPage;
