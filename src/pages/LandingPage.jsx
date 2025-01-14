import React from 'react'
import { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { IoIosArrowForward } from "react-icons/io"
import { FaPlay } from "react-icons/fa"
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import aiHand from '../assets/ai-hand.png'

const LandingPage = () => {

    let [isMenuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        if(isMenuVisible === false){
            setMenuVisible(true)
        }
        else{
            setMenuVisible(false)
        }
    }

    const openFullStackVideo = ()=> {
        window.open("https://youtu.be/ZxKM3DCV2kE?si=niBfDBLdY_FlfuYq", "_blank")
    }

    const openAIMLVideo = ()=> {
        window.open("https://youtube.com/playlist?list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s&si=ddn2TSBKGc3lNC9y", "_blank")
      }

  return (
    <>
        <div className='h-auto w-full flex flex-col items-center relative'>
            <div className='h-28 w-90% lg:w-full flex justify-between'>
                <div className='h-full w-40% lg:w-20% flex justify-center items-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='h-full w-20% lg:w-60% text-4xl flex justify-center lg:justify-evenly items-center text-white'>
                    <RiMenu3Fill className='lg:hidden cursor-pointer' onClick={toggleMenu}/>
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

                <div className={`absolute top-0 left-0 bg-black h-[100vh] w-full rounded-md z-50 flex flex-col justify-center items-center gap-5 border-b-4 border-purple-700 transition-transform duration-500 ease-in-out ${isMenuVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                    <ImCross className='text-white text-2xl mb-16 cursor-pointer' onClick={toggleMenu}/>
                    <p className='lg:text-xl text-3xl text-white font-Jura cursor-pointer'>
                       <NavLink to="/"> Home </NavLink>
                    </p>
                    <p className='lg:text-xl text-3xl text-white font-Jura cursor-pointer'>
                        <NavLink to="/about">About Quantica</NavLink>
                    </p>
                    <p className='lg:text-xl text-3xl text-white font-Jura cursor-pointer'>
                        <NavLink to="/domains"> Domains </NavLink>
                    </p>
                    <p className='lg:text-xl text-3xl text-white font-Jura cursor-pointer'>
                        <NavLink to="/mail"> Mail Us </NavLink>
                    </p>
                </div>
            </div>

            <div className='h-56 sm:h-72 lg:h-96 w-90% relative overflow-hidden flex justify-center items-end font-MavenPro font-bold'>
                <img className='h-full w-full z-20' src={wave}/>
                <h1 className='z-30 text-white text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl'>Simplify Learning with Structured Roadmaps</h1>
            </div>
            
            <div className='h-24 md:h-32 w-80% md:w-60% xl:h-36 flex flex-col justify-center items-center gap-2 md:gap-5'>
                <p className='text-s md:text-sm xl:text-lg text-white font-Jura text-center'>Want to start a career in tech ? We've covered you up everything for. Explore roadmaps 
                and video lectures for Web Development, Artificial Intelligence, Android Developer, 
                Data Scientist & much more...</p>
                <Link to="/domains"><button className='text-s flex justify-evenly items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-900 rounded-sm py-1 px-2 md:py-2 md:px-5 md:font-semibold cursor-pointer text-white lg:rounded-md'>Explore Domain <IoIosArrowForward /></button></Link>
            </div>

            <div className='h-64 sm:h-96 md:h-115 lg:h-135 w-full'>
                <img className='h-full w-full' src={aiHand} alt="" />
            </div>

            <div className='h-36 sm:h-52 lg:h-72 w-80% text-white flex flex-col justify-center items-center gap-2'>
                <p className='text-s sm:text-sm text-center lg:text-lg xl:text-xl'>AI is rapidly changing the world and in 2024 a person who knows AI is considered among the top 
                5% excelling tech professionals. Step in the field of Artificial Intelligence with out structured and 
                simplified roadmap on Artificial Intelligence.</p>
                <div className='w-60% sm:w-50% lg:w-40% xl:w-30% h-20% flex justify-evenly items-center'>
                <Link to="/domains/ai-ml"><button className='text-s flex justify-evenly items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-900 rounded-sm py-1 px-2 md:py-2 md:px-5 md:font-semibold cursor-pointer text-white lg:rounded-md'>Open Roadmap <IoIosArrowForward /></button></Link>
                <button className='text-s flex justify-evenly items-center gap-2 bg-white rounded-sm py-1 px-2 md:py-2 md:px-5 md:font-semibold cursor-pointer text-black lg:rounded-md' onClick={openAIMLVideo}>Watch Videos <IoIosArrowForward /></button>
                </div>
            </div>

            <div className='h-52 lg:h-64 w-full flex justify-evenly items-center'>
                <div className='h-80% w-30% bg-gradient-to-b from-purple-500 to-purple-900 rounded-md flex flex-col justify-center items-center gap-4 px-2'>
                    <p className='text-white text-sm md:text-lg lg:text-xl xl:text-2xl font-Jura font-bold text-center'>Become a Full Stack Developer in 2025</p>
                    <Link to="/domains/full-stack"><button className='text-s flex justify-evenly items-center gap-2 bg-white rounded-md py-1 px-2 md:py-2 md:px-5 md:font-semibold cursor-pointer text-black lg:rounded-md'>Open Roadmap <IoIosArrowForward /></button></Link>
                </div>
                <div className='h-80% w-20% bg-white rounded-md flex flex-col justify-center items-center gap-4'>
                    <p className='text-clip font-Jura lg:text-xl xl:text-2xl font-bold text-center px-2'>Watch video lectures</p>
                    <FaPlay className='text-purple-800 cursor-pointer' onClick={openFullStackVideo} />
                </div>
                <p className='text-s sm:text-sm lg:text-xl xl:text-2xl w-25% sm:w-30% md:w-35% lg:w-40% text-white font-Jura'> Learn in-demand industry relevant 
                skills required to be a full stack 
                developer in 2025.</p>
            </div>

            <div className='h-10 sm:h-20 lg:h-28 w-80% md:w-90% flex justify-center items-end'>
                <h2 className='font-MavenPro font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white'>Explore more in-demand fields</h2>
            </div>

            <div className='h-48 sm:h-60 md:h-80 xl:h-96 w-80% flex flex-wrap justify-center items-center px-3 py-2 gap-3 sm:gap-4 xl:gap-7'>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Frontend</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Backend</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>UI/UX Design</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Android</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>iOS</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Data Science</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Cloud</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Cross Platform</div>
                <div className='h-20% w-30% text-s sm:text-sm md:text-lg xl:text-xl text-center bg-gray-600 text-white rounded-md flex justify-center items-center cursor-pointer'>Cyber Security</div>
            </div>

            <div className='h-10 md:h-28 xl:h-40 w-80% flex justify-center items-center'>
                <h2 className='font-MavenPro font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white'>Why Quantica ?</h2>
            </div>

            <div className='h-32 sm:h-48 w-80% flex justify-center items-center'>
                <p className='text-s sm:text-sm md:text-lg xl:text-2xl text-center font-Jura text-white px-3'> In Quantica you will have access to all the tech field roadmaps, video lectures to 
                start and learning resources to refer in a way more detailed and structured 
                manner. 
                <br></br><br></br>Also in addition you can choose to get notifications in future for updates and 
                changes in Quantica so that you can be up to date and relevant with the tech 
                world.</p>
            </div>

            <div className='h-12 w-full'></div>

            <div className='h-60 sm:h-72 md:h-96 w-full bg-purple-800 flex flex-col items-center gap-7'>
                <div className='h-25% w-70% flex justify-center items-center border-b-2 border-white'>
                    <img className='h-70% w-40%' src={logo} alt="" />
                </div>

                <div className='h-40% xl:h-50% w-80% py-6 flex flex-col justify-center items-center'>
                    <p className='font-Jura text-white cursor-pointer text-sm lg:text-lg'>
                        <NavLink to="/about">About Quantica</NavLink>
                    </p>
                    <p className='font-Jura text-white cursor-pointer text-sm lg:text-lg'>
                        <NavLink to="/resource">Resources</NavLink>
                    </p>
                    <p className='font-Jura text-white cursor-pointer text-sm lg:text-lg'>
                        <NavLink to="/domains"> Domains </NavLink>
                    </p>
                    <p className='font-Jura text-white cursor-pointer text-sm lg:text-lg'>
                        <NavLink to="/mail">Mail Us</NavLink>
                    </p>
                    <p className='font-Jura text-white cursor-pointer text-sm lg:text-lg'>
                    <NavLink to="/whats-new">Whats New ?</NavLink>
                    </p>
                </div>
            </div>

        </div>
    </>
  )
}

export default LandingPage
