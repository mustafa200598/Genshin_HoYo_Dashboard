import { Heart, Star, Zap, Sword, Crown, Camera, Music, Users, Search, Sun, Diamond, Sparkles, ChevronRight, Play, SkipBack, SkipForward, Crosshair } from 'lucide-react'

/* ===== Crosshair Decoration ===== */
export const CrosshairDeco = ({ className = '' }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`}>
    <Crosshair className="w-5 h-5 text-pink-300/30" strokeWidth={1} />
  </div>
)

/* ===== Floating Tag Badge ===== */
export const TagBadge = ({ label, color = 'pink', icon: Icon = Star, rotate = '0deg' }: { label: string; color?: string; icon?: any; rotate?: string }) => {
  const colors: Record<string, string> = {
    pink: 'glass-neon-pink text-pink-500',
    blue: 'glass-neon-blue text-blue-500',
    purple: 'glass-dark text-purple-400',
  }
  return (
    <div className={`${colors[color]} rounded-full px-4 py-1.5 flex items-center space-x-2 anim-float`} style={{ transform: `rotate(${rotate})` }}>
      <Icon className="w-3.5 h-3.5" />
      <span className="text-[11px] font-bold tracking-widest uppercase">{label}</span>
    </div>
  )
}

/* ===== Window Title Bar ===== */
export const WinBar = ({ title, color = 'pink' }: { title: string; color?: string }) => {
  const c = color === 'pink' ? ['bg-pink-400','bg-pink-300','bg-pink-200'] : color === 'blue' ? ['bg-blue-400','bg-blue-300','bg-blue-200'] : ['bg-purple-400','bg-purple-300','bg-purple-200']
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-white/20">
      <div className="flex space-x-[5px]">
        <span className={`w-[10px] h-[10px] rounded-full ${c[0]}`}></span>
        <span className={`w-[10px] h-[10px] rounded-full ${c[1]}`}></span>
        <span className={`w-[10px] h-[10px] rounded-full ${c[2]}`}></span>
      </div>
      <p className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">{title}</p>
      <div className="w-8"></div>
    </div>
  )
}

/* ===== Corner Brackets ===== */
export const CornerBrackets = () => (
  <>
    <div className="absolute top-3 left-3 w-6 h-6 border-t-[3px] border-l-[3px] border-white/50 rounded-tl-md z-20"></div>
    <div className="absolute top-3 right-3 w-6 h-6 border-t-[3px] border-r-[3px] border-white/50 rounded-tr-md z-20"></div>
    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-[3px] border-l-[3px] border-white/50 rounded-bl-md z-20"></div>
    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-[3px] border-r-[3px] border-white/50 rounded-br-md z-20"></div>
  </>
)

export { Heart, Star, Zap, Sword, Crown, Camera, Music, Users, Search, Sun, Diamond, Sparkles, ChevronRight, Play, SkipBack, SkipForward, Crosshair }
