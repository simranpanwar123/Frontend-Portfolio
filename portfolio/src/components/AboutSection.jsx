import React from 'react'
import about from '../assets/about.jfif'

const AboutSection = () => {
  return (
    <section
      className='text-white mt-20 relative overflow-hidden'
      id='about'
    >

      <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>

        {/* Left Side */}
        <div
          data-aos='fade-right'
          className='order-1'
        >

          <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6 text-center md:text-left'>
            More <span className='text-cyan-400 '>About</span> Me
          </h2>

          <h4 className='text-cyan-400 font-bold text-3xl md:text-4xl lg:text-5xl pt-6 mb-6 text-center md:text-left'>
            Hi, I'm Simran Panwar 
          </h4>

          {/* About Text */}
          <p className='text-gray-300 text-base lg:text-lg  mb-10 leading-relaxed pt-5 text-justify text-center md:text-left'>

            I'm a passionate{' '}
            <span className='text-cyan-400 font-bold'>
              Full Stack Developer
            </span>{' '}
            dedicated to building modern, responsive, and user-friendly
            web applications. I enjoy turning creative ideas into real-world
            digital experiences using technologies like React, Django,
            JavaScript, and Tailwind CSS.

            <br /><br />

            My focus is on creating clean UI designs, smooth user experiences,
            and high-performance applications that solve real problems.
            I love learning new technologies, improving my coding skills,
            and working on innovative projects that help me grow as a developer.

            <br /><br />

            I’m always excited to collaborate, explore new opportunities,
            and create impactful web solutions that make a difference.

          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4'>

            {/* Hire Me Button */}
            <a
              href='#projects'
              className='px-7 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 text-center md:w-50'
            >
               View Projects
            </a>

           

          </div>

        </div>

        {/* Right Side Image */}
        <div
          className='mt-10 md:mt-0 flex justify-center lg:justify-end order-2'
          data-aos='fade-left'
        >

          <div className='relative w-64 h-64 md:w-96 md:h-96'>

            {/* Border Effect */}
            <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-cyan-400 translate-x-4 translate-y-4'>
            </div>

            {/* Image */}
            <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>

              <img
                src={about}
                alt='About Simran'
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection