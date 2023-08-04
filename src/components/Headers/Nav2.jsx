import React from 'react'

function Nav2() {
  return (
    <div className='w-full bg-black'>
        <div className='flex flex-row'>
        <div className=' w-44 h-12 ml-24 mt-3 mb-3'><img  className='w-full h-full ' src="/images/logo.png" alt=""  /></div>
        <div className=' flex flex-row items-center ml-30%'>
            <h1 className=' text-whiteGray ml-14 font-noto text-sm'>Home</h1>
            <h1 className=' text-whiteGray ml-14 font-noto text-sm'>About Us</h1>
            <h1 className=' ml-14 font-noto text-sm text-accent'>Shop</h1>
            <h1 className=' text-whiteGray ml-14 font-noto text-sm'>Blog</h1>
        </div>
        <div className='flex flex-row'>
          <button className=' font-noto text-sm text-textblack bg-buttoncolor h-12 w-28 rounded-md mt-3 mb-3 ml-96'>Smat Touch</button>
          <button className=' font-noto text-sm text-buttoncolor bg-black h-12 w-28 rounded-md mt-3 mb-3 ml-4 border-buttoncolor'>Login/Register</button>

        </div>
        </div>
    </div>
  )
}

export default Nav2