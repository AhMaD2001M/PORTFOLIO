import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full Stack Developer', 'Certified Cloud Applied Generative AI Engineer',
    '3x Startups Founder',
    '3x Global Competition Winner (IBM, Google, Microsoft)','UI/UX Designer', 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="home" className="min-h-screen flex items-center justify-center relative" role="main" aria-label="Home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-12 mt-20">
            <div className="w-60 h-auto mx-auto mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r to-blue-500  blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-r to-blue-600  flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 overflow-hidden">
                <img 
                  src="\assets_task_01k16xhc08eg8a0ygkfsb27ya3_1753652877_img_0-removebg-preview (1).png" 
                  alt="Ahmad Aslam" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-slide-in-left">
            Ahmad Aslam
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 animate-slide-in-right">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Passionate developer crafting digital experiences with cutting-edge technologies. 
            Transforming ideas into beautiful, functional solutions that make a difference.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-500">
            <a
              href="https://github.com/AhMaD2001M"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:transform hover:scale-110 hover:rotate-3"
            >
              <Github size={24} className="group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-aslam-6b2141267/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800/50 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:transform hover:scale-110 hover:rotate-3"
            >
              <Linkedin size={24} className="group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="mailto:ahmadaslam2001@gmail.com"
              className="group p-4 bg-gray-800/50 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:transform hover:scale-110 hover:rotate-3"
            >
              <Mail size={24} className="group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
          
          <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="/ahmadaslam-Resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <FileText size={20} className="mr-2 group-hover:transform group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-white">Download Resume</span>
            </a>
          </div>
          
          <div className="animate-bounce-gentle">
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="mb-2 text-sm font-medium">Explore My Work</span>
              <ChevronDown size={32} className="group-hover:transform group-hover:translateY-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;