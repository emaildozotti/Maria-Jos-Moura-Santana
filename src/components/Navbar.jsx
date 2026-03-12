import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-soft' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 border border-brand-sand/30 flex items-center justify-center font-serif text-brand-sand text-lg group-hover:bg-brand-sand group-hover:text-white transition-all duration-700">
            M
          </div>
          <span className="text-sm font-bold tracking-[.4em] text-brand-ink uppercase hidden md:block">
            Maria José
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          {['Inicio', 'Dores', 'Metodo', 'FAQ'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-bold tracking-[.3em] uppercase text-brand-authority/60 hover:text-brand-sand transition-colors"
            >
              {link}
            </a>
          ))}
          
          <a 
            href="https://wa.me/5521972621362?text=Ol%C3%A1%20Maria%20Jos%C3%A9%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20reconstru%C3%A7%C3%A3o%20de%20identidade." 
            className="text-[10px] font-bold tracking-[.3em] uppercase bg-brand-authority text-white px-8 py-3 rounded-full hover:bg-brand-ink transition-all shadow-premium"
          >
            Falar com Maria
          </a>
        </div>
      </div>
    </nav>
  )
}
