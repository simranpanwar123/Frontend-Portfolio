import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'

const Projects = () => {

  const projects = [
    {
      id:1,
      image: proj1,
      title: "MERN E-Commerce Website",
      description:
        "A responsive e-commerce application with product listing, cart functionality and user-friendly shopping experience.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API","Node.js","Express","MongoDB"],
      github: "https://github.com/simranpanwar123/E-commerce",
      live: "https://ecommerce-eight-xi-55.vercel.app/",
    },

    {
      id: 2,
      image: proj2,
      title: "Weather App",
      description:
        "A weather app that provides real-time weather information for any location. It features a clean UI and displays current weather conditions, forecasts, humidity, and wind speed.",
      tech: ['JavaScript', 'HTML', 'CSS', 'APIs'],
      github: "https://github.com/simranpanwar123/Weather-App",
      live: "https://weather-app-nine-sooty-55.vercel.app/"
    },
    {
      id: 3,
      image: proj3,
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built using React and Tailwind CSS with animations and smooth scrolling sections.",
      tech: ['React', 'Tailwind', 'AOS'],
      github: "https://github.com/simranpanwar123/My-Portfolio",
      live: "https://my-portfolio-njjp.vercel.app/"
    },

    {
      id: 4,
      image: proj4,
      title: "Smart EMI Planner",
      description:
        "A smart EMI planner app that helps users calculate and manage their loan emis efficiently.",
      tech: ['React', 'Vite', 'CSS'],
      github: "https://github.com/simranpanwar123/EMI-Planner",
      live: "https://emi-planner-mauve.vercel.app/"
    }
  ]

  return (
    <section
      className='text-white py-20 relative overflow-hidden'
      id='projects'
    >

      <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>

        {/* Heading */}
        <div className='text-center mb-16' data-aos='fade-up'>

          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
            My <span className='text-cyan-400'>Projects</span>
          </h2>

          <p className='text-gray-400 max-w-2xl mx-auto'>
            Here are some of my recent projects built using modern
            technologies like React, Django, MongoDB, and Tailwind CSS.
          </p>

        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

          {projects.map((project) => (

            <div
              key={project.id}
              className='bg-[#111827]/40 border border-[#1f2937] rounded-2xl overflow-hidden shadow-lg hover:border-cyan-400 transition-all duration-300 group'
              data-aos='zoom-in'
            >

              {/* Image */}
              <div className='overflow-hidden'>

                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500'
                />

              </div>

              {/* Content */}
              <div className='p-6'>

                <h3 className='text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
                  {project.title}
                </h3>

                <p className='text-gray-400 leading-relaxed mb-5'>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-3 mb-6'>

                  {project.tech.map((tech, index) => (

                    <span
                      key={index}
                      className='px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className='flex gap-4'>

                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-5 py-2 rounded-lg bg-[#1e293b] hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium'
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ml-auto px-5 py-2  rounded-lg border bg-cyan-400 text-black hover:bg-[#1e293b] hover:text-white transition-all duration-300 font-medium'
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects