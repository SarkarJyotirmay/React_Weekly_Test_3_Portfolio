import React from 'react'
import { Link } from 'react-router-dom'

// icons
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <>
    <header className='h-18 px-8 flex justify-between items-center bg-[#162456d2] text-white sticky top-0'>

        <div className="left text-2xl font-bold text-indigo-600">
            <h1>Jyotirmay Sarkar</h1>
        </div>

        <div className="right">
            <span className='block min-[850px]:hidden text-xl cursor-pointer'><GiHamburgerMenu /></span>

            <ul className='hidden  min-[850px]:flex gap-6'>
            <li className=''>
                    <Link to="/" className='flex items-center gap-1'> <AiOutlineHome/>  Home</Link>
                </li>
                <li>
                    <Link to="/about" className='flex items-center gap-1'> <FaRegUser/> About</Link>
                </li>
                <li>
                    <Link to="/certificate" className='flex items-center gap-1'> <LiaCertificateSolid /> Certificate</Link>
                </li>
                <li>
                    <Link to="/projects" className='flex items-center gap-1'> <AiOutlineFundProjectionScreen/> Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className='flex items-center gap-1'> <MdContactMail /> Contact</Link>
                </li>
                <li>
                    <Link to="/more" className='flex items-center gap-1'>More...</Link>
                </li>
            </ul>
        </div>

    </header>
    </>
  )
}

export default Header