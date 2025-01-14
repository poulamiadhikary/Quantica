import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import Accordian from '../components/Accordian'

const FullStack = () => {

  let [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    if (isMenuVisible === false) {
      setMenuVisible(true)
    }
    else {
      setMenuVisible(false)
    }
  }

  return (
    <>
      <div className='h-auto w-full flex flex-col items-center relative'>
        <div className='phone:h-28 w-90% lg:w-full flex justify-between'>
          <div className='h-full phone:w-40% lg:w-20% flex justify-center items-center'>
            <img src={logo} alt="" />
          </div>
          <div className='h-full phone:w-20% lg:w-60% phone:text-4xl flex justify-center lg:justify-evenly items-center text-white'>
            <RiMenu3Fill className='lg:hidden cursor-pointer' onClick={toggleMenu} />
            <p className='lg:text-xl text-white font-Jura hidden lg:block cursor-pointer'>
              <NavLink to="/"> Home </NavLink>
            </p>
            <p className='lg:text-xl text-white font-Jura hidden lg:block cursor-pointer'>
              <NavLink to="/about">About Quantica</NavLink>
            </p>
            <p className='lg:text-xl text-white font-Jura hidden lg:block cursor-pointer'>
              <NavLink to="/domains"> Domains </NavLink>
            </p>
            <p className='lg:text-xl text-white font-Jura hidden lg:block cursor-pointer'>
              <NavLink to="/mail"> Mail Us </NavLink>
            </p>
          </div>

          <div className={`absolute top-0 left-0 bg-black phone:h-[100vh] w-full rounded-md z-50 flex flex-col justify-center items-center phone:gap-5 border-b-4 border-purple-700 transition-transform duration-500 ease-in-out ${isMenuVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <ImCross className='text-white text-2xl mb-16 cursor-pointer' onClick={toggleMenu} />
            <p className='lg:text-xl phone:text-3xl text-white font-Jura cursor-pointer'>
              <NavLink to="/"> Home </NavLink>
            </p>
            <p className='lg:text-xl phone:text-3xl text-white font-Jura cursor-pointer'>
              <NavLink to="/about">About Quantica</NavLink>
            </p>
            <p className='lg:text-xl phone:text-3xl text-white font-Jura cursor-pointer'>
              <NavLink to="/domains"> Domains </NavLink>
            </p>
            <p className='lg:text-xl phone:text-3xl text-white font-Jura cursor-pointer'>
              <NavLink to="/mail"> Mail Us </NavLink>
            </p>
          </div>
        </div>

        <div className='phone:h-56 sm:h-72 lg:h-96 w-90% relative overflow-hidden flex justify-center items-end font-MavenPro font-bold'>
          <img className='h-full w-full z-20' src={wave} />
          <h1 className='z-30 text-white phone:text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white phone:w-70% p-5'>Full Stack Developer</h1>
        </div>

        <Accordian title="Follow Frontend" desc="Complete frontend tools and technologies which include: HTML, CSS, JS. After that learn any CSS and JS framework." />
        <Accordian title="Follow Backend" desc="After completing frontend, start mastering databses, terminal commands and any a strong command in any programming language (recommended: nodeJS, Java, Python) " />
        <Accordian title="Master terminal commands" desc="windows / Linux / mac." />
        <Accordian title="Master git & github" desc=" Learn git and GitHub for version control, manage your your codebase and much more." />
        <Accordian title="Deployment" desc="  Deployment is none other than hosting your site on a platform. You can go for a lot of options but to start for free there are deployment platforms like : Heroku, GitHub pages, vercel & netlify.  " />

        <div className='h-10 w-full'></div>

        <h2 className='text-white font-MavenPro phone:text-2xl md:text-4xl lg:text-5xl w-60% border-b-2 text-center font-bold'>Projects</h2>
        <p className='text-white font-Jura px-12 py-7 sm:px-24 sm:py-10 md:px-32 lg:px-40 phone:text-s md:text-sm lg:text-lg'> 1. Real time chat application
          <br></br><br></br>2. Online job portal
          <br></br> <br></br>3. Task management system like: Asana or Trello
          <br></br> <br></br>4. Fitness tracker
          <br></br> <br></br>5. News aggregator
        </p>

        <div className='h-[20vh] w-full'></div>

        <div className='phone:h-60 sm:h-72 md:h-96 w-full bg-purple-800 flex flex-col items-center phone:gap-7'>
          <div className='h-25% phone:w-70% flex justify-center items-center border-b-2 border-white'>
            <img className='h-70% w-40%' src={logo} alt="" />
          </div>

          <div className='phone:h-40% xl:h-50% w-80% phone:py-6 flex flex-col justify-center items-center'>
            <p className='font-Jura text-white cursor-pointer phone:text-sm lg:text-lg'>
              <NavLink to="/about">About Quantica</NavLink>
            </p>
            <p className='font-Jura text-white cursor-pointer phone:text-sm lg:text-lg'>
              <NavLink to="/resource">Resources</NavLink>
            </p>
            <p className='font-Jura text-white cursor-pointer phone:text-sm lg:text-lg'>
              <NavLink to="/domains"> Domains </NavLink>
            </p>
            <p className='font-Jura text-white cursor-pointer phone:text-sm lg:text-lg'>
              <NavLink to="/mail">Mail Us</NavLink>
            </p>
            <p className='font-Jura text-white cursor-pointer phone:text-sm lg:text-lg'>
              <NavLink to="/whats-new">Whats New ?</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullStack
