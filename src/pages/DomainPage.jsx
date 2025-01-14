import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"

const DomainPage = () => {

  let [isMenuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        if(isMenuVisible === false){
            setMenuVisible(true)
        }
        else{
            setMenuVisible(false)
        }
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
                <h1 className='z-30 text-white text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white w-70% p-5'>Explore Domains</h1>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>Frontend</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'> Explore roadmap for frontend developer</p>
                <Link to="/domains/frontend"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>Backend</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'>  Explore roadmap for backend developer</p>
                <Link to="/domains/backend"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>Full Stack</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'>  Explore roadmap for full stack developer</p>
                <Link to="/domains/full-stack"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>UI/UX Design</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'> Explore roadmap for UI/UX designer</p>
                <Link to="/domains/ui-ux"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>AI/ML</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'>  Explore roadmap for artificial intelligence & machine learning</p>
                <Link to="/domains/ai-ml"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>App Development</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'>  Explore roadmap for app developemt</p>
                <Link to="/domains/app"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-28 sm:h-40 lg:h-52 w-80% flex flex-col px-3 justify-end gap-1'>
                <h2 className='font-MavenPro text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold'>Game Development</h2>
                <p className='text-white font-Jura text-sm md:text-lg xl:text-2xl'>  Explore roadmap for game developemt</p>
                <Link to="/domains/game"><button className=' text-white flex text-s md:text-sm bg-gradient-to-r from-purple-500 to-purple-700 w-30% lg:w-20% justify-center items-center py-1 md:py-2 rounded-md cursor-pointer'>
                 Open Roadmap <IoIosArrowForward />
                </button></Link>
            </div>

            <div className='h-[20vh] w-80% flex flex-col px-3 justify-end gap-1'></div>

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
                    <NavLink to="/domains">Domains</NavLink>
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

export default DomainPage
