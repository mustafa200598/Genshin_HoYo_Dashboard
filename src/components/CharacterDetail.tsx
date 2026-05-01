import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star } from 'lucide-react'
import type { Character } from '../services/dataService'
import { getElClass, AR } from '../services/dataService'

const GAME_LABEL: Record<string,string> = { hsr:'Honkai: Star Rail', gi:'Genshin Impact', zzz:'Zenless Zone Zero' }

export function CharacterDetail({ char, onClose }: { char: Character | null; onClose: () => void }) {
  const elClass = getElClass(char?.element || '')
  const [err, setErr] = React.useState(false)
  React.useEffect(() => { setErr(false) }, [char?.id])

  return (
    <AnimatePresence>
      {char && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 380 }}
            onClick={e => e.stopPropagation()}
            className={`${elClass} relative w-full max-w-md rounded-t-[28px] sm:rounded-[24px] overflow-hidden`}
            style={{ background: 'var(--surface)', boxShadow: `0 -2px 60px var(--el-glow, rgba(0,0,0,0.2))` }}>

            {/* Mobile handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1"><div className="w-8 h-1 rounded-full bg-white/15" /></div>

            <button onClick={onClose}
              className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 flex items-center justify-center transition-colors">
              <X className="w-4 h-4 text-white/60" />
            </button>

            {/* Hero */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <div className={`absolute inset-0 ${char.rarity === 5 ? 'rarity-5' : 'rarity-4'}`} />
              {!err && char.icon && (
                <img src={char.icon} alt="" onError={() => setErr(true)}
                  className="absolute inset-0 w-full h-full object-contain mix-blend-soft-light opacity-40 scale-[1.4]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />

              {/* Avatar circle */}
              {!err && char.icon && (
                <div className="absolute bottom-5 left-5 w-[60px] h-[60px] rounded-2xl overflow-hidden ring-2 ring-white/10 bg-black/30"
                  style={{ boxShadow: `0 0 24px var(--el-glow)` }}>
                  <img src={char.icon} alt="" className="w-full h-full object-cover" onError={() => setErr(true)} />
                </div>
              )}

              {/* Info */}
              <div className="absolute bottom-5 right-5 left-[90px] text-right">
                <div className="flex items-center justify-end gap-[3px] mb-1.5">
                  {Array.from({ length: char.rarity }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white font-en leading-tight mb-0.5">{char.name}</h2>
                <p className="text-[10px] font-semibold tracking-wide" style={{ color: 'var(--el)' }}>
                  {AR[char.element] || char.element} · {AR[char.path] || char.path}
                </p>
              </div>

              {/* Neon line */}
              <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, var(--el), transparent)` }} />
            </div>

            {/* Info Grid */}
            <div className="p-5 grid grid-cols-2 gap-2.5">
              {[
                { label: 'العنصر', value: AR[char.element] || char.element },
                { label: char.game === 'zzz' ? 'التخصص' : char.game === 'gi' ? 'السلاح' : 'المسار', value: AR[char.path] || char.path },
                { label: 'الندرة', value: `${char.rarity} نجوم` },
                { label: 'اللعبة', value: GAME_LABEL[char.game] },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="glass-card rounded-xl p-3">
                  <p className="text-[8px] text-white/30 font-bold mb-1">{item.label}</p>
                  <p className="text-[11px] sm:text-xs text-white font-semibold font-en">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 pb-5 flex items-center justify-between text-[8px] text-white/20 font-mono">
              <span>#{char.id}</span>
              <span className="font-en">{GAME_LABEL[char.game]}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
