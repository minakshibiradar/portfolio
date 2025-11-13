import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const projects = [
    {
      id: 1,
      name: "LinkedIn-Clone",
      description: "A full-stack social media application built with React and Spring Boot. Features include user authentication,Create post, view post and user dashboard.",
      image: "https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_640.png?w=600&h=400&fit=crop",
      technologies: ["React", "Spring Boot", "MySQL", "JPA"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/minakshibiradar/linkedin-clone"
    },
    {
      id: 2,
      name: "City Event Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and admin event management.",
      image: "https://www.shutterstock.com/image-photo/event-management-creation-development-personal-260nw-2470290205.jpg?w=600&h=400&fit=crop",
      technologies: ["React", "Microservices", "MySQL", "Spring Boot"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/minakshibiradar/city-event-management"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, detailed weather analytics, and customizable alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      id: 4,
      name: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking with real-time data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      id: 5,
      name: "BMI Calculator",
      description: "Free Body Mass Index calculator gives out the BMI value and categorizes BMI based on provided information from WHO and CDC for both adults and children..",
      image: "https://static.theprint.in/wp-content/uploads/2024/10/ANI-20241010093744.jpg?w=600&h=400&fit=crop",
      technologies: ["React", "Express.js", "MySQL", "AWS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/minakshibiradar/BMI-Calculator"
    },
    {
      id: 6,
      name: "Recommendation App",
      description: "A modern responsive recommendation feacture with array and optimized performance for showcasing projects.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/035/722/555/small/recommendations-web-audit-color-thin-line-icon-vector.jpg?w=600&h=400&fit=crop",
      technologies: ["React", "CSS", "JavaScript", "Netlify"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/minakshibiradar/Recommendation-App"
    }
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
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn live-btn"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn github-btn"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn group"
                >
                  <span>View Project</span>
                  <ArrowRight 
                    size={18} 
                    className={`transition-transform duration-300 ${
                      hoveredProject === project.id ? 'translate-x-1' : ''
                    }`}
                  />
                </a>
              </div>
            </div>
          ))}
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
          animation: float-gentle 20s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          top: 50%;
          right: 10%;
          animation-delay: 7s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 50%;
          animation-delay: 14s;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
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

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          transform-origin: center;
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 15px;
        }

        .project-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .project-link-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.1);
        }

        .live-btn:hover {
          background: rgba(34, 197, 94, 0.3);
          border-color: rgba(34, 197, 94, 0.6);
        }

        .github-btn:hover {
          background: rgba(75, 85, 99, 0.3);
          border-color: rgba(75, 85, 99, 0.6);
        }

        .project-content {
          padding: 24px;
        }

        .project-title {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #e5e7eb;
        }

        .project-description {
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 16px;
          font-size: 14px;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 4px 12px;
          font-size: 12px;
          color: #d1d5db;
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-tag {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .view-project-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .view-project-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .view-project-btn:hover::before {
          left: 100%;
        }

        .view-project-btn:hover {
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .project-card {
            margin-bottom: 20px;
          }
          
          .project-image-container {
            height: 200px;
          }
          
          .project-content {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;