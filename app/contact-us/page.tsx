'use client';

import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaMapMarkerAlt,
  FaRocket,
  FaShieldAlt,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaLaptopCode,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaComments
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // send the form data to your backend here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission (demo)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Elements (light) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 to-blue-50" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/25 rounded-full filter blur-3xl" style={{ animationDelay: '-2s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">📞 Contact Us</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Your Growth Starts With a Conversation
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
            At DiBiznesSolutions, we don't believe in just selling services — we build digital success stories.
            If you're looking for a digital marketing partner who understands your business goals and delivers performance-driven solutions — you're in the right place.
          </p>
          <p className="text-base text-slate-700 max-w-3xl mx-auto">
            Whether you're a startup founder, service provider, coach, freelancer, or a business scaling up across India — our team is ready to guide your digital journey with data-backed strategies, real-time execution, and measurable growth.
          </p>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/25 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/25 rounded-full filter blur-3xl" style={{ animationDelay: '-5s' }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <HowCanWeHelpSection />
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <MoneybackGuaranteeSection />
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfoSection />
            <ContactFormSection
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formSubmitted={formSubmitted}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <FinalCTASection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

const HowCanWeHelpSection = () => {
  const services = [
    {
      icon: <FaGoogle className="w-10 h-10 text-white" />,
      title: "Need leads through Google & Meta Ads?",
      color: "from-blue-500 to-blue-300"
    },
    {
      icon: <FaGoogle className="w-10 h-10 text-white" />,
      title: "Want your business to rank #1 on Google?",
      color: "from-green-500 to-green-300"
    },
    {
      icon: <FaLaptopCode className="w-10 h-10 text-white" />,
      title: "Looking to build a fast, modern website?",
      color: "from-purple-500 to-purple-300"
    },
    {
      icon: <FaInstagram className="w-10 h-10 text-white" />,
      title: "Want to grow your brand presence on social media?",
      color: "from-pink-500 to-pink-300"
    },
    {
      icon: <FaMapMarkedAlt className="w-10 h-10 text-white" />,
      title: "Need local customers through GMB optimization?",
      color: "from-yellow-500 to-yellow-300"
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">💬 How Can We Help You Today?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border rounded-xl p-8 flex flex-col items-center"
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${service.color} shadow-md`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-slate-900">{service.title}</h3>
          </div>
        ))}
      </div>

      <p className="text-lg text-slate-700 mt-12 max-w-3xl mx-auto">
        Let's connect. We promise honest advice, real support, and results that speak louder than promises.
      </p>
    </div>
  );
};

const MoneybackGuaranteeSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 rounded-3xl border bg-white shadow-sm">
      <div className="text-center space-y-8">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-300 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaMoneyBillWave className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-slate-900">💸 7-Day Moneyback Guarantee</span>
        </h2>

        <h3 className="text-2xl font-semibold text-green-600">
          No-Risk Partnership
        </h3>

        <p className="text-lg text-slate-700">
          We know trust takes time. That's why we offer a 100% moneyback guarantee within 7 days of onboarding — if you're not satisfied, you get your investment back. No conditions, no catch. Just transparency.
        </p>
      </div>
    </div>
  );
};

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Call or WhatsApp",
      details: "+91 7420-935469",
      link: "tel:+917420935469"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@dibiznesssolutions.com",
      link: "mailto:info@dibiznesssolutions.com"
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      details: "www.dibiznesssolutions.com",
      link: "https://www.dibiznesssolutions.com"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-slate-900">📍 Reach Out to Us</span>
      </h2>

      <div className="space-y-8 mb-12">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <a
                href={item.link}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.details}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-slate-900">
          <FaClock className="mr-3 text-blue-600" />
          <span>🕒 Business Hours</span>
        </h2>
        <p className="text-slate-700 ml-10">Monday to Saturday: 9:00 AM – 8:00 PM</p>
        <p className="text-slate-700 ml-10">Sunday: Closed (WhatsApp support available)</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center text-slate-900">
          <FaMapMarkerAlt className="mr-3 text-blue-600" />
          <span>🗺️ Proudly Based in Pune, Serving All Over India</span>
        </h2>
        <p className="text-slate-700 ml-10">
          Though we're based in Pune, we work with clients across India — from Mumbai to Bangalore, Delhi to Hyderabad. Wherever you are, DiBiznesSolutions is just a message away.
        </p>
      </div>
    </div>
  );
};

const ContactFormSection = ({
  formData,
  handleChange,
  handleSubmit,
  formSubmitted
}: {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formSubmitted: boolean;
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">
        <span>📬 Ready to Grow Your Business?</span>
      </h2>
      <p className="text-slate-700 mb-6">
        Fill out the form below and tell us what you're looking for. Our team will get in touch with you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-slate-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-slate-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-slate-700 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-slate-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about your project"
          />
        </div>

        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <FaShieldAlt className="text-blue-600" />
          <p>🔐 Privacy First, Always. We keep your contact details 100% private. No spam, no third-party sharing, ever.</p>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
        >
          {formSubmitted ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

const FinalCTASection = () => {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaRocket className="w-10 h-10 text-white" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-slate-900">🚀 Let's Make It Happen. Let's Talk Growth.</span>
      </h2>

      <p className="text-lg text-slate-700 max-w-3xl mx-auto">
        Every brand you admire once started with a simple conversation.
        Yours begins here — with DiBiznesSolutions.
      </p>
    </div>
  );
};

export default ContactPage;
