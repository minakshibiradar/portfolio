import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
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
    'JavaScript', 'React', 'Spring Boot', 'Java', 'Python', 'MySQL', 'SQL', 'Git'
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
          <h2 className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Left Part - About Description */}
          <div className={`flex-1 space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="about-text-container">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hello! I'm a passionate software developer with a strong foundation in modern web technologies.
                I love creating efficient, scalable solutions and bringing innovative ideas to life through clean,
                maintainable code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in software development started with curiosity and has grown into a deep passion for
                problem-solving and continuous learning. I enjoy working on challenging projects that push me
                to explore new technologies and methodologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>

              {/* Skills Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies I work with:</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`skill-tag transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {/* /* <div className={`transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <button className="cta-button group">
                  <span className="relative z-10">Download Resume</span>
                  <div className="button-bg"></div>
                </button>
              </div>
            </div>
          // </div> */ }
              <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1efhSJKOLXr-y6oborkBjGQ2CmW6xVcdV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cta-button group">
                    <span className="relative z-10">Download Resume</span>
                    <div className="button-bg"></div>
                  </button>
                </a>
              </div>
              </div>
              </div>


              {/* Right Part - Photo */}
              <div className={`flex-shrink-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                <div className="photo-container">
                  <div className="photo-frame">
                    <img
                      src="/profile.jpg?w=400&h=500&fit=crop&crop=face"
                      alt="About Me"
                      className="w-full h-full object-cover"
                    />
                    <div className="photo-overlay"></div>
                  </div>
                  <div className="photo-border"></div>
                  <div className="photo-shadow"></div>
                </div>
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

        .about-text-container {
          position: relative;
        }

        .about-text-container::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.1));
          border-radius: 2px;
        }

        .skill-tag {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          color: #e5e7eb;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
          color: #ffffff;
        }

        .cta-button {
          position: relative;
          padding: 12px 32px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-bg {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover .button-bg {
          left: 100%;
        }

        .cta-button:hover {
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .photo-container {
          position: relative;
          width: 320px;
          height: 400px;
        }

        .photo-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.2);
          transition: all 0.5s ease;
          z-index: 2;
        }

        .photo-frame:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0,0,0,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-frame:hover .photo-overlay {
          opacity: 1;
        }

        .photo-border {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          z-index: 1;
          animation: border-pulse 3s ease-in-out infinite;
        }

        .photo-shadow {
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          filter: blur(20px);
          z-index: 0;
          transition: all 0.5s ease;
        }

        .photo-frame:hover + .photo-border + .photo-shadow {
          transform: translateY(5px);
          opacity: 0.7;
        }

        @keyframes border-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }

        @media (max-width: 1024px) {
          .about-text-container::before {
            display: none;
          }
          
          .photo-container {
            width: 280px;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .photo-container {
            width: 250px;
            height: 320px;
          }
        }
      `}</style>
        </section>
        );
};

        export default AboutSection;