import React, { useState } from "react";
import profile from "../assets/pilipino.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import myVideo from "../assets/giovs.mp4";
import { IoPlaySkipForward } from "react-icons/io5";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side ito pre */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div>
                <img
                  src={profile}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 trasform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <FaRegCirclePlay className="size-12 text-white" />
                </button>
              </div>
            ) : null}
          </div>

          {/* right side ito pre*/}
          <div className="md:w-1/2 w-full">
          <h2 className='text-4xl capitalize font-secondary font-bold mb-4 leading-snug'>Philippines National Hero</h2>
            <p className='text-lg mb-12 md:pr-8'>A national hero of the Philippines is a Filipino who has been recognized as a national hero for their role in the history of the Philippines. Loosely, the term may refer to all historical figures recognized as heroes, but the term more strictly refers to those officially designated as such.</p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Philippines</span>
                <IoPlaySkipForward />
              </a>
            </button>
          </div>
        </div>

        {isVideoPlaying && (
          <div>
            <video width="600" controls>
              <source src="giovs.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <iframe width={560} height={315} src="https://www.youtube.com/watch?v=vdNOmKphK-M" 
              title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
               encrypted-media gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-lg'>

              </iframe> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
