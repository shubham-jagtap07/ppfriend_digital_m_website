'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaFacebookF, FaInstagram, FaWhatsapp, FaCog, FaChartLine, FaUsers, FaBullseye } from 'react-icons/fa'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Services1 from '../../public/assets/Services1.png'
import Services2 from '../../public/assets/Services2.png'
import Services3 from '../../public/assets/Services3.png'
import Services4 from '../../public/assets/Services4.png'
import Services5 from '../../public/assets/Services5.png'
import Services6 from '../../public/assets/Services6.png'
import Services7 from '../../public/assets/Services7.png'
import Services9 from '../../public/assets/Servcies9.png'
import Footer from '../components/Footer'

interface ServiceCardProps {
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

const ServiceCard = ({ title, content, icon: Icon, delay = 0 }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100"
    >
      <div className="flex items-center mb-4">
        <Icon className="text-primary-500 text-3xl mr-3" />
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-700">{content}</p>
    </motion.div>
  )
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep = ({ number, title, description, delay = 0 }: ProcessStepProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-start space-x-4"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-700">{description}</p>
      </div>
    </motion.div>
  )
}

interface FeatureListProps {
  items: string[];
  className?: string;
}

const FeatureList = ({ items, className = "" }: FeatureListProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.ul
      ref={ref}
      className={`space-y-3 ${className}`}
    >
      {items.map((item: string, index: number) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start space-x-3"
        >
          <FaCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
          <span className="text-slate-700">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

interface BenefitItemProps {
  text: string;
  delay?: number;
}

const BenefitItem = ({ text, delay = 0 }: BenefitItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-start space-x-3"
    >
      <FaCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
      <p className="text-slate-700">{text}</p>
    </motion.div>
  )
}

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  image: any;
  imageAlt: string;
  reverse?: boolean;
  bgClass?: string;
}

const ServiceSection = ({ 
  title, 
  description, 
  features, 
  image, 
  imageAlt, 
  reverse = false, 
  bgClass = "bg-white" 
}: ServiceSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className={`py-20 ${bgClass} relative overflow-hidden`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/6 to-secondary-500/6" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/6 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/6 rounded-full filter blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="gradient-text text-slate-900">{title}</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>{description}</p>
              {features && (
                <div className="mt-6">
                  <FeatureList items={features} />
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/12 to-secondary-500/12 z-10 pointer-events-none opacity-20" />
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface IndustryCardProps {
  title: string;
  delay?: number;
}

const IndustryCard = ({ title, delay = 0 }: IndustryCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-2 h-1 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
    </motion.div>
  )
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div className="border-b border-slate-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-xl font-semibold text-slate-900 group-hover:text-primary-500 transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="overflow-hidden"
      >
        <p className="text-slate-700 pb-6">{answer}</p>
      </motion.div>
    </motion.div>
  )
}

const ServicesPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const targetingFeatures = [
    'Interests and demographics',
    'Geographic location (like Pune, Mumbai, or PAN India)',
    'User behaviors, shopping habits, and more'
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 text-slate-900">
        <Navbar />
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/6 to-secondary-500/6" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/12 rounded-full filter blur-3xl animate-float" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/12 rounded-full filter blur-3xl animate-float" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:pr-8"
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="gradient-text">Meta Ads Services</span>
                  <br />
                  <span className="text-slate-900">That Drive Measurable Growth</span>
                </motion.h1>
                
                <motion.div
                  className="space-y-6 text-lg text-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p>
                    If you're a business owner, e-commerce founder, or service provider in India (especially Pune), 
                    you already know this: people spend a lot of time on Facebook and Instagram. But what if your brand 
                    could show up exactly where your audience scrolls every day — with an offer they can't ignore?
                  </p>
                  <p className="text-xl font-semibold text-slate-900">
                    That's the power of Meta Ads — and at Leadzoro, we help you unlock it.
                  </p>
                  <p>
                    We're not just another social media advertising company. We're a ROI-focused, results-obsessed 
                    Meta Ads expert in India, helping you generate leads, boost sales, and scale profitably with 
                    tailored Facebook and Instagram ad strategies.
                  </p>
                  <p>
                    We go beyond impressions and clicks. We create digital journeys — guiding users from awareness 
                    to conversion using high-converting ad funnels, backed by real-time analytics, creative storytelling, 
                    and ROI-focused scaling.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get Started Now
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] lg:h-[450px] w-full rounded-xl overflow-hidden shadow-md group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/12 to-secondary-500/12 z-10 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <Image
                  src={Services1}
                  alt="Meta Ads Services"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are Meta Ads Section */}
        <ServiceSection
          title="What Are Meta Ads?"
          description="Meta Ads are paid advertising campaigns that run across Meta platforms — Facebook, Instagram, Messenger, and the Meta Audience Network. These ads can be designed to do everything from building brand awareness to generating direct conversions."
          features={[
            "Reach your target audience across all Meta platforms",
            "Drive measurable business results with precision targeting",
            "Create engaging ad experiences that convert",
            "Track and optimize performance in real-time"
          ]}
          image={Services2}
          imageAlt="What Are Meta Ads"
          bgClass="bg-white"
          reverse={false}
        />

        {/* Why Choose Leadzoro Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/6 to-secondary-500/6" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/6 rounded-full filter blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/6 rounded-full filter blur-3xl animate-float" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <span className="gradient-text text-slate-900">Why Choose Leadzoro</span>
                  <br />
                  <span className="text-slate-900">for Meta Ads?</span>
                </motion.h2>

                <p className="text-xl text-slate-700">
                  There are many Facebook Ads agencies in India. But here's why Pune-based businesses 
                  (and 100+ Indian brands) trust Leadzoro:
                </p>

                <div className="space-y-4">
                  <BenefitItem 
                    text="We deliver results — not just impressions. From 3x ROAS to 5x lead volume, we're known for performance."
                    delay={0.2}
                  />
                  <BenefitItem 
                    text="We specialize only in Meta platforms — meaning our full focus is on Facebook and Instagram marketing."
                    delay={0.3}
                  />
                  <BenefitItem 
                    text="We build scalable campaigns — tailored for e-commerce, coaching, real estate, and more."
                    delay={0.4}
                  />
                  <BenefitItem 
                    text="We're transparent — weekly reports, real-time dashboards, and no fluff."
                    delay={0.5}
                  />
                  <BenefitItem 
                    text="We're local — offering personalized Meta Ads Services in Pune with a national delivery mindset."
                    delay={0.6}
                  />
                </div>

                <motion.div
                  className="space-y-4 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <p>
                    Whether you're looking for Affordable Meta Ads Services for Small Businesses 
                    or high-ticket conversion campaigns, we've got you covered.
                  </p>
                  <p>
                    We don't just create ads — we create a predictable sales engine. Every campaign 
                    is data-backed, strategy-first, and optimized for outcomes that matter: leads, 
                    sales, and brand growth.
                  </p>
                  <p className="text-xl font-semibold text-slate-900">
                    And yes — we've seen brands grow from ₹0 to ₹10L/month in revenue through Meta Ads alone.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Start Your Growth Journey
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[400px] lg:h-[450px] w-full rounded-xl overflow-hidden shadow-md group"
              >
                <Image
                  src={Services3}
                  alt="Why Choose Leadzoro"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facebook Ad Campaign Management */}
        <ServiceSection
          title="Facebook Ad Campaign Management"
          description="As a leading Facebook Advertising Agency, we create customized campaigns that align with your brand goals — be it website traffic, sales, or app installs."
          features={[
            "Audience research & competitor targeting",
            "Conversion-optimized ad copy",
            "A/B testing on creatives and headlines",
            "Retargeting for abandoned carts or website visitors",
            "Detailed reporting with ROAS, CTR, and cost per result"
          ]}
          image={Services4}
          imageAlt="Facebook Ad Campaign Management"
          bgClass="bg-white"
        />

        {/* Instagram Ad Targeting */}
        <ServiceSection
          title="Instagram Ad Targeting & Optimization"
          description="Instagram is more than pretty pictures — it's a conversion powerhouse. Our Instagram Marketing Services help you dominate Instagram Reels, Stories, Feed, and Explore with creative ads that feel organic but sell like crazy."
          features={[
            "Reels & Story ads optimized for mobile",
            "Local targeting for Instagram Marketing Pune",
            "Visual storytelling to boost brand recall",
            "High-converting video & carousel formats"
          ]}
          image={Services5}
          imageAlt="Instagram Ad Targeting"
          reverse={true}
          bgClass="bg-white"
        />

        {/* Lead Generation */}
        <ServiceSection
          title="Lead Generation & Funnel Ads"
          description="We craft lead generation ads that convert. From Meta Instant Forms to WhatsApp inquiries and CRM-integrated lead flows — we ensure you don't just get leads, but the right ones."
          features={[
            "E-commerce Facebook Advertising Experts with high-intent product leads",
            "Coaching & education brands building webinar lists",
            "Real estate projects capturing site visit interest"
          ]}
          image={Services6}
          imageAlt="Lead Generation & Funnel Ads"
          bgClass="bg-white"
        />

        {/* Retargeting */}
        <ServiceSection
          title="Retargeting & Remarketing Ads"
          description="Retargeting is where 70% of conversions happen. Our goal is to maximize every rupee you've already invested in awareness. With our funnel-based approach, retargeting becomes a high-converting powerhouse."
          features={[
            "Re-engage past website visitors",
            "Target video viewers or social engagers",
            "Upsell & cross-sell based on purchase history"
          ]}
          image={Services7}
          imageAlt="Retargeting & Remarketing Ads"
          reverse={true}
          bgClass="bg-white"
        />

        {/* Process Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/6 to-secondary-500/6" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/6 rounded-full filter blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/6 rounded-full filter blur-3xl animate-float" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="gradient-text">Our 5-Step Meta Ads Process</span>
              </motion.h2>
              <motion.p
                className="text-xl text-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We follow a battle-tested, performance-driven structure for every campaign:
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Process Steps */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategy Session</h3>
                        <div className="space-y-3 text-slate-700">
                          <p>We start with a discovery call to understand your goals, budget, and customer journey.</p>
                          <p>We deep-dive into your product-market fit, industry benchmarks, and competitor analysis to lay the foundation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ad Creative & Copy Design</h3>
                        <div className="space-y-3 text-slate-700">
                          <p>We write compelling, conversion-driven copy and pair it with scroll-stopping creatives (images, videos, Reels).</p>
                          <p>Our in-house team follows performance creative frameworks designed for Meta — so every asset not only looks good but sells.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Campaign Setup</h3>
                        <div className="space-y-3 text-slate-700">
                          <p>We set up ad sets with optimized targeting, pixel events, bidding strategy, and tracking integrations.</p>
                          <p>This includes event mapping, domain verification, API setups, and audience segmentation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">4</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Daily Optimization</h3>
                        <div className="space-y-3 text-slate-700">
                          <p>Our team monitors every ad — adjusting bids, pausing underperformers, and scaling winners.</p>
                          <p>We also rotate creatives weekly and test headlines, CTA buttons, and placements for continuous growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">5</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Scaling & Reporting</h3>
                        <div className="space-y-3 text-slate-700">
                          <p>Once results are consistent, we increase budget, test new audiences, and send weekly reports.</p>
                          <p>We offer Google Data Studio dashboards and strategy calls to keep you aligned and in control.</p>
                          <p className="text-lg font-semibold text-slate-900">You'll always know what's working, why, and what comes next.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md lg:sticky lg:top-32"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/12 to-secondary-500/12 z-10 pointer-events-none opacity-20" />
                <Image
                  src={Services9}
                  alt="Our 5-Step Meta Ads Process"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/6 to-secondary-500/6" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/6 rounded-full filter blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/6 rounded-full filter blur-3xl animate-float" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                <span className="gradient-text">FAQs – Meta Ads with Leadzoro</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <FAQItem
                question="What's the ideal budget for Meta Ads?"
                answer="We recommend ₹10,000–₹25,000/month to start. We scale based on results, not guesswork."
              />
              <FAQItem
                question="How quickly can I see results?"
                answer="Most campaigns show performance in 7–14 days. Full ROAS optimization may take 4–6 weeks."
              />
              <FAQItem
                question="Do I need to provide creatives?"
                answer="Nope. Our in-house team handles all copywriting, banners, videos, and editing."
              />
              <FAQItem
                question="Is this service good for small businesses in Pune?"
                answer="Absolutely. Our Affordable Meta Ads Services for Small Businesses are built to generate real leads on a modest budget."
              />
              <FAQItem
                question="Will I get reports?"
                answer="Yes. Weekly performance dashboards + a dedicated account manager = full transparency."
              />
              <FAQItem
                question="Can you integrate WhatsApp or CRM tools?"
                answer="Yes. We support Meta form integrations with WhatsApp, Zapier, HubSpot, Zoho, and more."
              />
              <FAQItem
                question="What makes Leadzoro different from other agencies?"
                answer="We focus only on Meta platforms. We're not generalists — we're platform specialists with a proven track record."
              />
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="Facebook Ad Campaign Management"
                content="Custom campaigns aligned with your brand goals. From audience research to A/B testing, we handle it all with detailed ROAS reporting."
                icon={FaFacebookF}
                delay={0.2}
              />
              <ServiceCard
                title="Instagram Ad Targeting"
                content="Dominate Instagram Reels, Stories, Feed, and Explore with creative ads that feel organic but sell like crazy."
                icon={FaInstagram}
                delay={0.4}
              />
              <ServiceCard
                title="Lead Generation & Funnel Ads"
                content="From Meta Instant Forms to WhatsApp inquiries and CRM-integrated lead flows — we ensure you get the right leads."
                icon={FaUsers}
                delay={0.6}
              />
              <ServiceCard
                title="Retargeting & Remarketing"
                content="Advanced remarketing strategies to re-engage past visitors and maximize every rupee invested in awareness."
                icon={FaBullseye}
                delay={0.8}
              />
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/6 to-secondary-500/6" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/6 rounded-full filter blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/6 rounded-full filter blur-3xl animate-float" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                <span className="gradient-text">Who We Help</span>
              </h2>
              <p className="text-xl text-slate-700">
                Our Meta Ads Services in India are trusted by:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                "E-commerce brands",
                "Startups & D2C founders",
                "Real estate builders",
                "Coaching institutes & online educators",
                "Local service providers (salons, clinics, gyms)",
                "Corporate training agencies",
                "Fintech & SaaS companies",
                "Event & webinar organizers",
                "Fashion, food, and fitness brands"
              ].map((industry, index) => (
                <IndustryCard
                  key={industry}
                  title={industry}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center space-y-6"
            >
              <p className="text-xl text-slate-700">
                Whether you're launching, scaling, or reviving — our team customizes campaigns 
                to your exact industry.
              </p>
              <p className="text-xl text-slate-700">
                We've helped everything from first-time founders to enterprise-level clients 
                dominate Meta Ads platforms. Whatever your stage, we're ready to take you 
                to the next level.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 mt-8"
              >
                Start Your Growth Journey
              </motion.button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default ServicesPage
