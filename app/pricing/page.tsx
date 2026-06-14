'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCheck,
  FaTimes,
  FaSearch,
  FaMapMarkerAlt,
  FaFacebookF,
  FaGoogle,
  FaPalette,
  FaBrain,
  FaShieldAlt,
  FaCreditCard,
  FaArrowUp,
  FaHeadset,
  FaFileInvoiceDollar,
  FaUserTie,
  FaPhoneAlt
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('seo');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/70 to-blue-50" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/25 rounded-full filter blur-3xl" style={{ animationDelay: '-2s' }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">💰 Pricing Plans</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Digital Marketing That Delivers & Scales
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
              At Leadzoro, we believe in value, clarity, and performance. That's why our pricing is designed to be simple, flexible, and focused on real business growth — not just digital noise.
            </p>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Whether you're a startup, small business, or growing brand, we've got tailored packages that match your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
                <FaCheck className="text-green-600 mr-2" />
                <span className="text-slate-800">No hidden fees</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
                <FaCheck className="text-green-600 mr-2" />
                <span className="text-slate-800">No long-term lock-ins</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
                <FaCheck className="text-green-600 mr-2" />
                <span className="text-slate-800">7-day moneyback guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TabButton
              icon={<FaSearch />}
              label="SEO Services"
              isActive={activeTab === 'seo'}
              onClick={() => setActiveTab('seo')}
            />
            <TabButton
              icon={<FaMapMarkerAlt />}
              label="Google My Business"
              isActive={activeTab === 'gmb'}
              onClick={() => setActiveTab('gmb')}
            />
            <TabButton
              icon={<FaFacebookF />}
              label="Facebook Ads"
              isActive={activeTab === 'fb'}
              onClick={() => setActiveTab('fb')}
            />
            <TabButton
              icon={<FaGoogle />}
              label="Google Ads"
              isActive={activeTab === 'google'}
              onClick={() => setActiveTab('google')}
            />
            <TabButton
              icon={<FaPalette />}
              label="Branding & Design"
              isActive={activeTab === 'branding'}
              onClick={() => setActiveTab('branding')}
            />
            <TabButton
              icon={<FaBrain />}
              label="Business Consulting"
              isActive={activeTab === 'consulting'}
              onClick={() => setActiveTab('consulting')}
            />
          </div>

          {/* Pricing Tables */}
          <div className="mt-8">
            {activeTab === 'seo' && <SEOPricingTable />}
            {activeTab === 'gmb' && <GMBPricingTable />}
            {activeTab === 'fb' && <FacebookPricingTable />}
            {activeTab === 'google' && <GooglePricingTable />}
            {activeTab === 'branding' && <BrandingPricingTable />}
            {activeTab === 'consulting' && <ConsultingPricingTable />}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-white to-blue-50/50">
        <div className="max-w-4xl mx-auto">
          <WhatsIncludedSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <CTASection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

const TabButton = ({ icon, label, isActive, onClick }: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/10'
          : 'bg-white/60 hover:bg-white/70 text-slate-800 border border-gray-200'
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

// Fix the shadow color interpolation issue in the PricingCard component
const PricingCard = ({
  title,
  price,
  color,
  features,
  isPopular = false
}: {
  title: string;
  price: string;
  color: string;
  features: { label: string; value: React.ReactNode }[];
  isPopular?: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getColorClass = () => {
    switch (color) {
      case 'green': return 'from-green-500 to-green-400';
      case 'blue': return 'from-blue-500 to-blue-400';
      case 'red': return 'from-red-500 to-red-400';
      default: return 'from-purple-500 to-purple-400';
    }
  };

  const getBorderColor = () => {
    switch (color) {
      case 'green': return 'border-green-200';
      case 'blue': return 'border-blue-200';
      case 'red': return 'border-red-200';
      default: return 'border-purple-200';
    }
  };

  // Fix shadow color interpolation by using hardcoded classes instead of string interpolation
  const getShadowHoverClass = () => {
    switch (color) {
      case 'green': return 'hover:shadow-green-200';
      case 'blue': return 'hover:shadow-blue-200';
      case 'red': return 'hover:shadow-red-200';
      default: return 'hover:shadow-purple-200';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`relative bg-white/80 border ${getBorderColor()} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-yellow-400 text-slate-900 font-bold py-1 px-4 rounded-bl-lg text-sm">
            POPULAR
          </div>
        </div>
      )}

      <div className={`bg-gradient-to-r ${getColorClass()} py-6 px-6 text-center`}>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="text-3xl font-bold mt-2 text-white">{price}</div>
      </div>

      <div className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-slate-700">{feature.label}</span>
              <span className="font-medium text-slate-900">{feature.value}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full mt-8 py-3 rounded-lg bg-gradient-to-r ${getColorClass()} text-white font-bold hover:shadow-md ${getShadowHoverClass()} transition-all duration-300`}>
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

const SEOPricingTable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-slate-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <span className="gradient-text">🔍 SEO Services Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="Basic SEO 🟢"
          price="₹3,999/mo"
          color="green"
          features={[
            { label: "Pages Optimized", value: "Up to 5 Pages" },
            { label: "Keyword Research", value: "Basic" },
            { label: "Technical SEO", value: "Basic Setup" },
            { label: "On-Page SEO", value: "Titles, Meta, H1" },
            { label: "Off-Page SEO", value: <FaTimes className="text-red-500" /> },
            { label: "Reports", value: "Monthly PDF" },
            { label: "Support", value: "Email" },
          ]}
        />

        <PricingCard
          title="Growth SEO 🔵"
          price="₹7,999/mo"
          color="blue"
          isPopular={true}
          features={[
            { label: "Pages Optimized", value: "Up to 10 Pages" },
            { label: "Keyword Research", value: "In-depth (10–15)" },
            { label: "Technical SEO", value: "Robots, Sitemap, GSC" },
            { label: "On-Page SEO", value: "Internal Links, Schema" },
            { label: "Off-Page SEO", value: "10 Backlinks/month" },
            { label: "Reports", value: "Detailed Report" },
            { label: "Support", value: "WhatsApp" },
          ]}
        />

        <PricingCard
          title="Pro SEO 🔴"
          price="₹14,999/mo"
          color="red"
          features={[
            { label: "Pages Optimized", value: "Up to 20 Pages" },
            { label: "Keyword Research", value: "Advanced (20–40)" },
            { label: "Technical SEO", value: "Full Audit & Fixes" },
            { label: "On-Page SEO", value: "Image, Speed, Structure" },
            { label: "Off-Page SEO", value: "30+ Backlinks/month" },
            { label: "Reports", value: "Live Dashboard" },
            { label: "Support", value: "Dedicated Manager" },
          ]}
        />
      </div>
    </motion.div>
  );
};

const GMBPricingTable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-slate-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <span className="gradient-text">📍 Google My Business (GMB) Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="GMB Starter 🟢"
          price="₹2,999"
          color="green"
          features={[
            { label: "Listing Setup", value: <FaCheck className="text-green-600" /> },
            { label: "Optimization", value: "Basic Info, Timing" },
            { label: "Posts/Month", value: "2" },
            { label: "Review Boosting", value: <FaTimes className="text-red-500" /> },
            { label: "Ranking Strategy", value: <FaTimes className="text-red-500" /> },
            { label: "Reports", value: "Monthly PDF" },
          ]}
        />

        <PricingCard
          title="GMB Growth 🔵"
          price="₹5,499"
          color="blue"
          isPopular={true}
          features={[
            { label: "Listing Setup", value: <FaCheck className="text-green-600" /> },
            { label: "Optimization", value: "Services, Description" },
            { label: "Posts/Month", value: "5" },
            { label: "Review Boosting", value: "Manual Follow-ups" },
            { label: "Ranking Strategy", value: "Basic Citations" },
            { label: "Reports", value: "Weekly Summary" },
          ]}
        />

        <PricingCard
          title="GMB Pro 🔴"
          price="₹8,999"
          color="red"
          features={[
            { label: "Listing Setup", value: "✔️ + Audit" },
            { label: "Optimization", value: "Full SEO + Keywords" },
            { label: "Posts/Month", value: "10" },
            { label: "Review Boosting", value: "✔️ + Templates" },
            { label: "Ranking Strategy", value: "Advanced Citations" },
            { label: "Reports", value: "Dashboard View" },
          ]}
        />
      </div>
    </motion.div>
  );
};

const FacebookPricingTable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-slate-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <span className="gradient-text">📘 Facebook Ads Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="FB Lite 🟢"
          price="₹4,999/mo"
          color="green"
          features={[
            { label: "Campaign Type", value: "Awareness or Leads" },
            { label: "Creatives", value: "3 Static Posts" },
            { label: "Audience Setup", value: "Basic Interest" },
            { label: "Optimization", value: "Boost Only" },
            { label: "Reports", value: "Weekly Summary" },
            { label: "Ad Spend", value: "Client-Side" },
          ]}
        />

        <PricingCard
          title="FB Growth 🔵"
          price="₹9,999/mo"
          color="blue"
          isPopular={true}
          features={[
            { label: "Campaign Type", value: "Leads + Remarketing" },
            { label: "Creatives", value: "6 Static + Reels" },
            { label: "Audience Setup", value: "Custom + Retargeting" },
            { label: "Optimization", value: "Conversion Setup" },
            { label: "Reports", value: "Dashboard Report" },
            { label: "Ad Spend", value: "Client-Side" },
          ]}
        />

        <PricingCard
          title="FB Pro 🔴"
          price="₹18,999/mo"
          color="red"
          features={[
            { label: "Campaign Type", value: "Full Funnel (A/B Test)" },
            { label: "Creatives", value: "10 Creatives (Image + Video)" },
            { label: "Audience Setup", value: "Lookalike + Layered Targeting" },
            { label: "Optimization", value: "Advanced Pixel + Events" },
            { label: "Reports", value: "ROI-Focused Insights" },
            { label: "Ad Spend", value: "Client-Side" },
          ]}
        />
      </div>
    </motion.div>
  );
};

const GooglePricingTable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-slate-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <span className="gradient-text">🔎 Google Ads Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="Google Lite 🟢"
          price="₹5,999/mo"
          color="green"
          features={[
            { label: "Campaign Type", value: "Search / Call Only" },
            { label: "Keyword Targeting", value: "10–15 Keywords" },
            { label: "Landing Page", value: <FaTimes className="text-red-500" /> },
            { label: "Tracking Setup", value: <FaTimes className="text-red-500" /> },
            { label: "Optimization", value: "Monthly" },
            { label: "Reporting", value: "Monthly PDF" },
          ]}
        />

        <PricingCard
          title="Google Growth 🔵"
          price="₹11,999/mo"
          color="blue"
          isPopular={true}
          features={[
            { label: "Campaign Type", value: "Search + Display" },
            { label: "Keyword Targeting", value: "25–30 Keywords" },
            { label: "Landing Page", value: "Basic Page" },
            { label: "Tracking Setup", value: "Conversion + GTag" },
            { label: "Optimization", value: "Weekly" },
            { label: "Reporting", value: "Weekly Dashboard" },
          ]}
        />

        <PricingCard
          title="Google Pro 🔴"
          price="₹19,999/mo"
          color="red"
          features={[
            { label: "Campaign Type", value: "Full Funnel (Search, Display, YouTube)" },
            { label: "Keyword Targeting", value: "50+ Keywords" },
            { label: "Landing Page", value: "CRO Page + Funnel" },
            { label: "Tracking Setup", value: "GA4 + Event Setup" },
            { label: "Optimization", value: "Bi-Weekly (CPC/ROI Focus)" },
            { label: "Reporting", value: "ROI Report + Suggestions" },
          ]}
        />
      </div>
    </motion.div>
  );
};

const BrandingPricingTable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-slate-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <span className="gradient-text">🎨 Branding & Design Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="Brand Basic 🟢"
          price="₹3,499"
          color="green"
          features={[
            { label: "Logo Design", value: "1 Concept" },
            { label: "Color & Fonts", value: "Basic Suggestions" },
            { label: "Social Templates", value: "3 Posts" },
            { label: "Visiting Card", value: <FaTimes className="text-red-500" /> },
            { label: "Stationery Kit", value: <FaTimes className="text-red-500" /> },
          ]}
        />

        <PricingCard
          title="Brand Growth 🔵"
          price="₹7,499"
          color="blue"
          isPopular={true}
          features={[
            { label: "Logo Design", value: "2 Revisions" },
            { label: "Color & Fonts", value: "Typography Guide" },
            { label: "Social Templates", value: "6 Posts + Cover" },
            { label: "Visiting Card", value: "Digital File" },
            { label: "Stationery Kit", value: <FaTimes className="text-red-500" /> },
          ]}
        />

        <PricingCard
          title="Brand Pro 🔴"
          price="₹14,999"
          color="red"
          features={[
            { label: "Logo Design", value: "3 Concepts + Kit" },
            { label: "Color & Fonts", value: "Brand Guidelines PDF" },
            { label: "Social Templates", value: "10 Designs + Reels" },
            { label: "Visiting Card", value: "Print-Ready File" },
            { label: "Stationery Kit", value: "Envelope + Letterhead" },
          ]}
        />
      </div>
    </motion.div>
  );
};

const ConsultingPricingTable = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-slate-900"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <span className="gradient-text">🧠 Business Consulting Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="Strategy Call 🟢"
          price="₹999"
          color="green"
          features={[
            { label: "Duration", value: "30 Min" },
            { label: "Topics Covered", value: "1 Focus Area" },
            { label: "Report Included", value: <FaTimes className="text-red-500" /> },
            { label: "Follow-Up Call", value: <FaTimes className="text-red-500" /> },
            { label: "Ideal For", value: "New Leads" },
          ]}
        />

        <PricingCard
          title="Growth Audit 🔵"
          price="₹2,999"
          color="blue"
          isPopular={true}
          features={[
            { label: "Duration", value: "1 Hour + Report" },
            { label: "Topics Covered", value: "Website, SEO, Ads" },
            { label: "Report Included", value: "Action Steps" },
            { label: "Follow-Up Call", value: <FaTimes className="text-red-500" /> },
            { label: "Ideal For", value: "Small Businesses" },
          ]}
        />

        <PricingCard
          title="Scale Consulting 🔴"
          price="₹9,999"
          color="red"
          features={[
            { label: "Duration", value: "2 Sessions + Roadmap" },
            { label: "Topics Covered", value: "Funnel + Scale Strategy" },
            { label: "Report Included", value: "Revenue Map" },
            { label: "Follow-Up Call", value: "After 15 Days" },
            { label: "Ideal For", value: "Agencies & Founders" },
          ]}
        />
      </div>
    </motion.div>
  );
};

const WhatsIncludedSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <FaShieldAlt className="w-6 h-6 text-green-600" />,
      title: "7-Day No Questions Asked Moneyback Guarantee"
    },
    {
      icon: <FaCreditCard className="w-6 h-6 text-green-600" />,
      title: "No Setup Charges"
    },
    {
      icon: <FaArrowUp className="w-6 h-6 text-green-600" />,
      title: "Cancel or Upgrade Anytime"
    },
    {
      icon: <FaHeadset className="w-6 h-6 text-green-600" />,
      title: "WhatsApp, Email & Priority Support"
    },
    {
      icon: <FaFileInvoiceDollar className="w-6 h-6 text-green-600" />,
      title: "GST-Compliant Invoice"
    },
    {
      icon: <FaUserTie className="w-6 h-6 text-green-600" />,
      title: "Real Strategy, No Outsourcing"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-12 text-slate-900">
        <span className="gradient-text">✅ What's Included in All Plans</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 border border-gray-100 rounded-xl p-6 flex flex-col items-center"
          >
            <div className="mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-medium text-center text-slate-900">{benefit.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const CTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white/70 border border-gray-200 rounded-2xl p-10"
    >
      <h2 className="text-3xl font-bold mb-6 text-slate-900">
        <span className="gradient-text">📞 Not Sure What to Pick?</span>
      </h2>

      <p className="text-xl text-slate-700 mb-8">
        Every business is different — and so is its marketing strategy. Tell us your goals and we'll help you choose the perfect plan (or make one just for you).
      </p>

      <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold hover:shadow-md transition-all duration-300 transform hover:scale-105">
        <FaPhoneAlt />
        <span>Talk to a Growth Expert</span>
      </Link>
    </motion.div>
  );
};

export default PricingPage;
