import RacetrackProjects from "@/components/RacetrackProjects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white font-sans antialiased min-h-screen relative overflow-hidden">
      {/* Red glow effects */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute right-20 top-40 w-64 h-64 bg-red-500/30 rounded-full blur-2xl opacity-40" />
      
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-900/60 to-black/90 z-10" />
        
        {/* Green car on the left */}
        <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative transform rotate-12">
              <img 
                src="/car.png" 
                alt="Racing car" 
                className="w-24 h-auto drop-shadow-2xl filter brightness-110"
                style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8)) drop-shadow(0 0 40px rgba(239, 68, 68, 0.4))' }}
              />
            </div>
            <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl" />
          </div>
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white tracking-tight">
              <span className="block">
                Ferdinand <span className="text-red-500">Paloma</span>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-white mb-8 tracking-wide">
              DEVELOPER PORTFOLIO
            </h2>

            <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              High-performance code at racing speed. Checkered flag quality with pit-stop efficiency.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-red-500/50 text-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-md font-medium transition-all text-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              ABOUT <span className="text-red-500">ME</span>
            </h2>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 md:p-12 border border-slate-700 shadow-2xl">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
                  Hi, I'm <span className="text-red-500">Ferdinand Paloma</span>.
                </p>
                
                <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                  I'm deeply passionate about the tech industry and constantly pushing the boundaries of what's possible. What fascinates me particularly are three cutting-edge domains that are shaping our future:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-red-500/30 hover:border-red-500/60 transition-all">

                    <h3 className="text-xl font-bold text-red-400 mb-2">AI</h3>
                    <p className="text-slate-400 text-sm">
                      Exploring machine learning, neural networks, and intelligent systems that can transform how we solve complex problems.
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all">

                    <h3 className="text-xl font-bold text-green-400 mb-2">MedTech</h3>
                    <p className="text-slate-400 text-sm">
                      Building applications that bridge technology and healthcare, creating solutions that can improve lives and patient outcomes.
                    </p>
                  </div>
                  
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Data Analytics</h3>
                    <p className="text-slate-400 text-sm">
                      Transforming raw data into actionable insights, uncovering patterns that drive informed decision-making and innovation.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                  Through hackathons and collaborative projects, I've built full-stack applications that combine these interests—from cybersecurity platforms to meal planning apps with AI integration. I thrive in fast-paced environments where I can learn, build, and ship products that make a real impact.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center mt-10 pt-8 border-t border-slate-700">
                <a
                  href="https://github.com/Ferdinandpaloma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-md font-medium transition-all hover:border-slate-500 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ferdinandpaloma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-md font-medium transition-all hover:border-slate-500 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <RacetrackProjects />

      {/* CONTACT */}
      <ContactForm />
    </div>
  );
}