import React from 'react'
import "./Footer.css"
import logo from "../../assets/bold-logo.svg"
import s1 from "../../assets/social-1.svg"
import s2 from "../../assets/social-2.svg"
import s3 from "../../assets/social-3.svg"
import s4 from "../../assets/social-4.png"


function Footer() {
  return (
    <>
      <footer>
        <div className='grid grid-cols-1 w-full h-54  pt-10 lg:px-24 xl:grid-cols-3 lg:gap-y-6 lg:grid-cols-2 lg:h-80 md:grid-cols-2 md:h-96 footer-div'>


          <div className='grid grid-cols-2 items-start space-x-20'>
            <div className='flex flex-col items-start'>

              <img src={logo} />
              <p className='text-xs w-64 ml-4 -mt-2'><span className='text-[#EB0028] font-bold'>x</span><span className='text-[#fff]  font-semibold tracking-widest'>=independently organised TED event</span></p>
              <div className='flex space-x-7 mt-4 ml-4'>
                <img src={s3} />
                <img src={s1} />
                <img src={s2} />

              </div>
            </div>
            <div>
              <p className='font-medium text-md leading-6 text-[#fff] tracking-widest w-96 overflow-hidden mt-3 md:text-sm'>TEDx IARE is a student organized TED event, with a noble intent of spreading wisdom through words.</p>
            </div>
          </div>
          <div className='xl:pl-72 lg:pl-64 md:pl-72 '>
            <h6 className='text-[#EB0028] text-md font-extrabold tracking-widest md:text-sm'>Site Map</h6>
            <div className='flex flex-col space-y-1 mt-2'>
              <p className='text-[#fff] text-md font-medium tracking-wider md:text-sm' >Home</p>
              <p className='text-[#fff] text-md font-medium tracking-wider md:text-sm' >About us</p>
              <p className='text-[#fff] text-md font-medium tracking-wider md:text-sm' >Register</p>

            </div>
          </div>
          <div className='md:pl-5'>
            <h6 className='text-[#EB0028] text-md font-extrabold tracking-widest md:text-sm '>Contact Us</h6>
            <div className='mt-2'>
              <p className='text-[#fff] font-medium text-md tracking-widest md:text-sm'>tedxiare@gmail.com</p>
              <p className='text-[#fff] font-medium text-md tracking-widest md:text-sm'>IARE, Hyderabad</p>
              <p className='main-footer-b mt-4 w-44'></p>
              <div className='flex space-x-7 mt-5 sm:hidden'>
                <img src={s3} />
                <img src={s1} />
                <img src={s2} />

              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className='mobile-footer'>
        <div className='grid grid-cols-2 px-0  sm:-space-x-52 -space-x-44 m-g mobile-f-s-1 t-g'>

          <img className='-rotate-90 mt-24 -ml-24 sm:-ml-16 mobi' src={logo} />

          <div className='mt-3 m-i'>
            <img className='hide-image w-52 -ml-5 -mb-4' src={logo} />

            <p className='font-medium sm:text-lg leading-6 text-[#fff] tracking-widest w-full overflow-hidden mt-3 m-i-i'>TEDx IARE is a student organized TED event, with a noble intent of spreading wisdom through words.</p>
            <p className='footer-border mt-4 w-96'></p>
            <div className='flex space-x-7 mt-5'>
              <img src={s4} />
              <img src={s3} />
              <img src={s1} />
              <img src={s2} />
            </div>
          </div>
        </div>
        <div className='flex mt-20 c-s'>
          <div className='ml-10'>
            <h6 className='text-[#EB0028] text-md font-extrabold tracking-widest md:text-sm '>Contact Us</h6>
            <div className='mt-2'>
              <p className='text-[#fff] font-medium text-md tracking-widest md:text-sm'>tedxiare@gmail.com</p>
              <p className='text-[#fff] font-medium text-md tracking-widest md:text-sm'>IARE, Hyderabad</p>


            </div>
          </div>
          <div className=''>
            <h6 className='text-[#EB0028] text-md font-extrabold tracking-widest md:text-sm'>Site Map</h6>
            <div className='flex flex-col space-y-1 mt-2'>
              <a href='#'><p className='text-[#fff] text-md font-medium tracking-wider md:text-sm' >Home</p></a>
              <a href="#"><p className='text-[#fff] text-md font-medium tracking-wider md:text-sm' >About us</p></a>
              <a href='#'><p className='text-[#fff] text-md font-medium tracking-wider md:text-sm' >Register</p></a>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer