import React from 'react'
import Navbar from '../Navbar'
import Hero from './hero/Hero'
import OurRecipes from './recipes/OurRecipes'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <OurRecipes />
    </>
  )
}

export default HomePage