import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import Accordian from '../components/Accordian'

const Frontend = () => {

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
          <h1 className='z-30 text-white phone:text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white phone:w-70% p-5'>Frontend Developer</h1>
        </div>

        <Accordian title="HTML, CSS" desc=" At the very first start from learning html and css which are the basic building block of any web page. HTML, used mostly for structuring for web pages and css for add styling. Later on build projects using html, css to practice them and brush up your skill." />
        <Accordian title="JavaScript" desc=" JavaScript adds interactivityto your website by adding functions, events, and on different scenarios. Most important js concepts are DOM Manupulation, events, functions, map, filter, reduce, API calling and ES6 features." />
        <Accordian title="Build Projects" desc=" Build projects using html, css, js to test your complete core knowledge on these three." />
        <Accordian title="CSS Frameworks" desc=" There is no wonder why everyone wants to use a framework. Writing vanilla(normal) css for large projects are a nightmare for developers and to overcome that frameworks are introduced. Some popular frameworks include: tailwindCSS, bootstrap, material UI. These frameworks helps in styling the web page in a very few lines of css and also very time saving." />
        <Accordian title="JavaScript Frameworks" desc=" For javascript framworks there are also a lot of options like: react, vue, angular etc. There are more but these 3 are the most popular ones. You can learn any one of them and start building projects to level up your skills." />
        <Accordian title="Version Control" desc=" Learn to use git and GitHub to manage your codebase and version history. By using git and GitHub you will have full control over your working and also start uploading your projects on GitHub which will showcase your working infront of others." />
        <Accordian title="Deployment" desc=" Deployment is none other than hosting your site on a platform. You can go for a lot of options but to start for free there are deployment platforms like : Heroku, GitHub pages, vercel & netlify.  " />

        <div className='h-10 w-full'></div>

        <h2 className='text-white font-MavenPro phone:text-2xl md:text-4xl lg:text-5xl w-60% border-b-2 text-center font-bold'>Projects</h2>
        <p className='text-white font-Jura px-12 py-7 sm:px-24 sm:py-10 md:px-32 lg:px-40 phone:text-s md:text-sm lg:text-lg'> 1. Website clone - you can start by building any website clone like: spotify, Netflix or amazon
          <br></br><br></br>2. Build something your own - this will also give you an advantage to stand out of the crowd as you have developed something of your own.
          <br></br> <br></br>3. Expense tracker
          <br></br> <br></br>4. A to-do list app
          <br></br> <br></br>5. API project - You can make a project like weather app, online library or a food recipe website which will fetch data from an API and display on your website.
        </p>

        <div className='h-[15vh] w-full'></div>

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

export default Frontend
