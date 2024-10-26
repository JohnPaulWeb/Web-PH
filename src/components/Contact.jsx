import React from 'react'
import { FaUserSecret } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
        {/* left side */}
        <div className='space-y-8'>
          <h2 className='text-4x1 font-bold font-secondary mb-4 text-white text-center'>Tawagan mo kami</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
              <FaUserSecret className='text-primary cursor-pointer items-center' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Nandito kami</h3>
                <p></p>
              </div>
              <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
              <FaTrophy className='text-purple-600 cursor-pointer items-center' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Para sa bayan</h3>
                <p></p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
              <FaStreetView className='text-purple-600 cursor-pointer' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Pilipino</h3>
                <p></p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
              <FaUserSecret className='text-primary cursor-pointer' />
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Katipunan</h3>
                <p></p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact