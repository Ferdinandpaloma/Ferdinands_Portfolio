"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Project markers will be defined with position (x, y) percentages
// Each marker will be placed at a turn on the racetrack
const projectMarkers = [
  {
    id: 1,
    x: 20,
    y: 79,
    title: "E-Commerce Platform",
    image: null, // Add image URL here when available
    description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, inventory management, and real-time order tracking. Optimized for performance with server-side rendering and lazy loading.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    x: 55,
    y: 15,
    title: "Task Management App",
    image: null, // Add image URL here when available
    description: "A collaborative task management application with real-time updates using WebSockets. Includes drag-and-drop functionality, team collaboration features, and detailed analytics dashboards. Built with modern UI/UX principles for optimal user experience.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "https://github.com/example/taskmanager",
  },
  {
    id: 3,
    x: 80,
    y: 45,
    title: "Weather Dashboard",
    image: null, // Add image URL here when available
    description: "A responsive weather dashboard that displays real-time weather data and forecasts. Integrates with multiple weather APIs, includes interactive maps, and provides detailed meteorological information. Features a beautiful, intuitive interface built with React.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    link: "https://github.com/example/weather",
  },
  {
    id: 4,
    x: 50,
    y: 80,
    title: "Social Media Analytics",
    image: null, // Add image URL here when available
    description: "An analytics platform for social media metrics with data visualization. Tracks engagement rates, follower growth, and content performance across multiple platforms. Includes automated reporting and predictive analytics features.",
    technologies: ["Next.js", "Python", "D3.js", "TensorFlow"],
    link: "https://github.com/example/social-analytics",
  },
  {
    id: 5,
    x: 15,
    y: 50,
    title: "Fitness Tracker",
    image: null, // Add image URL here when available
    description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking. Features include personalized workout recommendations, progress charts, and integration with wearable devices.",
    technologies: ["React Native", "Firebase", "GraphQL", "HealthKit"],
    link: "https://github.com/example/fitness-tracker",
  },
];

export default function RacetrackProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHoveringMarker, setIsHoveringMarker] = useState(false);

  // Hide car cursor when hovering over project markers or modal is open
  useEffect(() => {
    if (isHoveringMarker || selectedProject) {
      document.body.classList.add("hide-car-cursor");
    } else {
      document.body.classList.remove("hide-car-cursor");
    }
    
    return () => {
      document.body.classList.remove("hide-car-cursor");
    };
  }, [isHoveringMarker, selectedProject]);

  return (
    <section id="projects" className="py-20 border-t border-slate-800 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          RACE TRACK <span className="text-red-500">PROJECTS</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Navigate the track to discover my projects at each turn
        </p>
        
        {/* Racetrack Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full aspect-video bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden">
            {/* Racetrack Image */}
            <Image
              src="/racetrack.png"
              alt="Racetrack with project markers"
              fill
              className="object-contain pointer-events-none"
              priority
            />
            
            {/* Project Markers - rendered as circles at turns */}
            {projectMarkers.map((project) => (
              <div
                key={project.id}
                className="absolute cursor-pointer group z-10"
                style={{
                  left: `${project.x}%`,
                  top: `${project.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setIsHoveringMarker(true)}
                onMouseLeave={() => setIsHoveringMarker(false)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedProject(project);
                  }
                }}
                aria-label={`View project: ${project.title}`}
              >
                {/* Pulsing outer ring */}
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" 
                     style={{ animationDuration: "2s" }} />
                
                {/* Marker Circle */}
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute -inset-2 rounded-full bg-red-500/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Main circle */}
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-4 border-white shadow-2xl shadow-red-500/60 transition-all duration-300 group-hover:scale-125 group-hover:shadow-red-500/80 group-active:scale-110">
                    {/* Inner highlight */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-300/50 to-transparent" />
                    
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
                  </div>
                  
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-red-500 flex items-center justify-center text-xs font-bold text-red-600 shadow-lg">
                    {project.id}
                  </div>
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:-translate-y-1">
                  <div className="bg-slate-800 border border-red-500/50 rounded-lg px-4 py-2 text-sm text-white shadow-2xl whitespace-nowrap">
                    <div className="font-semibold text-red-400">{project.title}</div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Popup Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-all duration-200 text-2xl leading-none z-10"
                aria-label="Close"
              >
                ×
              </button>
              
              {/* Project Preview Image */}
              <div className="relative w-full h-48 md:h-64 mb-6 rounded-lg overflow-hidden bg-slate-700/30 border border-slate-600">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <svg 
                        className="w-16 h-16 mx-auto mb-2 text-slate-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                      <p className="text-sm text-slate-500">Project Preview</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 mb-4">
                <span className="text-red-400 font-bold text-lg">{selectedProject.id}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 pr-8">
                {selectedProject.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                {selectedProject.description}
              </p>
              
              {/* Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-slate-700/50 border border-slate-600 rounded-md text-sm text-slate-200 hover:bg-slate-700 hover:border-slate-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action buttons */}
              <div className="flex gap-3 flex-wrap">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-md font-medium transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
