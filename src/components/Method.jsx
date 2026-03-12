const pillars = [
  {
    numeral: '01',
    titulo: 'Origem',
    subtitulo: 'De onde você veio',
    corpo: 'Não é sobre o que te aconteceu, mas sobre quem você era antes da dor chegar. Resgatamos o mapa da sua identidade original em Deus.',
    label: 'CONFRONTO DA ILUSÃO'
  },
  {
    numeral: '02',
    titulo: 'Essência',
    subtitulo: 'Quem você é agora',
    corpo: 'A união indissolúvel entre saúde emocional e base espiritual. Sem esse eixo, você continuará paralisada no medo sequestrador.',
    label: 'EQUILÍBRIO SAGRADO'
  },
  {
    numeral: '03',
    titulo: 'Destino',
    subtitulo: 'Para onde você vai',
    corpo: 'A cura de uma mulher atravessa o tempo. Você recupera sua identidade para proteger o legado das que virão depois de você.',
    label: 'PACTO COM A VIDA'
  }
]

export default function Method() {
  return (
    <section id="metodo" className="relative section-padding overflow-hidden bg-brand-paper noise-overlay">
      
      <div className="container mx-auto relative z-10">
        <div className="mb-32 text-center" data-aos="fade-up">
          <h2 className="text-6xl md:text-8xl font-serif text-brand-ink leading-[1.1] mb-8">
            Pilares do <br />
            <span className="text-brand-sand italic underline decoration-brand-sand/30 decoration-1 underline-offset-[10px]">Método.</span>
          </h2>
          <p className="text-xl text-brand-authority/60 max-w-2xl mx-auto font-light font-sans">
            Três fundamentos sagrados para reconstruir sua identidade e emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-40">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.numeral}
              className="card-premium p-16 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-sm font-serif text-brand-sand opacity-40 font-bold tracking-widest">{pillar.numeral}</span>
              </div>

              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-sand font-bold mb-4 block">
                {pillar.label}
              </span>
              <h3 className="text-4xl font-serif text-brand-ink mb-6 italic leading-tight">
                {pillar.titulo}
              </h3>
              
              <p className="text-brand-authority/70 font-light leading-relaxed text-lg">
                {pillar.corpo}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Block - Expectations Alignment */}
        <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
          <div className="bg-brand-ink p-20 relative overflow-hidden group rounded-premium shadow-premium">
            {/* Subtle background ornamentation */}
            <div className="absolute inset-0 opacity-[0.03] bg-noise"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sand/10 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-authority/10 blur-[150px] rounded-full"></div>

            <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
              <div className="lg:w-2/5">
                <h4 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                  Este processo <br />
                  <span className="italic text-brand-sand">não é</span> para você se:
                </h4>
              </div>
              <div className="lg:w-3/5">
                <ul className="space-y-8 text-brand-paper/70 font-light text-xl italic font-serif">
                  <li className="flex items-start space-x-6">
                    <span className="text-brand-sand mt-2 text-2xl">—</span>
                    <span className="text-white">Você busca atalhos mágicos sem o compromisso de olhar para a própria história.</span>
                  </li>
                  <li className="flex items-start space-x-6">
                    <span className="text-brand-sand mt-2 text-2xl">—</span>
                    <span className="text-white">Você prefere manter o papel de vítima do que assumir a auto-responsabilidade.</span>
                  </li>
                  <li className="flex items-start space-x-6">
                    <span className="text-brand-sand mt-2 text-2xl">—</span>
                    <span className="text-white">Você não está disposta a permitir que a sua identidade original em Deus seja reconstruída.</span>
                  </li>
                </ul>
                <div className="mt-16 flex items-center space-x-6 text-brand-sand font-bold uppercase tracking-[0.5em] text-[10px]">
                  <div className="w-16 h-[1px] bg-brand-sand"></div>
                  <span>A CURA EXIGE PERMISSÃO E CORAGEM.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
