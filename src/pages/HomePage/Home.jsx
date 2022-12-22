import React, { useState } from "react";
import "./Home.css";
import member from "../../assets/member.svg";
import Gif from "../../assets/gif.png";
import video from "../../assets/Comp 1_6.mp4";

import Navbar from "../../components/Navbar";
import theam from "../../assets/theam.png";

function Speakers(indspeaker) {
  return (
    <div class="speaker_div position-relative container-fluid">
      =
      <div class="speaker_div container">
        <div class="speaker_ind_img">
          <img
            src={indspeaker.img}
            class="speaker_ind_img img-fluid"
            alt="Responsive image"
          />
          <div class="speaker_ind_name_desc_div text-center bg-text inner">
            <div className="speaker_ind_name_div">
              <h1 class="speaker_ind_name "> {indspeaker.speakername} </h1>
            </div>
            <div className="speaker_ind_desc_div">
              <p class="speaker_ind_desc">{indspeaker.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  const [allactive, setAllActive] = useState(false);
  const [coreactive, setCoreActive] = useState(false);
  const [contentactive, setContentActive] = useState(false);
  const activeFunc = (e) => {
    if (e === "core") {
      setAllActive(false);
      setContentActive(false);
    } else if (e === "all") {
      setCoreActive(false);
      setContentActive(false);
    } else if (e === "content") {
      setAllActive(false);
      setCoreActive(false);
    }
  };
  const allFunction = () => {
    setAllActive(true);
    activeFunc("all");
  };
  const coreFunction = () => {
    setCoreActive(true);
    activeFunc("core");
  };
  const contentFunction = () => {
    setContentActive(true);
    activeFunc("content");
  };
  return (
    <>
      <Navbar />
      {/* GIF Section */}
      <div class="Gif_sec">
        <video src={video} muted autoPlay></video>
      </div>

      {/*About section */}
      <div class="Home_About_sec">
        <p class="home_ind_text">
          <span class="alphabet">A</span>bout
        </p>
        <section className="mx-4 lg:mx-9 mt-4">
          <div>
            <div className="flex flex-wrap gap-x-8 justify-start gap-y-3 team-flex md:justify-center mt-5">
              <h6
                className={allactive ? "active" : "category"}
                onClick={allFunction}
              >
                TED
              </h6>
              <h6
                className={coreactive ? "active" : "category"}
                onClick={coreFunction}
              >
                TEDx
              </h6>
              <h6
                className={contentactive ? "active" : "category"}
                onClick={contentFunction}
              >
                TEDx IARE
              </h6>
            </div>
            <div className="team-flex-border"></div>
          </div>
          <div
            style={{ display: allactive ? "" : "none" }}
            className="categoryMembers md:ml-5 mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline"
          >
            <p class="home_about_descs">
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world's leading thinkers and
              doers to speak for 18 minutes or less. Many of these talks are
              then made available, free, at TED.com. TED speakers have included
              Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
              Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan
              and Daniel Kahneman. The annual TED Conference takes place each
              spring in Vancouver, British Columbia. TED's media initiatives
              include TED.com, where new TED Talks are posted daily; TED
              Translators, which provides subtitles and interactive transcripts
              as well as translations from volunteers worldwide; the educational
              initiative TED-Ed. TED has established The Audacious Project that
              takes a collaborative approach to funding ideas with the potential
              to create change at thrilling scale; TEDx, which supports
              individuals or groups in hosting local, self- organized TED-style
              events around the world, and the TED Fellows program, helping
              world-changing innovators from around the globe to amplify the
              impact of their remarkable projects and activities.
            </p>
          </div>
          <div
            style={{ display: coreactive ? "" : "none" }}
            className="categoryMembers md:ml-5 mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline"
          >
            <p class="home_about_descs">
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized. (Subject to certain rules and regulations.)
            </p>
          </div>
          <div
            style={{ display: contentactive ? "" : "none" }}
            className="categoryMembers md:ml-5 mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-5 sm:gap-y-6 md:grid-cols-5 md:gap-y-5 xl:grid-cols-6 xl:gap-y-6 2xl:grid-cols-7 2xl:gap-x-0 2xl:gap-y-6 justify-baseline"
          >
            <p class="home_about_descs">
              Nature vs nurture? Sounds peculiar right?IARE will be hosting a
              very exciting event.TED x IARE presents you with stories of
              exceptional individuals from different walks of life that have
              contributed to society. Join us at TEDxIARE to listen to such
              thought-provoking tales. Find out how nature vs nurture has
              affected our kind.
            </p>
          </div>
        </section>
        <div className="home_about_end_desc">
          <p>“IDEAS WORTH SPREADING”</p>
        </div>
      </div>

      {/* Theme Section */}
      <section className="bg-[#000000] theam-section">
        <div className="container flex sm:items-center flex-col">
          <img
            className="sm:w-7/12 lg:mb-20 md:mb-14 sm:mb-12 mb-8 sm:pt-20 pt-10"
            src={theam}
            alt=""
          />
          <h6 className="font-bold text-[#dc2626] tracking-widest text-4xl">
            T<span className="text-[#fff]">HEME</span>
          </h6>
          <p className="font-semibold tracking-wider w-full text-[#fff]  sm:text-center leading-8 mt-2 lg:mt-10 lg:pb-20 lg:text-2xl sm:mt-5 sm:pb-8">
            What is it that defines who or what a person becomes during the time
            they have here on earth? Is it that nature that, despite all of our
            trials and tribulations, triumphs? Or is it that the pomp and
            circumstance of life prevail no matter what. Our actions define us,
            and our environment is a byproduct of our culture. One could say the
            difference between identical genetics is that of upbringing and
            nurture. We are all different; we cater to our own interests and
            give the few another problem to solve, but this piques curiosity for
            a reason; it’s human nature. We often see how one child turns out to
            be a genius while the other barely qualifies as mediocre. The most
            subtle approach to this baffling question would be to say that we
            are a blend of nature and nurture. At TEDX IARE, let's explore
            nature vs. nurture and learn to put nature and nurture in harmony to
            overcome our own limitations.
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <div className="container-fluid home_speakers_Sec ">
        <p class="home_ind_text ">
          <span class="alphabet">S</span>
          <span class="w_text">PEAKERS</span>
        </p>
        <div className="speakers_sec_div row">
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
          <div className="ind_speaker_div col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <Speakers
              img={member}
              speakername="Robert"
              desc="VISUAL ARTIST, COMPOSER &DIRECTOR"
            />
          </div>
        </div>
      </div>

      {/* Scheduled Talks  */}
      <div class="v3_211 container-fluid col-md-12 col-lg-12 -col-sm-6 col-xs-12">
        <div class="v3_212"></div>
        <h2 className="homepage_heading_scheduled">
          SCHEDULED <span style={{ color: "#EB0028" }}>TALKS</span>
        </h2>
        <div class="v3_214">
          <div class="v3_215">
            <div class="v3_216"></div>
            <div class="v3_217">
              <div class="v3_218"></div>
              <div class="v3_219"></div>
            </div>
            <div class="v3_220">
              <div class="v3_221"></div>
              <div class="v3_222"></div>
            </div>
            <div class="v3_223">
              <div class="v3_224"></div>
              <div class="v3_225"></div>
            </div>
            <div class="v3_226">
              <div class="v3_227"></div>
              <div class="v3_228"></div>
            </div>
            <div class="v3_229">
              <div class="v3_230"></div>
              <div class="v3_231"></div>
            </div>
            <div class="v3_232">
              <div class="v3_233"></div>
              <div class="v3_234"></div>
            </div>
            <div class="v3_235">
              <div class="v3_236"></div>
              <div class="v3_237"></div>
            </div>
            <div class="v3_238">
              <div class="v3_239"></div>
              <div class="v3_240"></div>
            </div>
          </div>
          <span class="v3_241">
            Why is it hard to scale up green businesses
          </span>
          <span class="v3_242">
            The World of the East:Film education & Multiperspectivity
          </span>
          <span class="v3_243">
            Why is it hard to scale up green businesses
          </span>
          <span class="v3_244">
            Why is it hard to scale up green businesses
          </span>
          <span class="v3_245">
            Why is it hard to scale up green businesses
          </span>
          <span class="v3_246">
            The World of the East:Film education & Multiperspectivity
          </span>
          <span class="v3_247">
            The World of the East:Film education & Multiperspectivity
          </span>
          <span class="v3_248">
            The World of the East:Film education & Multiperspectivity
          </span>
          <div class="v3_249">
            <span class="v3_250">Speaker 1</span>
            <span class="v3_251">Speaker 2</span>
            <span class="v3_252">Speaker 3</span>
            <span class="v3_253">Speaker 4</span>
            <span class="v3_254">Speaker 5</span>
            <span class="v3_255">Speaker 6</span>
            <span class="v3_256">Speaker 7</span>
            <span class="v3_257">Speaker 8</span>
          </div>
          <div class="v3_258">
            <span class="v3_259">9:30 am </span>
            <span class="v3_260">10:00 am </span>
            <span class="v3_261">11:00 am </span>
            <span class="v3_262">12:00 pm </span>
            <span class="v3_263">2:00 pm </span>
            <span class="v3_264">3:00 pm </span>
            <span class="v3_265">4:00 pm </span>
            <span class="v3_266">5:00 pm </span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section class="home_faq_div">
        <h2 className="homepage_heading white">
          FREQUENTLY ASKED <span style={{ color: "#EB0028" }}>QUESTIONS</span>
        </h2>
        <div className="home_faq">
          <details class="style4">
            <summary>Who are eligible for this event?</summary>
            <div class="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus
                repudiandae illo, nostrum, pariatur quae! At animi modi
                dignissimos corrupti placeat voluptatum!
              </p>
              <p>
                Facilis ducimus iure officia quos possimus quaerat iusto, quas,
                laboriosam sapiente autem ab assumenda eligendi voluptatum nisi
                eius cumque, tempore reprehenderit optio placeat praesentium non
                sint repellendus consequuntur? Nihil, soluta.
              </p>
            </div>
          </details>

          <details class="style4">
            <summary>Who are eligible for this event?</summary>
            <div class="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus
                repudiandae illo, nostrum, pariatur quae! At animi modi
                dignissimos corrupti placeat voluptatum!
              </p>
              <p>
                Facilis ducimus iure officia quos possimus quaerat iusto, quas,
                laboriosam sapiente autem ab assumenda eligendi voluptatum nisi
                eius cumque, tempore reprehenderit optio placeat praesentium non
                sint repellendus consequuntur? Nihil, soluta.
              </p>
            </div>
          </details>

          <details class="style4">
            <summary>Who are eligible for this event?</summary>
            <div class="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus
                repudiandae illo, nostrum, pariatur quae! At animi modi
                dignissimos corrupti placeat voluptatum!
              </p>
              <p>
                Facilis ducimus iure officia quos possimus quaerat iusto, quas,
                laboriosam sapiente autem ab assumenda eligendi voluptatum nisi
                eius cumque, tempore reprehenderit optio placeat praesentium non
                sint repellendus consequuntur? Nihil, soluta.
              </p>
            </div>
          </details>
          <details class="style4">
            <summary>Who are eligible for this event?</summary>
            <div class="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus
                repudiandae illo, nostrum, pariatur quae! At animi modi
                dignissimos corrupti placeat voluptatum!
              </p>
              <p>
                Facilis ducimus iure officia quos possimus quaerat iusto, quas,
                laboriosam sapiente autem ab assumenda eligendi voluptatum nisi
                eius cumque, tempore reprehenderit optio placeat praesentium non
                sint repellendus consequuntur? Nihil, soluta.
              </p>
            </div>
          </details>
          <details class="style4">
            <summary>Who are eligible for this event?</summary>
            <div class="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus
                repudiandae illo, nostrum, pariatur quae! At animi modi
                dignissimos corrupti placeat voluptatum!
              </p>
              <p>
                Facilis ducimus iure officia quos possimus quaerat iusto, quas,
                laboriosam sapiente autem ab assumenda eligendi voluptatum nisi
                eius cumque, tempore reprehenderit optio placeat praesentium non
                sint repellendus consequuntur? Nihil, soluta.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
};

export default Home;
