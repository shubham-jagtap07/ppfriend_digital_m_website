'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaMapMarkedAlt, FaRegStar, FaRegImages, FaRegEdit, FaRegCheckCircle, FaRegLightbulb, FaRegChartBar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import g1 from '../../public/assets/g1.png';
import g2 from '../../public/assets/g2.png';
import g3 from '../../public/assets/g3.png';
import g4 from '../../public/assets/g4.png';
import g5 from '../../public/assets/g5.png';
import g6 from '../../public/assets/g6.png';
import g7 from '../../public/assets/g7.png';
import g8 from '../../public/assets/g8.png';
import g9 from '../../public/assets/g10.png';
import g10 from '../../public/assets/g10.png';
import g11 from '../../public/assets/g11.png';

// Animation variants
const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const float: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { 
      duration: 2.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
};

export default function Service5Page() {
  return (
    <div data-div-bg className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.07 }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
            className="w-full h-full"
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={g1}
              alt="Google My Business Optimization Hero"
              fill
              className="object-cover opacity-20 blur-[1px]"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-gray-50/70 to-gray-100/60"></div>
        </div>
        
        {/* Content Container */}
        <motion.div
          className="container mx-auto px-4 relative z-10 text-center max-w-6xl"
          initial="hidden"
          animate="show"
          variants={containerStagger}
        >
          {/* Main Heading with Gradient Text */}
          <motion.div
            className="mb-8"
            variants={fadeUp}
          >
            <motion.h1
              className="text-4xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 drop-shadow-lg"
              variants={fadeUp}
            >
              Google My Business Optimization Services in India
            </motion.h1>
            <motion.div
              className="text-2xl md:text-3xl font-bold text-gray-700"
              variants={fadeUp}
            >
              | GMB SEO by Leadzoro
            </motion.div>
          </motion.div>
          
          {/* Sub-heading with Enhanced Styling */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 text-gray-800 drop-shadow-lg max-w-4xl mx-auto"
            variants={fadeUp}
          >
            Stand Out in Local Searches — Your Customers Are Just a Map Click Away
          </motion.h2>
          
          {/* Content Box with Glass Effect */}
          <motion.div
            className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 rounded-3xl shadow-2xl p-8 md:p-12 text-lg md:text-xl text-gray-700 border border-gray-300/40 backdrop-blur-lg transition-all duration-300 max-w-4xl mx-auto"
            variants={fadeUp}
          >
            <motion.p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900" variants={fadeUp}>
              Let's be honest — when was the last time you scrolled past the top three results on Google Maps?
              <br />
              <span className="text-gray-700">Your customers don't either.</span>
            </motion.p>
            
            <motion.p className="text-lg md:text-xl text-gray-700 mb-6" variants={fadeUp}>
              If your business isn't visible in the Google Local 3-Pack, it might as well be invisible. That's where Leadzoro's Google My Business Optimization Services come in — making sure your business stands tall when it matters most.
            </motion.p>
            
            <motion.p className="text-lg md:text-xl text-gray-700" variants={fadeUp}>
              Whether you're a clinic in Pune, a salon chain in Mumbai, or a coaching center in Delhi, your growth potential hinges on local discoverability. With our specialized, 100% human-crafted optimization service, we help you turn Google Maps into your #1 lead engine.
            </motion.p>
          </motion.div>
          
          {/* CTA Button with Enhanced Styling */}
          <motion.div className="flex justify-center mt-12" variants={fadeUp}>
            <a
              href="/contact"
              className="px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold text-xl shadow-xl hover:scale-105 transition-transform duration-300 animate-pulse border-2 border-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Book Your FREE GMB Audit
            </a>
          </motion.div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" className="w-full h-24" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.86,22,103.78,29.05,158,17.39C230.29,51.86,284.15,13.13,339,6.13c54.82-7,104.09,17.94,158,35.7,53.91,17.76,112.09,27.06,170,20.7,57.91-6.36,113.78-27.06,172-27.06,58.22,0,113.09,20.7,172,27.06,58.91,6.36,116.09-2.94,170-20.7,53.91-17.76,103.18-42.7,158-35.7,54.85,7,108.71,45.73,181,57.55V0Z" fill="#f8fafc" fillOpacity="1"></path>
          </svg>
        </div>
      </section>

      {/* Why GMB Optimization Matters */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 relative">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900"
            variants={fadeUp}
          >
            Why Google My Business Optimization Matters
          </motion.h2>
          <motion.div
            className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 rounded-3xl shadow-2xl p-10 md:p-14 text-lg md:text-xl text-gray-700 border border-gray-300/40 backdrop-blur-lg transition-all duration-300"
            variants={fadeUp}
          >
            <motion.p className="text-center text-gray-800 font-medium mb-4" variants={fadeUp}>
              Let's be honest — when was the last time you scrolled past the top three results on Google Maps?<br />
              Your customers don't either.
            </motion.p>
            <motion.p className="text-center text-gray-700 mb-4" variants={fadeUp}>
              If your business isn't visible in the Google Local 3-Pack, it might as well be invisible. That's where Leadzoro's Google My Business Optimization Services come in — making sure your business stands tall when it matters most.
            </motion.p>
            <motion.ul className="list-disc list-inside space-y-2 text-gray-800 pl-4" variants={fadeUp}>
              <li>Clinics in Pune, salon chains in Mumbai, coaching centers in Delhi — all need local discoverability.</li>
              <li>Our 100% human-crafted optimization turns Google Maps into your #1 lead engine.</li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>

      {/* What is Google Business Profile? */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white flex flex-col items-center">
        <motion.div
          className="w-full max-w-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900"
            variants={fadeUp}
          >
            What is Google Business Profile, and Why Should You Care in 2025?
          </motion.h2>
          <motion.div className="flex justify-center mb-8" variants={float} animate="animate">
            <Image
              src={g3}
              alt="Google Business Profile"
              width={420}
              height={260}
              className="rounded-2xl shadow-xl border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </motion.div>
          <motion.div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 rounded-2xl shadow-lg p-8 border border-gray-300/30 backdrop-blur-md" variants={fadeUp}>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>Business visibility on mobile map results</li>
              <li>Instant directions, calls, reviews, and website visits</li>
              <li>Trust-building through photos, videos, and testimonials</li>
            </ul>
            <p className="text-gray-700 font-medium">
              Your competitors are already optimizing their profiles. If you're not, you're handing them your customers.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* India's Search Behavior */}
      <section className="py-20 px-4 bg-gray-50 flex flex-col items-center">
        <motion.div
          className="w-full max-w-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700"
            variants={fadeUp}
          >
            India's Search Behavior Has Changed — Has Your GMB Kept Up?
          </motion.h2>
          <motion.div className="flex justify-center mb-8" variants={float} animate="animate">
            <Image
              src={g4}
              alt="India Salon & Clinic Search"
              width={420}
              height={260}
              className="rounded-2xl shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </motion.div>
          <motion.div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 rounded-2xl shadow-lg p-8 border border-gray-300/40 backdrop-blur-md" variants={fadeUp}>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>85% of customers in India use Google Maps to discover local businesses before walking in.</li>
              <li>3 in 4 map searches convert within 24 hours</li>
              <li>Verified businesses get 5x more trust and 7x more clicks</li>
              <li>Reviews are now a key trust metric, beating even website content</li>
            </ul>
            <p className="text-gray-700 font-medium">
              This is the moment to act.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Leadzoro is Trusted */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center">
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            Why Leadzoro is the Trusted GMB Partner Across Pune & India
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src={g5}
              alt="Collaborative Strategy Session"
              width={420}
              height={260}
              className="rounded-2xl shadow-xl border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
          <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 shadow-lg p-8 border border-gray-300/30 backdrop-blur-md">
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>✅ Deep industry research before every profile edit</li>
              <li>✅ Weekly hands-on optimization, not automation</li>
              <li>✅ Specialized support for Pune's local market nuances</li>
              <li>✅ Custom strategy for each industry — clinics ≠ cafes</li>
              <li>✅ Transparent communication — you always know what we're doing and why</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Our End-to-End GMB Optimization Services */}
      <section className="py-20 px-4 bg-gray-100 flex flex-col items-center">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            Our End-to-End GMB Optimization Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-800">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <FaRegCheckCircle className="text-blue-600 w-8 h-8 mt-1 animate-bounce" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Profile Setup & Ownership Verification</h3>
                  <p>We ensure your profile is verified, secure, and compliant with Google's latest guidelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaRegLightbulb className="text-blue-600 w-8 h-8 mt-1 animate-pulse" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Keyword Strategy & Category Mapping</h3>
                  <p>We identify what your potential customers are searching for — and align your categories, services, and descriptions for maximum match.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaRegImages className="text-blue-600 w-8 h-8 mt-1 animate-spin-slow" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Visual Content Curation (Images, Videos, Tours)</h3>
                  <a href="https://chatgpt.com/s/m_680639944b2c8191aa197996c8ab60b3" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={g6}
                      alt="Uploading Salon Photos"
                      width={320}
                      height={180}
                      className="rounded-lg shadow-lg border-2 border-gray-300 my-2 hover:scale-105 transition-transform duration-300"
                      priority={false}
                    />
                  </a>
                  <p>Professionally formatted photos, geo-tagged images, and business walkthroughs that make your profile look like the #1 option.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <FaRegEdit className="text-blue-600 w-8 h-8 mt-1 animate-bounce" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Weekly Post Scheduling</h3>
                  <p>We create, schedule, and publish optimized GMB posts that highlight offers, events, success stories, or seasonal updates — all aimed at conversions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaRegStar className="text-blue-600 w-8 h-8 mt-1 animate-pulse" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Review Building & Engagement</h3>
                  <p>We craft ethical campaigns to increase reviews, flag spammy ones, and teach you how to respond in a way that builds public trust.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaRegChartBar className="text-blue-600 w-8 h-8 mt-1 animate-spin-slow" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">NAP & Citation Consistency</h3>
                  <p>We distribute your business information across the web — directories, maps, apps — to reinforce your local authority and SEO.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkedAlt className="text-blue-600 w-8 h-8 mt-1 animate-bounce" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Google Map Pack Placement Strategy</h3>
                  <p>Using geo-signals, behavior modeling, and local ranking factors, we push your business into the top results for key local searches.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tailored GMB Packages for Industry Niches */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white flex flex-col items-center">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            Tailored GMB Packages for Industry Niches
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src={g7}
              alt="Industry Niches"
              width={600}
              height={300}
              className="rounded-2xl shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
          <div className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 rounded-2xl shadow-lg p-8 border border-gray-300/30 backdrop-blur-md">
            <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2">
              <li>
                <b>🏥 Clinics & Healthcare Providers</b><br />
                Verified health-related listings<br />
                Review strategies focused on credibility<br />
                "Book Now" integrations and directions optimization
              </li>
              <li>
                <b>💇‍♀️ Salons & Spas</b><br />
                Appointment-focused CTAs<br />
                Portfolio photo management<br />
                Weekly service highlights
              </li>
              <li>
                <b>🏢 Real Estate & Property Dealers</b><br />
                Area-specific optimization (e.g., "Flats in Viman Nagar")<br />
                High-res project galleries<br />
                Listing multiple site offices accurately
              </li>
              <li>
                <b>📚 Coaching & Education</b><br />
                Batch schedules and open enrollment posts<br />
                Testimonials and alumni success reviews<br />
                GMB posts aligned with exam timelines
              </li>
              <li>
                <b>🍽️ Restaurants & Local Retail Stores</b><br />
                Menu visibility and peak hour targeting<br />
                "Near Me" keyword enhancements<br />
                Festive and offer-led posts
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* The Leadzoro Local Growth Method: 5 Simple Phases */}
      <section className="py-20 px-4 bg-gray-100 flex flex-col items-center">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            The Leadzoro Local Growth Method: 5 Simple Phases
          </h2>
          <div className="flex justify-center mb-8">
            <Image
            src={g8}
              alt="Growth Method"
              width={600}
              height={300}
              className="rounded-xl shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
          <ol className="list-decimal list-inside mb-4 text-gray-800 space-y-2">
            <li>
              <b>Phase 1: Deep Dive Audit</b><br />
              We run a full audit of your GMB, web presence, and competitive map rankings.
            </li>
            <li>
              <b>Phase 2: Competitor Intelligence</b><br />
              What are your top 3 competitors doing right? We dissect it and build something even better for you.
            </li>
            <li>
              <b>Phase 3: Action & Optimization</b><br />
              Every field — description, services, media, Q&A — is optimized. We also launch post and review plans.
            </li>
            <li>
              <b>Phase 4: Monitor & Report</b><br />
              Track calls, directions, visits, impressions, and keyword placements — weekly.
            </li>
            <li>
              <b>Phase 5: Refine & Repeat</b><br />
              Google evolves weekly. So do we. Each month, we rework strategies to stay ahead.
            </li>
          </ol>
        </motion.div>
      </section>

      {/* Mini Case Studies: Real Wins from Our Clients */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            Mini Case Studies: Real Wins from Our Clients
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src={g9}
              alt="Case Studies"
              width={600}
              height={300}
              className="rounded-xl shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
          <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2">
            <li>
              <b>👩‍⚕️ Aesthetic Clinic, Pune</b><br />
              Before: Ranked #12 for "Skin clinic near me"<br />
              After: Ranked #2 in 34 days. Bookings increased 2.8x.
            </li>
            <li>
              <b>🏘️ Real Estate Consultant, Maharashtra</b><br />
              Before: Confused listings across 3 cities<br />
              After: Verified all, optimized with city keywords. Now ranks #1 for "Flats in Wakad Pune"
            </li>
            <li>
              <b>🧑‍🏫 Online Coaching Class, India-wide</b><br />
              Before: No posts, low reviews, inconsistent info<br />
              After: Weekly content + 40+ reviews. Leads up by 3x.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Client Testimonials Carousel */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            What Our Clients Say
          </h2>
          <div className="carousel flex overflow-x-auto gap-8 py-4">
            <div className="min-w-[300px] bg-white/90 rounded-xl shadow-lg p-6 border border-gray-300/30">
              <p className="text-lg text-gray-800 mb-2">"Leadzoro gave my business more than leads — they gave me a direction."</p>
              <div className="font-semibold text-gray-700">– Dr. R. Sharma, Clinic Owner, Pune</div>
            </div>
            <div className="min-w-[300px] bg-white/90 rounded-xl shadow-lg p-6 border border-gray-300/30">
              <p className="text-lg text-gray-800 mb-2">"Rushi Agarwal and his team are obsessed with performance. That's what makes them different."</p>
              <div className="font-semibold text-gray-700">– Swati Jain, Founder of an Apparel Brand</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who We Work Best With */}
      <section className="py-20 px-4 bg-gray-50 flex flex-col items-center">
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            Who We Work Best With
          </h2>
          <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2">
            <li>Healthcare clinics & dental practices</li>
            <li>Salons, spas, wellness brands</li>
            <li>Real estate consultants and builders</li>
            <li>Restaurants, bakeries, food franchises</li>
            <li>Tuition and coaching centers</li>
            <li>Home service businesses (AC repair, pest control, etc.)</li>
            <li>Hyperlocal e-commerce stores</li>
            <li>Franchise chains with multiple city presence</li>
          </ul>
          <p className="text-gray-700 font-medium mt-4">
            If your business serves a physical location or depends on local traffic, we're your growth ally.
          </p>
        </motion.div>
      </section>

      {/* 10 FAQs Business Owners Ask Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white flex flex-col items-center">
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            10 FAQs Business Owners Ask Us
          </h2>
          <div className="flex justify-center mb-8">
            <Image
             src={g10}
              alt="FAQs"
              width={600}
              height={300}
              className="rounded-xl shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
          <ol className="list-decimal list-inside mb-4 text-gray-800 space-y-2">
            <li>
              <b>How long before my business ranks in Google Maps?</b><br />
              Most clients see visible improvements in 30–60 days.
            </li>
            <li>
              <b>Can you help me recover a suspended GMB profile?</b><br />
              Yes, we've handled dozens of reinstatements successfully.
            </li>
            <li>
              <b>What if I have multiple branches?</b><br />
              We create separate GMB strategies for each branch and interlink authority.
            </li>
            <li>
              <b>Do you post on my behalf?</b><br />
              Yes. We handle weekly GMB posts tailored to your niche.
            </li>
            <li>
              <b>What if my competitors fake reviews?</b><br />
              We guide you in flagging and responding smartly. We also help you build more real ones.
            </li>
            <li>
              <b>Is a website necessary?</b><br />
              It helps, but is not mandatory. Many of our clients rank with just a GMB profile.
            </li>
            <li>
              <b>What platforms do you submit citations to?</b><br />
              IndiaMART, JustDial, Sulekha, Yelp, Practo, and 40+ more.
            </li>
            <li>
              <b>Do I need to keep optimizing GMB monthly?</b><br />
              Yes! Google's local ranking algorithm changes weekly.
            </li>
            <li>
              <b>Is this service budget-friendly for small businesses?</b><br />
              Yes. We have affordable plans starting ₹2,499/month.
            </li>
            <li>
              <b>Can I talk to a strategist before starting?</b><br />
              Definitely! Book a free consultation with our GMB expert.
            </li>
          </ol>
        </motion.div>
      </section>

      {/* Ready to Claim the #1 Spot on Google Maps? */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">
            Ready to Claim the #1 Spot on Google Maps?
          </h2>
          <p className="text-xl text-center text-gray-800 mb-6">
            📍 Your business is too valuable to stay hidden.<br />
            Let's unlock your local growth, footfalls, and bookings with a GMB strategy tailored to your niche, your city, and your goals.
          </p>
          <div className="bg-white/90 rounded-xl shadow-lg p-8 border border-gray-300/30 backdrop-blur-md mb-6">
            <ul className="list-none text-lg text-gray-800 space-y-2">
              <li>🎯 <b>Book Your FREE GMB Audit Today</b></li>
              <li>📞 Call: <a href="tel:+918166922792" className="text-blue-600 hover:underline">+91 8166922792</a></li>
              <li>💬 WhatsApp: <a href="https://wa.me/918166922792" className="text-blue-600 hover:underline">+91 8166922792</a></li>
              <li>📧 Email: <a href="mailto:hello@leadzoro.com" className="text-blue-600 hover:underline">hello@leadzoro.com</a></li>
              <li>🌐 <a href="https://www.leadzoro.com/gmb" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.leadzoro.com/gmb</a></li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* About Us – The Real Story Behind Leadzoro */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-100 via-gray-50 to-white flex flex-col items-center relative overflow-hidden">
        <motion.div
          className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Founder Card */}
          <div className="flex-1 flex flex-col items-center bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90 rounded-3xl shadow-2xl p-10 border border-gray-300/30 backdrop-blur-lg relative z-10">
            <Image
              src={g11}
            alt="Rushi Agarwal - Founder"
              width={180}
              height={180}
              className="rounded-full border-4 border-gray-400 shadow-xl mb-6"
              priority={false}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rushi Agarwal</h3>
            <p className="text-gray-800 text-lg mb-4 text-center">Founder & Chief Strategist</p>
            <div className="text-gray-700 text-center italic">
              "Every local business deserves to be found. We're here to make that happen — with heart, hustle, and a little bit of magic."
            </div>
          </div>
          {/* Story Timeline */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700 text-center md:text-left">
              About Us – The Real Story Behind Leadzoro
            </h2>
            <ol className="relative border-l-4 border-blue-600 pl-8 space-y-8">
              <li>
                <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <span className="block text-gray-800 font-semibold mb-1">2019: The Spark</span>
                <p className="text-gray-700">Leadzoro was born in a tiny Pune apartment, fueled by a single mission: help local businesses get noticed on Google Maps.</p>
              </li>
              <li>
                <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <span className="block text-gray-800 font-semibold mb-1">2020–2022: The Hustle</span>
                <p className="text-gray-700">From clinics to cafes, we worked hands-on with 100+ businesses, learning every Google algorithm twist and local SEO secret.</p>
              </li>
              <li>
                <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <span className="block text-gray-800 font-semibold mb-1">2023: The Breakthrough</span>
                <p className="text-gray-700">Our clients started hitting #1 in their cities. Word spread. We built a team obsessed with results, not just rankings.</p>
              </li>
              <li>
                <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                <span className="block text-gray-800 font-semibold mb-1">Today: The Movement</span>
                <p className="text-gray-700">Leadzoro is now the go-to GMB partner for ambitious brands across India. But our core remains: real people, real results, real care.</p>
              </li>
            </ol>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://www.leadzoro.com/about"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </motion.div>
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      </section>
      <Footer />
      {/* Page-scoped default background for bare divs (won't override existing bg/overlays) */}
      <style jsx global>{`
        [data-div-bg] div:not([class*="bg-"]):not([class*="backdrop-"]):not([class*="mix-blend-"]):not([class*="absolute"]) {
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}
