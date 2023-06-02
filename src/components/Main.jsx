import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../Requests'

const Main = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random()*movies.length)]

  useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=>{
      setMovies(response.data.results)
    })
  },[])
  console.log(movie)

  return (
      <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className="absolute w-full top-[20%] p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
              <div className='my-4'>
                <button className='bg-white text-black rounded-sm py-2 px-5'>Play</button>
                <button className='text-white bg-neutral-600 rounded-sm px-5 py-2 ml-2'>Watch Later</button>
              </div>
              <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white text-[12px] md:text-[16px] '>{movie?.overview}</p>
          </div>
        </div>
      </div>
    
  )
}

export default Main