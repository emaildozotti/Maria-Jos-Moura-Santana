export default function VideoSection() {
  return (
    <section id="video" className="relative section-padding overflow-hidden bg-mist">
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-[1.1] mb-8" data-aos="fade-up">
            Assista a este <span className="text-serif-display italic underline decoration-brand-sand/30 decoration-1 underline-offset-8">explicativo.</span>
          </h2>
          <p className="text-xl text-brand-authority/60 font-light max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Entenda como funciona o resgate da sua identidade e os próximos passos.
          </p>
        </div>

        {/* Minimalist Video Player */}
        <div className="max-w-[450px] mx-auto relative group" data-aos="zoom-in">
          <div className="relative bg-brand-paper aspect-[9/16] overflow-hidden border border-brand-authority/10 shadow-soft">
            <iframe 
              src="https://www.youtube.com/embed/fgIVeitziMg?autoplay=0&controls=1&rel=0&modestbranding=1" 
              title="A Guardiã da Identidade"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Subtle accent line */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-brand-sand/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
        </div>

        <div className="mt-24 text-center max-w-2xl mx-auto" data-aos="fade-up">
          <p className="text-xl text-brand-authority/50 font-serif italic leading-relaxed">
            "Sua identidade não é um fato isolado. Ela carrega a história da sua vida e das suas gerações. Quando você se cura, todo o fluxo da Vida volta a correr."
          </p>
        </div>
      </div>
    </section>
  )
}
