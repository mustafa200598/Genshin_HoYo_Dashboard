// ===== 3-Game Data Service (HSR + GI + ZZZ) =====

export type GameId = 'hsr' | 'gi' | 'zzz'

export type Character = {
  id: string; name: string; rarity: number; element: string; path: string;
  icon: string; game: GameId; accentColor?: string
}

const ENKA = 'https://enka.network'

const HSR_PATH: Record<string,string> = { Warrior:'Destruction', Rogue:'Hunt', Mage:'Erudition', Shaman:'Harmony', Warlock:'Nihility', Knight:'Preservation', Priest:'Abundance', Memory:'Remembrance' }
const GI_WEAPON: Record<string,string> = { WEAPON_SWORD_ONE_HAND:'Sword', WEAPON_CLAYMORE:'Claymore', WEAPON_POLE:'Polearm', WEAPON_BOW:'Bow', WEAPON_CATALYST:'Catalyst' }
const GI_QUALITY: Record<string,number> = { QUALITY_ORANGE_SP:5, QUALITY_ORANGE:5, QUALITY_PURPLE:4 }

const _cache: Partial<Record<GameId, Character[]>> = {}

export async function loadHSR(): Promise<Character[]> {
  if (_cache.hsr) return _cache.hsr
  const [avR, locR] = await Promise.all([fetch('/data/avatars.json'), fetch('/data/hsr.json')])
  const avatars: Record<string, any> = await avR.json()
  const en: Record<string,string> = (await locR.json()).en || {}
  const chars: Character[] = []
  for (const [id, av] of Object.entries(avatars)) {
    const name = en[(av as any).AvatarName?.Hash] || ''
    if (!name || /^\d+$/.test(name)) continue
    chars.push({
      id, name, rarity: (av as any).Rarity, element: (av as any).Element, game: 'hsr',
      path: HSR_PATH[(av as any).AvatarBaseType] || (av as any).AvatarBaseType,
      icon: `${ENKA}${(av as any).AvatarSideIconPath}`,
    })
  }
  chars.sort((a,b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
  return (_cache.hsr = chars)
}

export async function loadGI(): Promise<Character[]> {
  if (_cache.gi) return _cache.gi
  const [avR, locR] = await Promise.all([fetch('/data/gi-avatars.json'), fetch('/data/gi-locs.json')])
  const avatars: Record<string, any> = await avR.json()
  const en: Record<string,string> = (await locR.json()).en || {}
  const chars: Character[] = []
  for (const [id, av] of Object.entries(avatars)) {
    const name = en[String((av as any).NameTextMapHash)] || ''
    if (!name || /^\d+$/.test(name)) continue
    chars.push({
      id, name, rarity: GI_QUALITY[(av as any).QualityType] || 4, element: (av as any).Element || 'None', game: 'gi',
      path: GI_WEAPON[(av as any).WeaponType] || '',
      icon: (av as any).SideIconName ? `${ENKA}${(av as any).SideIconName}` : '',
    })
  }
  chars.sort((a,b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
  return (_cache.gi = chars)
}

export async function loadZZZ(): Promise<Character[]> {
  if (_cache.zzz) return _cache.zzz
  const avatars: Record<string, any> = await (await fetch('/data/zzz-avatars.json')).json()
  const chars: Character[] = []
  for (const [id, av] of Object.entries(avatars)) {
    const name = ((av as any).Name || '').replace(/^Avatar_(Fe)?[Mm]ale_Size\d+_/, '')
    if (!name) continue
    chars.push({
      id, name, rarity: (av as any).Rarity === 4 ? 5 : 4, element: (av as any).ElementTypes || '', game: 'zzz',
      path: (av as any).ProfessionType || '',
      icon: (av as any).CircleIcon ? `${ENKA}${(av as any).CircleIcon}` : '',
      accentColor: (av as any).Colors?.Accent,
    })
  }
  chars.sort((a,b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
  return (_cache.zzz = chars)
}

export async function loadGame(g: GameId): Promise<Character[]> {
  switch (g) { case 'hsr': return loadHSR(); case 'gi': return loadGI(); case 'zzz': return loadZZZ() }
}

export function getElClass(el: string): string {
  const m: Record<string,string> = {
    Fire:'el-fire', Ice:'el-ice', Wind:'el-wind', Lightning:'el-lightning', Thunder:'el-lightning',
    Physical:'el-physical', Quantum:'el-quantum', Imaginary:'el-imaginary',
    Electro:'el-electro', Elec:'el-elec', Physics:'el-physics', Ether:'el-ether',
    Pyro:'el-pyro', Hydro:'el-hydro', Anemo:'el-anemo', Cryo:'el-cryo', Dendro:'el-dendro', Geo:'el-geo',
  }
  return m[el] || ''
}

export const AR: Record<string,string> = {
  Fire:'نار',Ice:'جليد',Wind:'رياح',Lightning:'برق',Physical:'فيزيائي',Quantum:'كمّي',Imaginary:'خيالي',
  Pyro:'ناري',Hydro:'مائي',Anemo:'هوائي',Cryo:'جليدي',Dendro:'نباتي',Geo:'صخري',Electro:'كهربائي',
  Elec:'كهربائي',Physics:'فيزيائي',Ether:'أثيري',
  Destruction:'الدمار',Hunt:'الصيد',Erudition:'المعرفة',Harmony:'التناغم',Nihility:'العدم',Preservation:'الحفظ',Abundance:'الوفرة',Remembrance:'الذاكرة',
  Sword:'سيف',Claymore:'سيف ثقيل',Polearm:'رمح',Bow:'قوس',Catalyst:'محفز',
  Attack:'هجوم',Stun:'صعق',Support:'دعم',Rupture:'تمزيق',Defense:'دفاع',Anomaly:'شذوذ',
  All:'الكل',
}

export const GAME_CONFIG: Record<GameId, { nameAr:string; nameEn:string; elements:string[]; paths:string[]; pathLabel:string }> = {
  hsr: { nameAr:'هونكاي ستار ريل', nameEn:'Honkai: Star Rail', elements:['All','Fire','Ice','Wind','Lightning','Physical','Quantum','Imaginary'], paths:['All','Destruction','Hunt','Erudition','Harmony','Nihility','Preservation','Abundance','Remembrance'], pathLabel:'المسار' },
  gi: { nameAr:'جنشن امباكت', nameEn:'Genshin Impact', elements:['All','Pyro','Hydro','Anemo','Cryo','Dendro','Geo','Electro'], paths:['All','Sword','Claymore','Polearm','Bow','Catalyst'], pathLabel:'السلاح' },
  zzz: { nameAr:'زنلس زون زيرو', nameEn:'Zenless Zone Zero', elements:['All','Elec','Physics','Fire','Ice','Ether'], paths:['All','Attack','Stun','Support','Rupture','Defense','Anomaly'], pathLabel:'التخصص' },
}
