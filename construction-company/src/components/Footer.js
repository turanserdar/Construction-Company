import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
  
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <h1 className="ml-5" >Four Brothers <br/> Design Renovation Construction</h1>
      
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <Link to="/Projects" className="hover:underline me-4 md:me-6">Projects</Link>
                </li>
                
                <li>
            <Link to="/AboutUs" className="hover:underline me-4 md:me-6">About Us</Link>
          </li>
                
                <li>
                <Link to="/ContactUs" className="hover:underline me-4 md:me-6">Contact Us</Link>
                </li>
                
            </ul>
        </div>
         
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  class="hover:underline">FourBrothers™</a>. All Rights Reserved.</span>
    </div>
  );
};

