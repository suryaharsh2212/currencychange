import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex text-center justify-start items-center  bg-slate-400 h-20'>
        <div className=' h-10 w-20' >
            <img className=' h-12' src="https://cdn-icons-png.flaticon.com/128/4440/4440589.png" />
        </div>
        <h1 className=' font-serif font-bold text-gray-50'>CURRENCY CONVERTER</h1>
      </div>
    </div>
  )
}

export default Header
