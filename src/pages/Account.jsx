import React from 'react'
import img1 from '../img/logo.png'
import {Link} from 'react-router-dom'
import SavedShows2 from '../components/SavedShows2'

const Account = () => {
  return (
    <>
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        {/* <h1 className='text-[#E50914] text-4xl font-bold cursor-pointer ml-8'>NETFLIX</h1> */}
        <Link to='/mHome'>
        <img className="text-white h-[40px] md:ml-8 mt-2" src={img1} alt="Logo" />
        </Link>
        <div>
          <Link to='/Auth'>
            <button className='text-white bg-[#E50914] px-4 py-1.5 rounded cursor-pointer mt-1.5 md:mr-8 '>Sign Out</button>
            </Link>
        </div>
    </div>
    <div className='absolute mt-20 p-4 md:p-8 ml-4'>
      <h1 className='text-white text-2xl md:text-4xl font-bold'>My Shows</h1>
      <SavedShows2/>
    </div>
    
    </>
  )
}

export default Account