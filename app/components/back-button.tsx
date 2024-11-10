"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-8 left-8"
    >
      <Link
        href="/"
        className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg hover:scale-110 transform inline-block hover:font-semibold"
      >
        ← Back
      </Link>
    </motion.div>
  );
}