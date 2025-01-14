import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import MailPage from './pages/MailPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import DomainPage from './pages/DomainPage.jsx'
import ResourcePage from './pages/ResourcePage.jsx'
import { Routes, Route } from 'react-router-dom'
import Frontend from './pages/Frontend.jsx'
import Backend from './pages/Backend.jsx'
import AIML from './pages/AIML.jsx'
import FullStack from './pages/FullStack.jsx'
import UIUX from './pages/UIUX.jsx'
import AppDevelopment from './pages/AppDevelopment.jsx'
import WhatsNew from './pages/WhatsNew.jsx'
import GameDevelopment from './pages/GameDevelopment.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/domains' element={<DomainPage />} />
      <Route path='/mail' element={<MailPage />} />    
      <Route path='/whats-new' element={<WhatsNew />} />    
      <Route path='/resource' element={<ResourcePage/>} />    
      <Route path='/domains/frontend' element={<Frontend/>} />    
      <Route path='/domains/backend' element={<Backend/>} />    
      <Route path='/domains/full-stack' element={<FullStack/>} />    
      <Route path='/domains/ai-ml' element={<AIML/>} />    
      <Route path='/domains/ui-ux' element={<UIUX/>} />    
      <Route path='/domains/app' element={<AppDevelopment/>} />    
      <Route path='/domains/game' element={<GameDevelopment/>} />    
    </Routes>
    </>
  )
}

export default App
