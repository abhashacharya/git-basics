import { motion } from "framer-motion";
import heroClipart from "@/assets/hero-clipart.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 bg-mesh relative overflow-hidden">
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-coral/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block glass-card text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Senior Digital Marketing Officer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight font-display">
            Hi, I'm
            <br />
            <span className="text-gradient">Sulove Shrestha</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">
            I craft data-driven marketing campaigns that transform brands, boost engagement, and deliver measurable results across digital channels.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-coral-gradient text-coral-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity glow-coral"
            >
              Let's Connect
            </a>
            <a
              href="#services"
              className="glass-card text-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-input transition-colors"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-coral/10 blur-2xl scale-90" />
            <img
              src={heroClipart}
              alt="Digital marketing professional with social media and analytics icons"
              width={1024}
              height={1024}
              className="w-full max-w-md md:max-w-lg relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
