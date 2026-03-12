export default function Footer() {
  return (
    <footer className="bg-brand-paper py-32 border-t border-brand-authority/5 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 opacity-[0.01] bg-noise"></div>
      
      <div className="container mx-auto relative z-10 px-10">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border border-brand-sand/20 flex items-center justify-center font-serif text-brand-sand text-xl mb-12">
            M
          </div>
          
          <div className="text-center">
            <p className="text-[12px] text-brand-authority/40 uppercase tracking-[0.5em] font-bold leading-relaxed mb-6">
              Maria José Moura Santana
            </p>
            <p className="text-[11px] text-brand-authority/20 uppercase tracking-[0.2em] font-medium leading-relaxed max-w-xs mx-auto">
              © 2026 Todos os direitos reservados. <br />
              <span className="italic font-serif lowercase tracking-normal font-light">A reconstrução começa na sua permissão.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
