import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold text-blue-600 text-center mt-10'>Contact Us</h1>
        <p className='mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto'>
            We would love to hear from you! If you have any questions or feedback, please reach out to us.
        </p>
        <div className='flex justify-center mt-6'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            Get in Touch
            </button>
        </div>
      
    </div>
  )
}

export default Contact
