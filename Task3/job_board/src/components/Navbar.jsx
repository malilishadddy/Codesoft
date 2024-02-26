import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import{FaBarsStaggered, FaXmark}from "react-icons/fa6";

const Navbar = () => {
    const [ismenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!ismenuOpen)
    };
    const navItems = [
      {path:"/",title:"Search"},
      {path:"/Myjob",title:"My Job"},
      {path:"/Salary",title:"Salary"},
      {path:"/Postjob",title:"Post a job"},
    ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
            <a href="/" className='text-2xl'>Job Portal</a>
            <ul className="hidden md:flex gap-12">
              {
                navItems.map(({path,title}) => (
                  <li key={path} className="text-base">
                    <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }
                  >
                    {title}
                  </NavLink>
                  </li>
                ))
              }
            </ul>
            {/* signup and login button */}
            <div className="text-base font-medium hidden lg:block space-x-5">
              <a href="/login" className="py-2 px-5 border rounded">Login</a>
              <a href="/Signup" className="py-2 px-5 border rounded bg-blue-700 text-white">Sign Up</a>
            </div>
            {/* mobile menu */}
            <div className="md:hidden block">
               <button onClick={handleMenuToggler}>
                {
                  ismenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBarsStaggered className="w-5 h-5 "/> 
                }
                
               </button>
            </div>
        </nav>
        {/* navbar for mobile */}
        <div className={'px-4 py-5 bg-black text-white rounded-sm  ${ismenuOpen ? "" : "hidden" }'}>
          <ul>
          {
                navItems.map(({path,title}) => (
                  <li key={path} className="text-base">
                    <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }
                    >
                    {title}
                  </NavLink>
                  </li>
                ))
          }
          </ul>
        </div>
    </header>
  )
}

export default Navbar
