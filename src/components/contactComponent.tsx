"use client"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null as string | null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    // EmailJS integration
    if (formRef.current) {
      emailjs.sendForm(
        'service_8nfbw6j', // Replace with your EmailJS service ID
        'template_ycbeu8s', // Replace with your EmailJS template ID
        formRef.current,
        'oVrfNbMHSuTGJ-R9l' // Replace with your EmailJS public key
      )
        .then(() => {
          setStatus({ submitted: true, loading: false, error: null });
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, (error) => {
          setStatus({ submitted: false, loading: false, error: error.text });
        });
    } else {
      setStatus({ submitted: false, loading: false, error: 'Form reference is null' });
    }

  };

  return (
    <div id='contact' className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Get in <span className="text-green-500">touch</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left sidebar with contact info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 border-b pb-3">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">021-35804390</p>
                  <p className="text-gray-600">0300-2199196</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">honestyfur@yahoo.com</p>
                  <p className="text-gray-600">info@honestyfurnishers.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">Plot No. 3, Street 6, Sector-C,</p>
                  <p className="text-gray-600">Punjab Road, Manzoor Colony,</p>
                  <p className="text-gray-600">Karachi – 75460</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Website</h3>
                  <p className="text-gray-600">www.honestyfurnishers.com</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 border-b pb-3">Company Details</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Proprietor:</span> Muhammad Hussain Khatri (DAE Wood Working)</p>
              <p><span className="font-medium">Established:</span> 2000</p>
              <p><span className="font-medium">NTN No.:</span> 1308366-0</p>
              <p><span className="font-medium">SST No.:</span> 51308366-0</p>
              <p><span className="font-medium">GST No.:</span> 11-00-9403-066-28</p>
              <p className="mt-4"><span className="font-medium">Staff:</span> Under supervision of Associate Engineer in Wood Working Technology and experienced workers.</p>
            </div>
          </div>
        </div>

        {/* Contact form and map */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {status.submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We ll get back to you soon.</p>
                <button
                  onClick={() => setStatus({ submitted: false, loading: false, error: null })}
                  className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {status.error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p>Error: {status.error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Shipping & Delivery">Shipping & Delivery</option>
                      <option value="Returns & Refunds">Returns & Refunds</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full bg-green-500 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-green-600 transition duration-300 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status.loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Map section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Find Us</h2>
            <div className="rounded-lg overflow-hidden h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3620.3804982584247!2d67.08261707537054!3d24.850850877935578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzAzLjEiTiA2N8KwMDUnMDYuNyJF!5e0!3m2!1sen!2s!4v1745402378273!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

