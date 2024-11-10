"use client";
import { motion } from "framer-motion";
import Particles from "./components/particles";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center fixed inset-0 overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-2"
        >
          Peak Manopchantaroj
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl mb-8 text-neutral-600 dark:text-neutral-400"
        >
          Computer Engineer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/home"
            className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg hover:scale-110 transform inline-block hover:font-semibold"
          >
            Enter Site →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}