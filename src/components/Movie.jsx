import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({item, id}) => {

    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()

    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShow = async ()=>{
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieId, {
                savedShows: arrayUnion({
                    id:item.id,
                    title:item.title,
                    img:item.backdrop_path
                })
            })
        }
        else{
            alert("user not logged in")
        }
        console.log(item.title)
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ml-6'>
            <img className='text-white w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='text-xs whitespace-normal md:text-sm font-bold flex justify-center items-center h-full'>{item?.title}</p>
                <p onClick={saveShow}> {like ? <FaHeart className='absolute top-4 left-4' /> : <FaRegHeart className='absolute top-4 left-4' />} </p>
            </div>
        </div>
    )
}

export default Movie