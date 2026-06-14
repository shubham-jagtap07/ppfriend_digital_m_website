'use client';

import React, { useEffect } from "react";
import Image from 'next/image';
import { 
  motion, 
  Variants 
} from 'framer-motion';
import { 
  FaSearch, 
  FaImage, 
  FaShoppingCart, 
  FaYoutube, 
  FaMobileAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import Services10 from '../../public/assets/Services10.png'
import Services11 from '../../public/assets/Services11.png'
import Services12 from '../../public/assets/Services12.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { 
  FaShoppingBag, 
  FaGraduationCap, 
  FaHome, 
  FaStore, 
  FaLaptopCode, 
  FaIndustry 
} from 'react-icons/fa';

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Services2Page = () => {
  // Development console feedback
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Services2 page loaded/refreshed');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={Services10}
            alt="Google Ads Services"
            fill
            className="object-cover opacity-70"
            priority
          />
          {/* lighter overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Google Ads Services India & Pune
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-700">
            ROI-Focused PPC Campaigns by Leadzoro
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-700">
            Drive Revenue, Not Just Clicks – Performance-Based Google Ads by Leadzoro
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="container mx-auto max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed"
            variants={fadeIn}
          >
            In today's fast-paced digital ecosystem, your customers are already searching for what you offer — the real question is, are they finding you?
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed"
            variants={fadeIn}
          >
            At Leadzoro, we empower ambitious businesses, startups, e-commerce founders, and local service providers with laser-targeted Google Ads Services in India. Whether you're looking to generate leads, drive sales, or scale profitably — our team of experts ensures every ad spend returns results.
          </motion.p>

          <motion.p 
            className="text-xl md:text-2xl font-semibold text-blue-700 mb-12"
            variants={fadeIn}
          >
            Let's transform your digital presence into a profit-generating machine — powered by precision, data, and creativity.
          </motion.p>
        </motion.div>
      </section>

      {/* What Are Google Ads Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.div 
          className="container mx-auto max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            variants={fadeIn}
          >
            What Are Google Ads and Why Should You Use Them?
          </motion.h2>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-lg text-slate-700 leading-relaxed"
              variants={fadeIn}
            >
              Google Ads is the world's leading online advertising platform that allows businesses to place their brand in front of ready-to-buy customers through:
            </motion.p>

            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={staggerContainer}
            >
              {["Search results", "Display banners", "Shopping listings", "YouTube videos", "Mobile apps"].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  variants={fadeIn}
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-slate-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p 
              className="text-lg text-slate-700 leading-relaxed mb-6"
              variants={fadeIn}
            >
              It works on a Pay-Per-Click (PPC) model, where you pay only when someone clicks your ad. But launching ads is not enough. You need:
            </motion.p>

            <motion.ul 
              className="space-y-4 mb-8"
              variants={staggerContainer}
            >
              {[
                "Right keyword strategy",
                "High-performing creatives",
                "Daily optimization",
                "Conversion tracking"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 text-slate-700"
                  variants={fadeIn}
                >
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p 
              className="text-lg text-slate-700 leading-relaxed"
              variants={fadeIn}
            >
              That's where a trusted Google Ads Management Company in India like Leadzoro makes all the difference.
            </motion.p>

            <motion.p 
              className="text-lg text-slate-700 leading-relaxed"
              variants={fadeIn}
            >
              Google Ads also offers detailed targeting options like demographics, interests, devices, custom audiences, and more, helping you hyper-target your ideal customers with incredible accuracy.
            </motion.p>

            <motion.p 
              className="text-lg text-slate-700 leading-relaxed"
              variants={fadeIn}
            >
              With multiple bidding strategies like Target CPA, ROAS, Manual CPC, and Smart Bidding, our certified experts ensure that you get the best return for your marketing investment.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Indian Businesses Need Google Ads Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-gray-50">
        <motion.div 
          className="container mx-auto max-w-6xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative w-full h-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={Services11}
                alt="Google Ads for Indian Businesses"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                variants={fadeIn}
              >
                Why Indian Businesses (Especially in Pune) Need Google Ads
              </motion.h2>

              <motion.p 
                className="text-lg text-slate-700 leading-relaxed"
                variants={fadeIn}
              >
                India is home to more than 900 million internet users, and Google is the first place they go to find products, services, and solutions. From tech parks in Pune to remote towns across India — your ideal customer is online.
              </motion.p>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.h3 
                  className="text-xl font-semibold text-blue-600 mb-4"
                  variants={fadeIn}
                >
                  Google Ads helps you:
                </motion.h3>

                <motion.ul className="space-y-4">
                  {[
                    "Appear instantly when someone searches for your services",
                    "Target specific locations like Pune or go national",
                    "Show ads to people who are ready to buy",
                    "Generate leads, calls, and conversions with clear ROI",
                    "Remarket to warm leads and returning users"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3 group"
                      variants={fadeIn}
                    >
                      <span className="text-blue-600 mt-1">→</span>
                      <span className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div 
                className="space-y-4 mt-8"
                variants={staggerContainer}
              >
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  variants={fadeIn}
                >
                  If you're in Pune, the digital competition is intense. But with Google Ads Services in Pune by Leadzoro, your business can dominate local SERPs and stay ahead.
                </motion.p>

                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  variants={fadeIn}
                >
                  Imagine a customer searching "best salon in Kalyani Nagar" or "real estate agents in Wakad"—wouldn't you want your business to be the first result they click? That's the power of search intent combined with smart PPC execution.
                </motion.p>
              </motion.div>

              <motion.button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Dominating Google Search
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Leadzoro Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* subtle decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-40"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            variants={fadeIn}
          >
            Why Choose Leadzoro as Your Google Ads Partner?
          </motion.h2>

          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
          >
            <p className="text-2xl text-blue-600 font-semibold mb-8">
              Because we do more than run ads — we deliver performance.
            </p>
            <h3 className="text-3xl font-bold text-slate-900 mb-10">
              What makes us the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Best Google Ads Agency in India</span>:
            </h3>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
          >
            {[ 
              "Certified Google Ads Professionals",
              "300+ Campaigns Successfully Executed",
              "Focus on ROI, Not Just Reach",
              "Industry-Specific Campaign Strategy",
              "Transparent Reporting & Dashboards",
              "Daily Campaign Optimization",
              "Full Funnel Ad Strategy (Traffic → Leads → Sales)"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-2 shadow-sm"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-blue-600 text-2xl flex-shrink-0">✅</span>
                  <p className="text-lg text-slate-800 font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-50 mb-16"
            variants={fadeIn}
          >
            <p className="text-xl text-center text-slate-800 leading-relaxed">
              We are not just another PPC Company in Pune. We are your digital growth partner. We handle everything from landing page optimization to analytics integration — offering a one-stop solution for Google Ads success.
            </p>
          </motion.div>

          {/* Our 5-Step Process to Google Ads Success Section */}
          <motion.div 
            className="mb-20"
            variants={fadeIn}
          >
            <motion.div className="relative h-[300px] mb-12 rounded-xl overflow-hidden shadow-md">
              <Image
                src={require('../../public/assets/Services15.png')}
                alt="Our 5-Step Process to Google Ads Success"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-center px-6 py-4 rounded-lg bg-white/80 text-slate-900 border border-gray-200 shadow">
                  Our 5-Step Process to Google Ads Success
                </h3>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {[
                {
                  step: "1",
                  title: "Discovery Call & Audit",
                  description: "We begin by understanding your business goals and analyzing existing campaigns (if any).",
                  color: "from-blue-600 to-blue-400",
                  icon: "🔍"
                },
                {
                  step: "2",
                  title: "Keyword & Competitor Research",
                  description: "We use AI tools and deep market insight to find profitable keywords and ad angles. We also evaluate competitor ad creatives, CTR benchmarks, and bid strategy to give you a competitive advantage.",
                  color: "from-indigo-600 to-indigo-400",
                  icon: "📊"
                },
                {
                  step: "3",
                  title: "Ad Creation & Landing Pages",
                  description: "We craft ad copy, visuals, and optimized landing pages to boost conversions. CTA placements, copywriting psychology, and form testing are part of the process.",
                  color: "from-purple-600 to-purple-400",
                  icon: "✏️"
                },
                {
                  step: "4",
                  title: "Daily Monitoring & A/B Testing",
                  description: "Our team tracks every rupee spent. We A/B test ads, adjust bids, refine targeting daily, and use scripts & rules to automate low-ROI elimination.",
                  color: "from-fuchsia-600 to-fuchsia-400",
                  icon: "📈"
                },
                {
                  step: "5",
                  title: "Reporting & Scaling",
                  description: "Weekly reports with KPIs. Once ROI is proven, we double down and scale the campaign for max output. We set up ROI-based bid strategies and help you reinvest profitably.",
                  color: "from-pink-600 to-pink-400",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-100 transition-all duration-300 shadow-sm h-full"
                  variants={fadeIn}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    zIndex: 10
                  }}
                >
                  <div className="absolute -top-5 -left-2 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-xl font-bold text-white`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">{item.icon}</span>
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-50 max-w-4xl mx-auto"
              variants={fadeIn}
            >
              <p className="text-center text-blue-700 font-medium">
                Our proven process has helped businesses across India achieve consistent ROI from Google Ads
              </p>
            </motion.div>
          </motion.div>

          {/* Real Campaign Wins Section */}
          <motion.div 
            className="mb-20"
            variants={fadeIn}
          >
            <div className="relative">
              {/* Background Image */}
              <div className="relative h-[250px] overflow-hidden rounded-t-2xl">
                <Image
                  src={require('../../public/assets/Services16.png')}
                  alt="Real Campaign Wins"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
                
                {/* Floating Elements for Visual Interest */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-100 blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-indigo-100 blur-xl"></div>
                
                {/* Headline */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
                    Real Campaign Wins
                  </h3>
                  <p className="text-blue-700 text-lg">Success Stories</p>
                </div>
              </div>
              
              {/* Success Stories Cards */}
              <div className="relative bg-white rounded-b-2xl p-8 border border-gray-200 shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "D2C Apparel Brand",
                      location: "Pune",
                      description: "Grew sales 300% in 90 days with Shopping + YouTube Ads. ROAS: 5.2X",
                      icon: "👕",
                      color: "from-rose-400 to-pink-500"
                    },
                    {
                      title: "Real Estate Consultant",
                      location: "India",
                      description: "₹1.2Cr+ pipeline in 60 days. CPL: ₹540, CTR: 7.1%",
                      icon: "🏢",
                      color: "from-emerald-400 to-green-500"
                    },
                    {
                      title: "EdTech Startup",
                      location: "",
                      description: "500+ student leads in 3 months. CAC reduced by 40% through conversion-focused landing page testing.",
                      icon: "🎓",
                      color: "from-blue-400 to-indigo-500"
                    },
                    {
                      title: "Fitness Studio",
                      location: "Baner",
                      description: "70+ monthly calls via Local Search Ads at just ₹29 per call.",
                      icon: "💪",
                      color: "from-amber-400 to-orange-500"
                    },
                    {
                      title: "SaaS Tool",
                      location: "National",
                      description: "Reduced cost per demo from ₹890 to ₹312 in 45 days. 4X pipeline uplift.",
                      icon: "🧰",
                      color: "from-violet-400 to-purple-500"
                    },
                    {
                      title: "Healthcare Clinic",
                      location: "Koregaon Park",
                      description: "Increased new patient appointments by 320% with targeted search + GMB call ads.",
                      icon: "🏥",
                      color: "from-cyan-400 to-blue-500"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 group shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px -10px rgba(14,165,233,0.08)"
                      }}
                    >
                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow mr-3`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900">
                              {item.title}
                            </h4>
                            {item.location && (
                              <p className="text-slate-500 text-sm">
                                {item.location}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="pl-2 border-l-2 border-blue-100">
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Success Indicator */}
                        <div className="mt-4 flex items-center">
                          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${item.color} w-full`}></div>
                          </div>
                          <div className="ml-2 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-10 text-center">
                  <p className="text-blue-700 mb-4">Ready to become our next success story?</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow">
                    Schedule Your Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Who We Help Section */}
          <motion.div 
            className="mb-20 relative"
            variants={fadeIn}
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-50/20 to-transparent"></div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Header with Gradient Line */}
              <div className="relative pt-12 pb-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500"></div>
                <h3 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 mb-2">
                  Who We Help
                </h3>
              </div>
              
              {/* Main Content */}
              <div className="p-8">
                {/* Industries Grid */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {[
                    { name: "Startups & Entrepreneurs", icon: "🚀", color: "from-blue-400 to-blue-500" },
                    { name: "E-commerce Brands", icon: "🛍️", color: "from-green-400 to-green-500" },
                    { name: "Real Estate Consultants", icon: "🏢", color: "from-yellow-400 to-yellow-500" },
                    { name: "Educational Institutes", icon: "🎓", color: "from-red-400 to-red-500" },
                    { name: "Doctors, Dentists, Clinics", icon: "⚕️", color: "from-teal-400 to-teal-500" },
                    { name: "B2B SaaS & Service Companies", icon: "💻", color: "from-indigo-400 to-indigo-500" },
                    { name: "Coaching & Course Creators", icon: "📚", color: "from-purple-400 to-purple-500" },
                    { name: "Fitness & Beauty Professionals", icon: "💪", color: "from-pink-400 to-pink-500" },
                    { name: "Event & Wedding Planners", icon: "💍", color: "from-amber-400 to-amber-500" },
                    { name: "Industrial Suppliers & Manufacturers", icon: "🏭", color: "from-cyan-400 to-cyan-500" }
                  ].map((industry, index) => (
                    <motion.div
                      key={index}
                      className="group relative w-[150px] h-[170px] flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5, zIndex: 20 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[130px] h-[150px] bg-white border border-gray-200 rounded-2xl transform rotate-0 group-hover:rotate-3 transition-all duration-300 shadow">
                        </div>
                      </div>
                      
                      <div className="relative z-10 p-4 flex flex-col items-center text-center">
                        <div className={`w-14 h-14 mb-3 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-2xl shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
                          <span>{industry.icon}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                          {industry.name}
                        </p>
                        <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center relative max-w-3xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 blur-xl opacity-30 -z-10"></div>
                  <p className="text-xl text-blue-700 font-medium py-6 px-4">
                    Wherever your business stands — we help you grow profitably with Google Ads.
                  </p>
                  
                  <motion.button
                    className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      <span>Find Your Industry Solution</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            className="mb-20 relative"
            variants={fadeIn}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-50/10 to-transparent"></div>
            </div>
            
            <div className="relative z-10 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500"></div>
                <div className="pt-8 pb-4 px-8">
                  <h3 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 mb-2">
                    Frequently Asked Questions
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="max-w-3xl mx-auto space-y-6">
                  {[
                    {
                      question: "What is the minimum ad budget I need to start?",
                      answer: "We recommend a minimum budget of ₹10,000/month for effective lead generation.",
                      icon: "💰",
                      color: "from-blue-400 to-blue-500"
                    },
                    {
                      question: "Do you offer Google Ads for e-commerce?",
                      answer: "Yes, we specialize in Google Ads for E-commerce Stores in India using Shopping, Display & Performance Max.",
                      icon: "🛍️",
                      color: "from-purple-400 to-purple-500"
                    },
                    {
                      question: "Can you guarantee leads?",
                      answer: "No ethical agency can guarantee leads. But we optimize daily to bring consistent ROI and performance.",
                      icon: "📊",
                      color: "from-pink-400 to-pink-500"
                    },
                    {
                      question: "What's the difference between Google Ads and SEO?",
                      answer: "Google Ads is paid and offers instant visibility. SEO is organic and long-term. Both work best together.",
                      icon: "🔍",
                      color: "from-indigo-400 to-indigo-500"
                    },
                    {
                      question: "How soon can I expect results?",
                      answer: "Initial results are typically seen within 7–10 days of campaign launch.",
                      icon: "⏱️",
                      color: "from-cyan-400 to-cyan-500"
                    },
                    {
                      question: "Do you provide real-time reports?",
                      answer: "Yes! Clients get access to transparent dashboards and weekly performance reports.",
                      icon: "📈",
                      color: "from-green-400 to-green-500"
                    },
                    {
                      question: "What types of businesses can benefit from Google Ads?",
                      answer: "Any business that wants more traffic, leads, or sales can benefit — including service-based, product-based, and B2B models.",
                      icon: "🏢",
                      color: "from-amber-400 to-amber-500"
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="group"
                        initial={{ height: "auto" }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-center justify-between p-5 rounded-xl bg-white border border-gray-200 group-hover:border-blue-100 transition-all duration-300 cursor-pointer overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-0 transform"></div>
                          
                          <div className="flex items-center space-x-4 relative z-10">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${faq.color} flex items-center justify-center text-2xl shadow flex-shrink-0`}>
                              <span>{faq.icon}</span>
                            </div>
                            <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                              {faq.question}
                            </h4>
                          </div>
                          
                          <div className="relative z-10">
                            <motion.div
                              className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 text-gray-600 group-hover:text-blue-600" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                initial={false}
                                animate={{ rotate: 0 }}
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.3 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </motion.svg>
                            </motion.div>
                          </div>
                        </div>
                        
                        <motion.div
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="p-5 bg-white border-t border-gray-100 rounded-b-xl">
                            <div className="pl-16">
                              <div className="relative">
                                <div className="absolute left-[-28px] top-[-20px] w-0.5 h-[calc(100%+20px)] bg-gradient-to-b from-blue-200 to-indigo-200"></div>
                                <p className="text-slate-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center">
                      <span>Have More Questions? Let's Talk</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA Section */}
          <motion.div
            className="mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Column - Content */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500">
                        Let's Scale Your Business with Google Ads
                      </h3>
                      
                      <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                        At Leadzoro, we treat your business like our own. Our team doesn't just aim for traffic — we aim for leads, revenue, and real returns.
                      </p>
                      
                      <div className="mb-8">
                        <motion.button
                          className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow transition-all duration-300 flex items-center justify-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>Book your FREE 30-minute strategy call today</span>
                        </motion.button>
                      </div>
                      
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-center space-x-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-slate-500 text-sm">Call/WhatsApp</p>
                            <p className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors duration-300">+91 8166922792</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center space-x-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-slate-500 text-sm">Email</p>
                            <p className="text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors duration-300">hello@leadzoro.com</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center space-x-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-slate-500 text-sm">Website</p>
                            <p className="text-slate-900 font-semibold group-hover:text-pink-600 transition-colors duration-300">www.leadzoro.com</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right Column - Decorative Image/Animation */}
                  <div className="relative h-full min-h-[300px] lg:min-h-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
                    
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div 
                        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100 rounded-full blur-xl"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4,
                          ease: "easeInOut" 
                        }}
                      ></motion.div>
                      
                      <motion.div 
                        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-100 rounded-full blur-xl"
                        animate={{ 
                          scale: [1, 1.08, 1],
                          opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 5,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      ></motion.div>
                    </div>
                    
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border border-gray-100"></div>
                      ))}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <motion.div 
                          className="absolute inset-0 border-2 border-blue-100 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 20,
                            ease: "linear" 
                          }}
                        >
                          <motion.div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full shadow" />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute inset-8 border-2 border-indigo-100 rounded-full"
                          animate={{ rotate: -360 }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 15,
                            ease: "linear" 
                          }}
                        >
                          <motion.div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-600 rounded-full shadow" />
                        </motion.div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div 
                            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg flex items-center justify-center"
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 6,
                              ease: "easeInOut" 
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 space-y-8"
              variants={staggerContainer}
            >
              <motion.div
                className="grid grid-cols-1 gap-6"
                variants={staggerContainer}
              >
                {[
                  {
                    title: "Data-Driven Excellence",
                    description: "We don't guess; we analyze. Every campaign is backed by thorough research and real-time data."
                  },
                  {
                    title: "Local Market Expertise",
                    description: "Deep understanding of Pune's business landscape and consumer behavior patterns."
                  },
                  {
                    title: "Transparent Reporting",
                    description: "Clear, regular updates on campaign performance, ROI, and optimization strategies."
                  },
                  {
                    title: "Dedicated Support",
                    description: "Your success is our priority. Get personalized attention and quick response times."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-100 transition-all duration-300 group shadow-sm"
                    variants={fadeIn}
                  >
                    <h3 className="text-xl font-semibold text-blue-600 mb-2 group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner with Leadzoro Today
              </motion.button>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={Services12}
                alt="Leadzoro Google Ads Partnership"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services2Page;
