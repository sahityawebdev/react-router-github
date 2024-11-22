import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { BiLogoPlayStore } from "react-icons/bi";

function Home() {
  return (
    <div className='mx-auto w-full max-w-7xl pt-5'>
        <div className=' mx-2  sm:mx-16 py-16 flex justify-between '>

            <div>
                <img src={img1} alt="" className='w-96' />
            </div>

            <div className=' text-center max-w-xl sm:mt-20 space-y-8 sm:text-right sm:ml-auto'>
                <h2 className='text-4xl font-bold sm:text-5xl'>
                    Download Now
                    <span className='hidden sm:block text-4xl'>Prabhat App</span>
                </h2>

                <a href="" className='inline-flex items-center text-white bg-orange-700 px-6 py-3 rounded-lg font-medium hover:opacity-75'>
                <BiLogoPlayStore /> Download Now
                </a>
            </div>
        </div>

        <div>
            <div className='flex items-center justify-center sm:mt-20 py-16'>
                <img src={img2} alt="" className='w-96' />
            </div>

            <p className='text-center text-xl font-medium py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tenetur distinctio! Saepe laboriosam ipsa ratione, quaerat laborum itaque aliquid voluptatum totam quos quam blanditiis in at, suscipit, doloremque dicta et.</p>
        </div>

    </div>
  )
}

export default Home