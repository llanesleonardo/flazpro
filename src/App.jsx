import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SystemContextProvider } from "./contexts/SystemContext.jsx";
import PublicHome from './Views/PublicHome.jsx'
import './App.css'


function App() {

  return (
    <>
        <SystemContextProvider>
        <Router>
          <Routes>
          <Route index element={<PublicHome />} />
           </Routes>
        </Router>
      </SystemContextProvider>
    </>
  )
}

export default App
