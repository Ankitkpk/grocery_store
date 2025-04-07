import React from 'react'
import Navbar from './components/Navbar.tsx'
import { Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home.tsx'

const App = () => {
  const issellerPath=useLocation().pathname.includes("seller");
  return (
    <div>
      {
       issellerPath? null:<Navbar/> 
      }
      
      <div className={`${issellerPath ? '' : 'rounded-md px-6 md:px-16 lg:px-24 xl:px-34'}`}>
       <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
       </div>
    
</div>
  )
}

export default App