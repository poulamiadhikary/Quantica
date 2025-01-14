import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import Accordian from '../components/Accordian'

const UIUX = () => {

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
                <div className='h-28 w-90% lg:w-full flex justify-between'>
                    <div className='h-full w-40% lg:w-20% flex justify-center items-center'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='h-full w-20% lg:w-60% text-4xl flex justify-center lg:justify-evenly items-center text-white'>
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

                    <div className={`absolute top-0 left-0 bg-black h-[100vh] w-full rounded-md z-50 flex flex-col justify-center items-center gap-5 border-b-4 border-purple-700 transition-transform duration-500 ease-in-out ${isMenuVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                        <ImCross className='text-white text-2xl mb-16 cursor-pointer' onClick={toggleMenu} />
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
                    <img className='h-full w-full z-20' src={wave} />
                    <h1 className='z-30 text-white text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white w-70% p-5'>UI /UX Designer</h1>
                </div>

                <Accordian title="Basics of UI/UX" desc=" UI - refers to the displayed items of an app or website, the typography, fonts, colors, overall layout. UX - refers to the overall user's experience on the particular page or app. Like is the page takes how much time to load, is the page lagging or what happens when a user clicks on a button or submits a form etc." />
                <Accordian title="Fundamentals of UI/UX" desc="Start learning the fundamental concepts that includes: User research, Wireframing, Prototyping, Visual design, Usability Testing." />
                <Accordian title="Design tools" desc="For wireframing & prototyping - (Adobe XD, Sketch, Figma) For graphic design - (Adobe Illustrator, Canva, Adobe Photoshop). For optional 3D designs - (Blender, Spline).  " />
                <Accordian title="Design Fundamentals" desc="Understand design fundamentals such as color theory, typography, grid systems, layouts etc and also on which design to use what and how much." />
                <Accordian title="Build a portfolio" desc="Start by building small projects like any landing page of an app or website. Then go on for more complex and multi page designs. After that you can showcase your designs on platforms like: Behance, Dribble or create your own website." />
                <Accordian title="Learn user-centered design (UCD)" desc="Try on creating fictional characters or visually appealing structures to resonate with the targetted audience." />
                <Accordian title="Work on real life problems" desc="A good designer is not a person who makes fancy designs but a good designer means a person who solves a real problem through his designs. By following this, start implementing your learning till now and try to work on real life problems." />
                <Accordian title="Keep updated with design trends" desc="Follow design blogs like: UX Design.cc , Awwwards or Smashing Magazine for relevant design updates and industry trends. You can also join bootcamps and webinars on platforms like twitter or linkedIn or even offline." />

                <div className='h-[25vh] w-full'></div>

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

export default UIUX
