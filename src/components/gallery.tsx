"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  {
    src: "/1.jpg",
    alt: "Tournament match in progress",
    title: "Elite Matches"
  },
  {
    src: "/4.jpg",
    alt: "Hand holding grand trophy",
    title: "Trophy Distribution"
  },
  {
    src: "/13.jpg", alt: "Focus players intense game",
    title: "Grand Finals"
  },
  {
    src: "/12.jpg", alt: "Chess board close-up",
    title: "Strategic Depth"
  },
  {
    src: "/5.jpg", alt: "Tournament hall atmosphere",
    title: "World-Class Arena"
  },
  {
    src: "/6.webp", alt: "Winning smile with trophy",
    title: "Champions Moment"
  },
  {
    src: "/7.webp", alt: "Clock and pieces match end",
    title: "Time Pressure"
  },
  {
    src: "/8.jpg", alt: "Young prodigy matched",
    title: "Future Stars"
  },
  {
    src: "/9.jpg", alt: "Prize pool display",
    title: "Grand Prize Pool"
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-black tracking-[0.3em] text-blue-600 uppercase mb-4">Event Legacy</h2>
            <h3 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tighter uppercase mb-6">
              Tournament Gallery
            </h3>

            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 sm:mt-24 text-center"
            >
              <a
                href="https://www.instagram.com/skillcraftchess/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-zinc-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-50 transition-all shadow-2xl shadow-zinc-200/80 border border-zinc-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-zinc-900 group-hover:text-blue-600 transition-colors">See more on Instagram</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] bg-zinc-100 border border-zinc-100 shadow-lg shadow-zinc-200/50"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
