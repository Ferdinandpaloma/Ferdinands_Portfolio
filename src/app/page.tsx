export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary/20" />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              <span className="block">
                FAST<span className="text-primary">LANE</span>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-8">
              DEVELOPER PORTFOLIO
            </h2>

            <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              High-performance code at racing speed. Checkered flag quality with pit-stop efficiency.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-red-700 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-slate-600 hover:border-slate-500 rounded-md font-medium transition-all hover:bg-slate-800/30"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">42+</div>
              <div className="text-gray-400">Projects</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">10k+</div>
              <div className="text-gray-400">Code Hours</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">1.9s</div>
              <div className="text-gray-400">Fastest Load</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (placeholder for now) */}
      <section id="projects" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            RACE TRACK PROJECTS
          </h2>
          <p className="text-center text-slate-400">
            Next step: we’ll convert your SVG track + animated car into a client component.
          </p>
        </div>
      </section>

      {/* CONTACT (placeholder for now) */}
      <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            PIT RADIO
          </h2>
          <p className="text-center text-slate-400">
            Next step: convert your contact form section.
          </p>
        </div>
      </section>
    </div>
  );
}