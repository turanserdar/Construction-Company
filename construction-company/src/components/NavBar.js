import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-6 bg-white text-black'>
      <Link to="/" className="text-xl font-bold">Four Brothers Renovation</Link>
    {/* <div className="text-xl font-bold">Four Brothers Renovation</div> */}
<div className="flex space-x-4">

    <Link to="/Projects" className="hover:underline me-4 md:me-6">Projects</Link>
    <Link to="/AboutUs" className="hover:underline me-4 md:me-6">About Us</Link>
    <Link to="/ContactUs" className="hover:underline me-4 md:me-6">Contact Us</Link>
    

</div>
    
    </div>
  );
}
