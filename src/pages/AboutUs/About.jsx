import React, { useState } from 'react'
import TedText from "../../assets/ted-text.svg"
import member from "../../assets/member.svg"
import pastevent from "../../assets/past-event.svg"
import desktop from "../../assets/desktop-image.svg"
import mobile from "../../assets/mobile-image.svg"
import theam from "../../assets/theam.png"


import "./About.css"
import Navbar from '../../components/Navbar'
function About() {
  const [allactive, setAllActive] = useState(true)
  const [coreactive, setCoreActive] = useState(false)
  const [contentactive, setContentActive] = useState(false)
  const [designactive, setDesignActive] = useState(false)
  const [crpractive, setCrprActive] = useState(false)
  const [digitalactive, setDigitalActive] = useState(false)
  const [logisactive, setLogisActive] = useState(false)
  const [webactive, setWebActive] = useState(false)
  const [markactive, setMarkActive] = useState(false)

  const activeFunc = (e) => {
    if (e === "core") {
      setAllActive(false)
      setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "all") {
      setCoreActive(false)
      setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "design") {
      setAllActive(false)
      setCoreActive(false)
      // setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "content") {
      setAllActive(false)
      setCoreActive(false)
      setDesignActive(false)
      setCrprActive(false)
      // setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "crpr") {
      setAllActive(false)
      setCoreActive(false)
      setDesignActive(false)
      setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "digital") {
      setAllActive(false)
      setCoreActive(false)
      setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      // setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "marketing") {
      setAllActive(false)
      setCoreActive(false)
      setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      setDigitalActive(false)
      // setMarkActive(false)
      setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "logistics") {
      setAllActive(false)
      setCoreActive(false)
      setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      // setLogisActive(false)
      setWebActive(false)
    }
    else if (e === "web") {
      setAllActive(false)
      setCoreActive(false)
      setDesignActive(false)
      setCrprActive(false)
      setContentActive(false)
      setDigitalActive(false)
      setMarkActive(false)
      setLogisActive(false)
      // setWebActive(false)
    }
  }
  const allFunction = () => {
    setAllActive(true)
    activeFunc("all");
  }
  const coreFunction = () => {
    setCoreActive(true)
    activeFunc("core");
  }
  const contentFunction = () => {
    setContentActive(true)
    activeFunc("content");
  }
  const designFunction = () => {
    setDesignActive(true)
    activeFunc("design");
  }
  const crprFunction = () => {
    setCrprActive(true)
    activeFunc("crpr");
  }
  const digitalFunction = () => {
    setDigitalActive(true)
    activeFunc("digital");
  }
  const markFunction = () => {
    setMarkActive(true)
    activeFunc("marketing");
  }
  const webFunction = () => {
    setWebActive(true)
    activeFunc("web");
  }
  const logisFunction = () => {
    setLogisActive(true)
    activeFunc("logistics");
  }

  return (
    <>
      <Navbar />

      <img className='desktop-image hidden md:block' src={desktop} alt="" />
      <img className='mobile-image block md:hidden' src={mobile} alt="" />

      <div className='container mx-auto mt-7'>
        <section className='space-x-2 sm:mx-2 space-y-3 mb-10'>
          <span className='ml-2 text-2xl text-black  font-bold tracking-wide md:text-3xl'>What is<span className='text-2xl text-[#dc2626] font-bold md:text-3xl'> TED?</span></span>
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
          </p>
          <img className='w-24 md:w-40' src={TedText} alt="TedX" />
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>Organised by curious individuals from the local community, TEDxAmsterdam features live speakers who seek to spark deep conversations and connections. TEDxAmsterdam is organised independently under license from TED.
          </p>
        </section>
      </div>

      <section className='bg-[#000000] theam-section'>
        <div className='container flex sm:items-center flex-col'>

          <img className='sm:w-7/12 lg:mb-20 md:mb-14 sm:mb-12 mb-8 sm:pt-20 pt-10' src={theam} alt="" />
          <h6 className='font-bold text-[#dc2626] tracking-widest text-4xl'>T<span className='text-[#fff]'>HEME</span></h6>
          <p className='font-semibold tracking-wider w-full text-[#fff]  sm:text-center leading-8 mt-2 lg:mt-10 lg:pb-20 lg:text-2xl sm:mt-5 sm:pb-8'>Organised by curious individuals from the local community, TEDxAmsterdam features live speakers who seek to spark deep conversations and connections. TEDxAmsterdam is organised independently under license from TED.
          </p>
        </div>
      </section>
      <div className='container mx-auto mt-7'>
        <section className='mx-4 lg:mx-9 mt-4'>
          <h2 className='text-2xl font-bold md:text-3xl text-center pb-3 '>MEET OUR <span className='text-[#dc2626]'>TEAM</span></h2>
          <div>
            <div className='flex flex-wrap gap-x-8 justify-start gap-y-3 team-flex md:justify-center mt-5'>
              <h6 className={allactive ? "active" : "category"} onClick={allFunction}>All</h6>
              <h6 className={coreactive ? "active" : "category"} onClick={coreFunction}>Core</h6>
              <h6 className={contentactive ? "active" : "category"} onClick={contentFunction}>Content</h6>
              <h6 className={designactive ? "active" : "category"} onClick={designFunction}>Design</h6>
              <h6 className={crpractive ? "active" : "category"} onClick={crprFunction}>CR/PR</h6>
              <h6 className={digitalactive ? "active" : "category"} onClick={digitalFunction}>Digital Marketing</h6>
              <h6 className={logisactive ? "active" : "category"} onClick={logisFunction}>Logistics</h6>
              <h6 className={markactive ? "active" : "category"} onClick={markFunction}>Marketing</h6>
              <h6 className={webactive ? "active" : "category"} onClick={webFunction}>Web</h6>
            </div>
            <div className='team-flex-border'></div>
          </div>
          <div style={{ display: allactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4  xs:grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          </div>
          <div style={{ display: coreactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />

          </div>
          <div style={{ display: designactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />

          </div>
          <div style={{ display: contentactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />

          </div>
          <div style={{ display: crpractive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          </div>
          <div style={{ display: logisactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          </div>
          <div style={{ display: digitalactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          </div>
          <div style={{ display: webactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          </div>
          <div style={{ display: markactive ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
            <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
            <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          </div>
        </section>
        <section className='my-14 flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold md:text-3xl text-center pb-3'>MEET US <span className='text-[#dc2626]'>HERE</span></h2>
          <iframe className='w-11/12 map mt-5 sm:w-10/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.059126454807!2d78.41553661408612!3d17.599926987951605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecfe1af26dd%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1669179277990!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </>
  )
}

export default About