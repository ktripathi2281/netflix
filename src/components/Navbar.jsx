import React from 'react'
import img1 from '../img/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        {/* <h1 className='text-[#E50914] text-4xl font-bold cursor-pointer ml-8'>NETFLIX</h1> */}
        <Link to='/'>
        <img className="text-white h-[40px] md:ml-8 mt-2" src={img1} alt="Logo" />
        </Link>
        <div>
          <Link to='/Auth'>
            <button className='text-white bg-[#E50914] px-4 py-1.5 rounded cursor-pointer mt-1.5 md:mr-8 '>Sign In</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar