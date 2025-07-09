import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-blue-600'>Welcome to Rentify Admin</h1>
      <p className='mt-4 text-lg text-gray-700'>Your dashboard for managing rentals</p>
      <button className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
        Get Started
      </button>
    </div>
  )
}


