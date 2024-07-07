import React from 'react'
import Search from './Search'
import Favourite from './Favourite'
import Down from './Down'
import ShoppingCart from './ShoppingCart'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='bg-white rounded-full w-[90%] lg:px-12 lg:py-2 md:px-8 md:py-2 flex justify-between items-center shadow shadow-[0_35px_60px_-15px_rgba(255, 182, 193, 1)]'>
      <div className='flex items-center lg:gap-10 md:gap-4'>
        <p>Home</p>
        <div className='flex lg:gap-2 items-center'>
          <p>Products</p>
          <Down/>
        </div>
        <p>Contacts</p>
      </div>

      <p className='text-xl font-medium'>Skin <span className='text-[#FFB6C1]'>Hub</span></p>
      <div className='flex gap-16 items-center'>
        <div className='flex gap-3 lg:gap-8'>
          <Search/>
          <Favourite/>
          <ShoppingCart/>
        </div>
        <Button buttonText={"Login"}/>
      </div>
    </div>
  )
}

export default Navbar
