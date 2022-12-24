import React, { useState } from 'react'
import TedText from "../../assets/ted-text.svg"
import member from "../../assets/member.svg"
import pastevent from "../../assets/past-event.svg"
import desktop from "../../assets/desktop-image.svg"
import mobile from "../../assets/Frame20.svg"
import theam from "../../assets/themeimage.svg"
import prev from "../../assets/prev.svg"
import next from "../../assets/next.svg"




import "./About.css"
import Navbar from '../../components/Navbar'
import { useEffect } from 'react'
function About() {
  const domains = ["All", "Core", "Content", "Design", "CR/PR", "Digital Marketing", "Logistics", "Marketing", "Web"]
  const [active, setActive] = useState(0)
  const increament = () => setActive(active + 1)
  const decreament = () => setActive(active - 1)
  const checkActive = (e) => {
    setActive(e)
  }
  const prevButton = () => {
    if (active > 0) {
      decreament()
    }
  }
  const nextButton = () => {
    if (active < domains.length - 1) {
      increament()

    }
  }
  useEffect(() => {
    console.log(active)
  }, [active])

  return (
    <>
      <Navbar />

      <img className='desktop-image hidden md:block' src={desktop} alt="" />
      <img className='mobile-image block md:hidden' src={mobile} alt="" />

      <div className='container mx-auto mt-7'>
        <section className='space-x-2 sm:mx-2 space-y-3 mb-10'>
          <span className='ml-2 text-2xl text-black  font-bold tracking-wide md:text-3xl'>What is<span className='text-2xl text-[#dc2626] font-bold md:text-3xl'> TED?</span></span>
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. Follow TED on Twitter <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a> or on Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a> 
          </p>
          <br />
          <span className='ml-2 text-2xl text-black font-bold tracking-wide md:text-3xl'>What is<span className='text-2xl text-[#dc2626] font-bold md:text-3xl'> TEDx?</span></span>
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
          </p> 
          <img className='w-24 md:w-40' src={TedText} alt="TedX" />
          <p className='font-medium tracking-wide text-md md:text-lg text-[#000000]'>Organised by curious individuals from the local community, TEDxAmsterdam features live speakers who seek to spark deep conversations and connections. TEDxAmsterdam is organised independently under license from TED.
          </p>
        </section>
      </div>

      <section className='home_theme_section w-100 '>
        <div className='container flex sm:items-center flex-col w-100'>
          <h6 className='home_theme_heading text-center font-bold text-[#dc2626] tracking-widest text-4xl'>T<span className='text-[#fff]'>HEME</span></h6>
          <img className='sm:w-7/12 pt-4' src={theam} alt="" />
          <p className='home_theme_desc font-semibold tracking-wider w-full text-[#fff]  sm:text-center leading-8 mt-2 lg:mt-10 lg:pb-20 lg:text-2xl sm:mt-5 sm:pb-8'>What is it that defines who or what a person becomes during the time they have here on earth? Is it that nature that, despite all of our trials and tribulations, triumphs? Or is it that the pomp and circumstance of life prevail no matter what. Our actions define us, and our environment is a byproduct of our culture. One could say the difference between identical genetics is that of upbringing and nurture. We are all different; we cater to our own interests and give the few another problem to solve, but this piques curiosity for a reason; it’s human nature. We often see how one child turns out to be a genius while the other barely qualifies as mediocre. The most subtle approach to this baffling question would be to say that we are a blend of nature and nurture.
          <br />
          <br />
          At TEDX IARE, let's explore nature vs. nurture and learn to put nature and nurture in harmony to overcome our own limitations.
          </p>
        </div>
      </section>
      <section className='px-3 lg:mx-9'>
        <h2 className='md:text-3xl text-center about_mot'>MEET OUR <span className='text-[#dc2626]'>TEAM</span></h2>
        <div>
          <div className='flex justify-start gap-y-3 team-flex md:justify-center mt-3 overflow-scroll'>
            {
              domains.map((e, index) => {
                return <>
                  <h6 onClick={() => checkActive(index)} className={active === index ? "active tracking-wider text-xs md:text-xl" : "category tracking-wider text-xs md:text-xl"}>{e}</h6>

                </>
              })
            }
          </div>
          <div className='flex justify-between mt-3 md:hidden'>
            <button><img src={prev} onClick={prevButton} /></button>
            <button><img src={next} onClick={nextButton} /></button>

          </div>
        </div>
        <div style={{ display: active === 0 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4  xs:grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
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
        <div style={{ display: active === 1 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
          <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />

        </div>
        <div style={{ display: active === 2 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
          <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />

        </div>
        <div style={{ display: active === 3 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
          <img className='w-60% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />
          <img className='w-50% h-28 md:w-80% lg:h-52' src={member} alt="" />

        </div>
        <div style={{ display: active === 4 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
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
        <div style={{ display: active === 5 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
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
        <div style={{ display: active === 6 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
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
        <div style={{ display: active === 7 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
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
        <div style={{ display: active === 8 ? "" : "none" }} className='categoryMembers md:ml-5 mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline'>
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
      <div className='container mx-auto mt-7'>
        <section className='my-14 flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold md:text-3xl text-center pb-3'>MEET US <span className='text-[#dc2626]'>HERE</span></h2>
          <iframe className='w-11/12 map mt-5 sm:w-10/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.059126454807!2d78.41553661408612!3d17.599926987951605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecfe1af26dd%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1669179277990!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </>
  )
}

export default About