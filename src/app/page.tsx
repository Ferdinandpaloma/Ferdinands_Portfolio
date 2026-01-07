import RacetrackProjects from "@/components/RacetrackProjects";

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
                className="w-32 h-auto drop-shadow-2xl filter brightness-110"
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
                FAST <span className="text-red-500">LANE</span>
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
      
      {/* Made with DeepSite footer */}
      <div className="fixed bottom-4 left-4 z-30 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <span>Made with DeepSite</span>
        </div>
      </div>

      {/* STATS */}
      <section className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="text-4xl font-bold text-red-500 mb-2">42+</div>
              <div className="text-gray-400">Projects</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="text-4xl font-bold text-green-400 mb-2">10k+</div>
              <div className="text-gray-400">Code Hours</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="text-4xl font-bold text-red-500 mb-2">99%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="text-4xl font-bold text-green-400 mb-2">1.9s</div>
              <div className="text-gray-400">Fastest Load</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <RacetrackProjects />

      {/* CONTACT placeholder */}
      <section id="contact" className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            PIT RADIO
          </h2>
          <p className="text-center text-slate-400">
            Next: we’ll convert your contact form section.
          </p>
        </div>
      </section>
    </div>
  );
}