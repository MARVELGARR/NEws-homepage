import { useState } from 'react'
import './index.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function App() {

  const [isClosed, setIsClosed] = useState(true)
    
    
  const handleClosed =()=>{
    setIsClosed(!isClosed);
  }

  return (
    <div className=" App lg:pl-8 lg:pr-8 h-full p-3 flex flex-col">
      <div className={`  ${isClosed ? "hidden" : ""} md:hidden w-3/5 h-full bg-white absolute right-0`}></div>
      <Header
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        handleClosed={handleClosed}
      />
      <div className="flex flex-col gap-7">
        <Hero/>
        <Footer/> 
      </div>
    </div>
  )
}

export default App
