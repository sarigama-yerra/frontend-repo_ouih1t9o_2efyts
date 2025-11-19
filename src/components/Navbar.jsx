import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Novedades', href: '#new' },
    { label: 'Hombre', href: '#men' },
    { label: 'Mujer', href: '#women' },
    { label: 'Unisex', href: '#unisex' },
    { label: 'Colecciones', href: '#collections' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-white/90 to-white/60 shadow-lg"></div>
              <span className="text-lg font-semibold tracking-tight">FLM</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition">
                <Search className="h-4 w-4"/>
                Buscar
              </button>
              <motion.button whileTap={{ scale: 0.95 }} className="relative rounded-xl border border-white/10 bg-white/10 p-2">
                <ShoppingBag className="h-5 w-5"/>
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white text-xs text-black flex items-center justify-center">2</span>
              </motion.button>
              <button className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <X/> : <Menu/>}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-4 py-3 space-y-2">
                  {links.map((l) => (
                    <a key={l.label} href={l.href} className="block rounded-xl bg-white/5 px-3 py-2 text-white/80 hover:text-white">
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </div>
  )
}
