import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(() =>{
        AOS.init({ duration: 1000 });
    },[]);
  return (
    <div>
        <div id="home" className='bg-primary lg:py-28 py-32 lg:px-10 px-5 h-1/2 shadow-2xl'>
            <div className='flex lg:flex-row flex-col justify-between items-center '>
                <div className='lg:w-1/2  h-full w-full flex flex-col justify-center gap-3'>
                    <h1 className='lg:text-3xl text-2xl font-cursive font-bold text-warning'>Best Coffee</h1>
                    <h3 className='lg:text-2xl text-xl font-poppins font-semibold text-white' >Make your day great with our special coffee!</h3>
                    <p className='lg:text-lg text-md font-poppins text-white'>Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                    <div className='flex space-x-6 mt-4'>
                        <button className='lg:px-6 px-4  py-2 rounded-full bg-warning text-black border hover:bg-transparent hover:text-white transform translate duration-150 hover:scale-105'> 
                            <a href='#menu'>Order Now</a></button>
                        <button className='lg:px-6 px-4  py-2 rounded-full bg-warning text-black border hover:bg-transparent hover:text-white transform translate duration-150 hover:scale-105'>
                            <a href="#contact">Contact US</a></button>
                    </div>
                </div>
                <div className=' lg:w-1/2 w-full h-full  cursor-pointer' data-aos="fade-left">
                    <div className='flex w-[500px] h-[500px] cursor-pointer'>
                        <img src="/coffee-hero-section.png" alt="" className='overflow-hidden object-cover  w-full h-full'/>

                        
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Home