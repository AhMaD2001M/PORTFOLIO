import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Backend', 'DevOps', 'AI / ML'];

  const allSkills = [
    { name: 'Next.js', logo: '/technologyStack/next-js.webp', category: 'Frontend' },
    { name: 'Node.js', logo: '/technologyStack/node.webp', category: 'Backend' },
    { name: 'MongoDB', logo: '/technologyStack/mongo.webp', category: 'Backend' },
    { name: 'Vercel', logo: '/technologyStack/vercel.webp', category: 'DevOps' },
    { name: 'Express.js', logo: '/technologyStack/express-js.webp', category: 'Backend' },
    { name: 'Flask', logo: '/technologyStack/flask.webp', category: 'Backend' },
    { name: 'Supabase', logo: '/technologyStack/supabase.png', category: 'Backend' },
    { name: 'Python', logo: '/technologyStack/python.webp', category: 'Backend' },
    { name: 'JavaScript', logo: '/technologyStack/javascript.webp', category: 'Frontend' },
    { name: 'React', logo: '/technologyStack/react-js.webp', category: 'Frontend' },
    { name: 'TypeScript', logo: '/technologyStack/typescript.webp', category: 'Frontend' },
    { name: 'OpenAI', logo: '/technologyStack/openaisdk.jpeg', category: 'AI / ML' },
    { name: 'LangChain', logo: '/technologyStack/langchain.png', category: 'AI / ML' },
    { name: 'Dapr', logo: '/technologyStack/dapr.png', category: 'Backend' },
    { name: 'Azure', logo: '/technologyStack/azure.png', category: 'DevOps' },
    { name: 'Docker', logo: '/technologyStack/docker.webp', category: 'DevOps' },
    { name: 'Tailwind CSS', logo: '/technologyStack/tailwindcss.webp', category: 'Frontend' },
    { name: 'Prisma', logo: '/technologyStack/prisma.webp', category: 'Backend' },
    { name: 'Stripe', logo: '/technologyStack/stripe.png', category: 'Backend' },
    { name: 'Clerk', logo: '/technologyStack/clerk.png', category: 'Backend' },
    { name: 'ChromaDB', logo: '/technologyStack/ChromaDB.png', category: 'AI / ML' },
    { name: 'Groq', logo: '/technologyStack/groq.png', category: 'AI / ML' },
    { name: 'LangGraph', logo: '/technologyStack/langgraph.png', category: 'AI / ML' }
  ];

  const filteredSkills = activeFilter === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
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