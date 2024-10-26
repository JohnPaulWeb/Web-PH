import React from 'react'
import Rizal from '../assets/rizal.jpg'
import { GiSelfLove } from "react-icons/gi";

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
            {/*left side ito */}
            <div className='md:w-1/2'>
            <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>José Protasio Rizal Mercado y Alonso Realonda</h1>
            <p className='text-lg mb-12 md:pr-8'>José Rizal was born on June 19, 1861 to Francisco Rizal Mercado and Teodora Alonso Realonda y Quintos in the town of Calamba in Laguna province. He had nine sisters and one brother.</p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Kabayanihan</span>
                <GiSelfLove />
              </a>
            </button>
            </div>
            {/* right side ito */}
            <div className='md:w-1/2 h-full'>
            <img src={Rizal} alt="hero image" className='w-full object-cover' />
            </div>
        </div>
    </section>
  )
}

export default Hero