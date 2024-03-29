import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-6 bg-white text-black'>
    <div className="text-xl font-bold">Four Brothers Renovation</div>
<div className="flex space-x-4">
<div className='mr-4'>Projects</div>
    <div className='mr-4'>About Us</div>
    <div className='ml-auto mr-4'>Contact Us</div>

</div>
    
    </div>
  );
}
