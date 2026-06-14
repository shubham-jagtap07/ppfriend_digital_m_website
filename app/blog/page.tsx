'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaBlog,
  FaRocket,
  FaBell,
  FaEnvelope,
  FaArrowLeft,
  FaLightbulb,
  FaChartLine,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <main className="relative pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-500 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Main Content */}
          <div className="text-center">
            {/* Static Blog Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <FaBlog className="w-12 h-12 text-white" />
                </div>

                {/* static ring */}
                <div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: 'rgba(96,165,250,0.4)' }}
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              <span className="gradient-text">Blog</span>
              <br />
              <span className="text-slate-900">Coming Soon</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Get ready for expert insights on{' '}
              <span className="text-primary-600 font-semibold ml-2">
                Digital Marketing, SEO & Growth Strategies
              </span>
            </p>

            {/* Features Preview (static) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: FaRocket, title: 'Growth Strategies', desc: 'Proven tactics to scale your business' },
                { icon: FaChartLine, title: 'SEO Insights', desc: 'Latest trends and optimization tips' },
                { icon: FaLightbulb, title: 'Marketing Tips', desc: 'Expert advice from industry leaders' }
              ].map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-100/10"
                  >
                    <div className="text-primary-600 mb-4 flex justify-center">
                      <FeatureIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Email Subscription */}
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                <FaBell className="inline mr-2 text-primary-600" />
                Get Notified When We Launch
              </h3>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-slate-900 placeholder-slate-400 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-green-600 font-semibold text-lg">
                  ✅ Thanks! We'll notify you when the blog launches.
                </div>
              )}
            </div>

            {/* Launch Timeline */}
            <div className="mt-16 text-center">
              <p className="text-slate-600 mb-4">Expected Launch</p>
              <div className="text-2xl font-bold text-primary-600">
                Q1 2025
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogComingSoon;
