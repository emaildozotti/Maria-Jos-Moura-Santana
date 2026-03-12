const depoimentos = [
  {
    nome: 'Helena Soares',
    info: 'Empresária',
    texto: 'Vivia em função da aprovação do outro. O medo do abandono me sequestrava. Pela primeira vez na vida, eu sei quem sou quando estou sozinha e não me apavoro com o silêncio. Recuperei meu mapa.',
    label: 'IDENTIDADE'
  },
  {
    nome: 'Clara Mendes',
    info: 'Arquiteta',
    texto: 'Minha espiritualidade era rasa porque minha base emocional estava em ruínas. Quando toquei na raiz da minha dor com a Maria José, minha fé finalmente encontrou onde se ancorar.',
    label: 'ALINHAMENTO'
  },
  {
    nome: 'Renata Lins',
    info: 'Médica',
    texto: 'O ciclo de humilhação e medo vinha da minha avó, passou pela minha mãe. Eu decidi que parava em mim. Minha filha agora tem uma mãe que sabe o seu valor diante de Deus.',
    label: 'LEGADO'
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative section-padding overflow-hidden bg-mist">
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mb-24" data-aos="fade-up">
          <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-brand-sand mb-6 block">TRANSFORMAÇÕES REAIS</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-[1.1] mb-8">
            O que muda quando <br />
            <span className="text-serif-display italic border-b border-brand-sand/30">a raiz é tocada.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-authority/10 border border-brand-authority/10">
          {depoimentos.map((dep, index) => (
            <div
              key={index}
              className="bg-brand-paper p-16 flex flex-col h-full transition-all duration-500 hover:bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-12">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-sand px-3 py-1 border border-brand-sand/20">
                  {dep.label}
                </span>
              </div>
              
              <blockquote className="text-2xl font-serif italic text-brand-ink mb-12 flex-1 leading-relaxed">
                "{dep.texto}"
              </blockquote>

              <div className="flex items-center space-x-6 pt-10 border-t border-brand-authority/5">
                <div className="w-14 h-14 bg-brand-sand/10 flex items-center justify-center text-brand-sand font-serif italic text-2xl">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <p className="text-brand-ink font-serif text-xl">{dep.nome}</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-authority/50 font-bold">{dep.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
