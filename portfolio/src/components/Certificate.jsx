import React from 'react'
import {
  Award,
  ShieldCheck,
  Calendar,
  ExternalLink
} from 'lucide-react'

const Certificate = () => {

  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      institution: 'Coursera',
      date: 'June 2023',
      link: 'https://example.com',
      desc: 'Completed a professional full stack web development course.'
    },
    {
      id: 2,
      title: 'Data Science',
      institution: 'edX',
      date: 'March 2023',
      link: 'https://example.com',
      desc: 'Learned data analysis, visualization, and machine learning.'
    },
    {
      id: 3,
      title: 'Machine Learning',
      institution: 'Udacity',
      date: 'January 2023',
      link: 'https://example.com',
      desc: 'Built ML models and worked on AI concepts.'
    }
  ]

  return (

    <section className='text-white py-20' id='certificate'>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="mb-16">

          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2 font-semibold">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Certifications
          </h2>

        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert) => (

            <div
              key={cert.id}
              data-aos='zoom-in'
              className='group relative bg-[#111a3e] border border-[#1f2641] p-6 rounded-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'
            >

              {/* Icon */}
              <div className="absolute -top-4 -right-4 bg-cyan-500 p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">

                <Award className='text-white' size={24} />

              </div>

              {/* Top Info */}
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-400 flex-wrap">

                <span className='flex items-center gap-1'>

                  <ShieldCheck
                    size={14}
                    className='text-cyan-400'
                  />

                  {cert.institution}

                </span>

                <span className='flex items-center gap-1'>

                  <Calendar
                    size={14}
                    className='text-cyan-400'
                  />

                  {cert.date}

                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">

                {cert.title}

              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">

                {cert.desc}

              </p>

              {/* Link */}
              <a
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 font-medium text-cyan-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1'
              >

                View Certificate

                <ExternalLink
                  size={14}
                  className='inline-block'
                />

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certificate