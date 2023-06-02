import React from 'react'
import img2 from '../img/bgImage.png'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
// import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <div className="flex w-full h-screen" >
        <Navbar/>
        <div className="flex w-full backdrop-brightness-50" style={{ backgroundImage: `url(${img2})` }}>
          <div className='w-full backdrop-brightness-50'>
            <div className='w-[400px] md:w-[650px] h-52 mt-44 ml-4 md:ml-36'>
              <h1 className="text-white text-[30px] md:text-[60px] mt-4 font-black font-sans">Unlimited movies,</h1>
              <h1 className="text-white text-[30px] md:text-[60px] font-black font-sans">TV shows and more</h1>
              <h1 className="text-white text-[18px] md:text-[24px] font-sans font-bold mt-[10px]">Watch anywhere. Cancel anytime.</h1>
              <div className="max-w-[550px]">
                <h1 className="text-white text-[16px] md:text-[20px] font-sans mt-[26px]">Ready to watch? Click on the button to create or restart your membership.</h1>
              </div>
              {/* <input className='text-white bg-transparent text-[16px] border-[1px] focus:outline-none border-white w-[400px] p-3 py-[12px] rounded mt-[10px]' type="email" name="" id="" placeholder='Email' /> */}
              <Link to='/SignUp'>
              <button className="text-white bg-[#E50914] text-[20px] p-3 py-[10px] rounded mt-[12px] ">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home