import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const About = () => {
  return (
    <div>
        <div id="about" className='bg-white lg:py-20 py-14'>
            <div className='flex lg:flex-row flex-col justify-between items-center lg:px-20 px-12'>
                <div className='cursor-pointer w-[400px] h-[400px]  rounded-full overflow-hidden'>
                    <img src="/about-image.jpg" alt="about" className=' object-cover  w-full h-full ' />
                </div>
                <div className='lg:w-1/2 w-full h-full flex flex-col justify-center gap-4'>
                    <h2 className='border-warning border-b-4 lg:text-2xl text-xl font-bold font-poppins text-black lg:w-[120px] w-[100px]'>About US</h2>
                    <p className='text-lg text-gray-500 leading-8'>
                         Welcome to <span className="text-warning font-semibold">Coffee</span>, your cozy corner for premium brews and rich aromas. 
                        Our passion for coffee is brewed into every cup we serve. Whether you’re here to kickstart your morning, relax in the afternoon, 
                        or catch up with friends, we aim to make your coffee moments special.
                    </p>
                    <p className="text-lg text-gray-500 leading-8">
                        We source only the finest beans, roasted to perfection, and brewed with love. Our team believes in quality, consistency, 
                        and creating an experience that feels just like home. Come in, sip your favorite blend, and feel the warmth of our hospitality.
                    </p>
                    <div className='flex space-x-4 items-center'>
                        <FaFacebook  className='size-7 '/> <FaInstagram  className='size-7'/> <FaTwitterSquare  className='size-7'/>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default About