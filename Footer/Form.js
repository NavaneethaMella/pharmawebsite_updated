/*mport React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Simulate form submission
    try {
      // Replace with your form submission logic (e.g., API call)
      console.log('Form submitted:', formData);
      setFormStatus('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 140 Preston Executive Drive, Suite 100B, Cary, NC 27513
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@phase1qualityconsulting.com">info@phase1qualityconsulting.com</a>
        </p>
        <p>
          <strong>Phone:</strong> (984) 833-8414
        </p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
*/

/*"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    interest: "",
    title: "",
    subject: "",
    position: "",
    email: "",
    message: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can replace this with API call to send form data
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Request a Call Back</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* Row 1: First Name + Area of Interest *//*}
       /* <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Area of Interest</label>
            <input
              type="text"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2: Title + Subject *//*}
        /*<div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 3: Company/Position + Message + Email *//*}
       /* <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label>Company/Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              style={{ width: "100%" }}
            ></textarea>
          </div>
        </div>

        {/* Row 4: Reason + Submit *//*}
        /*<div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <label>Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              style={{ width: "100%", height: "40px" }}
            >
              <option value="">Select Reason</option>
              <option value="value1">Reason 1</option>
              <option value="value2">Reason 2</option>
              <option value="value3">Reason 3</option>
            </select>
          </div>
          <button type="submit" style={{ height: "40px", padding: "0 20px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
*/

import React from 'react';
import styles from './Form.module.css'; // Import the CSS module

const Form = () => {
  return (
    <div className={styles.form-container}>
      <h2 className={styles.header}>Request a Call Back</h2>
      
      <form>
        <div className={styles['form-group']}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Area of Interest" />
        </div>

        <div className={styles['form-group']}>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Subject" />
        </div>

        <div className={styles['form-group']}>
          <input type="text" placeholder="Company/Position" />
          <textarea placeholder="Your Message"></textarea>
        </div>

        <div className={styles['form-group']}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message"></textarea>
        </div>

        <div className={styles['form-group']}>
          <select>
            <option>Reason for Contact</option>
            <option>Query</option>
            <option>Support</option>
            <option>Other</option>
          </select>
          <button type="submit" className={styles['submit-button']}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
