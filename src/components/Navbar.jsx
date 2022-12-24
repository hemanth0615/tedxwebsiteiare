import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import menu2 from "../assets/menu-2.svg"
import navbg from "../assets/nav-bg.png"




function Navbar() {
  const [click, setClick] = useState(false)
  const buttonClicked = () => {
    if (click === true) {
      setClick(false)
    }
    else {
      setClick(true)
    }
  }
  return (
    <>

      <nav className='bg-[#000000] font-[poppins] relative' >
        <div className="container w-full p-4 text-white mx-auto  relative flex items-center justify-between">
          <a href="/"><img className='sm:ml-5' src={logo} alt="logo" /></a>
          <div className='hidden space-x-10 mr-6 md:flex'>
            <p className='text-lg font-medium cursor-pointer navhometext hover-overlay '  style={{color:'#fff'}}><a class="hitem_home"  href="/">Home</a></p>
            <p className='text-lg font-medium cursor-pointer hitem_about'><a href="about">About Us</a></p>
            <button className='text-lg font-medium bg-[#EC1015] px-2 py-0.5 hitem_reg'><a href="/register">Register</a></button>
          </div>
          <button className='md:hidden' onClick={buttonClicked}>
            {
              !click ? <img className='w-9/12' src={menu} alt='menu-button' /> : <img className='w-9/12' src={menu2} alt='menu-button' />
            }

            {/* <img style={{ display: click ? "block" : "hidden" }} className='w-9/12' src={menu2} alt='menu-button' /> */}

          </button>
        </div>
      </nav>
      {
        click ? <>
          <nav className='mobile-nav relative'>
            <img className='md:hidden h-16 w-full nav-bg' src={navbg} alt="" />
            <div className='flex space-x-10 mr-6 md:hidden nav-menu absolute top-4 right-3'>
              <p className='text-lg font-medium cursor-pointer navhometext' ><a href="/"><span className='text-[#FFF]'>Home</span></a></p>
              <p className='text-lg text-[#fff] font-medium cursor-pointer'><a href="about"><span className='text-[#FFF]'>About </span> Us</a></p>
              <button className='text-lg font-medium bg-[#EC1015] px-2 py-0.5 text-[#fff]'><a href="/register">Register</a></button>
            </div>
          </nav>
        </> : <></>
      }
    </>
  )
}

export default Navbar