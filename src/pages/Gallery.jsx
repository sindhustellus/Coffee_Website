import React from 'react'

const Gallery = () => {
    const gallery = [
        '/gallery-1.jpg',
        '/gallery-2.jpg',
        '/gallery-3.jpg',
        '/gallery-4.jpg',
        '/gallery-5.jpg',
        '/gallery-6.jpg'
    ]
  return (
    <div>
        <div className='bg-gray-100 shadow-xl' id='gallery'>
            <div className='flex justify-center p-14'>
              <h2 className='border-warning border-b-4 lg:text-2xl text-xl font-bold font-poppins text-black lg:w-[100px] w-[80px]'>Gallery</h2>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 sm:gap-10 gap-10 lg:px-40 px-28 py-10'>
                {gallery.map((image,index) =>(
                    <div key={index} className='rounded-lg overflow-hidden cursor-pointer w-[300px] h-[200px]'>
                        <img src={image} alt="Gallery" className='w-full h-full' />
                    </div>
                ))}

            </div>
        </div>

    </div>
  )
}

export default Gallery