import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram, Code } from 'lucide-react';

const PortfolioHomepage = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  const texts = [
    'Software Developer',
    'Java Developer', 
    'React Developer',
    'Full Stack Developer',
    'Problem Solver',
    'Code Enthusiast'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/minakshibiradar',
      color: '#333333',
      hoverColor: '#6366f1'
    },
    {
      name: 'LinkedIn', 
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/minakshi-baliram-biradar-080425236/',
      color: '#0077b5',
      hoverColor: '#0096dc'
    },
    {
      name: 'Twitter',
      icon: Twitter, 
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2',
      hoverColor: '#1a91da'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:minakshibiradar61@gmail.com', 
      color: '#ea4335',
      hoverColor: '#ff6b6b'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yourusername',
      color: '#e4405f', 
      hoverColor: '#fd1d1d'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/minakshibb/',
      color: '#ffa116',
      hoverColor: '#ffb84d'
    }
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed, texts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Navigation Header */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16"> 
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold text-white">Portfolio</h2>
            </div>
         </div>
        </div>
       </nav> */}

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0">
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
        {/* Profile Image */}
        <div className="profile-container mb-6">
          <div className="profile-image">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="profile-ring"></div>
          <div className="profile-ring-outer"></div>
        </div>

        {/* Dynamic Text */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-gradient">
              {currentText}
              <span className="typing-cursor">|</span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-xl text-center mb-8">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up">
            Passionate software developer with expertise in modern web technologies. 
            I love crafting elegant solutions to complex problems and bringing innovative 
            ideas to life through clean, efficient code. Always eager to learn new 
            technologies and contribute to meaningful projects that make a difference.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="animate-fade-in-delayed">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    '--social-color': social.color,
                    '--social-hover-color': social.hoverColor
                  }}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(100, 255, 218, 0.1), rgba(167, 139, 250, 0.1));
          animation: float 20s ease-in-out infinite;
        }

        .floating-shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-shape-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 10%;
          animation-delay: 7s;
        }

        .floating-shape-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 60%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        .profile-container {
          position: relative;
          width: 160px;
          height: 160px;
        }

        .profile-image {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 3;
          border: 3px solid rgba(255, 255, 255, 0.2);
          animation: glow 3s ease-in-out infinite alternate;
        }

        .profile-ring {
          position: absolute;
          top: -12px;
          left: -12px;
          width: 184px;
          height: 184px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: rotate 10s linear infinite;
        }

        .profile-ring-outer {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 200px;
          height: 200px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          animation: rotate-reverse 15s linear infinite;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
          100% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.3); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotate-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
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

        .typing-cursor {
          display: inline-block;
          background: #ffffff;
          margin-left: 3px;
          width: 3px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in-up 1s ease-out 1s both;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: var(--social-color);
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          animation: social-appear 0.6s ease-out both;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link:hover {
          transform: translateY(-3px) scale(1.15);
          background: linear-gradient(135deg, var(--social-color), var(--social-hover-color));
          border-color: var(--social-hover-color);
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px var(--social-color);
        }

        @keyframes social-appear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .social-link {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioHomepage;