import React from 'react';
import { ExternalLink, Calendar, Star } from 'lucide-react';

const Certification: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'Microsoft Imagine Cup 2025 Semifinalist',
      issuer: 'Microsoft',
      date: '2025',
      description: 'Lead the product and received a certificate of appreciation for being a semifinalist in the Microsoft Imagine Cup 2025.',
      image: '/CERTIFICATE/imagin-cup.PNG',
      link: 'https://imaginecup.microsoft.com/en-US/Member/WinnerCertificate?userid=OqOzZ1QOuB0K%252fQdvOgC8mw%253d%253d&compId=gBcKa8lOtQKof4CiRWjRxw%253d%253d&teamId=7G897Xq1tKuWafS%252b5FllEw%253d%253d',
      badge: 'Professional'
    },
    {
      id: 2,
      title: 'Generative AI Hackathon with IBM',
      issuer: 'IBM',
      date: '2024',
      description: 'Received certificate for delivering the 3rd best solution in Generative AI Hackathon with IBM by Lablab.ai',
      image: '/CERTIFICATE/Screenshot 2025-07-09 155350.png',
      link: 'https://lablab.ai/u/@Ahmad_Aslam/cm1g6t6bz0027u2da801cob0f?_gl=1*1vyn4mg*_up*MQ..*_ga*ODE5MTM4NTEwLjE3NTM4Nzk4MTg.*_ga_0DKXC1L0Y7*czE3NTM4Nzk4MTckbzEkZzAkdDE3NTM4Nzk4MTckajYwJGwwJGg2MDIwMjEzMjk.',
      badge: 'Associate'
    },
    {
      id: 3,
      title: 'Google Gemma 2 AI Challenge',
      issuer: 'Google Cloud',
      date: '2024',
      description: 'Advanced skills in developing, deploying, and managing applications on Google Cloud Platform.',
      image: '/CERTIFICATE/Screenshot 2025-07-09 155421.png',
      link: 'https://lablab.ai/u/@Ahmad_Aslam/cm7jn6s1e002v7p33nmybba2a?_gl=1*i9ge3z*_up*MQ..*_ga*ODE5MTM4NTEwLjE3NTM4Nzk4MTg.*_ga_0DKXC1L0Y7*czE3NTM4Nzk4MTckbzEkZzAkdDE3NTM4Nzk4MTckajYwJGwwJGg2MDIwMjEzMjk.',
      badge: 'Professional'
    },
    {
      id: 4,
      title: 'Trae AI IDE: Zero Limits Hackathon',
      issuer: 'LABLAB AI',
      date: '2023',
      description: 'Build Beyond the Limits. Download TRAE AI IDE and Get The Limitless AI Development Experience',
      image: '/assets_task_01k16xsjvce008ckeqgcvt80eb_1753653163_img_0.PNG',
      link: 'https://lablab.ai/u/@Ahmad_Aslam/cmd60b6cl003ma90stct5aram?_gl=1*jcv7xj*_up*MQ..*_ga*ODE5MTM4NTEwLjE3NTM4Nzk4MTg.*_ga_0DKXC1L0Y7*czE3NTM4Nzk4MTckbzEkZzAkdDE3NTM4Nzk4MTckajYwJGwwJGg2MDIwMjEzMjk.',
      badge: 'Professional'
    },
    {
      id: 5,
      title: 'Edge Runners 3.2',
      issuer: 'Edge Runners 3.2',
      date: '2023',
      description: 'Advanced React development skills including hooks, context, and modern React patterns.',
      image: '/CERTIFICATE/Screenshot 2025-07-09 155248.png',
      link: 'https://lablab.ai/u/@Ahmad_Aslam/cm2rx873j00hsk3xgeo6uelwr?_gl=1*jcv7xj*_up*MQ..*_ga*ODE5MTM4NTEwLjE3NTM4Nzk4MTg.*_ga_0DKXC1L0Y7*czE3NTM4Nzk4MTckbzEkZzAkdDE3NTM4Nzk4MTckajYwJGwwJGg2MDIwMjEzMjk.',
      badge: 'Specialist'
    },
    
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