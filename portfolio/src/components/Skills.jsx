
import React from "react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Developing server-side applications and REST APIs.",
    skills: ["Node.js", "Express.js", "Python", "Django", "REST API"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and working with application data.",
    skills: ["MongoDB", "MySQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    description: "Tools used for development and collaboration.",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
    color: "from-orange-500 to-yellow-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080d20] px-6 py-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300">
            What I Work With
          </span>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A collection of technologies and tools I use to build
            modern, responsive, and functional web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-7 sm:grid-cols-2">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[#111a35]/70 p-7 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-900/20"
              >
                {/* Icon & Title */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`rounded-xl bg-gradient-to-br ${category.color} p-3 text-white shadow-lg`}
                  >
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/5 px-5 py-3 text-sm text-blue-300">
            <Layers size={18} />
            Always learning, always improving.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
