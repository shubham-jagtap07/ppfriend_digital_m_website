'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { 
  FaFacebook, 
  FaGoogle, 
  FaSearchengin, 
  FaLaptopCode, 
  FaInstagram, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaStore,
  FaGraduationCap,
  FaBuilding,
  FaHospital,
  FaRocket,
  FaPlane,
  FaTools,
  FaChevronDown
} from 'react-icons/fa'

// Import images
import DiscoverImg from '../../public/assets/Discover.png'
import StratergizeImg from '../../public/assets/Stratergize.png'
import ExecuteImg from '../../public/assets/Execute.png'
import OptimizeImg from '../../public/assets/Optimize.png'
import ScaleImg from '../../public/assets/Scale.png'

const services = [
  {
    title: 'Meta Ads',
    description: 'Craft thumb-stopping creatives and precision-targeted Meta Ads to put your brand in front of the right audience.',
    icon: <FaFacebook className="w-8 h-8" />,
    href: '/meta-ads-services',
    features: [
      'Laser-targeted audience segmentation',
      'A/B tested creatives',
      'Full-funnel Meta Ad strategies',
      'Conversion-optimized copy',
      'Retargeting campaigns'
    ]
  },
  {
    title: 'Google Ads Management',
    description: 'Get found when it matters most with keyword-optimized campaigns that reach ready-to-convert customers.',
    icon: <FaGoogle className="w-8 h-8" />,
    href: '/google-ads-services',
    features: [
      'Search, Display & Video Ads',
      'Daily performance monitoring',
      'Location-based targeting',
      'Quality Score improvement',
      'Lower CPC, higher conversions'
    ]
  },
  {
    title: 'SEO Services',
    description: 'Stay on top of search results with robust SEO strategies that dominate Google rankings locally and nationally.',
    icon: <FaSearchengin className="w-8 h-8" />,
    href: '/seo-services',
    features: [
      'Keyword research',
      'Technical SEO audits',
      'Quality backlink outreach',
      'Local SEO optimization',
      'Content strategy'
    ]
  },
  {
    title: 'Website Development',
    description: 'We build fast, responsive, SEO-friendly websites that convert visitors into paying customers.',
    icon: <FaLaptopCode className="w-8 h-8" />,
    href: '/website-development-services',
    features: [
      'WordPress & Next.js',
      'Mobile-first design',
      'UX/UI optimization',
      'Fast loading times',
      'Built-in SEO structure'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'Build a brand that talks and listens with curated content and engagement strategies.',
    icon: <FaInstagram className="w-8 h-8" />,
    href: '/social-media-management-services',
    features: [
      'Content calendars',
      'Creative design',
      'Reel strategy',
      'Analytics tracking',
      'Community management'
    ]
  },
  {
    title: 'GMB Optimization',
    description: 'Dominate local searches and be the top choice in Pune with our GMB optimization services.',
    icon: <FaMapMarkerAlt className="w-8 h-8" />,
    href: '/gmb-optimization-services',
    features: [
      'Complete GMB setup',
      'Weekly post scheduling',
      'Review generation',
      'Local pack ranking',
      'Performance tracking'
    ]
  }
]

const WhyChooseUs = () => {
  const features = [
    '100% Transparent Reporting',
    'ROI-Driven Strategies',
    'Pune-Based Team with India-Wide Reach',
    'Fast Turnaround. Proven Results.',
    'Trusted by 50+ Brands & Growing'
  ];

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="inline-block text-4xl mb-6 text-primary-600">
          <FaLightbulb />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="gradient-text">Why Choose DiBiznesSolutions?</span>
        </h2>

        <p className="text-xl text-gray-700 mb-12">
          Because we don't just run campaigns — we drive business outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-primary-500/50 hover:bg-gray-100 transition-all duration-300 shadow-sm"
            >
              <FaCheckCircle className="text-primary-600 flex-shrink-0 w-6 h-6 mr-4" />
              <span className="text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xl text-gray-700 font-medium">
          We're not another agency — we're your growth partner.
        </p>
      </div>
    </div>
  );
};

const ProcessStep = ({ 
  step, 
  title, 
  description, 
  image, 
  index,
  icon: Icon,
  color
}: { 
  step: string | number;
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
  icon: React.ElementType;
  color: string;
}) => {  
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center z-10 hidden lg:flex">
        <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className={`flex items-center gap-6 lg:gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:px-8`}>
        {/* Content Side */}
        <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'} w-full`}>
          <div className="card-modern glass-card hover:shadow-2xl transition-all duration-500 group">
            {/* Colored background layer per step */}
            <div className={`absolute inset-0 z-0 rounded-3xl bg-gradient-to-br ${color} opacity-20`} />
            <div className="relative z-10">
            {/* Step Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${color} rounded-xl lg:rounded-full flex items-center justify-center pulse-glow group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider shimmer">Step {step}</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                  {title}
                </h3>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left">
              {description}
            </p>
            
            {/* Progress Indicator */}
            <div className="mt-6 flex items-center gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    i < Number(step) ? `bg-gradient-to-r ${color}` : 'bg-gray-200'
                  } ${i < Number(step) ? 'w-6 sm:w-8' : 'w-1.5 sm:w-2'}`}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative group overflow-hidden rounded-2xl lg:rounded-3xl h-[250px] sm:h-[300px] lg:h-[350px] w-full shadow-2xl">
            <Image 
              src={image}
              alt={`Step ${step}: ${title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority={index === 0}
              className="rounded-2xl lg:rounded-3xl object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Floating Step Number */}
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl flex items-center justify-center">
              <span className={`text-lg lg:text-xl font-bold bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
                {step}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      step: 1,
      title: "Discover",
      description: "We understand your goals, target audience, and market competitors.",
      image: DiscoverImg,
      icon: FaLightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Strategize",
      description: "We build a tailored plan across platforms that aligns with your budget and business model.",
      image: StratergizeImg,
      icon: FaTools,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      title: "Execute",
      description: "Our experts launch your campaign with precision, creativity, and analytics-ready tracking.",
      image: ExecuteImg,
      icon: FaRocket,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 4,
      title: "Optimize",
      description: "We tweak, refine, and split-test continuously for peak performance.",
      image: OptimizeImg,
      icon: FaChartLine,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 5,
      title: "Scale",
      description: "Once we hit ROI sweet spots, we scale your campaigns for long-term growth.",
      image: ScaleImg,
      icon: FaPlane,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="mt-32 relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6">
            <FaChartLine className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
            Our 5-Step Process to Digital Domination
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A proven methodology that transforms your digital presence into a <span className="font-semibold text-gray-800">revenue-generating machine</span>.
          </p>
        </div>

        {/* Modern Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden lg:block" />
          
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <ProcessStep 
                key={step.step}
                {...step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const IndustryCard = ({ 
  icon: Icon, 
  title,
  bgGradient,
  iconGradient
}: { 
  icon: React.ElementType;
  title: string;
  bgGradient: string;
  iconGradient: string;
}) => (
  <div className="relative overflow-hidden rounded-xl p-6 transition-all duration-300 border border-gray-200 hover:border-primary-500/50 shadow-lg hover:shadow-xl hover:scale-[1.02] bg-white/70 backdrop-blur-sm">
    {/* Colored gradient background layer */}
    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bgGradient} opacity-80`} />
    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradient} text-white flex items-center justify-center`}>
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
  </div>
);

const WhoWeWorkWith = () => {
  const industries = [
    { icon: FaStore, title: "E-commerce Brands" },
    { icon: FaGraduationCap, title: "Educational Institutes" },
    { icon: FaBuilding, title: "Real Estate Agencies" },
    { icon: FaHospital, title: "Healthcare & Clinics" },
    { icon: FaRocket, title: "SaaS Startups" },
    { icon: FaPlane, title: "Travel & Hospitality" },
    { icon: FaTools, title: "Local Service Providers" }
  ];

  const industryBgGradients = [
    'from-sky-400/15 to-blue-600/10',
    'from-amber-400/15 to-orange-600/10',
    'from-indigo-400/15 to-purple-600/10',
    'from-emerald-400/15 to-teal-600/10',
    'from-rose-400/15 to-pink-600/10',
    'from-cyan-400/15 to-sky-600/10',
    'from-violet-400/15 to-fuchsia-600/10'
  ];
  const industryIconGradients = [
    'from-sky-500 to-blue-600',
    'from-amber-500 to-orange-600',
    'from-indigo-500 to-purple-600',
    'from-emerald-500 to-teal-600',
    'from-rose-500 to-pink-600',
    'from-cyan-500 to-sky-600',
    'from-violet-500 to-fuchsia-600'
  ];

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-100/30 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '-5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Who We Work With</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              bgGradient={industryBgGradients[index % industryBgGradients.length]}
              iconGradient={industryIconGradients[index % industryIconGradients.length]}
            />
          ))}
        </div>

        <p className="text-xl text-gray-700 font-medium text-center max-w-3xl mx-auto">
          Whether you're in Pune or anywhere across India, DiBiznesSolutions adapts digital growth strategies that fit your industry like a glove.
        </p>
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-all duration-300"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <div
          className={`text-primary-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <FaChevronDown />
        </div>
      </button>
      
      {isOpen && (
        <div className="overflow-hidden">
          <div className="p-6 text-gray-700 font-medium bg-gray-50">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes DiBiznesSolutions the best marketing agency in Pune?",
      answer: "We combine proven strategies, deep local market understanding, and creative execution that brings in real business, not just traffic."
    },
    {
      question: "Do you offer packages for startups or small businesses?",
      answer: "Absolutely! We have flexible and affordable plans suited for every stage — from bootstrap to blitz-scale."
    },
    {
      question: "How quickly can I see results?",
      answer: "Depending on your service type, Meta & Google Ads deliver visible results within days, while SEO may take 3–6 months for full traction."
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer: "Yes. We provide live dashboards, weekly reporting, and strategy calls to keep you in the loop at all times."
    },
    {
      question: "What if I only need one service like SEO or Google Ads?",
      answer: "No worries — we offer standalone services as well as bundled growth plans."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index} 
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 rounded-3xl border border-gray-200 bg-gray-50 backdrop-blur-sm shadow-lg">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Ready to Take Your Brand to the Next Level?</span>
          </h2>

          <p className="text-xl text-gray-700 font-medium">
            Let's talk growth. Let's talk results. Let's talk DiBiznesSolutions.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-gray-700 font-medium flex items-center gap-2">
              Schedule your free strategy session now and discover why we're the best marketing agency in India trusted by 50+ fast-growing brands.
            </p>

            <button className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-[1.02]">
              <span className="relative z-10">Click Here to Skyrocket Your Growth with DiBiznesSolutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/50 to-secondary-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  // Per-card gradients for backgrounds and icons
  const cardGradients = [
    'from-sky-400/20 to-blue-600/10',
    'from-amber-400/20 to-orange-600/10',
    'from-emerald-400/20 to-teal-600/10',
    'from-violet-400/20 to-fuchsia-600/10',
    'from-rose-400/20 to-pink-600/10',
    'from-indigo-400/20 to-purple-600/10'
  ];
  const iconGradients = [
    'from-sky-500 to-blue-600',
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-600',
    'from-violet-500 to-fuchsia-600',
    'from-rose-500 to-pink-600',
    'from-indigo-500 to-purple-600'
  ];

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <FaRocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just market — we create <span className="font-semibold text-gray-800">measurable success</span> with our comprehensive digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href}>
              <div className={`group card-modern bg-white/60 ${index % 2 === 0 ? 'float-animation' : 'float-animation-delayed'} cursor-pointer`}>
                {/* Colored gradient background layer per card */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cardGradients[index % cardGradients.length]} opacity-80`} />
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon and Title */}
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${iconGradients[index % iconGradients.length]} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 pulse-glow mb-4 sm:mb-0`}>
                      {service.icon}
                    </div>
                    <h3 className="sm:ml-4 text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 text-center sm:text-left">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 font-medium">
                        <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mr-3 flex-shrink-0 mt-0.5">
                          <FaCheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 shimmer text-sm sm:text-base">
                      Learn More
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <span className="text-blue-600 font-bold text-sm sm:text-base">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Process Section */}
        <ProcessSection />

        {/* Who We Work With Section */}
        <WhoWeWorkWith />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </section>
  )
}

export default Services