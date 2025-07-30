import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'DevOps', 'AI / ML'];

  const allSkills = [
    { name: 'Next.js', logo: '/logos/nextjs-logo.png', category: 'Frontend' },
    { name: 'Node.js', logo: '/logos/nodejs-logo.png', category: 'Backend' },
    { name: 'MongoDB', logo: '/logos/mongodb-logo.png', category: 'Backend' },
    { name: 'Vercel', logo: '/logos/vercel-logo.png', category: 'DevOps' },
    { name: 'Express.js', logo: '/logos/express-logo.png', category: 'Backend' },
    { name: 'C#', logo: '/logos/csharp-logo.png', category: 'Backend' },
    { name: 'Flask', logo: '/logos/flask-logo.png', category: 'Backend' },
    { name: 'Supabase', logo: '/logos/supabase-logo.png', category: 'Backend' },
    { name: 'Python', logo: '/logos/python-logo.png', category: 'Backend' },
    { name: 'JavaScript', logo: '/logos/javascript-logo.png', category: 'Frontend' },
    { name: 'React', logo: '/logos/react-logo.png', category: 'Frontend' },
    { name: 'Svelte', logo: '/logos/svelte-logo.png', category: 'Frontend' },
    { name: 'TypeScript', logo: '/logos/typescript-logo.png', category: 'Frontend' },
    { name: 'OpenAI', logo: '/logos/openai-logo.png', category: 'AI / ML' },
    { name: 'LangChain', logo: '/logos/langchain-logo.png', category: 'AI / ML' },
    { name: 'Dapr', logo: '/logos/dapr-logo.png', category: 'Backend' },
    { name: 'Azure', logo: '/logos/azure-logo.png', category: 'DevOps' },
    { name: 'Docker', logo: '/logos/docker-logo.png', category: 'DevOps' },
    { name: 'Google Cloud', logo: '/logos/gcp-logo.png', category: 'DevOps' }
  ];

  const filteredSkills = activeFilter === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Constantly evolving skillset focused on modern web technologies and best practices
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-800/30 rounded-full p-2 backdrop-blur-sm border border-gray-700/50">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-6 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 bg-gray-800/30 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700/50 hover:border-purple-500/50"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center group-hover:transform group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-white font-medium text-sm text-center group-hover:text-purple-200 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/30 rounded-full px-8 py-4 backdrop-blur-sm border border-gray-700/50">
            <span className="text-gray-400 font-medium">
              Continuously learning and expanding my technical expertise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;