'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: FaPhoneAlt, text: '+91 7420-935469', href: 'tel:+917420935469' },
    { icon: FaEnvelope, text: 'info@dibiznesssolutions.com', href: 'mailto:info@dibiznesssolutions.com' },
    { icon: FaMapMarkerAlt, text: 'Pune, Maharashtra, India', href: '/' }
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Meta Ads', href: '/meta-ads-services' },
        { name: 'Google Ads', href: '/google-ads-services' },
        { name: 'SEO Services', href: '/seo-services' },
        { name: 'Website Development', href: '/website-development-services' },
        { name: 'Social Media Management', href: '/social-media-management-services' },
        { name: 'GMB Optimization', href: '/gmb-optimization-services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Marketing Guide', href: '/resources/marketing-guide' },
        { name: 'SEO Checklist', href: '/resources/seo-checklist' },
        { name: 'Growth Tips', href: '/resources/growth-tips' },
        { name: 'Tools', href: '/resources/tools' }
      ]
    }
  ];

  return (
    <footer className="relative bg-neutral-900 pt-20 pb-6 text-gray-300">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="stars opacity-80" />
        <div className="stars2 opacity-60" />
        <div className="stars3 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <img src="/assets/WhatsApp Image 2026-06-09 at 11.52.12 PM.jpeg" alt="DiBiznesSolutions Logo" className="h-12 w-auto rounded" />
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted digital growth partner. We transform clicks into customers and visitors into brand advocates.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + sectionIndex * 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.text}
              href={info.href}
              className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-primary-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
            >
              <info.icon />
              <span>{info.text}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} DiBiznesSolutions. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
