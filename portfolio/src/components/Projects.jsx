
import React from "react";
import {
  ExternalLink,
  ArrowUpRight,
  CloudSun,
  Calculator,
  MessageSquare,
  ShieldCheck,
  ShoppingBag,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "MERN E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "A full-stack e-commerce application featuring user authentication, product browsing, shopping cart, address management and order functionality.",
    icon: ShoppingBag,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/simranpanwar123/Ecommerce",
    demo: "https://ecommerce-eight-xi-55.vercel.app/",
    gradient: "from-purple-600 to-pink-500",
  },
  // {
  //   title: "JWT Authentication System",
  //   category: "Authentication",
  //   description:
  //     "A secure authentication application implementing user login, registration and token-based authentication using JWT.",
  //   icon: ShieldCheck,
  //   technologies: ["React", "Django", "JWT", "REST API"],
  //   github: "https://github.com/simranpanwar123/Fullstack-jwt-authentication",
  //   demo: "",
  //   gradient: "from-blue-600 to-cyan-500",
  // },
  {
    title: "Smart EMI Planner",
    category: "Web Application",
    description:
      "An interactive EMI calculator that helps users calculate loan installments with a clean interface, financial summaries and visual charts.",
    icon: Calculator,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Charts"],
    github: "https://github.com/simranpanwar123/EMI-Planner",
    demo: "https://emi-planner-mauve.vercel.app/",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Weather Application",
    category: "API Integration",
    description:
      "A responsive weather application that fetches weather information through an API and displays real-time weather details.",
    icon: CloudSun,
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: "https://github.com/simranpanwar123/Weather-App",
    demo: "",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Chat Application",
    category: "AI Integration",
    description:
      "An AI-powered chat interface that allows users to interact with an AI assistant through a conversational interface.",
    icon: MessageSquare,
    technologies: ["React", "Vite", "JavaScript", "Groq API"],
    github: "https://github.com/simranpanwar123/AI-Chat-APP",
    demo: "",
    gradient: "from-pink-500 to-purple-500",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080d20] px-6 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            My Recent Work
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Here are some of the projects I have built to apply my
            technical skills and solve real-world problems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111a35]/80 transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-900/20"
              >
                {/* Project Visual */}
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20" />
                  <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border border-white/20" />

                  <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition duration-500 group-hover:scale-110">
                    <Icon size={55} strokeWidth={1.5} />
                  </div>

                  <span className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-wider text-white/80">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-xl font-bold transition group-hover:text-purple-300">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-purple-400/20 bg-purple-500/5 px-2.5 py-1.5 text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-purple-400 hover:text-white"
                    >
                      <Code2 size={17} />
                      GitHub
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2.5 text-sm font-medium transition hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        Live Demo
                        <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <span className="rounded-lg border border-white/10 px-4 py-2.5 text-xs text-gray-500">
                        Demo unavailable
                      </span>
                    )}
                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-5 text-gray-400">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-7 py-3 font-medium text-purple-300 transition hover:bg-purple-500/10"
          >
            Let's Connect
            <ExternalLink size={17} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
