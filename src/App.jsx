import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Collections from './components/Collections'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(99,102,241,0.18),transparent),radial-gradient(400px_200px_at_90%_20%,rgba(236,72,153,0.15),transparent),radial-gradient(500px_250px_at_50%_90%,rgba(34,197,94,0.12),transparent)]"/>
      <Navbar/>
      <Hero/>
      <Products/>
      <Collections/>
      <footer className="mx-auto max-w-7xl px-4 pb-10 text-white/60">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"/>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} FLM Wear — Minimalismo funcional</p>
          <div className="flex gap-6 text-sm">
            <a className="hover:text-white" href="#">Privacidad</a>
            <a className="hover:text-white" href="#">Términos</a>
            <a className="hover:text-white" href="#">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
