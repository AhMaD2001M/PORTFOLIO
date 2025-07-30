import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, shopping cart, user authentication, and payment processing.',
      image: '/proj/Screenshot 2025-07-30 163838.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://fit-forg-ecommerces-application.vercel.app/',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Consulting App ',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/proj/Screenshot 2025-07-30 164219.png',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'Framer Motion'],
      liveUrl: 'https://www.ajconsultants.online/',
      githubUrl: 'https://github.com'
    },
    {
      title: 'SmartGrade AI ',
      description: 'Modern chat interface with AI integration, featuring real-time messaging, file uploads, and intelligent response generation.',
      image: '/proj/Screenshot 2025-07-30 170015.png',
      technologies: ['React', 'Python', 'OpenAI API', 'Groq', 'gamma 2','LAMA 3.2'],
      liveUrl: 'https://lablab.ai/event/gemma-2-ai-challenge/0s-and-1s/smart-grade-ai',
      githubUrl: 'https://github.com'
    },
    {
      title: 'AI Chat Interface ANS Application',
      description: 'Modern chat interface with AI integration, featuring real-time messaging, file uploads, and intelligent response generation.',
      image: '/proj/Screenshot 2025-07-30 164602.png',
      technologies: ['React', 'Python', 'OpenAI API', 'MongoDB', 'RAAG','LAMA 3.1'],
      liveUrl: 'https://anssociety.vercel.app/',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Ayra Foundation',
      description: '',
      image: '/proj/Screenshot 2025-07-30 165226.png',
      technologies: ['React', 'AUTH', 'Express.js', 'Python', 'js'],
      liveUrl: 'https://ayra-foundation.vercel.app/index.html',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Agro AI',
      description: 'Modern chat interface with AI integration, featuring real-time messaging, file uploads, and intelligent response generation.',
      image: '/proj/Screenshot 2025-07-30 170313.png',
      technologies: ['React', 'Python', 'OpenAI API', 'MongoDB', 'RAAG','LAMA 3.1'],
      liveUrl: 'https://agroo-ai.vercel.app/?utm_source=deri.my.id&utm_medium=campaign&utm_campaign=portfolio',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Vision AI',
      description: 'Modern chat interface with AI integration, featuring real-time messaging, file uploads, and intelligent response generation.',
      image: '/proj/Screenshot 2025-07-30 170653.png',
      technologies: ['React', 'Python', 'OpenAI API', 'MongoDB', 'RAAG','LAMA 3.1'],
      liveUrl: 'https://lablab.ai/event/ibm-watsonx-challenge/0s-and-1s/myvision',
      githubUrl: 'https://github.com'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Featured Project Slider */}
        <div className="relative mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {projects[currentProject].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {projects[currentProject].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full text-white font-medium hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-gray-700 px-6 py-3 rounded-full text-white font-medium hover:bg-gray-600 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
              
              <div className="relative group">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:transform hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:transform hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 transform scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;