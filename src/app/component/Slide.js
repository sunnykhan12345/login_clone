import React from 'react'
import Link from 'next/link'
const Slide = () => {
  return (
    <>
     <div className="h-screen flex items-center w-full justify-center bg-gray-200 ">
        {/***************** left side start ****************/}
         <div className="left_side  w-1/2 px-12">
            <h1 className="text-5xl text-blue-800 font-bold py-5">facebook</h1>
            <p className="text-2xl    to-black font-semibold leading-8">facebook helps you connect and share with the people in your life.</p>
         </div>
        {/***************** left side exit ****************/}

        {/***************** right side start ****************/}
        <div className="right_side bg-white p-10">
          <div className="card ">
             <input type="text" placeholder="Email Addredd and Phone Number" className='my-6 py-2 px-16 border-2 focus:outline-2 outline-blue-600' /> <br/>
             <input type="text" placeholder="Password" className='mb-4 py-2 px-16 border-2 focus:outline-2 outline-blue-600'  /><br/>
             <button className='mb-4 bg-blue-600 mt-2 font-bold text-white w-full py-2 rounded-lg hover:bg-blue-700'>Log in</button>
             <h3 className='text-center my-2'>
              <Link href="" className='mb-4 text-center text-blue-600 hover:underline'>forget password?</Link>
             </h3>
             <hr />
            <div className='text-center my-3'>
            <button className='mt-4 bg-green-600 text-white py-2 px-3 rounded-lg'>Create New Account</button>
            </div>
          </div>
        </div>
        {/***************** right side exit ****************/}
     </div>
    </>
  )
}

export default Slide
