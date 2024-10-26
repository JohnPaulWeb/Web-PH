import React from 'react'
import { BsFillFlagFill } from "react-icons/bs";
import review1 from '../assets/renato.jpg'
import review2 from '../assets/teodoro.webp'

const philippines = [
  {
    name: 'Renato Constantino',
    location: 'Pilipinas',
    review: 'Historian Renato Constantino, building upon sentiments noted by Agoncillo, wrote in his 1970 essay Veneration Without Understanding that Rizal was unworthy of his high status since he was a "United States-sponsored hero".',
    image: review1,
  },
  {
    name: ' Teodoro Agoncillo',
    location: 'Pilipinas',
    review: 'hat year, historian Teodoro Agoncillo wrote in his History of the Filipino People that the Philippine national hero, unlike those of other countries, was not "the leader of its liberation forces"',
    image: review2,
  },
]

const Philippines = () => {
  return (
    <div id='philippines' className='bg-[#f7f8fc] py-12'>
      <div className='container mx-auto pb-20'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>National Hero</h2>
          <p className='text-lg mb-12 md:w-1/2 mx-auto'>On November 15, 1995, the National Heroes Commission’s technical committee recommended nine Filipino historical individuals to be official national heroes.</p>
        </div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {
            philippines.map((philippines, index) => {
              <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                <BsFillFlagFill className='size-12 text-primary' />
                </div>
                <div>
                  <p className='text-lg mb-2'>{philippines.review}</p>
                  <div>
                    <img src={philippines.image} alt="reviewer image" className='size-16 rounded-full object-cover mr-4' />
                    <div>
                      <p>{philippines.name}</p>
                      <p>{philippines.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Philippines