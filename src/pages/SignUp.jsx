import React, { useState } from 'react'
import img22 from '../img/bgImage.png'
import img33 from '../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
// import Input from '../components/Input'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { user, signUp } = UserAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signUp(email, password)
            navigate('/mHome')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }


    return (
        <div className='flex w-full h-screen'>
            <div className='flex w-full' style={{ backgroundImage: `url(${img22})` }}>
                <div className='bg-black w-full h-full lg:bg-opacity-50'>
                    <nav className='px-12 py-5'>
                        <img src={img33} alt="" className='h-10' />
                    </nav>
                    <div className='flex justify-center'>
                        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                            <h2 className='text-white text-3xl mb-8 font-semibold'>Sign Up</h2>
                            {error?<p className='text-white p-2'>{error}</p>:null}
                            <div className='flex flex-col gap-4'>
                                {/* <Input/> */}
                                <div className="relative">
                                    <input type='email' onChange={(e) => setEmail(e.target.value)}
                                        className='block rounded-md px-6 py-4 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer' placeholder="Email" id='email'
                                    />
                                    {/* <label
                                        className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                                        htmlFor="email"> Email </label> */}
                                </div>
                                <div className='relative'>
                                    <input type='password' onChange={(e) => setPassword(e.target.value)}
                                        className='block rounded-md px-6 py-4 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer' placeholder="Password" id='Password'
                                    />
                                    {/* <label
                                        className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                                        htmlFor="Password"> Password </label> */}
                                </div>
                                <div className="relative">
                                    <button onClick={handleSubmit} className="text-white bg-[#E50914] block px-6 py-[12px] w-full rounded-md font-semibold justify-center mt-6">
                                        Sign Up
                                    </button>

                                    <p className='text-zinc-400 mt-10'>Already subscribed to Netflix?
                                        <Link to='/Auth' className='ml-2 text-white'>Log In</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth