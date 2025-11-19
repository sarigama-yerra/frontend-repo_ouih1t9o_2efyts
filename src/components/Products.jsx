import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
      </div>
      <div className="p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight">{p.title}</h3>
          <span className="rounded-lg bg-white/10 px-2 py-1 text-xs">${p.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-white/60 line-clamp-1">{p.description}</p>
        <div className="mt-3 flex items-center gap-2">
          {p.colors?.slice(0,4).map((c, i) => (
            <span key={i} className="h-4 w-4 rounded-full border border-white/20" style={{ background: c }} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-white/10 p-2 text-center text-white opacity-0 backdrop-blur-xl group-hover:pointer-events-auto group-hover:opacity-100"
      >
        Añadir a la bolsa
      </motion.div>
    </motion.div>
  )
}

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/products/featured`)
        if (res.ok) {
          const data = await res.json()
          if (!Array.isArray(data) || data.length === 0) {
            await fetch(`${API}/api/seed`, { method: 'POST' })
            const res2 = await fetch(`${API}/api/products/featured`)
            const d2 = await res2.json()
            setProducts(d2)
          } else {
            setProducts(data)
          }
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse h-72 rounded-2xl bg-white/5" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Destacados</h2>
        <a href="#" className="text-white/70 hover:text-white">Ver todo</a>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {products.map((p, i) => (
            <ProductCard key={p._id || i} p={p} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
