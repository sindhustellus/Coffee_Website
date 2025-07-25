import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItem = [
        { menu: 'Home' , to: 'home'},
        { menu: 'About' , to: 'about'},
        { menu: 'Menu' , to: 'menu'},
        { menu: 'Gallery' , to: 'gallery'},
        { menu: 'Testimonial' , to: 'testimonial'},
        { menu: 'Contact' , to: 'contact'}
    ]
  return (
    <div>
        <header className='fixed shadow-2xl top-0 w-full z-50 text-white bg-primary rounded-sm font-poppins'>
            <div className='container flex flex-row justify-between items-center lg:px-4 py-3 px-5'>
                <div className='flex space-x-1'>
                    <img src="/logo.webp" alt="logo" className='w-10 h-10 rounded-full' />
                    <h1 className='font-poppins lg:text-2xl text-xl font-bold'>Coffee</h1>
                </div>
                <nav className='hidden lg:block'>
                    <ul className='flex flex-row space-x-6 font-semibold lg:text-lg'>
                        {menuItem.map((item,index) =>(
                                <li key={index}><a href={`#${item.to}`} className='hover:bg-warning px-6 py-2 hover:text-white cursor-pointer hover:rounded-md'>
                            {item.menu} </a></li>
                        ))}

                    </ul>
                </nav>
                <div className='lg:hidden text-white'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-2xl text-white'>
                    {isOpen ?  <IoClose /> : <FaBars />}

                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className='block lg:hidden mb-3'>
                    <div className='flex flex-col gap-10 justify-center items-center'>
                        
                        <ul className='flex flex-col space-y-4 justify-center items-center font-semibold text-lg '>
                        {menuItem.map((item,index) =>(
                            <li key={index}><a href={`#${item.to}`} className='hover:bg-warning px-6 py-2 hover:text-white cursor-pointer hover:rounded-md'>
                                {item.menu} </a></li>
                        ))}

                        </ul>

                    </div>
                </nav>
            )}
        </header>

    </div>
  )
}

export default Navbar