import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import Accordian from '../components/Accordian'

const AIML = () => {

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
                    <h1 className='z-30 text-white text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white w-70% p-5'>AI / ML Engineer</h1>
                </div>

                <Accordian title="Programming language" desc=" At very first you have to stick to a programming language and become pro in it. Start with python as it is easy to learn and in python you will get different libraries which makes machine learning easy. For performance you can also go for Java, C++ or R but for starting python is a well and good choice." />
                <Accordian title="DSA" desc=" Now this one is a quite subjective topic that DSA is not essentially needed in machine learning but in reality it's always recommended that a machine learning engineer should know DSA very well so that when time arrises they can handle complex data." />
                <Accordian title="Git" desc="Now git is a version control system that allows you to keep a track of your code and recover it if anything happens with the codebase. And while working on ML models it's also essential to work and collaborate with others and for that git comes in picture." />
                <Accordian title="SQL" desc="A machine learning engineer should have a strong command on SQL queries as he/she needs to manipulate with large sets of data." />
                <Accordian title="Mathematics" desc="Now this one is the core of a machine learning domain. Topics such as: Linear Algebra, Calculus, Probability, Statictics are the core concepts as they are used to train ML models and based on these math concepts and complex algorithms the accuracy is achieved. " />
                <Accordian title="Data handling" desc="It is essential for you to know about data handling in any programming language that you're using so you can work with data sets and manipulate data whenever needed. It is also required to efficiently store and retrieve data for training of AI models. " />
                <Accordian title="Machine Learning Algorithms" desc="Machine learning algorithms are classified into two categories: supervised and unsupervised. An unsupervised algorithm means that the AI model is learning from an unstructured data set whereas a supervised algorithm means the AI model is learning from a perfectly structured data set. And knowledge and strong understanding of both the algorithms are very much important." />
                <Accordian title="Libraries" desc="If you are using python for machine learning then there are a lot of libraries and frameworks that you can use to train AI modesl. Some of them like: TensorFlow, pandas, numpy, ScikitLearn etc." />
                <Accordian title="Advanced topics" desc="Beyond just training an AI model and make a machine learning product you can also add some more complex additional functionalities in a model like deep learning, computer vision(For images) or NLP(Natural Language Processing)." />

                <div className='h-10 w-full'></div>

                <div className='h-[20vh] w-full'></div>

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

export default AIML
