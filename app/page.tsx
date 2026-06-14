'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Hero from './components/Hero'
import Services from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </main>
  )
}