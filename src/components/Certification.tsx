import React from 'react';
import { ExternalLink, Calendar, Star } from 'lucide-react';

const Certification: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Comprehensive knowledge of AWS services and architectural best practices for building scalable, secure, and reliable applications.',
      image: '/assets_task_01k16xhc08eg8a0ygkfsb27ya3_1753652877_img_0.PNG',
      link: '#',
      badge: 'Professional'
    },
    {
      id: 2,
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Expertise in developing, testing, and maintaining cloud applications and services on Microsoft Azure.',
      image: '/assets_task_01k16xsjvce008ckeqgcvt80eb_1753653163_img_0.PNG',
      link: '#',
      badge: 'Associate'
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Advanced skills in developing, deploying, and managing applications on Google Cloud Platform.',
      image: '/assets_task_01k16xhc08eg8a0ygkfsb27ya3_1753652877_img_0.PNG',
      link: '#',
      badge: 'Professional'
    },
    {
      id: 4,
      title: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      date: '2023',
      description: 'Proven expertise in Scrum methodology and agile project management practices.',
      image: '/assets_task_01k16xsjvce008ckeqgcvt80eb_1753653163_img_0.PNG',
      link: '#',
      badge: 'Professional'
    },
    {
      id: 5,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      description: 'Advanced React development skills including hooks, context, and modern React patterns.',
      image: '/assets_task_01k16xhc08eg8a0ygkfsb27ya3_1753652877_img_0.PNG',
      link: '#',
      badge: 'Specialist'
    },
    {
      id: 6,
      title: 'Node.js Developer Certification',
      issuer: 'OpenJS Foundation',
      date: '2022',
      description: 'Comprehensive knowledge of Node.js development, APIs, and server-side JavaScript.',
      image: '/assets_task_01k16xsjvce008ckeqgcvt80eb_1753653163_img_0.PNG',
      link: '#',
      badge: 'Associate'
    }
  ];

  return (
    <section id="certification" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning in technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 p-1 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    cert.badge === 'Professional' ? 'bg-purple-500/20 text-purple-300' :
                    cert.badge === 'Associate' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {cert.badge}
                  </span>
                  <Star size={16} className="text-yellow-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-400 mb-3">
                <Calendar size={14} className="mr-1" />
                {cert.date}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-400 font-medium">
                  {cert.issuer}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link p-2 bg-gray-700/50 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <ExternalLink size={16} className="group-hover/link:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-6 py-3 border border-gray-700/50">
            <Star size={20} className="text-yellow-400" />
            <span className="text-gray-300 font-medium">
              Continuously pursuing new certifications to stay current with industry trends
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification; 