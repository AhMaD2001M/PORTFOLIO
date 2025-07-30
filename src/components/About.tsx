import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces with attention to every detail'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in every project'
    },
    {
      icon: <Heart size={32} />,
      title: 'User-Centric',
      description: 'Building experiences that users love and remember'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Ahmad Aslam, a passionate full-stack developer with a keen eye for design 
              and a love for creating exceptional digital experiences. With years of experience in 
              modern web technologies, I specialize in building scalable applications that not only 
              function flawlessly but also delight users.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology started with curiosity and has evolved into a dedication to 
              crafting innovative solutions. I believe in the power of clean code, thoughtful design, 
              and continuous learning to create products that make a real impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-1">
              <div className="w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets_task_01k16xsjvce008ckeqgcvt80eb_1753653163_img_0.PNG" 
                  alt="Ahmad Aslam" 
                  className="w-auto h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors duration-300 group-hover:transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;