import React from 'react'

const Projects = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold text-blue-600 text-center mt-10'>Projects</h1>
        <p className='mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto'>
            Explore our projects that showcase the capabilities of Rentify Admin. Each project is designed to enhance your rental management experience.
        </p>
        <div className='flex justify-center mt-6'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            View Projects
            </button>
        </div>
      
    </div>
  )
}

export default Projects
