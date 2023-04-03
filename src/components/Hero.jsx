import React from 'react'
import siteData from "./Data"
import NewsCard from "./NewsCard";
function Hero(props) {
  return (
    <>
       <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3     mt-5 flex flex-col gap-7">
            <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:col-span-2">
                <div className="lg:flex       web hidden">
                    <img className="" src={siteData.screen[0].url} alt="hero image for web" />
                </div>
                <div className="lg:hidden     mobile w-full">
                    <img className="w-full" src={siteData.screen[1].url} alt="hero image for mobile" />
                </div>
            </div>
            <div className="lg:col-start-1 lg:row-start-3">
                <h2 className=" font-extrabold text-3xl flex-wrap">The Bright future of web 3.0?</h2>
            </div>
            <div className="lg:col-span-1 lg:row-start-3">
                <div className="text-md mt-2">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?
                </div>
                <button className="hover:bg-black hover:text-white bg-orange-700 mt-2 text-teal-50 w-36 h-7 fon">READ MORE</button>
            </div>
            <div className=" lg:col-start-3 lg:row-start-1 lg:row-span-full">
                <div className=" pl-10 p-5 text-amber-600 bg-black" >News</div>
                <NewsCard newsdata={siteData.newsdata}/>
            </div>

       </div> 
    </>
  )
}

export default Hero