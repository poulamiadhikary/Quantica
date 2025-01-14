import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import Accordian from '../components/Accordian'

const AppDevelopment = () => {

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
          <h1 className='z-30 text-white phone:text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white phone:w-70% p-5'>App Development</h1>
        </div>

        <p className='phone:text-s sm:text-sm lg:text-lg text-white font-Jura text-center px-16 mt-7 lg:mt-11'>In mobile developemt you have two choices either you can go for native apps which are specifically for android or ios. Or you can go for cross platform which will be platform independent.</p>

        <Accordian title="Learn Java" desc="Without any doubt java is one of the popular and widely used language for mobile apps due to it's rich functionality and security. Although it is a native app language means in java you can make only android apps." />
        <Accordian title="Learn kotlin" desc="After java we have kotlin. Google has declared Kotlin to be the official language for app developemt and again it is also a great choice for making android apps." />
        <Accordian title="Learn swift" desc="Swift is the language which is specifically designed to code iOS apps. Before swift we had a language called objective-C but in today's life its totally outdated and swift is the new and fresh option." />

        <p className='phone:text-s sm:text-sm lg:text-lg text-white font-Jura text-center px-16 mt-7 lg:mt-11'>And now after native apps let's talk about cross-platform which are highly popular due to its easier maintainability and performance. In these cross platform languages you can make apps platform independent.</p>

        <Accordian title="Learn react-native" desc=" React-Native is a language developed by facebook. It is one of the cross-platform language you can go for." />
        <Accordian title="Learn flutter" desc="Another great choice for developers will be flutter which was developed by google. Flutter is in trend recent days and you can start your development with flutter as it is a highly reliable and great language." />

        <div className='h-32 w-full'></div>

        <div className='h-[25vh] w-full'></div>

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

export default AppDevelopment
