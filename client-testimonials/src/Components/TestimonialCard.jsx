import React from 'react'

const TestimonialCard = ({name, description, image}) => {

  return (
    <div className=' w-xl p-20 m-5 bg-white  overflow-hidden h-auto
    border border-black rounded-xl shadow-md hover:shadow-blue-100   hover:scale-105 transition-all ease-in '>
      <img src={image} alt={image} className='w-3/5 h-auto '/>
      <h2 className='text-3xl font-medium mb-3 '  >Name: {name}</h2>
      <h3 className='text-xl font-light ' >Review: {description}</h3>
    </div>
  )
}

export default TestimonialCard
