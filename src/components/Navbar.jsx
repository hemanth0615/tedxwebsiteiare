import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.svg"
import logowhite from "../assets/logowhite.png"
import menu from "../assets/menu.svg"
import menu2 from "../assets/menu-2.svg"
import navbg from "../assets/nav-bg.png"





function Navbar() {
  const [click, setClick] = useState(false)
  const buttonClicked = () => {
    if (click == true) {
      setClick(false)
    }
    else {
      setClick(true)
    }
  }
  console.log(click)
  return (
    <>

      <nav className='bg-[#0B0B0B] font-[poppins] relative' >
        <div className="container w-full p-4 text-white mx-auto  relative flex items-center justify-between">
          <a href="/"><img className='navlogoimg sm:ml-5 ' style={{width:"137px",height:"40px" }} src={logowhite} alt="logo" /></a>
          <div className='hidden space-x-12 mr-6 md:flex'>
            <p className='text-lg font-medium cursor-pointer navhometext' ><a href="/"><span style={{ color: 'red' }}>H</span>ome</a></p>
            <p className='text-lg font-medium cursor-pointer navabouttext' style={{color: '#EB0028'}}><a href="about">About Us</a></p>
            <button className='text-lg font-medium bg-[#EC1015] px-2 py-0'><a href="/">Register</a></button>
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
              <p className='text-lg font-medium cursor-pointer navhometext' ><a href="/"><span className='text-[#EC1015]'>Home</span></a></p>
              <p className='text-lg text-[#fff] font-medium cursor-pointer'><a href="about"><span className='text-[#EC1015]'>About </span> Us</a></p>
              <button className='text-lg font-medium bg-[#EC1015] px-2 py-0.5 text-[#fff]'><a href="/">Register</a></button>
            </div>
          </nav>
        </> : <></>
      }
    </>
  )
}

export default Navbar