import React from 'react'
import siteData from './Data'

function Feature(props) {
  return (
    <>
        <div className="lg:flex-row flex flex-col gap-1">
            {props.featuresdata.map(item =>{
                return (
                    <div className="flex items-center gap-3 " key={item.id}>
                        <div className="">
                            <img className=" lg:h-28 w-35" src={item.img}/>
                        </div>
                        <div className="">
                            <div className=" text-4xl text-gray-400">{item.numbering}</div>
                            <div className=" font-extrabold text-lg hover:text-orange-700">{item.headings}</div>
                            <div className="text-sm">{item.intro}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Feature