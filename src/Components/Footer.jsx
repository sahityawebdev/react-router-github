import React from 'react'
import sunlogo from '../assets/sunlogo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
   <footer className='bg-white border-y'>

    <div className='p-4 py-6 mx-auto w-full max-w-screen-xl lg:py-8'>
        <div className='md:flex md:justify-between'>

            <div className='mb-6 md:mb-0'>
                <Link href="/" className='flex items-center'>
                    <img src={sunlogo} alt="logo" className='h-28 mr-3' />
                </Link>
            </div>

            <div className='grid gap-8 grid-cols-2 sm:gap-6 sm:grid-cols-3'>
                <div>
                    <h2 className='text-sm font-semibold text-gray-900 uppercase mb-6'>Resources</h2>
                    <ul className='text-gray-500 font-medium'>
                        <li className='mb-4'>
                            <NavLink to="/" className={({isActive})=>`hover:underline hover:text-orange-700 ${isActive ? "text-orange-600":"text-gray-500"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to="/about" className={({isActive})=>`hover:underline hover:text-orange-700 ${isActive ?"text-orange-600":"text-gray-500"}`}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm font-semibold text-gray-900 uppercase mb-6'>Follow us</h2>
                    <ul className='text-gray-500 font-medium'>
                        <li className='mb-4'>
                            <NavLink to="/github" className={({isActive})=>`hover:underline hover:text-orange-700 ${isActive ? "text-orange-600":"text-gray-500"}`}>
                            Github
                            </NavLink>
                        </li>

                        <li className=''>
                            <a href="" className=''>
                            Discord
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm font-semibold text-gray-900 uppercase mb-6'>Legal</h2>
                    <ul className='text-gray-500 font-medium'>
                        <li className='mb-4'>
                            <a href="" className=''>
                            Privacy Policy
                            </a>
                        </li>                      
                        <li className='mb-4'>
                            <a href="" className=''>
                            {/* Terms &amp; Conditions */}
                            Terms & Conditions
                            </a>
                        </li>                      
                    </ul>
                </div>
            </div>
        </div>

        <hr className='border-gray-200 my-6 sm:mx-auto lg:my-8' />
        <div className=''>
            <span className='hover:underline'>
            © 2024
                <a href="">
                    XYZ
                </a>
                . All Rights Reserved.
            </span>
            <div className='flex mt-4 space-x-5 sm:justify-end sm:mt-0'>
            <Link to=""><FaFacebook className='text-gray-500' /></Link>
            <Link to=""><FaGithub className='text-gray-500' /></Link>
            <Link to=""><FaInstagram className='text-gray-500' /></Link>
           
            </div>

        </div>

    </div>

   </footer>
  )
}

export default Footer