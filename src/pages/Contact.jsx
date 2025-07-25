import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <div>
        <div className='bg-gray-100 p-10 shadow-xl' id="contact">
            <div className='flex justify-center p-10'>
                <h2 className='border-warning border-b-4 lg:text-2xl text-xl font-bold font-poppins text-black lg:w-[150px] w-[130px]'>Contact US</h2>

            </div>
            <div className='flex lg:flex-row flex-col justify-center items-stretch p-5 gap-8 h-full'>
                <div className='lg:w-1/2 w-full flex flex-col justify-between items-start rounded-lg bg-white border border-gray-100  h-full shadow-md lg:px-10 px-5 py-4 space-y-4 pb-48'>
                    <h3 className='lg:text-3xl text-2xl font-bold'>Contact Details</h3>
                        <div className='flex flex-row justify-center items-center space-x-2'>

                            <FaEnvelope  size={15} className='text-blue-500 hover:text-blue-600'/>
                            <p>info@coffeeshopwebsite.com</p>
                        </div>
                        <div className='flex flex-row justify-center items-center space-x-2'>

                            <FaPhone size={15} className='text-blue-500 hover:text-blue-600'/>
                            <p>(+91) 9788678202</p>
                        </div>
                        <div className='flex flex-row justify-center items-center space-x-2'>

                            <FaMapMarkerAlt size={15} className='text-blue-500 hover:text-blue-600'/>
                            <p>MBZ, Zone-20, villa-48, Abu Dhabi,UAE</p>
                        </div>
                        <div className='flex flex-col justify-center items-start space-y-2'>
                            <p>Monday - Friday: 8.00 AM - 9.00 PM</p>
                            <p>Saturday: 10.00 AM - 4.00 PM</p>
                            <p>Sunday: Holiday</p>
                        </div>


                </div>
                <div className='lg:w-1/2 w-full rounded-lg bg-white border border-gray-100 lg:px-10 px-5 h-full shadow-md'>
                    <h3 className='lg:text-3xl text-2xl font-bold p-4'>Get in Touch</h3>
                    <div className='flex flex-col justify-center items-start mb-10'>
                        <form action="">
                            <div className='flex flex-col justify-center items-start space-y-3 mb-2'>
                                <label htmlFor="Name">Name</label>
                                <input type="text" placeholder='Enter Name' className='border border-gray-400 p-2'/>

                            </div>
                            <div className='flex flex-col justify-center items-start space-y-2  mb-2'>
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Enter Email'  className='border border-gray-400 p-2'/>

                            </div>
                            <div className='flex flex-col justify-center items-start space-y-2  mb-2'>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="" placeholder='Write message'  className='border border-gray-400 p-2'></textarea>

                            </div>
                            <button className='bg-primary text-white border border-blue-300 rounded-xl lg:px-6 px-4 py-2 lg:py-2 font-semibold text-lg mt-10'>Submit</button>

                        </form>
                       

                    </div>

                </div>


            </div>

        </div>

    </div>
  )
}

export default Contact