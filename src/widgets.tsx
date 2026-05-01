import { Zap, Sword, Crown, Play, SkipBack, SkipForward, Heart, ChevronRight } from 'lucide-react'
import { WinBar } from './components'

/* ===== CHARACTER PROFILE WIDGET ===== */
export const ProfileWidget = () => (
  <div className="glass-strong rounded-3xl overflow-hidden glow-pink hover:scale-[1.02] transition-transform duration-500">
    <WinBar title="Profile" color="pink" />
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg glow-pink">
          <Zap className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 font-bold tracking-[0.3em] uppercase">Element</p>
          <p className="text-xl font-black text-gray-700">Spectro</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg glow-blue">
          <Sword className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 font-bold tracking-[0.3em] uppercase">Weapon</p>
          <p className="text-xl font-black text-gray-700">Broadblade</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
          <Crown className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-[9px] text-gray-400 font-bold tracking-[0.3em] uppercase">Rank</p>
          <p className="text-xl font-black text-gray-700">S-Rank</p>
        </div>
      </div>
    </div>
  </div>
)

/* ===== ABILITIES WIDGET ===== */
export const AbilitiesWidget = () => {
  const abilities = [
    { name: 'Resonance', desc: 'Spectral Strike', color: 'from-pink-300 to-rose-400' },
    { name: 'Forte Circuit', desc: 'Awakened Power', color: 'from-blue-300 to-indigo-400' },
    { name: 'Intro Skill', desc: 'Dimensional Rift', color: 'from-purple-300 to-violet-400' },
    { name: 'Outro Skill', desc: 'Resonance Echo', color: 'from-amber-300 to-orange-400' },
  ]
  return (
    <div className="glass-strong rounded-3xl overflow-hidden glow-blue hover:scale-[1.02] transition-transform duration-500">
      <WinBar title="Abilities" color="blue" />
      <div className="p-5 space-y-3">
        {abilities.map((a, i) => (
          <div key={i} className="glass rounded-2xl p-3.5 flex items-center justify-between group hover:bg-white/30 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-md`}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-black text-gray-700 uppercase tracking-wider">{a.name}</p>
                <p className="text-[10px] text-gray-400 font-medium">{a.desc}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== MUSIC PLAYER WIDGET ===== */
export const MusicWidget = () => (
  <div className="glass-strong rounded-3xl overflow-hidden glow-purple hover:scale-[1.02] transition-transform duration-500">
    <WinBar title="Now Playing" color="purple" />
    <div className="p-6">
      <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-5 relative group border-2 border-white/30">
        <img src="/rover.jpg" alt="Album" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-white text-sm font-black drop-shadow-lg">Wuthering Waves OST</p>
          <p className="text-white/60 text-[10px] font-medium">Kuro Games</p>
        </div>
      </div>
      <h3 className="text-lg font-black text-gray-800">ReDreaming Angel</h3>
      <p className="text-[10px] text-gray-400 font-bold tracking-[0.3em] uppercase mt-0.5">HOYO-MIX</p>
      <div className="mt-4">
        <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden">
          <div className="w-[42%] h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full relative">
            <div className="absolute right-[-4px] top-[-3px] w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,107,157,0.7)] border-2 border-pink-400"></div>
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-gray-400 font-mono">1:24</span>
          <span className="text-[10px] text-gray-400 font-mono">3:10</span>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-7 mt-4">
        <button className="text-gray-400 hover:text-gray-600 transition-colors"><SkipBack className="w-5 h-5" /></button>
        <button className="w-13 h-13 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform glow-pink p-3.5">
          <Play className="w-5 h-5 ml-0.5" fill="white" />
        </button>
        <button className="text-gray-400 hover:text-gray-600 transition-colors"><SkipForward className="w-5 h-5" /></button>
      </div>
    </div>
  </div>
)

/* ===== LORE WIDGET ===== */
export const LoreWidget = () => (
  <div className="glass-strong rounded-3xl p-7 border-2 border-dashed border-white/40">
    <p className="text-gray-500 leading-relaxed text-sm">
      A mysterious Resonator who awakened with no memory of their past. Known only as "Rover,"
      they possess an extraordinary ability to resonate with Echoes — powerful remnants of fallen creatures.
      Their journey through Solaris-3 is one of discovery and forging bonds.
    </p>
    <div className="flex items-center space-x-3 mt-5 pt-4 border-t-2 border-dashed border-white/30">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shadow-lg">
        <Heart className="w-4 h-4 text-white" fill="white" />
      </div>
      <div>
        <p className="text-sm font-bold text-gray-700">Rover</p>
        <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase font-bold">The Awakened One</p>
      </div>
    </div>
  </div>
)
