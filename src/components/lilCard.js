import React from 'react'

function lilCard({imgSrc, imgAlt, item}) {
  return (
    <div className="bg-orange-100 rounded-2xl h-24 p-2 grid grid-rows-2 gap-0.5 justify-center align-middle text-center">
        <img src={imgSrc} alt={imgAlt}/>
        <p className="text-stone-500 capitalize text-sm">{item}</p>
    </div>
  )
}

export default lilCard