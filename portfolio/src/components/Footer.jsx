import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mt-10 border-t border-[#33353f] text-white bg-[#0f172a]'>

      <div className='max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4'>

        {/* Logo */}
        <div className='text-center md:text-left'>
          <div className='text-2xl md:text-3xl font-extrabold cursor-pointer tracking-wide text-cyan-400'>
            Simran Panwar
          </div>

          <h3 className='text-gray-300 mt-1'>
            Full Stack Developer | Portfolio Website
          </h3>
        </div>

        {/* Social Icons */}
        <div className='flex items-center gap-5 text-2xl'>

          <a
            href='https://github.com/simranpanwar123'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400 transition duration-300'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/simran-panwar-43ba99367'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400 transition duration-300'
          >
            <FaLinkedin />
          </a>

          <a
            href='https://instagram.com/simran_panwar__'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-400 transition duration-300'
          >
            <FaInstagram />
          </a>

        </div>

        {/* Copyright */}
        <p className='text-gray-400 text-sm md:text-base text-center'>
          © 2026 Simran Panwar - All rights reserved
        </p>

      </div>

    </footer>
  )
}

export default Footer