import React from 'react'

function Button({title, type}) {
  return (
   <button type= {type} className='w-full py-[18px] border-none font-semibold bg-[#1DA1F2] text-white rounded-[76px] text-[18px]'> {title} </button>
  )
}

export default Button
