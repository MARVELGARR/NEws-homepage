import React from 'react'
import siteData from './Data'

function NewsCard(props) {

  return (
    <>
        <div className="lg:h-96 lg:justify-between border-b-2 border-gray-400 p-5 bg-black flex flex-col gap-11 text-white">
            {props.newsdata.map(item=>{
                return (
                    <div className="lg:gap-3 flex flex-col gap-1" key={item.id}>
                        <div className="font-bold cursor-pointer hover:text-amber-600 text-md">{item.headings}</div>
                        <div className="text-xs">{item.intro}</div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default NewsCard