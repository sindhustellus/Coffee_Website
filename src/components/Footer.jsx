import React from 'react'
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div id='footer' className='bg-dark shadow-2xl p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center text-center'>
          
          {/* Copyright */}
          <div>
            <p className='text-white font-poppins font-bold'>@2024 Coffeeshop</p>
          </div>

          {/* Social Media Icons */}
          <div className='flex justify-center space-x-4'>
            <FaFacebook className='text-white size-7' />
            <FaInstagram className='text-white size-7' />
            <FaTwitterSquare className='text-white size-7' />
          </div>

          {/* Links */}
          <div className='flex justify-center space-x-4'>
            <p className='text-white font-poppins cursor-pointer hover:underline'>Privacy Policy</p>
            <p className='text-white font-poppins cursor-pointer hover:underline'>Refund Policy</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
