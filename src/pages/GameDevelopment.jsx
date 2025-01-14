import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import Accordian from '../components/Accordian'

function GameDevelopment() {

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
          <h1 className='z-30 text-white phone:text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white phone:w-70% p-5'>Game Development</h1>
        </div>

        <p className='phone:text-s sm:text-sm lg:text-lg text-white font-Jura text-center px-16 mt-7 lg:mt-11'>Game development is a vast field and inside this field there comes many more fields that include: programming, sound designing, 3d modelling, physics and so on.</p>

        <Accordian title="Understand the basics" desc="At first start with knowing the basics of game industry and what are the complete process of developing a game from scratch. Also learn the game principles, player experiences that are essential to be a part in gaming career." />
        <Accordian title="Learn a programming language" desc="Undoubtly programming language is the most important aspect in game development. For starting you can go for either C++, Java or C#." />
        <Accordian title="Choose a game engine" desc="You've probably heard of names like: Unity, Unreal, GameMaker. These are called game engines which provide some built in tools and mechanism which makes the game development process easier. If you want to make normal 2d games then GameMaker or Unity will be great but If you plan to make heavy and high graphic games then go for Unreal Engine, it is the industry standard for making professional quality games." />
        <Accordian title="Build small games" desc="After you have successfully completed till now then It's now time to make some small game projects to test your skills. Start by building some games like: ping pong or maze game." />
        <Accordian title="Advanced topics" desc="Now coming on to the advanced topics, learn 3d modelling, sound designing, graphics. These are the aspects that make the game more realistic and appealing. You can start with Blender or Maya for 3d Modelling and Adobe After Effects for VFX." />
        <Accordian title="Networking" desc="Now, if you are planning to make a multiplayer game then you have to master networking as it involves real time activity and actions of the players from different locations." />

        <p className='phone:text-s sm:text-sm lg:text-lg text-white font-Jura text-center px-16 mt-7 lg:mt-11'>Depending on the above roadmap you can choose your preffered domain. In game development you can opt for only the designing part or the technical part as well so it completely depends on you that on which part of the game development you want to step in.<br></br>ALL THE BEST !</p>

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

export default GameDevelopment
