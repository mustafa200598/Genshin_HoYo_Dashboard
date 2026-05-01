import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Character } from '../services/dataService'
import { getElClass } from '../services/dataService'

export function CharacterCard({ char, onClick, index = 0 }: { char: Character; onClick?: () => void; index?: number }) {
  const elClass = getElClass(char.element)
  const [err, setErr] = React.useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.015, 0.4), ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${elClass} relative overflow-hidden rounded-2xl cursor-pointer group
        w-[calc(33.33%-8px)] sm:w-[130px] md:w-[138px] lg:w-[148px]
        ${char.rarity === 5 ? 'rarity-5' : 'rarity-4'}
        border border-white/[0.04] transition-all duration-300
        hover:border-[var(--el,rgba(255,255,255,0.1))]`}
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {!err && char.icon ? (
          <img src={char.icon} alt={char.name} draggable={false} loading="lazy" decoding="async"
            onError={() => setErr(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={char.accentColor ? { background: `${char.accentColor}20` } : {}}>
            <span className="text-xl font-black text-white/20 font-en">{char.name.slice(0,2)}</span>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Element dot - top right */}
        <div className="absolute top-2 right-2 w-[14px] h-[14px] rounded-full ring-1 ring-white/20"
          style={{ background: 'var(--el)', boxShadow: '0 0 8px var(--el-glow)' }} />

        {/* Stars - top left */}
        <div className="absolute top-2 left-2 flex gap-[2px]">
          {Array.from({ length: Math.min(char.rarity, 5) }).map((_, i) => (
            <Star key={i} className="w-[9px] h-[9px] text-amber-400 fill-amber-400 drop-shadow-sm" />
          ))}
        </div>

        {/* Name - bottom */}
        <div className="absolute bottom-0 inset-x-0 px-2.5 pb-2 pt-6">
          <p className="text-[10px] sm:text-[11px] font-bold text-white truncate leading-none font-en">{char.name}</p>
          <p className="text-[7px] sm:text-[8px] text-white/40 font-medium truncate font-en mt-[3px]">{char.path}</p>
        </div>
      </div>

      {/* Hover glow ring */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 24px var(--el-glow), 0 0 16px var(--el-glow)` }} />
    </motion.article>
  )
}
