'use client';

import { FaMapMarkerAlt, FaLightbulb, FaUserTie, FaRocket, FaGlobe, FaMobileAlt, FaSearch, FaLaptopCode, FaHandshake, FaQuoteLeft, FaWrench, FaComments, FaBullhorn, FaTag, FaHandsHelping, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import g11 from '../../public/assets/g11.png'; // Adjust the path if needed
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Custom CSS for animated border and card style (light / white theme)
const animatedBorder = {
  background: 'linear-gradient(120deg, #ffffff 0%, #f3f7ff 50%, #fbfdff 100%)',
  padding: '3px',
  borderRadius: '2rem',
  boxShadow: '0 6px 30px 0 rgba(2,6,23,0.06)'
};

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '1.25rem',
  boxShadow: '0 8px 30px 0 rgba(2,6,23,0.06)',
  border: '1px solid rgba(15, 23, 42, 0.04)',
  backdropFilter: 'blur(6px)'
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-gradient-to-b from-blue-50 to-cyan-50 text-slate-800 py-10 px-2 flex items-center justify-center overflow-hidden">
      {/* Background Elements - light theme */}
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/70 to-cyan-50/70" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/40 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-50/40 rounded-full filter blur-3xl animate-float" />
      </div>

      {/* Main content container - 100% width with spacing handled by Navbar spacer */}
      <div style={animatedBorder} className="relative w-[100%] mx-auto rounded-3xl z-10">
        <div style={cardStyle} className="rounded-3xl p-8 md:p-14">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 drop-shadow-sm"
          >
            🧭 About Us – The Real Story Behind <span className="text-cyan-700">DiBiznesSolutions</span>
          </motion.h1>

          {/* Where It All Began */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-cyan-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">Where It All Began – The Spark of Purpose (2021)</h2>
            </div>
            <p className="text-lg text-slate-700">
              In 2021, while most digital marketers were busy chasing trends and vanity metrics, one individual quietly planted the seed for something different — something real.<br />
              That individual was <span className="font-semibold text-cyan-700">Rushi Agarwal</span> — a marketer who believed in results before reputation. No investors, no hype, just a laptop, a deep understanding of digital growth, and a dream to help Indian businesses scale profitably.<br />
              Out of this intention, <span className="font-semibold text-cyan-700">DiBiznesSolutions</span> was born.<br />
              <span className="block mt-2 italic text-cyan-600">Not as a startup aiming for headlines.<br />Not as an agency selling dreams.<br />But as a promise — a commitment to be the most trustworthy marketing growth partner for Indian entrepreneurs.</span>
            </p>
          </motion.div>

          {/* What Makes Leadzoro Different */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaLightbulb className="text-yellow-500 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">What Makes Leadzoro Different?</h2>
            </div>
            <p className="text-lg text-slate-700">
              Let's be honest. The digital space is full of noise — tall claims, templated strategies, and zero empathy.<br />
              That's exactly what DiBiznesSolutions was created against.<br />
              While others focused on impressions and reach, we focused on return and impact. We didn't want to be an agency. We wanted to be your <span className="font-semibold text-cyan-700">in-house growth engine</span>.<br />
              What started as a one-man hustle has now grown into a dedicated team of creators, analysts, designers, and strategists who live and breathe performance marketing.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaUserTie className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">Who is the Founder of DiBiznesSolutions?</h2>
            </div>
            <p className="text-lg text-slate-700">
              If you've ever Googled:<br />
              <span className="text-cyan-700">Founder of DiBiznesSolutions<br />Who started DiBiznesSolutions?</span><br />
              You'll land here — because <span className="font-semibold text-cyan-700">DiBiznesSolutions</span> was born.<br />
              But don't expect a typical success story. His journey began with failures, unpaid invoices, 16-hour workdays, and months of bootstrapped survival. What kept him going? A belief that small businesses in India deserve a fair chance at digital growth — just like the big brands.
            </p>
            <blockquote className="border-l-4 border-cyan-600 pl-4 mt-4 text-cyan-700 italic">
              "I didn't start DiBiznesSolutions to become popular. I started it because I was tired of seeing local businesses being fooled by fake agencies and fake metrics. We're here to give them real, trackable, honest growth."<br />
              <span className="font-semibold">– Rushi Agarwal</span>
            </blockquote>
          </motion.div>

          {/* Core Services */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaRocket className="text-pink-500 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">Our Core Services — But Delivered Differently</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              Unlike most agencies that serve and forget, we stay, listen, build, and evolve with your business. Every service is deeply integrated into your growth journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google Ads */}
              <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3 rounded-2xl" style={cardStyle}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/10" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center">
                    <FaGlobe className="text-base" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="font-semibold text-slate-900">Google Ads That Convert</div>
                  <div className="text-slate-700 text-sm">We don't burn budgets. We build buyer journeys. From keyword mapping to ad extensions and performance reviews — we engineer each Google campaign for conversions, not just clicks.</div>
                </div>
              </div>

              {/* Meta Ads */}
              <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3 rounded-2xl" style={cardStyle}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-400/20 to-pink-600/10" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center">
                    <FaMobileAlt className="text-base" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="font-semibold text-slate-900">Meta Ads That Spark Sales</div>
                  <div className="text-slate-700 text-sm">Whether it's Instagram Stories or Facebook Reels, we use high-converting creatives and emotional storytelling to reach your audience — and make them act.</div>
                </div>
              </div>

              {/* Local SEO & GMB */}
              <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3 rounded-2xl" style={cardStyle}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-600/10" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="font-semibold text-slate-900">Local SEO & Google My Business</div>
                  <div className="text-slate-700 text-sm">Ranking on maps isn't just an SEO trick — it's survival for local businesses. We optimize your GMB listings, reviews, services, and images to turn local searches into local customers.</div>
                </div>
              </div>

              {/* Organic SEO */}
              <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3 rounded-2xl" style={cardStyle}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-600/10" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center">
                    <FaSearch className="text-base" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="font-semibold text-slate-900">Organic SEO with Intent</div>
                  <div className="text-slate-700 text-sm">Content clusters, topic-based SEO, human-first blog writing, SERP-feature targeting. We believe in search that serves both Google and your users.</div>
                </div>
              </div>

              {/* Websites */}
              <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3 rounded-2xl" style={cardStyle}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-600/10" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center">
                    <FaLaptopCode className="text-base" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="font-semibold text-slate-900">Websites That Work (Not Just Look Good)</div>
                  <div className="text-slate-700 text-sm">Your website is your digital salesperson. We design lightning-fast, mobile-first, conversion-focused websites using modern frameworks like Next.js.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real Clients */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaHandshake className="text-green-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">Real Clients. Real Growth. Real Gratitude.</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              From clinics in Pune to e-commerce brands across India, DiBiznesSolutions has helped over <span className="font-semibold text-cyan-700">250+ businesses</span>:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 pl-4">
              <li>Double their ROAS</li>
              <li>Scale lead generation by 5x</li>
              <li>Achieve Google first-page rankings in &lt;60 days</li>
              <li>Convert browsers into buyers using funnel psychology</li>
            </ul>
            <p className="text-cyan-700 italic">And this isn't luck. This is performance marketing done right.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-4 border border-cyan-100/60 shadow flex items-start gap-3">
                <FaQuoteLeft className="text-cyan-600 text-2xl mt-1" />
                <div>
                  <div className="text-slate-800">"DiBiznesSolutions gave my business more than leads — they gave me a direction."</div>
                  <div className="text-cyan-700 font-semibold mt-2">– Dr. R. Sharma, Clinic Owner, Pune</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-pink-100/60 shadow flex items-start gap-3">
                <FaQuoteLeft className="text-pink-500 text-2xl mt-1" />
                <div>
                  <div className="text-slate-800">"The DiBiznesSolutions team is obsessed with performance. That's what makes them different."</div>
                  <div className="text-pink-600 font-semibold mt-2">– Swati Jain, Founder of an Apparel Brand</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Built With Culture Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaWrench className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">🔧 Built With Culture. Grown With Clarity.</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              We aren't just a marketing team. We're a team built on:
            </p>
            <ul className="list-none text-slate-700 mb-6 pl-4 space-y-2">
              <li>✅ <span className="font-semibold text-cyan-700">Gratitude:</span> Every client win is a team win.</li>
              <li>✅ <span className="font-semibold text-cyan-700">Transparency:</span> Clear deliverables, no guesswork.</li>
              <li>✅ <span className="font-semibold text-cyan-700">Performance:</span> ROAS first. Vanity second.</li>
              <li>✅ <span className="font-semibold text-cyan-700">Care:</span> We treat your business like our own.</li>
            </ul>
            <p className="italic text-cyan-600 mb-8">Our internal motto? "Promise 1%, deliver 101%."</p>
          </motion.div>

          {/* Why Clients Search for Us Again & Again */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaComments className="text-yellow-500 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">💬 Why Clients Search for Us Again & Again</h2>
            </div>
            <ul className="list-none text-slate-700 mb-6 pl-4 space-y-2">
              <li><span className="font-semibold text-cyan-700">Clear Communication:</span> No jargon, just honesty</li>
              <li><span className="font-semibold text-cyan-700">Result Obsession:</span> We chase ROAS, not recognition</li>
              <li><span className="font-semibold text-cyan-700">Founder Involvement:</span> Yes, Rushi Agarwal personally audits every major client's strategy</li>
              <li><span className="font-semibold text-cyan-700">Performance Over Process:</span> We adapt daily, optimize weekly, and report truthfully</li>
            </ul>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBullhorn className="text-pink-500 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">📢 Our Vision for 2025–2030: India's Most Trusted Growth Partner</h2>
            </div>
            <ul className="list-none text-slate-700 mb-6 pl-4 space-y-2">
              <li>🔸 Helping 10,000+ Indian founders</li>
              <li>🔸 Empowering Tier-2 & Tier-3 city businesses</li>
              <li>🔸 Creating India's most ethical, ROI-driven digital marketing brand</li>
            </ul>
            <p className="italic text-cyan-600 mb-8">And as we grow, Rushi Agarwal still believes one thing:<br />"This isn't my company. This is India's answer to real digital marketing."</p>
          </motion.div>

          {/* Behind the Name */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaTag className="text-green-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">📌 Behind the Name: Why "DiBiznesSolutions"?</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              The name 'DiBiznesSolutions' stands for Digital Business Solutions — a complete digital partner for businesses.
            </p>
            <ul className="list-none text-slate-700 mb-6 pl-4 space-y-2">
              <li>"Leads" — the core outcome businesses want</li>
              <li>"Zoro" — derived from the legendary masked hero who fights injustice</li>
            </ul>
            <p className="text-cyan-600 mb-8">DiBiznesSolutions symbolizes fighting against bad marketing and bringing real results to those who need them most.</p>
          </motion.div>

          {/* Let's Build Something */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaHandsHelping className="text-cyan-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">🤝 Let's Build Something Meaningful — Together</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              If you're tired of:
            </p>
            <ul className="list-none text-slate-700 mb-6 pl-4 space-y-2">
              <li>❌ False promises</li>
              <li>❌ Low-quality leads</li>
              <li>❌ Dead SEO strategies</li>
              <li>❌ Social media managers who ghost you</li>
            </ul>
            <p className="text-cyan-600 mb-8">…then maybe, just maybe, you're ready for DiBiznesSolutions.<br />We're not perfect. But we are obsessed with getting your brand the growth it deserves.</p>
          </motion.div>

          {/* Let's Talk */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-blue-600 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">📞 Let's Talk</h2>
            </div>
            <ul className="list-none text-slate-700 mb-6 pl-4 space-y-2">
              <li>📧 <a href="mailto:info@dibiznesssolutions.com" className="text-cyan-700 hover:underline">info@dibiznesssolutions.com</a></li>
              <li>🌐 <a href="https://www.dibiznesssolutions.com" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">www.dibiznesssolutions.com</a></li>
              <li>📍 Based in Kharadi, Pune — Working with Brands Across India</li>
            </ul>
          </motion.div>

          {/* Final Words */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaQuoteLeft className="text-pink-500 text-2xl" />
              <h2 className="text-2xl font-bold text-slate-900">💎 Final Words from the Founder</h2>
            </div>
            <blockquote className="border-l-4 border-cyan-600 pl-4 mt-4 text-cyan-700 italic">
              "Every time someone searches 'Founder of DiBiznesSolutions' and finds our page — we feel responsible. Not for being popular. But for delivering on the promise that DiBiznesSolutions stands for."<br />
              <span className="font-semibold">– DiBiznesSolutions Founding Team</span>
            </blockquote>
            
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex-1 flex flex-col items-center bg-gradient-to-br from-white/80 via-cyan-50/60 to-white/80 rounded-3xl shadow p-10 border border-cyan-100/60 backdrop-blur relative z-10"> 
              <Image 
                src={g11} 
                alt="Rushi Agarwal - Founder" 
                width={180} 
                height={180} 
                className="rounded-full border-4 border-cyan-600 shadow-xl mb-6" 
                priority={false} 
              /> 
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">Rushi Agarwal</h3> 
              <p className="text-slate-700 text-lg mb-4 text-center">Founder & Chief Strategist</p> 
              <div className="text-slate-600 text-center italic"> 
                "Every local business deserves to be found. We're here to make that happen — with heart, hustle, and a little bit of magic." 
              </div> 
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 flex justify-center"
          >
            <a href="mailto:info@dibiznesssolutions.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300">
              Let's Grow Together 🚀
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
