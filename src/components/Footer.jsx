import React from 'react'
import { Link } from "react-router-dom"
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className='px-4 py-6 bg-[#16245686] text-white flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
        
        {/* Left: Developer Credit */}
        <div className='left'>
          <h1>
            Designed and Developed by  
            <span className='text-green-400 text-lg font-semibold ml-1'>Jyotirmay</span>
          </h1>
        </div>

        {/* Middle: Copyright */}
        <div className='middle'>
          <p className='text-sm'>© 2025 JS. All rights reserved.</p>
        </div>

        {/* Right: Social Icons */}
        <div className='right flex gap-4 text-xl'>
          <Link to="/"><FaGithub /></Link>
          <Link to="/"><FaTwitter /></Link>
          <Link to="/"><CiLinkedin /></Link>
          <Link to="/"><FaInstagram /></Link>
        </div>
        
      </div>
    </>
  )
}

export default Footer
