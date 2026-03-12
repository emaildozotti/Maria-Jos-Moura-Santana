const painPoints = [
  "Dependência emocional profunda e vício em validação externa.",
  "Ciclos repetitivos de insegurança e medo do abandono.",
  "Identidade fragmentada e perda do senso de quem você é.",
  "Sentimento de paralisação emocional, mesmo tentando mudar sozinha."
]

export default function PainPoints() {
  return (
    <section id="dores" className="relative section-padding overflow-hidden bg-brand-mist noise-overlay">
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mb-24" data-aos="fade-up">
          <h2 className="text-6xl md:text-8xl font-serif text-brand-ink leading-[1.1] mb-8">
            Se você se <br />
            <span className="text-brand-sand italic font-serif">identifica...</span>
          </h2>
          <p className="text-xl text-brand-authority/60 font-light leading-relaxed max-w-2xl font-sans">
            Estes são os sintomas comuns de quem vive à sombra de um ciclo de dependência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="card-premium p-12 md:p-16"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start space-x-6">
                <span className="text-brand-sand font-serif italic text-3xl">—</span>
                <p className="text-2xl font-serif text-brand-ink leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-40 max-w-5xl mx-auto"
          data-aos="zoom-in"
        >
          <div className="bg-white p-20 text-center rounded-premium shadow-premium relative overflow-hidden border border-brand-sand/10">
            <div className="absolute inset-0 opacity-[0.02] bg-noise"></div>
            <p className="text-4xl md:text-5xl font-serif text-brand-ink leading-tight italic relative z-10">
              "Você não é o que te aconteceu. Você não é a sua dor. Você é <span className="text-brand-sand underline decoration-brand-sand/20 underline-offset-[12px]">muito mais</span> do que imagina."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
