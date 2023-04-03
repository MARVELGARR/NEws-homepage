import React, {useState} from 'react'
import siteData from "./Data"
import App from "../App"

function Header({
    isClosed, setIsClosed, handleClosed
}) {
   
    
  return (
    <>
        <header className="flex relative justify-between items-center mt-8">
            <div className="">
                <img className="w-15 h-15" src="/images/logo.svg" />
            </div>
            <nav className={` ${isClosed ? "md:top-0 md:text-lg md:absolute hidden" : ""} flex flex-col gap-5 absolute md:flex-row right-20 top-24 md:flex md:text-md md:gap-4`}>
                {siteData.navLinks.map(link =>{
                    return(
                        <li className="list-none" key={link.id}>
                            <a href={link.url}>
                                {link.title}
                            </a>
                        </li>
                    )
                })}

                
            </nav>
            <div>
                <img onClick={()=>handleClosed()} className={` ${isClosed ? "hidden" : ""} cursor-pointer md:hidden w-15 h-15 right-4 top-1 z-20 absolute`} src="/public/images/icon-menu-close.svg"/>
                <img onClick={()=>handleClosed()} className={` ${!isClosed ? "hidden" : ""} w-15 md:hidden cursor-pointer h-15 right-3 top-1 absolute`} src="/public/images/icon-menu.svg"/>
            </div>    
        </header>
    </>
  )
}

export default Header