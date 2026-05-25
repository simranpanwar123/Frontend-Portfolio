import React from 'react'
import { Download } from 'lucide-react'
import download from '../assets/download.jfif'

const HeroSection = () => {
  return (
    <section className='relative w-full overflow-hidden' data-aos='zoom-in-up'>

      {/* Background Blur */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">

        <div className="h-24 w-2/3 bg-gradient-to-br from-[#0c7fac] blur-2xl opacity-30"></div>

        <div className="h-20 w-2/3 bg-gradient-to-r from-[#289eff] opacity-30 blur-2xl"></div>

      </div>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-10 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">

          {/* Left Content */}
          <div className="lg:py-6">

            <div className="text-center lg:text-left">

              <h1 className='pt-4 text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight'>

                Hi, I'm{' '}

                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200'>
                  Simran Panwar
                </span>



               

              </h1>
              <h2 className='text-white font-bold text-2xl pt-7 '>Full Stack Developer</h2>

            </div>

            {/* Professional Text */}
            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto lg:mx-0 max-w-xl text-lg leading-relaxed">

              I'm dedicated to creating
              modern, responsive, and user-friendly web applications.
              I specialize in React, Django, JavaScript, and modern UI design,
              helping businesses and individuals build impactful digital experiences.

            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-10 flex-col sm:flex-row sm:w-max lg:mx-0">

              {/* Hire Me Button */}
              <a
                href="#projects"
                className='px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center items-center overflow-hidden'
              >

                <span className='absolute inset-0 rounded-full bg-cyan-400 group-hover:scale-105 transition-all duration-300'></span>

                <span className='relative flex items-center justify-center text-black font-semibold'>
                 View Projects
                </span>

              </a>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download
                className='border border-cyan-400 px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center items-center gap-2 hover:bg-cyan-400 transition-all duration-300'
              >

                <Download
                  size={18}
                  className='text-cyan-400 group-hover:text-black'
                />

                <span className='text-cyan-400 group-hover:text-black font-medium'>
                  Download Resume
                </span>

              </a>

            </div>

          </div>

          {/* Right Image */}
          <div className='lg:h-full md:flex'>

            <div className="flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative justify-center">

              {/* Glow Effect */}
              <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-r opacity-25 from-[#0c64ac] to-cyan-400 blur-2xl">
              </div>

              {/* Image */}
              <div className="absolute h-full z-10 p-2 top-1/2 -translate-y-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border border-cyan-500">

                <img
                  src={download}
                  alt="Simran"
                  width="500"
                  height="auto"
                  loading='lazy'
                  className='w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover hover:scale-105 transition-transform duration-500'
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection