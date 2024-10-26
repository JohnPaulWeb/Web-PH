import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Bayani from '../assets/jose.jpg'
import Bayani2 from '../assets/emilio.jpg'
import Bayani3 from '../assets/apolinario.jpg'
import Bayani4 from '../assets/andres.jpg'

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
        <h2 className='text-4xl font-bold font-secondary text-heroBg'>Para sa Bansa</h2>
        <p className='md:w-1/2 mx-auto'>Para sa ating bansa magtulungan at magmahalan para maging matibay at malakas ating isat isa</p>
        </div>

        {/*service category ito pre */} 
        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>
    <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
      <Tab>Jose Rizal </Tab>
      <Tab>Emilio Aguinaldo </Tab>
      <Tab>Apolinario Mabini </Tab>
      <Tab>Andres Bonifacio</Tab>
    </TabList>


    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
     <div className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
      <h3 className='text-3xl font-semibold text-primary mb-4'>Jose Rizal</h3>
      <p className='mb-8'>Jose Rizal was executed for treason on December 30, 1896, by the Spanish colonial government. His writings had helped inspire the Philippine Revolution against colonial rule.</p>
      <h4 className='text-xl font-medium text-black mb-4'>National Hero</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Philippine Revolution</li>
        <li>1890s</li>
        <li>December 30, 1896</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={Bayani} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
     <div className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
      <h3 className='text-3xl font-semibold text-primary mb-4'>Emilio Aguinaldo</h3>
      <p className='mb-8'>President of the Philippine government, decreed December 30 of every year a day of national mourning in honor of Rizal and other victims of the revolution. Henceforth, December 30 has been celebrated as Rizal Day.</p>
      <h4 className='text-xl font-medium text-black mb-4'>National Hero</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Philippine Revolution</li>
        <li>1890s</li>
        <li> December 20, 1898</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={Bayani2} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
     </div>
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
     <div className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
      <h3 className='text-3xl font-semibold text-primary mb-4'>Apolinario Mabini</h3>
      <p className='mb-8'>who was considered unregenerate.In June 1901, Act No. 137 of the Taft Commission reorganized the district of Morong into the Province of Rizal.</p>
      <h4 className='text-xl font-medium text-black mb-4'>National Hero</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Philippine Revolution</li>
        <li>1890s</li>
        <li>December 30, 1896</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={Bayani3} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
     <div className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
      <h3 className='text-3xl font-semibold text-primary mb-4'>Andres Bonifacio</h3>
      <p className='mb-8'>who was considered unregenerate.In June 1901, Act No. 137 of the Taft Commission reorganized the district of Morong into the Province of Rizal.</p>
      <h4 className='text-xl font-medium text-black mb-4'>National Hero</h4>
      <ul className='list-disc list-inside space-y-3'>
        <li>Philippine Revolution</li>
        <li>1890s</li>
        <li>December 30, 1896</li>
      </ul>
     </div>
     <div className='md:w-1/2'>
      <img src={Bayani4} alt="" className='w-full h-auto rounded-2xl object-cover'/>
     </div>
    </TabPanel>
  </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services