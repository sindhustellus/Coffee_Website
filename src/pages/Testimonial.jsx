import React from 'react'
const Testimonial = () => {
    const client = [
        {
            img: '/user-4.jpg',
            name: 'James Alan',
            description: 'I had a great experience. The service was quick and friendly!'
        },
         {
            img: '/user-2.jpg',
            name: 'David Smith',
            description: 'Very satisfied with the quality. Highly recommended!'
        },
         {
            img: '/user-3.jpg',
            name: 'James Wilson',
            description: 'User-friendly website and smooth ordering process.'
        }
    ]
  return (
    <div>
      <div id='testimonial'>
        <div className='flex justify-center p-10'>
            <h2 className='border-warning border-b-4 lg:text-2xl text-xl font-bold font-poppins text-black lg:w-[150px] w-[130px]'>Testimonial</h2>

        </div>
        <div className='flex lg:flex-row flex-col justify-between items-center py-10 px-4 gap-6'>
          {client.map((user,index) =>(
            <div className='flex flex-col justify-center lg:gap-4 gap-2 lg:px-20 ' key={index}>
                <div className='rounded-full w-[140px] h-[140px] cursor-pointer overflow-hidden flex'>
                    <img src={user.img} alt="User1"  className='object-cover w-full h-full'/>

                </div>
                <p className='lg:text-2xl text-xl font-bold font-poppins text-gray-800 '>{user.name}</p>
                <p className=' text-md font-poppins text-gray-500 w-[400px]'>{user.description}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Testimonial