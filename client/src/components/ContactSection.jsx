import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Get in <span className="text-blue-300">Touch</span>
        </h2>
        
        <div className="transform skew-x-[-5deg] bg-blue-800/50 backdrop-blur-md p-8 rounded-lg shadow-xl border border-blue-400/30">
          <div className="transform skew-x-[5deg]">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Contact Information */}
              <div className="md:w-1/3 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-100">
                    <FaEnvelope className="text-blue-300 text-lg" />
                    <span>dsakethsurya@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-blue-100">
                    <FaPhone className="text-blue-300 text-lg" />
                    <span>+91 6300425065</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-blue-100">
                    <FaMapMarkerAlt className="text-blue-300 text-lg" />
                    <span>1-172, Saptagiri nagar, Sujatha nagar post, Visakhapatnam, Andhra Pradesh - 530051</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {submitSuccess ? (
                  <div className="bg-green-600/30 border border-green-500/50 text-green-100 p-4 rounded-lg mb-4">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </div>
                ) : null}
                
                {submitError ? (
                  <div className="bg-red-600/30 border border-red-500/50 text-red-100 p-4 rounded-lg mb-4">
                    {submitError}
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-blue-200 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-blue-700/40 border border-blue-600/50 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-blue-200 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-blue-700/40 border border-blue-600/50 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-blue-200 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-blue-700/40 border border-blue-600/50 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-blue-200 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-blue-700/40 border border-blue-600/50 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}