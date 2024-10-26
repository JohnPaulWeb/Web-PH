import React from 'react'

const Working = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img '>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'></div>
      <div className='relative container mx-auto px-4 py-20'>
        <div className='text-white text-center mb-20'>
          <h2 className='text-4xl font-bold font-secondary mb-4'>Lumaban sa Buhay</h2>
          <p className='text-lg md:w-1/2 w-full mx-auto'>In 1995 the Philippine National Heroes Committee officially recommended several people for the designation, but this was not acted upon. As of 2023, no one had ever been officially recognized as a Philippine national hero.</p>
        </div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center'>Katatagan</div>
            <h3 className='text-lg font-medium mt-8'>Pilipino</h3>
            <p className='my-2'>The reformist writer Jose Rizal, today considered as the quintessential national hero, has never been explicitly proclaimed as such by the Philippine government.[2] Besides Jose Rizal, the only other Filipino currently given implied recognition as a national hero is Andrés Bonifacio,</p>
          </div>
          <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white size-14 rounded-full flex items-center justify-center'>Kabayanihan</div>
            <h3 className='text-lg font-medium mt-8'>Katapatan</h3>
            <p className='my-2'>Those who define and contribute to a system or life of freedom and order for a nation. Heroes are those who make the nation's constitution and laws.</p>
          </div>
          <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-950 text-white size-14 rounded-full flex items-center justify-center'>Kaayusan</div>
            <h3 className='text-lg font-medium mt-8'>Pagmamahalan</h3>
            <p className='my-2'>A hero is part of the people's expression. But the process of a people's internalization of a hero's life and works takes time, with the youth forming a part of the internalization.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Working