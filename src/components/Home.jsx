import React from 'react'
import Hero from './Hero'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default Home
