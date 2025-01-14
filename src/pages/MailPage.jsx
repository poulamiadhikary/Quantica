import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { IoIosArrowForward } from "react-icons/io"
import { ImCross } from "react-icons/im"

const MailPage = () => {

  let [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    if (isMenuVisible === false) {
      setMenuVisible(true)
    }
    else {
      setMenuVisible(false)
    }
  }

  const clickMail = ()=> {
    window.location.href = 'mailto:poulamiadhikary18@gmail.com';
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
          <h1 className='z-30 text-white phone:text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white phone:w-70% p-5'>Mail Us</h1>
        </div>

        <p className='font-Jura text-white phone:text-sm md:text-lg phone:px-10 sm:px-14 md:px-24 md:mt-12 mt-8 text-center'>Didn't found your required roadmap, resources ?<br></br>Have any issue with any of our content ?<br></br>Want to add something ?<br></br>Have a Query ?</p>
        <button className='phone:text-sm md:text-lg lg:text-2xl bg-gradient-to-r from-purple-400 to-purple-800 phone:mt-8 text-white font-Jura phone:px-3 phone:py-1 lg:px-10 lg:py-5 rounded-md cursor-pointer' onClick={clickMail}>Mail Us</button>
      
        <div className=' phone:h-[70vh] sm:h-[70vh] md:h-[60vh] lg:h-[50vh] w-80% flex flex-col px-3 justify-end phone:gap-2'></div>

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
                    <NavLink to="/domains">Domains</NavLink>
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

export default MailPage
