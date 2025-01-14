import React from 'react'
import { useState } from 'react'

const Accordian = ({title, desc}) => {

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    if(isExpanded===false){
      setIsExpanded(true)
    }
    else{
      setIsExpanded(false)
    }
  };

  return (
    <>

      <div className='h-11 w-full'></div>

      <div className='h-auto w-80% sm:w-60% lg:w-70% bg-gradient-to-r from-purple-500 to-purple-800 rounded-md'>
        <div className='h-10 px-4 flex items-center justify-between'>
          <p className='text-lg lg:text-2xl text-white font-MavenPro'>{title}</p>
          <button className={`rounded-full text-2xl text-white font-bold transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-45' : 'rotate-0'}`} onClick={toggleReadMore}>{isExpanded ? '+' : '+'}</button>
        </div>
        {isExpanded && (
        <div className="w-full bg-purple-950 text-s font-Jura px-4 py-4 rounded-b-md transition-all duration-200 ease-in-out">
          <p className='font-Jura text-s lg:text-lg text-white'>{desc}</p>
        </div>
      )}
      </div>
    </>
  )
}

export default Accordian
