import React from 'react'
import Main from '../components/Main'
import img33 from '../img/logo.png'
import Row from '../components/Row'
import requests from '../Requests'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
// import Navbar from '../components/Navbar'

const MovieHome = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
          <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        {/* <h1 className='text-[#E50914] text-4xl font-bold cursor-pointer ml-8'>NETFLIX</h1> */}
        <Link to='/mHome'>
        <img className="text-white h-[40px] ml-8 mt-2" src={img33} alt="Logo" />
        </Link>
        <div>
          <Link to='/account'>
          <button className='text-white mr-4'>Account</button>
          </Link>
            <button onClick={handleLogOut} className='text-white bg-[#E50914] px-4 py-1.5 rounded cursor-pointer mt-1.5 mr-8'>Sign Out</button>
            
        </div>
    </div>
          <Main/>
          <Row rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
          <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}/>
          <Row rowId='3' title='Top Rated' fetchURL={requests.requestTopRated}/>
          <Row rowId='4' title='Trending' fetchURL={requests.requestTrending}/>
        
    </>
  )
}

export default MovieHome