import React from 'react'
import {
  Cpu,
  Layers,
  Layout,
  Terminal,
  Database,
  Globe,
  Server,
  Code2
} from 'lucide-react'

const Experience = () => {

  const skills = [
    {
      id: 1,
      name: "HTML & CSS",
      width: "95%",
      icon: Layout
    },
    {
      id: 2,
      name: "JavaScript",
      width: "85%",
      icon: Terminal
    },
    {
      id: 3,
      name: "React JS",
      width: "78%",
      icon: Cpu
    },
    {
      id: 4,
      name: "Bootstrap",
      width: "92%",
      icon: Globe
    },
    {
      id: 5,
      name: "Python",
      width: "90%",
      icon: Code2
    },
    {
      id: 6,
      name: "MongoDB",
      width: "82%",
      icon: Database
    },
    {
      id: 7,
      name: "PHP",
      width: "75%",
      icon: Server
      
    },
    {
      id: 8,
      name: "Django",
      width: "78%",
      icon: Server
    },
    {
      id: 9,
      name: "SQL",
      width: "84%",
      icon: Database
    },
    {
      id: 10,
      name: "Git & GitHub",
      width: "88%",
      icon: Layers
    }
  ]

  return (
    <section
      className='text-white py-20 relative overflow-hidden'
      id='skills'
    >

      <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>

        <div data-aos='fade-right'>

          <h2 className='text-4xl md:text-5xl font-extrabold mb-14 text-center'>
            Technical <span className='text-cyan-400'>Skills</span>
          </h2>

          {/* Grid 2 Columns */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

            {skills.map((skill) => {

              const SkillIcon = skill.icon

              return (
                <div
                  key={skill.id}
                  className='group bg-[#111827]/40 border border-[#1f2937] rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 shadow-lg'
                >

                  <div className='flex items-center justify-between mb-4'>

                    <div className='flex items-center gap-4'>

                      <div className='p-3 bg-[#111a3e] rounded-xl group-hover:bg-cyan-400 transition-all duration-300'>

                        <SkillIcon
                          className='text-cyan-400 group-hover:text-white transition-colors duration-300'
                          size={24}
                        />

                      </div>

                      <span className='text-lg font-semibold tracking-wide'>
                        {skill.name}
                      </span>

                    </div>

                    <span className='text-cyan-400 font-bold text-sm'>
                      {skill.width}
                    </span>

                  </div>

                  {/* Progress Bar */}
                  <div className='w-full h-3 bg-[#1e293b] rounded-full overflow-hidden'>

                    <div
                      className='h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_15px_#06b6d4] transition-all duration-700'
                      style={{ width: skill.width }}
                    >
                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience