import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, Sparkles, Users, Flame, Snowflake, Wind, Zap, Atom, Eye, Dumbbell, Heart, ChevronUp, Crown, Shield } from 'lucide-react'
import { loadGame, type Character, type GameId, AR, GAME_CONFIG } from './services/dataService'
import { CharacterCard } from './components/CharacterCard'
import { CharacterDetail } from './components/CharacterDetail'

const EL_ICONS: Record<string,any> = {
  Fire:Flame, Ice:Snowflake, Wind:Wind, Lightning:Zap, Quantum:Atom, Imaginary:Eye, Physical:Dumbbell,
  Pyro:Flame, Hydro:Snowflake, Anemo:Wind, Cryo:Snowflake, Dendro:Eye, Geo:Shield, Electro:Zap,
  Elec:Zap, Physics:Dumbbell, Ether:Eye,
}

const GAMES: { id: GameId; color: string; gradient: string }[] = [
  { id: 'hsr', color: '#818cf8', gradient: 'from-indigo-500/20 to-purple-500/20' },
  { id: 'gi', color: '#fbbf24', gradient: 'from-amber-500/20 to-orange-500/20' },
  { id: 'zzz', color: '#38bdf8', gradient: 'from-sky-500/20 to-cyan-500/20' },
]

export default function App() {
  const [chars, setChars] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [elFilter, setElFilter] = useState('All')
  const [pathFilter, setPathFilter] = useState('All')
  const [rarityFilter, setRarityFilter] = useState<number|null>(null)
  const [selected, setSelected] = useState<Character|null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [game, setGame] = useState<GameId>('hsr')

  useEffect(() => {
    setLoading(true); setElFilter('All'); setPathFilter('All'); setSearch(''); setRarityFilter(null)
    loadGame(game).then(c => { setChars(c); setLoading(false) })
  }, [game])

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const cfg = GAME_CONFIG[game]
  const activeGame = GAMES.find(g => g.id === game)!

  const filtered = useMemo(() => chars.filter(c => {
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false
    if (elFilter !== 'All' && c.element !== elFilter) return false
    if (pathFilter !== 'All' && c.path !== pathFilter) return false
    if (rarityFilter && c.rarity !== rarityFilter) return false
    return true
  }), [chars, search, elFilter, pathFilter, rarityFilter])

  const stats = useMemo(() => ({
    total: chars.length, five: chars.filter(c => c.rarity===5).length, four: chars.filter(c => c.rarity===4).length
  }), [chars])

  return (
    <div className="min-h-screen relative" dir="rtl">

      {/* ═══════ HEADER ═══════ */}
      <header className="sticky top-0 z-40 glass">
        <div className="max-w-6xl mx-auto px-4 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="relative">
              <div className="w-9 h-9 rounded-[12px] flex items-center justify-center gradient-animate"
                style={{ background: `linear-gradient(135deg, ${activeGame.color}, ${activeGame.color}80)` }}>
                <Sparkles className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[var(--bg)]" />
            </div>
            <div>
              <h1 className="text-[13px] sm:text-sm font-extrabold leading-none">دليل قنشن وهوفرس</h1>
              <p className="text-[8px] text-white/25 font-medium mt-0.5 font-en">{cfg.nameEn}</p>
            </div>
          </div>

          {/* Game Switcher - compact pills */}
          <div className="flex items-center gap-1 bg-white/[0.03] rounded-xl p-1 border border-white/[0.04]">
            {GAMES.map(g => (
              <button key={g.id} onClick={() => setGame(g.id)}
                className={`relative px-2.5 sm:px-3 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-bold transition-all font-en
                  ${game === g.id ? 'text-white' : 'text-white/30 hover:text-white/50'}`}>
                {game === g.id && (
                  <motion.div layout className={`absolute inset-0 rounded-lg bg-gradient-to-l ${g.gradient} border border-white/[0.08]`}
                    initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} />
                )}
                <span className="relative z-10">{GAME_CONFIG[g.id].nameEn.split(':')[0].split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-[-40%] left-[20%] w-[500px] h-[500px] rounded-full blur-[150px] pulse-glow"
          style={{ background: `${activeGame.color}08` }} />

        <div className="max-w-6xl mx-auto px-4 pt-8 sm:pt-12 pb-6 sm:pb-8 relative z-10">
          <motion.div key={game} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <p className="text-[10px] font-bold tracking-[0.2em] mb-3" style={{ color: activeGame.color }}>
              {cfg.nameEn.toUpperCase()}
            </p>
            <h2 className="text-xl sm:text-3xl font-black leading-tight mb-2">
              قاعدة بيانات{' '}
              <span className="font-en bg-clip-text text-transparent gradient-animate"
                style={{ backgroundImage: `linear-gradient(135deg, ${activeGame.color}, white, ${activeGame.color})`, backgroundSize: '200% 200%' }}>
                الشخصيات
              </span>
            </h2>
            <p className="text-[11px] sm:text-xs text-white/30 max-w-md leading-relaxed">
              تصفح جميع الشخصيات القابلة للعب مع تفاصيل العناصر والمسارات والندرة.
            </p>
          </motion.div>

          {/* Stats Row */}
          <div className="flex gap-2 mt-6">
            {[
              { label: 'المجموع', val: stats.total, icon: Users, color: activeGame.color },
              { label: '5 نجوم', val: stats.five, icon: Crown, color: '#fbbf24' },
              { label: '4 نجوم', val: stats.four, icon: Shield, color: '#a78bfa' },
            ].map((s, i) => (
              <motion.div key={`${game}-${i}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
                className="flex-1 glass-card rounded-2xl p-3 sm:p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px shimmer" />
                <div className="flex items-center gap-2 mb-1.5">
                  <s.icon className="w-3 h-3" style={{ color: s.color }} />
                  <span className="text-[8px] sm:text-[9px] text-white/30 font-semibold">{s.label}</span>
                </div>
                <p className="text-lg sm:text-xl font-black font-mono" style={{ color: s.color }}>
                  {loading ? '—' : s.val}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SEARCH + GRID ═══════ */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        {/* Search */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-white/20" />
            <input type="text" placeholder="ابحث عن شخصية..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/[0.025] border border-white/[0.05] rounded-xl pr-10 pl-4 py-2.5 text-[12px] text-white placeholder:text-white/15 focus:outline-none focus:border-white/10 transition-all" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)}
            className={`px-3 sm:px-4 rounded-xl flex items-center gap-2 text-[11px] font-semibold transition-all border
              ${showFilters ? 'bg-white/[0.06] border-white/10 text-white/60' : 'bg-white/[0.02] border-white/[0.04] text-white/25 hover:text-white/40'}`}>
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">فلاتر</span>
          </button>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }} className="overflow-hidden mb-4">
              <div className="glass-card rounded-2xl p-4 space-y-4">
                {/* Element */}
                <div>
                  <p className="text-[8px] text-white/25 font-bold mb-2 tracking-wider">العنصر</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cfg.elements.map(el => {
                      const Icon = EL_ICONS[el]
                      const active = elFilter === el
                      return (
                        <button key={el} onClick={() => setElFilter(el)}
                          className={`px-2.5 py-[6px] rounded-lg text-[10px] font-semibold transition-all flex items-center gap-1
                            ${active ? 'bg-white/[0.08] text-white border border-white/15' : 'text-white/25 hover:text-white/40 border border-transparent'}`}>
                          {Icon && <Icon className="w-[11px] h-[11px]" />} {AR[el] || el}
                        </button>
                      )
                    })}
                  </div>
                </div>
                {/* Path */}
                <div>
                  <p className="text-[8px] text-white/25 font-bold mb-2 tracking-wider">{cfg.pathLabel}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cfg.paths.map(p => (
                      <button key={p} onClick={() => setPathFilter(p)}
                        className={`px-2.5 py-[6px] rounded-lg text-[10px] font-semibold transition-all
                          ${pathFilter === p ? 'bg-white/[0.08] text-white border border-white/15' : 'text-white/25 hover:text-white/40 border border-transparent'}`}>
                        {AR[p] || p}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Rarity */}
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-[8px] text-white/25 font-bold tracking-wider">الندرة</p>
                  {[null,5,4].map(r => (
                    <button key={String(r)} onClick={() => setRarityFilter(r)}
                      className={`px-2.5 py-[5px] rounded-lg text-[10px] font-semibold transition-all
                        ${rarityFilter===r ? 'bg-white/[0.08] text-white border border-white/15' : 'text-white/25 border border-transparent'}`}>
                      {r===null ? 'الكل' : `${r}★`}
                    </button>
                  ))}
                  <span className="mr-auto text-[9px] text-white/15 font-mono">{filtered.length}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-6 h-6" style={{ color: activeGame.color }} />
            </motion.div>
          </div>
        ) : (
          <motion.div layout className="flex flex-wrap gap-[6px] sm:gap-2.5 justify-center sm:justify-start">
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => <CharacterCard key={`${c.game}-${c.id}`} char={c} index={i} onClick={() => setSelected(c)} />)}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="w-full text-center py-20">
                <Search className="w-8 h-8 text-white/10 mx-auto mb-3" />
                <p className="text-white/20 text-xs">لا توجد شخصيات مطابقة</p>
              </div>
            )}
          </motion.div>
        )}
      </section>

      {/* ═══════ DEVELOPER ═══════ */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] pulse-glow"
            style={{ background: `${activeGame.color}08` }} />

          <motion.div whileHover={{ rotate: -4, scale: 1.05 }} className="relative flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] p-[2px] gradient-animate"
              style={{ backgroundImage: `linear-gradient(135deg, ${activeGame.color}, #38bdf8, ${activeGame.color})`, backgroundSize: '200% 200%' }}>
              <div className="w-full h-full rounded-[18px] bg-[var(--bg)] flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent font-en"
                  style={{ backgroundImage: `linear-gradient(135deg, ${activeGame.color}, #38bdf8)` }}>B</span>
              </div>
            </div>
          </motion.div>

          <div className="text-center sm:text-right flex-1 relative z-10">
            <p className="text-[9px] font-bold mb-1 tracking-wider" style={{ color: activeGame.color }}>المطوّر</p>
            <h3 className="text-lg sm:text-xl font-black text-white font-en mb-1">Bob</h3>
            <p className="text-[11px] text-white/30 leading-relaxed max-w-sm mb-3">
              مطوّر ويب ومصمم واجهات متخصص في بناء تجارب تفاعلية احترافية.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
              {['React','TypeScript','Framer Motion','Tailwind'].map(t => (
                <span key={t} className="px-2 py-[3px] rounded-md text-[8px] font-bold font-en border border-white/[0.06] text-white/30 bg-white/[0.02]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-white/[0.03] py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[10px] text-white/15">دليل قنشن وهوفرس</span>
          <p className="text-[9px] text-white/10 flex items-center gap-1">
            صُنع بـ <Heart className="w-2.5 h-2.5 text-pink-500/60" fill="currentColor" /> بواسطة Bob
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 left-5 z-40 w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] transition-colors">
            <ChevronUp className="w-4 h-4 text-white/40" />
          </motion.button>
        )}
      </AnimatePresence>

      <CharacterDetail char={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
