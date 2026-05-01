export type StarRailCharacter = {
  id: string
  name: string
  path: string
  type: string
  rarity: 4 | 5
  association?: string
  portrait: string
}

export const CHARACTERS: StarRailCharacter[] = [
  { id: "1412", name: "Cerydra", path: "Harmony", type: "Wind", rarity: 5, portrait: "/img/hsr/portraits/1412.webp" },
  { id: "1410", name: "Hysilens", path: "Nihility", type: "Physical", rarity: 5, portrait: "/img/hsr/portraits/1410.webp" },
  { id: "1408", name: "Phainon", path: "Destruction", type: "Physical", rarity: 5, portrait: "/img/hsr/portraits/1408.webp" },
  { id: "1406", name: "Cipher", path: "Nihility", type: "Quantum", rarity: 5, portrait: "/img/hsr/portraits/1406.webp" },
  { id: "1409", name: "Hyacine", path: "Remembrance", type: "Wind", rarity: 5, portrait: "/img/hsr/portraits/1409.webp" },
  { id: "1405", name: "Anaxa", path: "Erudition", type: "Wind", rarity: 5, portrait: "/img/hsr/portraits/1405.webp" },
  { id: "1407", name: "Castorice", path: "Remembrance", type: "Quantum", rarity: 5, portrait: "/img/hsr/portraits/1407.webp" },
  { id: "1404", name: "Mydei", path: "Destruction", type: "Imaginary", rarity: 5, portrait: "/img/hsr/portraits/1404.webp" },
  { id: "1403", name: "Tribbie", path: "Harmony", type: "Quantum", rarity: 5, portrait: "/img/hsr/portraits/1403.webp" },
  { id: "1401", name: "The Herta", path: "Erudition", type: "Ice", rarity: 5, portrait: "/img/hsr/portraits/1401.webp" },
  { id: "1402", name: "Aglaea", path: "Remembrance", type: "Lightning", rarity: 5, portrait: "/img/hsr/portraits/1402.webp" },
  { id: "1225", name: "Fugue", path: "Nihility", type: "Fire", rarity: 5, portrait: "/img/hsr/portraits/1225.webp" },
  { id: "1317", name: "Rappa", path: "Erudition", type: "Imaginary", rarity: 5, portrait: "/img/hsr/portraits/1317.webp" },
  { id: "1220", name: "Feixiao", path: "Hunt", type: "Wind", rarity: 5, portrait: "/img/hsr/portraits/1220.webp" },
  { id: "1222", name: "Lingsha", path: "Abundance", type: "Fire", rarity: 5, portrait: "/img/hsr/portraits/1222.webp" },
  { id: "1218", name: "Jiaoqiu", path: "Nihility", type: "Fire", rarity: 5, portrait: "/img/hsr/portraits/1218.webp" },
  { id: "1314", name: "Jade", path: "Erudition", type: "Quantum", rarity: 5, portrait: "/img/hsr/portraits/1314.webp" },
  { id: "1221", name: "Yunli", path: "Destruction", type: "Physical", rarity: 5, portrait: "/img/hsr/portraits/1221.webp" },
  { id: "1310", name: "Firefly", path: "Destruction", type: "Fire", rarity: 5, association: "Stellaron Hunters", portrait: "/img/hsr/portraits/1310.webp" },
  { id: "1308", name: "Acheron", path: "Nihility", type: "Lightning", rarity: 5, association: "Self-Annihilators", portrait: "/img/hsr/portraits/1308.webp" },
  { id: "1309", name: "Robin", path: "Harmony", type: "Physical", rarity: 5, association: "Penacony", portrait: "/img/hsr/portraits/1309.webp" },
  { id: "1304", name: "Aventurine", path: "Preservation", type: "Imaginary", rarity: 5, association: "Ten Stonehearts", portrait: "/img/hsr/portraits/1304.webp" },
  { id: "1306", name: "Sparkle", path: "Harmony", type: "Quantum", rarity: 5, association: "Masked Fools", portrait: "/img/hsr/portraits/1306.webp" },
  { id: "1307", name: "Black Swan", path: "Nihility", type: "Wind", rarity: 5, portrait: "/img/hsr/portraits/1307.webp" },
  { id: "1305", name: "Dr. Ratio", path: "Hunt", type: "Imaginary", rarity: 5, portrait: "/img/hsr/portraits/1305.webp" },
  { id: "1303", name: "Ruan Mei", path: "Harmony", type: "Ice", rarity: 5, portrait: "/img/hsr/portraits/1303.webp" },
  { id: "1313", name: "Sunday", path: "Harmony", type: "Imaginary", rarity: 5, portrait: "/img/hsr/portraits/1313.webp" },
  { id: "1315", name: "Boothill", path: "Hunt", type: "Physical", rarity: 5, portrait: "/img/hsr/portraits/1315.webp" },
  { id: "1001", name: "March 7th", path: "Preservation", type: "Ice", rarity: 4, association: "Astral Express", portrait: "/img/hsr/portraits/1001.webp" },
  { id: "1005", name: "Kafka", path: "Nihility", type: "Lightning", rarity: 5, association: "Stellaron Hunters", portrait: "/img/hsr/portraits/1005.webp" },
  { id: "1006", name: "Silver Wolf", path: "Nihility", type: "Quantum", rarity: 5, portrait: "/img/hsr/portraits/1006.webp" },
  { id: "1101", name: "Bronya", path: "Harmony", type: "Wind", rarity: 5, association: "Belobog", portrait: "/img/hsr/portraits/1101.webp" },
  { id: "1102", name: "Seele", path: "Hunt", type: "Quantum", rarity: 5, association: "Belobog", portrait: "/img/hsr/portraits/1102.webp" },
  { id: "1104", name: "Gepard", path: "Preservation", type: "Ice", rarity: 5, association: "Belobog", portrait: "/img/hsr/portraits/1104.webp" },
  { id: "1107", name: "Clara", path: "Destruction", type: "Physical", rarity: 5, association: "Belobog", portrait: "/img/hsr/portraits/1107.webp" },
  { id: "1112", name: "Topaz", path: "Hunt", type: "Fire", rarity: 5, portrait: "/img/hsr/portraits/1112.webp" },
  { id: "1204", name: "Jing Yuan", path: "Erudition", type: "Lightning", rarity: 5, portrait: "/img/hsr/portraits/1204.webp" },
  { id: "1205", name: "Blade", path: "Destruction", type: "Wind", rarity: 5, portrait: "/img/hsr/portraits/1205.webp" },
  { id: "1208", name: "Fu Xuan", path: "Preservation", type: "Quantum", rarity: 5, portrait: "/img/hsr/portraits/1208.webp" },
  { id: "1212", name: "Jingliu", path: "Destruction", type: "Ice", rarity: 5, portrait: "/img/hsr/portraits/1212.webp" },
]
