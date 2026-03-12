export default function About() {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden bg-brand-paper">
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-up">
            <div className="relative z-10 p-4 bg-white border border-brand-authority/10 shadow-float">
              <div className="overflow-hidden">
                <img 
                  src="https://i.imgur.com/GDoN0NJ.jpeg" 
                  alt="Maria José Moura Santana" 
                  className="w-full h-auto object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            
            {/* Editorial Label Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-brand-authority p-10 hidden md:block" data-aos="fade-right" data-aos-delay="300">
              <p className="text-4xl font-serif text-white italic mb-1">15+</p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-brand-sand font-bold">Anos de Travessia</p>
            </div>

            {/* Decorative Mist */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-mist -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink mb-10 leading-[1.1]">
              Quem é <span className="text-serif-display italic border-b border-brand-sand/30">Maria José.</span>
            </h2>
            
            <div className="space-y-8 text-brand-authority/70 font-light leading-relaxed text-lg">
              <p>
                Ninguém se cura sozinha, mas nenhuma cura começa sem a sua permissão. Meu chamado é despertar mulheres do sono do medo e da dependência profunda.
              </p>
              <p>
                Compreendi visceralmente que toda dor carrega a história de uma linhagem. Você não está apenas sofrendo; você está repetindo um mapa que não é seu.
              </p>
              
              <div className="bg-mist p-12 border-l border-brand-sand mt-12 mb-12">
                <p className="text-2xl font-serif italic text-brand-ink leading-relaxed">
                  "Eu não valido o seu medo, eu valido a sua força original em Deus. Meu papel é confrontar a ilusão para que a Liberdade volte a fluir em você e nas suas gerações."
                </p>
              </div>
              
              <p>
                Meu trabalho não é te dar afagos que te mantém onde você está. É uma intervenção firme em favor da Vida. É devolver a você o mapa de si mesma antes que as correntes geracionais te apresentassem uma farsa.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-brand-ink uppercase tracking-widest mb-1">Especialidade</span>
                <span className="text-xs text-brand-authority/60">Psicoterapia Sistêmica</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-brand-ink uppercase tracking-widest mb-1">Atuação</span>
                <span className="text-xs text-brand-authority/60">Mentoria Ministerial</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-brand-ink uppercase tracking-widest mb-1">Base</span>
                <span className="text-xs text-brand-authority/60">Formação Teológica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
