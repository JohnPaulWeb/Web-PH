import React from 'react'

const packages = [
  {
    name: 'Renato Constantino',
    description: 'Historian Renato Constantino, building upon sentiments noted by Agoncillo, wrote in his 1970 essay Veneration Without Understanding that Rizal was unworthy of his high status since he was a "United States-sponsored hero".',
    features: [
      'The hero is a part of the national consciousness.',
      'Heroes consider the future, particularly future generations.',
      'The selection of heroes involves the complete process that led to the creation of a hero.',
    ],
  },
  {
    name: ' Fidel V. Ramos',
    description: 'he National Heroes Committee was tasked to study, evaluate and recommend Filipino national heroes to recognize their heroic character and remarkable achievements for the country.',
    features: [
      'They define and contribute to a nation’s freedom and order.',
      'Heroes are people who have a sense of nation and strive for the country’s liberation.',
      'Heroes are people who have a sense of nation and strive for the country’s liberation.',
    ],
  },
  {
    name: 'Fidel V. Ramos',
    description: 'ormed the National Heroes Committee on March 28, 1993, under Executive Order No. 75, titled "Creating the National Heroes Committee Under the Office of the President".',
    features: [
      'National Heroes Day, the last Monday in August, is observed as a regular',
      'Although there are no laws that declare a Filipino a national hero,',
      'factors that determine whether a historical figure meets the criteria.',
    ],
  },
]

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('');
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className='bg-[#f7f8fc] pt-32' id='pricing'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>Philippine Independence</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>Inspired by his vision of a free and independent Philippines, Rizal’s writings sparked a sense of awakening among Filipinos and fueled the desire for national liberation. His call for reform and his bravery in standing up against Spanish oppression inspired countless Filipino revolutionaries to take action.</p>
        </div>

        {/* laman ng codes pre */}
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 mb-12'>
        {
          packages.map((pkg, index) => (
            <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
              <hr className='w-24 border text-primary border-primary' />
              <p className='text-lg mb-4'>{pkg.description}</p>
              <ul className='list-disc list-inside space-y-2 mb-6'>
                {
                  pkg.features.map((features, idx) => (
                    <li key={idx} >{features}</li>
                  ))
                }
              </ul>
              <button onClick={handleScrollToContact} className='bg-purple-600 text-white px-4 rounded'>Katapatan</button>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Pricing