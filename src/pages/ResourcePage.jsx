import React from 'react'
import { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/quantica-logo.png'
import wave from '../assets/wave.gif'
import { RiMenu3Fill } from "react-icons/ri"
import { IoIosArrowForward } from "react-icons/io"
import { ImCross } from "react-icons/im"

const ResourcePage = () => {

  let [isMenuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        if(isMenuVisible === false){
            setMenuVisible(true)
        }
        else{
            setMenuVisible(false)
        }
    }

    const openHTMlDoc = ()=> {
      window.open("https://www.w3schools.com/html/", "_blank")
    }
    const openHTMLVideo = ()=> {
      window.open("https://youtu.be/HD13eq_Pmp8?si=JkHTf9Kx3nXLoOXC", "_blank")
    }

    const openCSSDoc = ()=> {
      window.open("https://www.w3schools.com/css/", "_blank")
    }
    const openCSSVideo = ()=> {
      window.open("https://youtu.be/HGTJBPNC-Gw?si=aPGsMQuTgnIzMhV1", "_blank")
    }

    const openJSDoc = ()=> {
      window.open("https://www.w3schools.com/js/default.asp", "_blank")
    }
    const openJSVideo = ()=> {
      window.open("https://youtu.be/lfmg-EJ8gm4?si=kV_WDnjau5d_6PQF", "_blank")
    }

    const openTailwindDoc = ()=> {
      window.open("https://tailwindcss.com/", "_blank")
    }
    const openTailwindVideo = ()=> {
      window.open("https://youtu.be/ft30zcMlFao?si=cOlnCJCChSdKzis-", "_blank")
    }

    const openReactDoc = ()=> {
      window.open("https://www.w3schools.com/react/default.asp", "_blank")
    }
    const openReactVideo = ()=> {
      window.open("https://youtu.be/CgkZ7MvWUAA?si=TB2qrAuKiOUAay8g", "_blank")
    }

    const openNodeJsDoc = ()=> {
      window.open("https://www.w3schools.com/nodejs/default.asp", "_blank")
    }
    const openNodeJsVideo = ()=> {
      window.open("https://youtu.be/TlB_eWDSMt4?si=XC974zdMFJyvmNg0", "_blank")
    }

    const openJavaDoc = ()=> {
      window.open("https://www.w3schools.com/java/default.asp", "_blank")
    }
    const openJavaVideo = ()=> {
      window.open("https://youtu.be/xk4_1vDrzzo?si=HwV1LArWYK9x-z9g", "_blank")
    }

    const openPythonDoc = ()=> {
      window.open("https://www.w3schools.com/python/default.asp", "_blank")
    }
    const openPythonVideo = ()=> {
      window.open("https://youtu.be/_uQrJ0TkZlc?si=T83N1-E82CQJwvkf", "_blank")
    }

    const openSQLDoc = ()=> {
      window.open("https://www.w3schools.com/sql/default.asp", "_blank")
    }
    const openSQLVideo = ()=> {
      window.open("https://youtu.be/5OdVJbNCSso?si=dsqafu8I1CWF5R-B", "_blank")
    }

    const openMondoDBDoc = ()=> {
      window.open("https://www.w3schools.com/mongodb/index.php", "_blank")
    }
    const openMondoDBVideo = ()=> {
      window.open("https://youtu.be/c2M-rlkkT5o?si=ENRNnObFMrJCNp8s", "_blank")
    }

    const openGithubVideo = ()=> {
      window.open("https://youtube.com/playlist?list=PLJSdgJwSw9XUcsFAWNFQvizs1s9uCtjJg&si=9WioCs9yGaqM6ZUR", "_blank")
    }

    const openKotlinVideo = ()=> {
      window.open("https://youtu.be/F9UC9DY-vIU?si=c2Nm-gN8fEwzCna1", "_blank")
    }

    const openSwiftVideo = ()=> {
      window.open("https://youtu.be/F9UC9DY-vIU?si=c2Nm-gN8fEwzCna1", "_blank")
    }

    const openUIUXVideo = ()=> {
      window.open("https://youtu.be/c9Wg6Cb_YlU?si=vrL93jUTLfH1Qgkf", "_blank")
    }

    const openFigmaVideo = ()=> {
      window.open("https://youtube.com/playlist?list=PLjiHFwhbHYlEmPhn68XdG2p2k4X47XR-8&si=d9IrqrrXeJEja8yi", "_blank")
    }


  return (
    <>
        <div className='h-auto w-full flex flex-col items-center relative'>
            <div className='phone:h-28 w-90% lg:w-full flex justify-between'>
                <div className='h-full phone:w-40% lg:w-20% flex justify-center items-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='h-full phone:w-20% lg:w-60% phone:text-4xl flex justify-center lg:justify-evenly items-center text-white'>
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

                <div className={`absolute top-0 left-0 bg-black phone:h-[100vh] w-full rounded-md z-50 flex flex-col justify-center items-center phone:gap-5 border-b-4 border-purple-700 transition-transform duration-500 ease-in-out ${isMenuVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                    <ImCross className='text-white text-2xl mb-16 cursor-pointer' onClick={toggleMenu}/>
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
                <img className='h-full w-full z-20' src={wave}/>
                <h1 className='z-30 text-white phone:text-3xl text-center absolute sm:w-80% sm:text-4xl lg:text-6xl border-b-2 border-white phone:w-70% p-5'>Resources</h1>
            </div>

            <div className='phone:h-60 sm:h-72 md:h-80 xl:h-100 w-80% flex flex-col px-3 justify-end phone:gap-2'>
                
                <h2 className='font-MavenPro phone:text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold border-b-2 mb-4'>Frontend</h2>
                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn HTML</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openHTMLVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openHTMlDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn CSS</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer'onClick={openCSSVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openCSSDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn JavaScript</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openJSVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openJSDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn TailwindCSS</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openTailwindVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openTailwindDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn ReactJS</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openReactVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openReactDoc}>Open Doc</button>
                  </div>
                </div> 
            </div>

            <div className='phone:h-60 sm:h-72 md:h-80 xl:h-100 w-80% flex flex-col px-3 justify-end phone:gap-2'>
                
                <h2 className='font-MavenPro phone:text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold border-b-2 mb-4'>Backend</h2>
                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn nodeJS</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openNodeJsVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openNodeJsDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn Java</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openJavaVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openJavaDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn Python</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openPythonVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openPythonDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn MySQL</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openSQLVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openSQLDoc}>Open Doc</button>
                  </div>
                </div>

                <div className='w-full h-10%  flex items-center'>
                  <p className='font-Jura w-40% text-white xl:text-2xl'>Learn MongoBD</p>
                  <div className='w-60% flex justify-between h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openMondoDBVideo}>Open Video</button>
                    <button className='phone:text-sm xl:text-xl text-black bg-gradient-to-r from-green-400 to-green-900 flex justify-center items-center w-45% phone:py-1 rounded-sm cursor-pointer' onClick={openMondoDBDoc}>Open Doc</button>
                  </div>
                </div> 
            </div>

            <div className='phone:h-32 sm:h-40 md:h-44 xl:h-52 w-80% flex flex-col px-3 justify-end phone:gap-2'>
                
                <h2 className='font-MavenPro phone:text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold border-b-2 mb-4'>Learn Git & Github</h2>
                <div className='w-full h-20%  flex items-center'>
                  <p className='font-Jura w-50% text-white xl:text-2xl'>Learn git & github</p>
                  <div className='w-50% flex justify-center h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-70% lg:w-50% phone:py-1 rounded-sm cursor-pointer' onClick={openGithubVideo}>Open Video</button>
                  </div>
                </div>
            </div>

            <div className=' phone:h-32 sm:h-40 md:h-44 xl:h-52 w-80% flex flex-col px-3 justify-end phone:gap-2'>
                
                <h2 className='font-MavenPro phone:text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold border-b-2 mb-4'>Android Development</h2>
                <div className='w-full h-20%  flex items-center'>
                  <p className='font-Jura w-50% text-white xl:text-2xl'>Learn kotlin</p>
                  <div className='w-50% flex justify-center h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-70% lg:w-50% phone:py-1 rounded-sm cursor-pointer' onClick={openKotlinVideo}>Open Video</button>
                  </div>
                </div>
                <div className='w-full h-20%  flex items-center'>
                  <p className='font-Jura w-50% text-white xl:text-2xl'>Learn java</p>
                  <div className='w-50% flex justify-center h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-70% lg:w-50% phone:py-1 rounded-sm cursor-pointer' onClick={openJavaVideo}>Open Video</button>
                  </div>
                </div>
            </div>

            <div className='phone:h-32 sm:h-40 md:h-44 xl:h-52 w-80% flex flex-col px-3 justify-center phone:gap-2'>
                
                <h2 className='font-MavenPro phone:text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold border-b-2 mb-4'>iOS Development</h2>
                <div className='w-full h-20%  flex items-center'>
                  <p className='font-Jura w-50% text-white xl:text-2xl'>Learn swift</p>
                  <div className='w-50% flex justify-center h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-70% lg:w-50% phone:py-1 rounded-sm cursor-pointer' onClick={openSwiftVideo}>Open Video</button>
                  </div>
                </div>
            </div>

            <div className=' phone:h-32 sm:h-40 md:h-44 xl:h-52 w-80% flex flex-col px-3 justify-end phone:gap-2'>
                
                <h2 className='font-MavenPro phone:text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-bold border-b-2 mb-4'>UI/UX Design</h2>
                <div className='w-full h-20%  flex items-center'>
                  <p className='font-Jura w-50% text-white xl:text-2xl'>Learn UI/UX</p>
                  <div className='w-50% flex justify-center h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-70% lg:w-50% phone:py-1 rounded-sm cursor-pointer' onClick={openUIUXVideo}>Open Video</button>
                  </div>
                </div>
                <div className='w-full h-20%  flex items-center'>
                  <p className='font-Jura w-50% text-white xl:text-2xl'>Learn Figma</p>
                  <div className='w-50% flex justify-center h-full'>
                    <button className='phone:text-sm xl:text-xl text-white bg-gradient-to-r from-purple-500 to-purple-950 flex justify-center items-center w-70% lg:w-50% phone:py-1 rounded-sm cursor-pointer' onClick={openFigmaVideo}>Open Video</button>
                  </div>
                </div>
            </div>

            <div className=' phone:h-32 sm:h-40 md:h-44 xl:h-52 w-80% flex flex-col px-3 justify-end phone:gap-2'></div>

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

export default ResourcePage
