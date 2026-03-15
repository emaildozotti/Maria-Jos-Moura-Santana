export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-brand-paper pt-32 pb-32 noise-overlay">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Geometric Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise"></div>
        
        {/* Floating Soft Mesh Gradient */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-sand/10 blur-[150px] rounded-full animate-soft-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-authority/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="text-left space-y-16" data-aos="fade-up">
            <h1 className="text-7xl md:text-9xl font-serif text-brand-ink leading-[1] tracking-tighter">
              Sua vida não foi feita <br />
              <span className="font-serif italic text-brand-sand/80">para ser rascunho.</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-authority/70 max-w-lg leading-relaxed font-light font-serif italic">
              Recupere sua identidade original e quebre os ciclos que te paralisam.
            </p>

            <div className="pt-6">
              <a href="https://wa.me/5521972621362?text=Ol%C3%A1%20Maria%20Jos%C3%A9%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20reconstru%C3%A7%C3%A3o%20de%20identidade." className="btn-primary inline-flex items-center space-x-4">
                <span>Agendar Primeira Conversa</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative group" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute -inset-10 border border-brand-sand/10 rounded-premium translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-1000"></div>
            
            <div className="relative z-10 border border-brand-authority/10 shadow-premium bg-white p-6 rounded-premium overflow-hidden">
              <img 
                src="https://i.imgur.com/rF3LfS3.jpeg" 
                alt="Maria Jose Moura Santana" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
