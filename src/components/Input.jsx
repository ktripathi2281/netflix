import React from 'react'

const Input = () => {
    return (
        <>
        <div className="relative">
            <input type='email'
                className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none
           focus:outline-none focus:ring-0 peer' placeholder=" " id='email'
            />
            <label
                className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10
            origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                htmlFor="email"> Email </label>
        </div>
        <div className='relative'>
            <input type='password'
                className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none
           focus:outline-none focus:ring-0 peer' placeholder=" " id='Password'
            />
            <label
                className='absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10
            origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
                htmlFor="Password"> Password </label>
        </div>
        <div className="relative">
            <button className="text-white bg-[#E50914] block px-6 py-[12px] w-full rounded-md font-semibold justify-center mt-6">
                Sign In
            </button>

            <p className='text-zinc-400 mt-10'>New to Netflix?</p>
        </div>
        </>

    )
}

export default Input
