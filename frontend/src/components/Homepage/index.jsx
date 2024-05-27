import React from 'react'
import Navbar from '../Navbar'
import Hero from './hero/Hero'
import OurRecipes from './recipes/OurRecipes'
import Features from './Features'
import AboutSection from './About/AboutusSection'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <OurRecipes />
        <Features />
        <AboutSection />
    </>
  )
}

export default HomePage