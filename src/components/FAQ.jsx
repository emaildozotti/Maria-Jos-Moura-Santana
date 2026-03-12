import { useState } from 'react'

const faqs = [
  {
    pergunta: 'Já tentei de tudo e nada funciona. Por que este processo seria diferente?',
    resposta: 'Porque você tratou comportamentos, mas nunca tocou na raiz. Aqui, nós confrontamos a ilusão que te mantém presa. É reconstrução estrutural da identidade, não dicas de rotina.'
  },
  {
    pergunta: 'Tenho medo de descobrir que não existe nada em mim se eu me curar.',
    resposta: 'Esse é o medo sequestrador falando. O que está do outro lado não é o vazio, é você mesma, inteira, antes que a vida te impusesse rascunhos alheios. Você vai encontrar a sua vida original.'
  },
  {
    pergunta: 'Sou evangélica/religiosa. Esse processo é místico?',
    resposta: 'Pelo contrário. Nós unimos a saúde emocional à base espiritual em Deus. Espiritualidade sem saúde emocional vira fuga, e saúde emocional sem Deus carece de Destino. Aqui, as duas caminham juntas.'
  },
  {
    pergunta: 'Como é feita a mentoria online?',
    resposta: 'Via Zoom, com o mesmo protocolo de intervenção firme e segura. A distância não inibe a verdade que liberta. Atendemos mulheres em todo o mundo que decidiram retomar o mapa de si mesmas.'
  },
  {
    pergunta: 'Preciso estar "pronta" para começar?',
    resposta: 'Pronta é uma ilusão. Você só precisa da coragem de se dar permissão. O processo é sagrado e começa no exato momento da sua decisão de soltar as correntes da dependência.'
  }
]

export default function FAQ() {
  const [aberto, setAberto] = useState(null)

  const toggle = (index) => {
    setAberto(aberto === index ? null : index)
  }

  return (
    <section id="faq" className="relative section-padding overflow-hidden bg-brand-paper noise-overlay">
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 text-center" data-aos="fade-up">
            <h2 className="text-6xl md:text-8xl font-serif text-brand-ink leading-[1.1] mb-8">
              Dúvidas <br />
              <span className="text-brand-sand italic">Frequentes.</span>
            </h2>
          </div>

          <div className="space-y-6" data-aos="fade-up">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium overflow-hidden border border-brand-authority/5">
                <button
                  className="w-full flex justify-between items-center py-10 px-12 text-left focus:outline-none group bg-white hover:bg-brand-mist/20 transition-all duration-500"
                  onClick={() => toggle(index)}
                >
                  <span className={`text-xl md:text-2xl font-serif transition-all duration-700 ${aberto === index ? 'text-brand-sand italic pr-4 scale-[1.02]' : 'text-brand-ink font-light'}`}>
                    {faq.pergunta}
                  </span>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full border border-brand-authority/5 transition-transform duration-1000 ${aberto === index ? 'rotate-180 bg-brand-sand/5' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors duration-1000 ${aberto === index ? 'text-brand-sand' : 'text-brand-authority/30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div 
                  className={`transition-all duration-1000 ease-[cubic-bezier(0.2, 0.8, 0.2, 1)] overflow-hidden ${aberto === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pb-12 pt-6 px-12 text-brand-authority/70 font-light leading-relaxed text-lg max-w-4xl font-sans">
                    {faq.resposta}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Conversion Section */}
          <div className="mt-48 text-center" data-aos="zoom-in">
            <div className="bg-brand-ink p-24 relative overflow-hidden group rounded-premium shadow-premium border border-brand-sand/10">
              <div className="absolute inset-0 opacity-[0.03] bg-noise"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sand/5 blur-[150px] rounded-full"></div>
              
              <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1.1] relative z-10 font-light">
                Dê o seu primeiro passo <br />
                <span className="italic text-brand-sand">para a liberdade definitiva.</span>
              </h3>
              
              <p className="text-2xl text-white/50 font-serif italic mb-16 max-w-3xl mx-auto leading-relaxed relative z-10">
                "A travessia contra a dependência emocional não é para as perfeitas, mas para as dispostas. Quando você decidir dar um basta, eu estarei aqui."
              </p>
              
              <a 
                id="aplicar-final"
                href="https://wa.me/5521972621362?text=Ol%C3%A1%20Maria%20Jos%C3%A9%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20reconstru%C3%A7%C3%A3o%20de%20identidade." 
                className="btn-primary"
              >
                Inicar Travessia Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
