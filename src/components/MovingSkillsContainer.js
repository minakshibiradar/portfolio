import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Palette, Settings, Zap, Shield } from 'lucide-react';

const MovingSkillsContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { icon: Code, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: Database, name: 'Database', color: 'text-blue-500' },
    { icon: Globe, name: 'Web Dev', color: 'text-green-500' },
    { icon: Smartphone, name: 'Mobile', color: 'text-purple-500' },
    { icon: Palette, name: 'Design', color: 'text-pink-500' },
    { icon: Settings, name: 'DevOps', color: 'text-gray-500' },
    { icon: Zap, name: 'Performance', color: 'text-orange-500' },
    { icon: Shield, name: 'Security', color: 'text-red-500' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-background"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Container */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-full h-32 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden relative rounded-2xl border border-gray-700">
            <div className="absolute inset-0 flex items-center">
              {/* First set of skills */}
              <div className="flex animate-scroll space-x-12">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={`first-${index}`}
                      className="flex flex-col items-center justify-center min-w-[100px] group cursor-pointer"
                    >
                      <div className="p-4 bg-gray-800 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-700">
                        <Icon className={`w-8 h-8 ${skill.color} transition-colors duration-300`} />
                      </div>
                      <span className="text-white text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex animate-scroll space-x-12">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={`second-${index}`}
                      className="flex flex-col items-center justify-center min-w-[100px] group cursor-pointer"
                    >
                      <div className="p-4 bg-gray-800 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-700">
                        <Icon className={`w-8 h-8 ${skill.color} transition-colors duration-300`} />
                      </div>
                      <span className="text-white text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Fade edges for smooth effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-800 to-transparent z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-background {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          animation: float-gentle 15s ease-in-out infinite;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          right: 15%;
          animation-delay: 7s;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .text-gradient {
          background: linear-gradient(45deg, #ffffff, #e5e7eb, #9ca3af);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MovingSkillsContainer;