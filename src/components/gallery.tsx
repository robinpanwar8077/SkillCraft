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
    src: "/2.jpg",
    alt: "Hand holding grand trophy",
    title: "Trophy Distribution"
  },
  {
    src: "/3.jpg", alt: "Focus players intense game",
    title: "Grand Finals"
  },
  {
    src: "/4.jpg", alt: "Chess board close-up",
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
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-black text-xl tracking-tight uppercase">{image.title}</p>
                <div className="h-1 w-12 bg-blue-500 mt-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

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
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-zinc-200/50 group"
          >
            See more on Instagram
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
