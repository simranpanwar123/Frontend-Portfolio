import React from 'react'
import educ from '../assets/educ.jfif'
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react'

const Education = () => {

    const educationData = [
        {
            id: 1,
            degree: 'High School',
            institution: 'G. M. I. C. Sidhsaur Rudraprayag',
            year: '2022',
            
        },
        {
            id: 2,
            degree: "Higher Secondary Education (12th)",
            institution: 'G. M. I. C. Sidhsaur Rudraprayag',
            year: '2024',
            
        },
        {
            id: 3,
            degree: "Diploma in Web Development",
            institution: 'LBSTI Delhi',
            year: '2024-2026',
            
        }
    ]

    return (
        <section
            className='text-white py-20 overflow-hidden'
            id='education'
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Heading */}
                <div className="mb-16 text-center md:text-left">
                    <p className="text-white text-sm uppercase tracking-widest mb-2 font-semibold">
                        Learning Path
                    </p>

                    <h2 className='text-5xl md:text-6xl font-extrabold text-cyan-400'>
                        Education
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Image Section */}
                    <div
                        className="w-full lg:w-5/12 flex justify-center lg:justify-start"
                        data-aos='fade-right'
                    >
                        <div className="relative">

                            <div className="absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-cyan-500"></div>

                            <div className="relative z-10 w-72 h-72 md:w-96 md:h-[480px] bg-[#111a3e] rounded-2xl border border-[#1f1641] overflow-hidden">

                                <img
                                    src={educ}
                                    alt="Education"
                                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                                />

                            </div>

                            <div className="absolute -top-4 -left-4 bg-cyan-500/20 w-16 h-16 rounded-full blur-2xl"></div>

                        </div>
                    </div>

                    {/* Education Cards */}
                    <div
                        className="w-full lg:w-7/12 space-y-6"
                        data-aos='fade-left'
                    >

                        {educationData.map((edu) => (

                            <div
                                key={edu.id}
                                className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-cyan-500/50'
                            >

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">

                                    <div className='flex items-center gap-3'>

                                        <div className="p-2 bg-[#050810] rounded-lg border border-cyan-500/20 group-hover:border-cyan-500 transition-colors">

                                            <GraduationCap
                                                className='text-cyan-400'
                                                size={24}
                                            />

                                        </div>

                                        <div>
                                            <h3 className='text-lg font-bold text-white group-hover:text-cyan-400 transition-colors'>
                                                {edu.degree}
                                            </h3>

                                            <p className='text-gray-400 text-sm'>
                                                {edu.institution}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit">

                                        <Calendar
                                            size={12}
                                            className='text-cyan-400'
                                        />

                                        {edu.year}

                                    </div>

                                </div>

                                <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                                    {edu.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-400 font-bold">

                                    <CheckCircle size={14} />

                                    Completed

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Education