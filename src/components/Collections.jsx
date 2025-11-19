import { motion } from 'framer-motion'

const collections = [
  {
    name: 'Core Minimal',
    image: 'https://images.unsplash.com/photo-1752253604157-65fb42c30816?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3JlJTIwTWluaW1hbHxlbnwwfDB8fHwxNzYzNTE5NzE3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Tech Utility',
    image: 'https://images.unsplash.com/photo-1752253604157-65fb42c30816?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3JlJTIwTWluaW1hbHxlbnwwfDB8fHwxNzYzNTE5NzE3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Soft Neutrals',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Colecciones</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {collections.map((c, i) => (
          <motion.a
            key={c.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img src={c.image} alt={c.name} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white text-xl font-semibold">{c.name}</h3>
              <motion.span
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="rounded-xl bg-white/90 px-3 py-1 text-black"
              >
                Ver
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
