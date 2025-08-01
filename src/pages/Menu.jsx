import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Menu = () => {
    useEffect(() => {
         AOS.init({ duration: 1000 });
         
    },[]);

  return (
    <div>
        <div id="menu" className='bg-dark shadow-xl'>
            <div className='flex justify-center p-10'>
                <h2 className='border-warning border-b-4 lg:text-2xl text-xl font-bold font-poppins text-white lg:w-[120px] w-[100px]'>Our Menu</h2>

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10' data-aos="fade-right">
                <div className='flex flex-col justify-center items-center lg:gap-2 sm:gap-6'>
                    <div className='flex cursor-pointer w-[300px] h-[270px]' >
                        <img src="/hot-beverages.png" alt="Hot Beverages" className='object-cover w-full h-full  overflow-hidden' />

                    </div>
                    <h4 className='font-bold text-white text-xl font-poppins'>Hot Beverages</h4>
                    <p className='text-md text-white w-[300px]'>Wide range of Steaming hot coffee to make you fresh and light.</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:gap-2 gap-4'>
                    <div className='flex cursor-pointer w-[300px] h-[300px]'>
                        <img src="/cold-beverages.png" alt="Cold Beverages" className='object-cover w-full h-full overflow-hidden ' />
                    </div>
                    <h4 className='font-bold text-white text-xl font-poppins'>Cold Beverages</h4>
                    <p className='text-md text-white w-[250px]'>Creamy and frothy cold coffee to make you cool.</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:gap-2 gap-4'>
                    <div className='flex cursor-pointer w-[300px] h-[300px]'>
                        <img src="/refreshment.png" alt="Refreshment" className='object-cover w-full h-full overflow-hidden ' />
                    </div>
                    <h4 className='font-bold text-white text-xl font-poppins'>Refreshment</h4>
                    <p className='text-md text-white w-[250px]'>Fruit and icy refreshment drink to make feel refresh</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:gap-2 gap-4'>
                    <div className='flex cursor-pointer w-[350px] h-[300px]'>
                        <img src="/special-combo.png" alt="Special Combo" className='object-cover w-full h-full overflow-hidden' />
                    </div>
                    <h4 className='font-bold text-white text-xl font-poppins'>Special Combo</h4>
                    <p className='text-md text-white w-[300px]'>A perfect blend of flavors crafted just for you – enjoy more, save more!.</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:gap-2 gap-4'>
                    <div className='flex cursor-pointer w-[300px] h-[300px]'>
                        <img src="/desserts.png" alt="Desserts" className='object-cover w-full h-full overflow-hidden' />
                    </div>
                    <h4 className='font-bold text-white text-xl font-poppins'>Desserts</h4>
                    <p className='text-md text-white w-[250px]'>Dive into decadence with our handcrafted desserts.</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <div className='flex cursor-pointer w-[350px] h-[300px]'>
                        <img src="/burger-frenchfries.png" alt="Burger Frenchfries" className='object-cover w-full h-full overflow-hidden' />
                    </div>
                    <h4 className='font-bold text-white text-xl font-poppins'>Burger Frenchfries</h4>
                    <p className='text-md text-white w-[250px]'>Bite into bold flavor, served with golden perfection.</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Menu