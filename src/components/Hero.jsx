import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-white/20 to-white/0 blur-3xl"/>
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl"/>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Minimal. Moderno. Atemporal.
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="mt-6 text-lg text-white/70"
            >
              Ropa diseñada para moverse contigo. Telas premium, siluetas limpias y detalles pensados.
            </motion.p>
            <div className="mt-10 flex gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#new"
                className="rounded-xl bg-white text-black px-6 py-3 font-medium shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)]"
              >
                Ver novedades
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#collections"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white/90"
              >
                Colecciones
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-white/70">
              <span className="h-2 w-2 rounded-full bg-green-400"/>
              <p className="text-sm">Envío 24/48h • Devoluciones gratis • Pago seguro</p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1620799139504-5c594302357f?q=80&w=1600&auto=format&fit=crop"
                alt="Hero"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 text-white"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm">Nueva colección cápsula • FW25</p>
                <p className="text-sm font-semibold">Edición limitada</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
