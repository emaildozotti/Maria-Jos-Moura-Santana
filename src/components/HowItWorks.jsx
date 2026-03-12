const steps = [
  {
    numero: '01',
    titulo: 'Conexão de Resgate',
    corpo: 'Você dá o primeiro passo. Sem justificativas, sem mentiras para si mesma. É o momento de sentirmos se você está pronta para a verdade.',
    label: 'A PERMISSÃO'
  },
  {
    numero: '02',
    titulo: 'Diagnóstico Origem',
    corpo: 'Identificamos juntas onde o medo sequestrou sua identidade. Não focamos no sintoma, mas na ausência do mapa original que Deus te deu.',
    label: 'O CONFRONTO'
  },
  {
    numero: '03',
    titulo: 'Travessia de Cura',
    corpo: 'Escolhemos o formato da sua libertação: sessões individuais ou imersão profunda. Aqui, o ciclo de dependência morre para a Vida nascer.',
    label: 'A LIBERTAÇÃO'
  }
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative section-padding overflow-hidden bg-mist">
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24" data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-[1.1] mb-8">
              Como <span className="text-serif-display italic underline decoration-brand-sand/30 decoration-1 underline-offset-8">funciona.</span>
            </h2>
            <p className="text-xl text-brand-authority/60 font-light leading-relaxed max-w-2xl">
              Um processo estruturado para a sua reconstrução emocional.
            </p>
          </div>

          <div className="space-y-px bg-brand-authority/10 border border-brand-authority/10">
            {steps.map((step, index) => (
              <div 
                key={step.numero}
                className="bg-brand-paper p-16 md:p-20 group transition-all duration-500 hover:bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row gap-12 md:items-center">
                  <div className="text-6xl md:text-8xl font-serif italic text-brand-sand/20 group-hover:text-brand-sand/40 transition-colors duration-700">
                    {step.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-ink mb-6">{step.titulo}</h3>
                    <p className="text-brand-authority/70 font-light leading-relaxed text-xl max-w-2xl">
                      {step.corpo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA & Reassurance */}
          <div className="mt-48 text-center" data-aos="fade-up">
            <p className="text-2xl text-brand-authority/50 font-serif italic mb-16 max-w-3xl mx-auto leading-relaxed">
              "Você não precisa saber tudo agora. Não precisa estar pronta. A única coisa que precisa neste momento é dar a permissão para que a conversa aconteça."
            </p>
            
            <a 
              href="https://wa.me/5521972621362?text=Ol%C3%A1%20Maria%20Jos%C3%A9%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20reconstru%C3%A7%C3%A3o%20de%20identidade." 
              className="btn-primary"
            >
              Iniciar Primeira Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
