import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: '70vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Empowering Teachers, Enabling Quality Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-gray-700 max-w-prose"
          >
            EduBridge connects urban and rural educators in Malaysia to share resources, build mentorships, and grow together — aligned with UN SDG 4.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Explore Platform</button>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-gray-200 text-gray-900 font-medium hover:bg-white">Learn more</a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/30 to-transparent pointer-events-none rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
