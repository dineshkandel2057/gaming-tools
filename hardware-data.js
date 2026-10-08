/* SystemFit PC canonical hardware database.
 * Master selection set: 130 CPUs + 113 GPUs from Build Planner.
 * Existing scores are preserved. Newly scored CPUs use researched gaming-relative values.
 * The generic integrated-graphics placeholder is intentionally non-scored.
 */
const SFP_HARDWARE_DATA = {
  "CPUs": [
    {
      "id": "r3-4100",
      "name": "AMD Ryzen 3 4100",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": false,
      "score": 33,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 gaming index; corroborated by Tom's Hardware budget CPU testing."
    },
    {
      "id": "r5-4500",
      "name": "AMD Ryzen 5 4500",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": false,
      "score": 41,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 gaming index; corroborated by Tom's Hardware budget CPU testing."
    },
    {
      "id": "r5-5500",
      "name": "AMD Ryzen 5 5500",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": false,
      "score": 60,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "r5-5600g",
      "name": "AMD Ryzen 5 5600G · Radeon Graphics",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": true,
      "score": 54,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 gaming index; Tom's Hardware comparison data."
    },
    {
      "id": "r5-5600",
      "name": "AMD Ryzen 5 5600",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 88,
      "gaming": "value",
      "igpu": false,
      "score": 54,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · Mid-Range"
    },
    {
      "id": "r7-5700x3d",
      "name": "AMD Ryzen 7 5700X3D",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 142,
      "gaming": "value",
      "igpu": false,
      "score": 76,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 score index; Tom's Hardware gaming review confirms strong gaming positioning."
    },
    {
      "id": "r5-7500f",
      "name": "AMD Ryzen 5 7500F",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 88,
      "gaming": "value",
      "igpu": false,
      "score": 62,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · Low-End"
    },
    {
      "id": "r5-7600",
      "name": "AMD Ryzen 5 7600",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 88,
      "gaming": "value",
      "igpu": true,
      "score": 66,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · Mid-Range"
    },
    {
      "id": "r5-8400g",
      "name": "AMD Ryzen 5 8400G · Radeon Graphics",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 88,
      "gaming": "entry",
      "igpu": true,
      "score": 58,
      "status": "researched",
      "scoreNote": "Estimated from researched 8400G/8600G/7600 gaming positioning; no directly comparable normalized gaming score found."
    },
    {
      "id": "r5-8600g",
      "name": "AMD Ryzen 5 8600G · Radeon Graphics",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 88,
      "gaming": "value",
      "igpu": true,
      "score": 70,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 score/gaming index."
    },
    {
      "id": "r7-7800x3d",
      "name": "AMD Ryzen 7 7800X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 162,
      "gaming": "balanced",
      "igpu": true,
      "score": 85.6,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "r7-9800x3d",
      "name": "AMD Ryzen 7 9800X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 162,
      "gaming": "high",
      "igpu": true,
      "score": 97,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "r9-9950x",
      "name": "AMD Ryzen 9 9950X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 230,
      "gaming": "high",
      "igpu": true,
      "score": 76.9,
      "status": "researched",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy."
    },
    {
      "id": "i3-12100",
      "name": "Intel Core i3-12100 · UHD Graphics",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 89,
      "gaming": "entry",
      "igpu": true,
      "score": 41,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 gaming index; Tom's Hardware 1080p gaming tests."
    },
    {
      "id": "i3-12100f",
      "name": "Intel Core i3-12100F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 89,
      "gaming": "entry",
      "igpu": false,
      "score": 67.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "i5-12400",
      "name": "Intel Core i5-12400 · UHD Graphics",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 117,
      "gaming": "value",
      "igpu": true,
      "score": 51,
      "status": "researched",
      "scoreNote": "PC Bottleneck Calculators 2026 gaming index; Tom's Hardware 1080p gaming tests."
    },
    {
      "id": "i5-12400f",
      "name": "Intel Core i5-12400F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 117,
      "gaming": "value",
      "igpu": false,
      "score": 69.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "i5-13400f",
      "name": "Intel Core i5-13400F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 148,
      "gaming": "value",
      "igpu": false,
      "score": 60,
      "status": "estimated",
      "scoreNote": "Database score; 13th Gen Raptor Lake · Mid-Range"
    },
    {
      "id": "i5-14400f",
      "name": "Intel Core i5-14400F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 148,
      "gaming": "value",
      "igpu": false,
      "score": 63,
      "status": "estimated",
      "scoreNote": "Database score; 14th Gen Raptor Lake R · Mid-Range"
    },
    {
      "id": "i5-13600k",
      "name": "Intel Core i5-13600K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 181,
      "gaming": "balanced",
      "igpu": true,
      "score": 75,
      "status": "estimated",
      "scoreNote": "Database score; 13th Gen Raptor Lake · Mid-Range"
    },
    {
      "id": "i7-14700k",
      "name": "Intel Core i7-14700K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 253,
      "gaming": "high",
      "igpu": true,
      "score": 76.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "u5-245k",
      "name": "Intel Core Ultra 5 245K",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 159,
      "gaming": "balanced",
      "igpu": true,
      "score": 76,
      "status": "estimated",
      "scoreNote": "Database score; Core Ultra Arrow Lake · Mid-Range"
    },
    {
      "id": "u7-265k",
      "name": "Intel Core Ultra 7 265K",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 250,
      "gaming": "high",
      "igpu": true,
      "score": 84,
      "status": "estimated",
      "scoreNote": "Database score; Core Ultra Arrow Lake · High-End"
    },
    {
      "id": "u9-285k",
      "name": "Intel Core Ultra 9 285K",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 250,
      "gaming": "high",
      "igpu": true,
      "score": 89,
      "status": "estimated",
      "scoreNote": "Database score; Core Ultra Arrow Lake · High-End"
    },
    {
      "id": "cpu-pentium-g4560",
      "name": "Pentium G4560",
      "brand": "Intel Pentium",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": true,
      "score": 10,
      "status": "estimated",
      "scoreNote": "Database score; 7th Gen Kaby Lake · Low-End"
    },
    {
      "id": "cpu-core-i3-6100",
      "name": "Core i3-6100",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 12,
      "status": "estimated",
      "scoreNote": "Database score; 6th Gen Skylake · Low-End"
    },
    {
      "id": "cpu-core-i3-7100",
      "name": "Core i3-7100",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 14,
      "status": "estimated",
      "scoreNote": "Database score; 7th Gen Kaby Lake · Low-End"
    },
    {
      "id": "cpu-ryzen-3-1200",
      "name": "Ryzen 3 1200",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 14,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · Low-End"
    },
    {
      "id": "cpu-ryzen-3-1300x",
      "name": "Ryzen 3 1300X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 16,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · Low-End"
    },
    {
      "id": "cpu-core-i5-6400",
      "name": "Core i5-6400",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 18,
      "status": "estimated",
      "scoreNote": "Database score; 6th Gen Skylake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-3-2200g",
      "name": "Ryzen 3 2200G",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 18,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 2000 Zen+ · Low-End"
    },
    {
      "id": "cpu-core-i5-6500",
      "name": "Core i5-6500",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 20,
      "status": "estimated",
      "scoreNote": "Database score; 6th Gen Skylake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-1400",
      "name": "Ryzen 5 1400",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 20,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · Mid-Range"
    },
    {
      "id": "cpu-core-i5-7400",
      "name": "Core i5-7400",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 21,
      "status": "estimated",
      "scoreNote": "Database score; 7th Gen Kaby Lake · Mid-Range"
    },
    {
      "id": "cpu-core-i3-8100",
      "name": "Core i3-8100",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 22,
      "status": "estimated",
      "scoreNote": "Database score; 8th Gen Coffee Lake · Low-End"
    },
    {
      "id": "cpu-core-i5-7500",
      "name": "Core i5-7500",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 22,
      "status": "estimated",
      "scoreNote": "Database score; 7th Gen Kaby Lake · Mid-Range"
    },
    {
      "id": "cpu-core-i5-6600k",
      "name": "Core i5-6600K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 23,
      "status": "estimated",
      "scoreNote": "Database score; 6th Gen Skylake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-1600",
      "name": "Ryzen 5 1600",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 23,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-2400g",
      "name": "Ryzen 5 2400G",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 24,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 2000 Zen+ · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-1600x",
      "name": "Ryzen 5 1600X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 25,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · Mid-Range"
    },
    {
      "id": "cpu-core-i7-6700",
      "name": "Core i7-6700",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 26,
      "status": "estimated",
      "scoreNote": "Database score; 6th Gen Skylake · High-End"
    },
    {
      "id": "cpu-ryzen-7-1700",
      "name": "Ryzen 7 1700",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 27,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · High-End"
    },
    {
      "id": "cpu-core-i7-6700k",
      "name": "Core i7-6700K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 28,
      "status": "estimated",
      "scoreNote": "Database score; 6th Gen Skylake · High-End"
    },
    {
      "id": "cpu-ryzen-3-3100",
      "name": "Ryzen 3 3100",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 28,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · Low-End"
    },
    {
      "id": "cpu-ryzen-5-2600",
      "name": "Ryzen 5 2600",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 29,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 2000 Zen+ · Mid-Range"
    },
    {
      "id": "cpu-ryzen-7-1700x",
      "name": "Ryzen 7 1700X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 29,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · High-End"
    },
    {
      "id": "cpu-core-i3-10100",
      "name": "Core i3-10100",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 30,
      "status": "estimated",
      "scoreNote": "Database score; 10th Gen Comet Lake · Low-End"
    },
    {
      "id": "cpu-core-i7-7700",
      "name": "Core i7-7700",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 30,
      "status": "estimated",
      "scoreNote": "Database score; 7th Gen Kaby Lake · High-End"
    },
    {
      "id": "cpu-ryzen-7-1800x",
      "name": "Ryzen 7 1800X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 30,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 1000 Zen 1 · High-End"
    },
    {
      "id": "cpu-core-i5-8400",
      "name": "Core i5-8400",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 31,
      "status": "estimated",
      "scoreNote": "Database score; 8th Gen Coffee Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-2600x",
      "name": "Ryzen 5 2600X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 31,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 2000 Zen+ · Mid-Range"
    },
    {
      "id": "cpu-core-i3-10300",
      "name": "Core i3-10300",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 32,
      "status": "estimated",
      "scoreNote": "Database score; 10th Gen Comet Lake · Low-End"
    },
    {
      "id": "cpu-core-i5-8500",
      "name": "Core i5-8500",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 32,
      "status": "estimated",
      "scoreNote": "Database score; 8th Gen Coffee Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-3-3300x",
      "name": "Ryzen 3 3300X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 32,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · Low-End"
    },
    {
      "id": "cpu-core-i7-7700k",
      "name": "Core i7-7700K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 33,
      "status": "estimated",
      "scoreNote": "Database score; 7th Gen Kaby Lake · High-End"
    },
    {
      "id": "cpu-core-i5-9400f",
      "name": "Core i5-9400F",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": false,
      "score": 34,
      "status": "estimated",
      "scoreNote": "Database score; 9th Gen Coffee Lake R · Mid-Range"
    },
    {
      "id": "cpu-core-i7-7740x",
      "name": "Core i7-7740X",
      "brand": "Intel Core",
      "socket": "LGA2066",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 34,
      "status": "estimated",
      "scoreNote": "Database score; Kaby Lake-X HEDT · High-End"
    },
    {
      "id": "cpu-ryzen-7-2700",
      "name": "Ryzen 7 2700",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 34,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 2000 Zen+ · High-End"
    },
    {
      "id": "cpu-core-i5-8600k",
      "name": "Core i5-8600K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 35,
      "status": "estimated",
      "scoreNote": "Database score; 8th Gen Coffee Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-7-2700x",
      "name": "Ryzen 7 2700X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 36,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 2000 Zen+ · High-End"
    },
    {
      "id": "cpu-core-i5-9600k",
      "name": "Core i5-9600K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 37,
      "status": "estimated",
      "scoreNote": "Database score; 9th Gen Coffee Lake R · Mid-Range"
    },
    {
      "id": "cpu-core-i7-8700",
      "name": "Core i7-8700",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 38,
      "status": "estimated",
      "scoreNote": "Database score; 8th Gen Coffee Lake · High-End"
    },
    {
      "id": "cpu-core-i7-7820x",
      "name": "Core i7-7820X",
      "brand": "Intel Core",
      "socket": "LGA2066",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 39,
      "status": "estimated",
      "scoreNote": "Database score; Skylake-X HEDT · High-End"
    },
    {
      "id": "cpu-core-i7-8700k",
      "name": "Core i7-8700K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 40,
      "status": "estimated",
      "scoreNote": "Database score; 8th Gen Coffee Lake · High-End"
    },
    {
      "id": "cpu-core-i5-10400f",
      "name": "Core i5-10400F",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": false,
      "score": 41,
      "status": "estimated",
      "scoreNote": "Database score; 10th Gen Comet Lake · Mid-Range"
    },
    {
      "id": "cpu-core-i9-7900x",
      "name": "Core i9-7900X",
      "brand": "Intel Core",
      "socket": "LGA2066",
      "memory": [
        "DDR4"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 42,
      "status": "estimated",
      "scoreNote": "Database score; Skylake-X HEDT · High-End"
    },
    {
      "id": "cpu-ryzen-5-3600",
      "name": "Ryzen 5 3600",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 42,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · Mid-Range"
    },
    {
      "id": "cpu-core-i5-11400f",
      "name": "Core i5-11400F",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": false,
      "score": 43,
      "status": "estimated",
      "scoreNote": "Database score; 11th Gen Rocket Lake · Low-End"
    },
    {
      "id": "cpu-core-i7-9700k",
      "name": "Core i7-9700K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 43,
      "status": "estimated",
      "scoreNote": "Database score; 9th Gen Coffee Lake R · High-End"
    },
    {
      "id": "cpu-ryzen-5-3600x",
      "name": "Ryzen 5 3600X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 44,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · Mid-Range"
    },
    {
      "id": "cpu-core-i5-10600k",
      "name": "Core i5-10600K",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 45,
      "status": "estimated",
      "scoreNote": "Database score; 10th Gen Comet Lake · Mid-Range"
    },
    {
      "id": "cpu-core-i3-12300",
      "name": "Core i3-12300",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": true,
      "score": 46,
      "status": "estimated",
      "scoreNote": "Database score; 12th Gen Alder Lake · Low-End"
    },
    {
      "id": "cpu-core-i9-9900k",
      "name": "Core i9-9900K",
      "brand": "Intel Core",
      "socket": "LGA1151",
      "memory": [
        "DDR4"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 46,
      "status": "estimated",
      "scoreNote": "Database score; 9th Gen Coffee Lake R · High-End"
    },
    {
      "id": "cpu-core-i3-13100f",
      "name": "Core i3-13100F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": false,
      "score": 48,
      "status": "estimated",
      "scoreNote": "Database score; 13th Gen Raptor Lake · Low-End"
    },
    {
      "id": "cpu-core-i5-11600k",
      "name": "Core i5-11600K",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": true,
      "score": 48,
      "status": "estimated",
      "scoreNote": "Database score; 11th Gen Rocket Lake · Mid-Range"
    },
    {
      "id": "cpu-core-i9-9980xe",
      "name": "Core i9-9980XE",
      "brand": "Intel Core",
      "socket": "LGA2066",
      "memory": [
        "DDR4"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 48,
      "status": "estimated",
      "scoreNote": "Database score; Skylake-X Refresh HEDT · High-End"
    },
    {
      "id": "cpu-ryzen-7-3700x",
      "name": "Ryzen 7 3700X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 48,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · High-End"
    },
    {
      "id": "cpu-ryzen-7-3800x",
      "name": "Ryzen 7 3800X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 49,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · High-End"
    },
    {
      "id": "cpu-core-i7-10700k",
      "name": "Core i7-10700K",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 50,
      "status": "estimated",
      "scoreNote": "Database score; 10th Gen Comet Lake · High-End"
    },
    {
      "id": "cpu-ryzen-7-3800xt",
      "name": "Ryzen 7 3800XT",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 50,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 XT Refresh · High-End"
    },
    {
      "id": "cpu-ryzen-9-3900x",
      "name": "Ryzen 9 3900X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 51,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · High-End"
    },
    {
      "id": "cpu-core-i3-14100f",
      "name": "Core i3-14100F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 65,
      "gaming": "entry",
      "igpu": false,
      "score": 52,
      "status": "estimated",
      "scoreNote": "Database score; 14th Gen Raptor Lake R · Low-End"
    },
    {
      "id": "cpu-core-i7-11700",
      "name": "Core i7-11700",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 52,
      "status": "estimated",
      "scoreNote": "Database score; 11th Gen Rocket Lake · High-End"
    },
    {
      "id": "cpu-ryzen-9-3950x",
      "name": "Ryzen 9 3950X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 52,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 3000 Zen 2 · High-End"
    },
    {
      "id": "cpu-core-i7-11700k",
      "name": "Core i7-11700K",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 53,
      "status": "estimated",
      "scoreNote": "Database score; 11th Gen Rocket Lake · High-End"
    },
    {
      "id": "cpu-core-i9-10900k",
      "name": "Core i9-10900K",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 54,
      "status": "estimated",
      "scoreNote": "Database score; 10th Gen Comet Lake · High-End"
    },
    {
      "id": "cpu-ryzen-5-5600",
      "name": "Ryzen 5 5600",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": true,
      "score": 54,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · Mid-Range"
    },
    {
      "id": "cpu-core-i9-11900k",
      "name": "Core i9-11900K",
      "brand": "Intel Core",
      "socket": "LGA1200",
      "memory": [
        "DDR4"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 56,
      "status": "estimated",
      "scoreNote": "Database score; 11th Gen Rocket Lake · High-End"
    },
    {
      "id": "cpu-ryzen-5-5600x",
      "name": "Ryzen 5 5600X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": true,
      "score": 56,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · Mid-Range"
    },
    {
      "id": "cpu-core-i5-13400f",
      "name": "Core i5-13400F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 125,
      "gaming": "balanced",
      "igpu": false,
      "score": 60,
      "status": "estimated",
      "scoreNote": "Database score; 13th Gen Raptor Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-5500",
      "name": "Ryzen 5 5500",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": true,
      "score": 60,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-ryzen-5-7500f",
      "name": "Ryzen 5 7500F",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": false,
      "score": 62,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · Low-End"
    },
    {
      "id": "cpu-core-i5-14400f",
      "name": "Core i5-14400F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 125,
      "gaming": "balanced",
      "igpu": false,
      "score": 63,
      "status": "estimated",
      "scoreNote": "Database score; 14th Gen Raptor Lake R · Mid-Range"
    },
    {
      "id": "cpu-core-i5-12600k",
      "name": "Core i5-12600K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 125,
      "gaming": "balanced",
      "igpu": true,
      "score": 64,
      "status": "estimated",
      "scoreNote": "Database score; 12th Gen Alder Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-7-5800x",
      "name": "Ryzen 7 5800X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 64,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · High-End"
    },
    {
      "id": "cpu-ryzen-7-5800x3d",
      "name": "Ryzen 7 5800X3D",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 65.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-ryzen-5-7600",
      "name": "Ryzen 5 7600",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 66,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · Mid-Range"
    },
    {
      "id": "cpu-ryzen-9-5900x",
      "name": "Ryzen 9 5900X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 66,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · High-End"
    },
    {
      "id": "cpu-ryzen-7-5700x",
      "name": "Ryzen 7 5700X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 67,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-ryzen-5-5600x3d",
      "name": "Ryzen 5 5600X3D",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 65,
      "gaming": "value",
      "igpu": true,
      "score": 68,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · High-End"
    },
    {
      "id": "cpu-ryzen-5-7600x",
      "name": "Ryzen 5 7600X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 68,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · Mid-Range"
    },
    {
      "id": "cpu-ryzen-9-5950x",
      "name": "Ryzen 9 5950X",
      "brand": "AMD Ryzen",
      "socket": "AM4",
      "memory": [
        "DDR4"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 68,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 5000 Zen 3 · High-End"
    },
    {
      "id": "cpu-core-i5-12400f",
      "name": "Core i5-12400F",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 125,
      "gaming": "value",
      "igpu": false,
      "score": 69.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-i7-12700k",
      "name": "Core i7-12700K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 70,
      "status": "estimated",
      "scoreNote": "Database score; 12th Gen Alder Lake · High-End"
    },
    {
      "id": "cpu-core-i9-12900k",
      "name": "Core i9-12900K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 72,
      "status": "estimated",
      "scoreNote": "Database score; 12th Gen Alder Lake · High-End"
    },
    {
      "id": "cpu-ryzen-9-9900x",
      "name": "Ryzen 9 9900X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 73.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-i5-13600k",
      "name": "Core i5-13600K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 125,
      "gaming": "balanced",
      "igpu": true,
      "score": 75,
      "status": "estimated",
      "scoreNote": "Database score; 13th Gen Raptor Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-5-9600x",
      "name": "Ryzen 5 9600X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "value",
      "igpu": true,
      "score": 75,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 9000 Zen 5 · Mid-Range"
    },
    {
      "id": "cpu-core-i7-13700k",
      "name": "Core i7-13700K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 75.8,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-ultra-5-245k",
      "name": "Core Ultra 5 245K",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 125,
      "gaming": "balanced",
      "igpu": true,
      "score": 76,
      "status": "estimated",
      "scoreNote": "Database score; Core Ultra Arrow Lake · Mid-Range"
    },
    {
      "id": "cpu-ryzen-7-7700x",
      "name": "Ryzen 7 7700X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 76,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · High-End"
    },
    {
      "id": "cpu-core-i7-14700k",
      "name": "Core i7-14700K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 76.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-i9-13900k",
      "name": "Core i9-13900K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 76.8,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-ultra-7-270k-plus",
      "name": "Core Ultra 7 270K Plus",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 150,
      "gaming": "value",
      "igpu": true,
      "score": 77.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy"
    },
    {
      "id": "cpu-core-i5-14600k",
      "name": "Core i5-14600K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 125,
      "gaming": "balanced",
      "igpu": true,
      "score": 78,
      "status": "estimated",
      "scoreNote": "Database score; 14th Gen Raptor Lake R · Mid-Range"
    },
    {
      "id": "cpu-core-i9-14900k",
      "name": "Core i9-14900K",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 78.2,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-ryzen-9-7900x",
      "name": "Ryzen 9 7900X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 80,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · High-End"
    },
    {
      "id": "cpu-ryzen-7-9700x",
      "name": "Ryzen 7 9700X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 82,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 9000 Zen 5 · High-End"
    },
    {
      "id": "cpu-ryzen-9-7950x3d",
      "name": "Ryzen 9 7950X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 83.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-ultra-7-265k",
      "name": "Core Ultra 7 265K",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 150,
      "gaming": "balanced",
      "igpu": true,
      "score": 84,
      "status": "estimated",
      "scoreNote": "Database score; Core Ultra Arrow Lake · High-End"
    },
    {
      "id": "cpu-ryzen-9-7950x",
      "name": "Ryzen 9 7950X",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 84,
      "status": "estimated",
      "scoreNote": "Database score; Ryzen 7000 Zen 4 · High-End"
    },
    {
      "id": "cpu-ryzen-7-7800x3d",
      "name": "Ryzen 7 7800X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "balanced",
      "igpu": true,
      "score": 85.6,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-core-i9-13900ks",
      "name": "Core i9-13900KS",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 86,
      "status": "estimated",
      "scoreNote": "Database score; 13th Gen Raptor Lake · High-End"
    },
    {
      "id": "cpu-ryzen-9-9900x3d",
      "name": "Ryzen 9 9900X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 86.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy"
    },
    {
      "id": "cpu-core-ultra-9-285k",
      "name": "Core Ultra 9 285K",
      "brand": "Intel Core Ultra",
      "socket": "LGA1851",
      "memory": [
        "DDR5"
      ],
      "power": 180,
      "gaming": "value",
      "igpu": true,
      "score": 89,
      "status": "estimated",
      "scoreNote": "Database score; Core Ultra Arrow Lake · High-End"
    },
    {
      "id": "cpu-core-i9-14900ks",
      "name": "Core i9-14900KS",
      "brand": "Intel Core",
      "socket": "LGA1700",
      "memory": [
        "DDR4",
        "DDR5"
      ],
      "power": 180,
      "gaming": "high",
      "igpu": true,
      "score": 90,
      "status": "estimated",
      "scoreNote": "Database score; 14th Gen Raptor Lake R · High-End"
    },
    {
      "id": "cpu-ryzen-9-9950x3d",
      "name": "Ryzen 9 9950X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 95.7,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy"
    },
    {
      "id": "cpu-ryzen-7-9800x3d",
      "name": "Ryzen 7 9800X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "high",
      "igpu": true,
      "score": 97,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; Ryzen 7 9850X3D = 100"
    },
    {
      "id": "cpu-ryzen-9-9950x3d2",
      "name": "Ryzen 9 9950X3D2",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 170,
      "gaming": "high",
      "igpu": true,
      "score": 97.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 review: ~2.7% behind Ryzen 7 9850X3D in gaming"
    },
    {
      "id": "cpu-ryzen-7-9850x3d",
      "name": "Ryzen 7 9850X3D",
      "brand": "AMD Ryzen",
      "socket": "AM5",
      "memory": [
        "DDR5"
      ],
      "power": 105,
      "gaming": "high",
      "igpu": true,
      "score": 100,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 1080p gaming hierarchy; reference CPU"
    }
  ],
  "GPUs": [
    {
      "id": "gtx-1650",
      "name": "NVIDIA GeForce GTX 1650",
      "brand": "NVIDIA GeForce",
      "power": 75,
      "psu": 300,
      "length": 180,
      "tier": 1080,
      "discrete": true,
      "score": 13,
      "status": "estimated",
      "scoreNote": "Database score; GTX 16 Turing · Low-End",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gtx-1660s",
      "name": "NVIDIA GeForce GTX 1660 Super",
      "brand": "NVIDIA GeForce",
      "power": 125,
      "psu": 450,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 22,
      "status": "estimated",
      "scoreNote": "Database score; GTX 16 Turing · Mid-Range",
      "vram": 6,
      "rt": 0.35
    },
    {
      "id": "rtx-2060",
      "name": "NVIDIA GeForce RTX 2060",
      "brand": "NVIDIA GeForce",
      "power": 160,
      "psu": 500,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 29,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · Mid-Range",
      "vram": 6,
      "rt": 0.55
    },
    {
      "id": "rtx-3050",
      "name": "NVIDIA GeForce RTX 3050 6GB",
      "brand": "NVIDIA GeForce",
      "power": 70,
      "psu": 300,
      "length": 200,
      "tier": 1080,
      "discrete": true,
      "score": 21.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 21.9,
        "1440": 17.8,
        "2160": 11.4
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "rtx-3060",
      "name": "NVIDIA GeForce RTX 3060 12GB",
      "brand": "NVIDIA GeForce",
      "power": 170,
      "psu": 550,
      "length": 242,
      "tier": 1080,
      "discrete": true,
      "score": 36,
      "status": "estimated",
      "scoreNote": "Database score; RTX 30 Ampere · Mid-Range",
      "vram": 12,
      "rt": 0.82
    },
    {
      "id": "rx-580",
      "name": "AMD Radeon RX 580 8GB",
      "brand": "AMD Radeon",
      "power": 185,
      "psu": 550,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 15,
      "status": "estimated",
      "scoreNote": "Database score; RX 500 Polaris · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "rx-6600",
      "name": "AMD Radeon RX 6600 8GB",
      "brand": "AMD Radeon",
      "power": 132,
      "psu": 450,
      "length": 193,
      "tier": 1080,
      "discrete": true,
      "score": 25.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 25.5,
        "1440": 14.9,
        "2160": 13.1
      },
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "rx-7600",
      "name": "AMD Radeon RX 7600 8GB",
      "brand": "AMD Radeon",
      "power": 165,
      "psu": 550,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 34.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 34.3,
        "1440": 27.2,
        "2160": 16.6
      },
      "vram": 8,
      "rt": 0.45
    },
    {
      "id": "arc-a380",
      "name": "Intel Arc A380 6GB",
      "brand": "Intel Arc",
      "power": 75,
      "psu": 350,
      "length": 190,
      "tier": 1080,
      "discrete": true,
      "score": 12,
      "status": "estimated",
      "scoreNote": "Database score; Arc Alchemist · Low-End",
      "vram": 6,
      "rt": 0.55
    },
    {
      "id": "arc-a580",
      "name": "Intel Arc A580 8GB",
      "brand": "Intel Arc",
      "power": 185,
      "psu": 600,
      "length": 270,
      "tier": 1080,
      "discrete": true,
      "score": 21,
      "status": "estimated",
      "scoreNote": "Database score; Arc Alchemist · Mid-Range",
      "vram": 8,
      "rt": 0.55
    },
    {
      "id": "arc-b570",
      "name": "Intel Arc B570 10GB",
      "brand": "Intel Arc",
      "power": 150,
      "psu": 550,
      "length": 270,
      "tier": 1080,
      "discrete": true,
      "score": 31.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 31.1,
        "1440": 26.5,
        "2160": 17.7
      },
      "vram": 8,
      "rt": 0.68
    },
    {
      "id": "integrated",
      "name": "Integrated graphics · no separate card",
      "brand": "Integrated graphics",
      "power": 0,
      "psu": 0,
      "length": 0,
      "tier": 0,
      "discrete": false,
      "score": 0,
      "status": "not_applicable",
      "scoreNote": "Generic integrated-graphics placeholder; no single GPU model or benchmark score."
    },
    {
      "id": "rtx-5060",
      "name": "NVIDIA GeForce RTX 5060",
      "brand": "NVIDIA GeForce",
      "power": 145,
      "psu": 550,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 43.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 43.4,
        "1440": 35.8,
        "2160": 19.6
      },
      "vram": 8,
      "rt": 1
    },
    {
      "id": "rtx-5060-ti",
      "name": "NVIDIA GeForce RTX 5060 Ti",
      "brand": "NVIDIA GeForce",
      "power": 180,
      "psu": 600,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 51.6,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 51.6,
        "1440": 43.9,
        "2160": 36.3
      },
      "vram": 8,
      "rt": 1
    },
    {
      "id": "rtx-5070",
      "name": "NVIDIA GeForce RTX 5070",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 65.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 65.1,
        "1440": 57.6,
        "2160": 49
      },
      "vram": 12,
      "rt": 1
    },
    {
      "id": "rtx-5070-ti",
      "name": "NVIDIA GeForce RTX 5070 Ti",
      "brand": "NVIDIA GeForce",
      "power": 300,
      "psu": 750,
      "length": 304,
      "tier": 1440,
      "score": 76.2,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 76.2,
        "1440": 69.8,
        "2160": 61.9
      },
      "vram": 16,
      "rt": 1
    },
    {
      "id": "rtx-5080",
      "name": "NVIDIA GeForce RTX 5080",
      "brand": "NVIDIA GeForce",
      "power": 360,
      "psu": 850,
      "length": 304,
      "tier": 2160,
      "score": 81.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 81.9,
        "1440": 76.7,
        "2160": 69.8
      },
      "vram": 16,
      "rt": 1
    },
    {
      "id": "rtx-5090",
      "name": "NVIDIA GeForce RTX 5090",
      "brand": "NVIDIA GeForce",
      "power": 575,
      "psu": 1000,
      "length": 313,
      "tier": 2160,
      "score": 100,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 100,
        "1440": 100,
        "2160": 100
      },
      "vram": 32,
      "rt": 1
    },
    {
      "id": "rx-9060xt",
      "name": "AMD Radeon RX 9060 XT",
      "brand": "AMD Radeon",
      "power": 160,
      "psu": 650,
      "length": 280,
      "tier": 1080,
      "discrete": true,
      "score": 58,
      "status": "estimated",
      "scoreNote": "Database score; RX 9000 RDNA 4 · Mid-Range",
      "vram": 16,
      "rt": 0.72
    },
    {
      "id": "rx-9070",
      "name": "AMD Radeon RX 9070",
      "brand": "AMD Radeon",
      "power": 220,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "score": 69.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 69.1,
        "1440": 62.1,
        "2160": 52.1
      },
      "vram": 16,
      "rt": 0.7
    },
    {
      "id": "rx-9070xt",
      "name": "AMD Radeon RX 9070 XT",
      "brand": "AMD Radeon",
      "power": 304,
      "psu": 750,
      "length": 304,
      "tier": 2160,
      "score": 76.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 76.9,
        "1440": 69.7,
        "2160": 59.4
      },
      "vram": 16,
      "rt": 0.73
    },
    {
      "id": "gpu-radeon-rx-550",
      "name": "Radeon RX 550",
      "brand": "AMD Radeon",
      "power": 50,
      "psu": 300,
      "length": 180,
      "tier": 1080,
      "discrete": true,
      "score": 4,
      "status": "estimated",
      "scoreNote": "Database score; RX 500 Polaris · Low-End",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-460",
      "name": "Radeon RX 460",
      "brand": "AMD Radeon",
      "power": 75,
      "psu": 350,
      "length": 200,
      "tier": 1080,
      "discrete": true,
      "score": 5,
      "status": "estimated",
      "scoreNote": "Database score; RX 400 Polaris · Low-End",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-geforce-gtx-950",
      "name": "GeForce GTX 950",
      "brand": "NVIDIA GeForce",
      "power": 90,
      "psu": 350,
      "length": 210,
      "tier": 1080,
      "discrete": true,
      "score": 6,
      "status": "estimated",
      "scoreNote": "Database score; GTX 900 Maxwell · Low-End",
      "vram": 2,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-560",
      "name": "Radeon RX 560",
      "brand": "AMD Radeon",
      "power": 80,
      "psu": 350,
      "length": 210,
      "tier": 1080,
      "discrete": true,
      "score": 6,
      "status": "estimated",
      "scoreNote": "Database score; RX 500 Polaris · Low-End",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-gtx-1050",
      "name": "GeForce GTX 1050",
      "brand": "NVIDIA GeForce",
      "power": 75,
      "psu": 300,
      "length": 145,
      "tier": 1080,
      "discrete": true,
      "score": 9,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · Low-End",
      "vram": 2,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-gtx-960",
      "name": "GeForce GTX 960",
      "brand": "NVIDIA GeForce",
      "power": 120,
      "psu": 400,
      "length": 200,
      "tier": 1080,
      "discrete": true,
      "score": 9,
      "status": "estimated",
      "scoreNote": "Database score; GTX 900 Maxwell · Low-End",
      "vram": 2,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-6400",
      "name": "Radeon RX 6400",
      "brand": "AMD Radeon",
      "power": 53,
      "psu": 350,
      "length": 182,
      "tier": 1080,
      "discrete": true,
      "score": 10,
      "status": "estimated",
      "scoreNote": "Database score; RX 6000 RDNA 2 · Low-End",
      "vram": 4,
      "rt": 0.45
    },
    {
      "id": "gpu-geforce-gtx-1050-ti",
      "name": "GeForce GTX 1050 Ti",
      "brand": "NVIDIA GeForce",
      "power": 75,
      "psu": 350,
      "length": 145,
      "tier": 1080,
      "discrete": true,
      "score": 11,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · Low-End",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-470",
      "name": "Radeon RX 470",
      "brand": "AMD Radeon",
      "power": 120,
      "psu": 450,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 11,
      "status": "estimated",
      "scoreNote": "Database score; RX 400 Polaris · Mid-Range",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-arc-a380",
      "name": "Arc A380",
      "brand": "Intel Arc",
      "power": 75,
      "psu": 350,
      "length": 190,
      "tier": 1080,
      "discrete": true,
      "score": 12,
      "status": "estimated",
      "scoreNote": "Database score; Arc Alchemist · Low-End",
      "vram": 6,
      "rt": 0.55
    },
    {
      "id": "gpu-radeon-rx-570",
      "name": "Radeon RX 570",
      "brand": "AMD Radeon",
      "power": 150,
      "psu": 550,
      "length": 250,
      "tier": 1080,
      "discrete": true,
      "score": 12,
      "status": "estimated",
      "scoreNote": "Database score; RX 500 Polaris · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-gtx-1650",
      "name": "GeForce GTX 1650",
      "brand": "NVIDIA GeForce",
      "power": 75,
      "psu": 300,
      "length": 180,
      "tier": 1080,
      "discrete": true,
      "score": 13,
      "status": "estimated",
      "scoreNote": "Database score; GTX 16 Turing · Low-End",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-480",
      "name": "Radeon RX 480",
      "brand": "AMD Radeon",
      "power": 150,
      "psu": 550,
      "length": 250,
      "tier": 1080,
      "discrete": true,
      "score": 13,
      "status": "estimated",
      "scoreNote": "Database score; RX 400 Polaris · Mid-Range",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-geforce-gtx-970",
      "name": "GeForce GTX 970",
      "brand": "NVIDIA GeForce",
      "power": 145,
      "psu": 500,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 14,
      "status": "estimated",
      "scoreNote": "Database score; GTX 900 Maxwell · Mid-Range",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-6500-xt",
      "name": "Radeon RX 6500 XT",
      "brand": "AMD Radeon",
      "power": 107,
      "psu": 400,
      "length": 190,
      "tier": 1080,
      "discrete": true,
      "score": 14,
      "status": "estimated",
      "scoreNote": "Database score; RX 6000 RDNA 2 · Low-End",
      "vram": 4,
      "rt": 0.45
    },
    {
      "id": "gpu-geforce-gtx-1060-3gb",
      "name": "GeForce GTX 1060 3GB",
      "brand": "NVIDIA GeForce",
      "power": 120,
      "psu": 400,
      "length": 250,
      "tier": 1080,
      "discrete": true,
      "score": 15,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · Mid-Range",
      "vram": 3,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-580",
      "name": "Radeon RX 580",
      "brand": "AMD Radeon",
      "power": 185,
      "psu": 550,
      "length": 232,
      "tier": 1080,
      "discrete": true,
      "score": 15,
      "status": "estimated",
      "scoreNote": "Database score; RX 500 Polaris · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-5500-xt",
      "name": "Radeon RX 5500 XT",
      "brand": "AMD Radeon",
      "power": 130,
      "psu": 450,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 16,
      "status": "estimated",
      "scoreNote": "Database score; RX 5000 RDNA 1 · Low-End",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-gtx-980",
      "name": "GeForce GTX 980",
      "brand": "NVIDIA GeForce",
      "power": 165,
      "psu": 500,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 17,
      "status": "estimated",
      "scoreNote": "Database score; GTX 900 Maxwell · Mid-Range",
      "vram": 4,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-590",
      "name": "Radeon RX 590",
      "brand": "AMD Radeon",
      "power": 150,
      "psu": 550,
      "length": 250,
      "tier": 1080,
      "discrete": true,
      "score": 17,
      "status": "estimated",
      "scoreNote": "Database score; RX 500 Polaris · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-gtx-1060-6gb",
      "name": "GeForce GTX 1060 6GB",
      "brand": "NVIDIA GeForce",
      "power": 120,
      "psu": 400,
      "length": 250,
      "tier": 1080,
      "discrete": true,
      "score": 18,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · Mid-Range",
      "vram": 6,
      "rt": 0.35
    },
    {
      "id": "gpu-arc-a580",
      "name": "Arc A580",
      "brand": "Intel Arc",
      "power": 185,
      "psu": 550,
      "length": 232,
      "tier": 1080,
      "discrete": true,
      "score": 21,
      "status": "estimated",
      "scoreNote": "Database score; Arc Alchemist · Mid-Range",
      "vram": 8,
      "rt": 0.55
    },
    {
      "id": "gpu-geforce-gtx-980-ti",
      "name": "GeForce GTX 980 Ti",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 600,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 21,
      "status": "estimated",
      "scoreNote": "Database score; GTX 900 Maxwell · High-End",
      "vram": 6,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-rtx-3050",
      "name": "GeForce RTX 3050",
      "brand": "NVIDIA GeForce",
      "power": 130,
      "psu": 450,
      "length": 242,
      "tier": 1080,
      "discrete": true,
      "score": 21.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 21.9,
        "1440": 17.8,
        "2160": 11.4
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-geforce-gtx-1660-super",
      "name": "GeForce GTX 1660 Super",
      "brand": "NVIDIA GeForce",
      "power": 125,
      "psu": 450,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 22,
      "status": "estimated",
      "scoreNote": "Database score; GTX 16 Turing · Mid-Range",
      "vram": 6,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-vega-56",
      "name": "Radeon RX Vega 56",
      "brand": "AMD Radeon",
      "power": 210,
      "psu": 650,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 22,
      "status": "estimated",
      "scoreNote": "Database score; RX Vega · Mid-Range",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-geforce-titan-x",
      "name": "GeForce TITAN X",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 600,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 23,
      "status": "estimated",
      "scoreNote": "Database score; GTX 900 HEDT · High-End",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-geforce-gtx-1070",
      "name": "GeForce GTX 1070",
      "brand": "NVIDIA GeForce",
      "power": 150,
      "psu": 500,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 24,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-5600-xt",
      "name": "Radeon RX 5600 XT",
      "brand": "AMD Radeon",
      "power": 150,
      "psu": 500,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 25,
      "status": "estimated",
      "scoreNote": "Database score; RX 5000 RDNA 1 · Mid-Range",
      "vram": 6,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-vega-64",
      "name": "Radeon RX Vega 64",
      "brand": "AMD Radeon",
      "power": 295,
      "psu": 750,
      "length": 280,
      "tier": 1080,
      "discrete": true,
      "score": 25,
      "status": "estimated",
      "scoreNote": "Database score; RX Vega · High-End",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-radeon-rx-6600",
      "name": "Radeon RX 6600",
      "brand": "AMD Radeon",
      "power": 132,
      "psu": 450,
      "length": 193,
      "tier": 1080,
      "discrete": true,
      "score": 25.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 25.5,
        "1440": 14.9,
        "2160": 13.1
      },
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-arc-a750",
      "name": "Arc A750",
      "brand": "Intel Arc",
      "power": 225,
      "psu": 600,
      "length": 270,
      "tier": 1080,
      "discrete": true,
      "score": 27,
      "status": "estimated",
      "scoreNote": "Database score; Arc Alchemist · Mid-Range",
      "vram": 8,
      "rt": 0.55
    },
    {
      "id": "gpu-geforce-gtx-1070-ti",
      "name": "GeForce GTX 1070 Ti",
      "brand": "NVIDIA GeForce",
      "power": 180,
      "psu": 500,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 28,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-rtx-2060",
      "name": "GeForce RTX 2060",
      "brand": "NVIDIA GeForce",
      "power": 160,
      "psu": 500,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 29,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · Mid-Range",
      "vram": 6,
      "rt": 0.55
    },
    {
      "id": "gpu-geforce-gtx-1080",
      "name": "GeForce GTX 1080",
      "brand": "NVIDIA GeForce",
      "power": 180,
      "psu": 500,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 30,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · High-End",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-5700",
      "name": "Radeon RX 5700",
      "brand": "AMD Radeon",
      "power": 180,
      "psu": 550,
      "length": 272,
      "tier": 1080,
      "discrete": true,
      "score": 30,
      "status": "estimated",
      "scoreNote": "Database score; RX 5000 RDNA 1 · Mid-Range",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-radeon-rx-6600-xt",
      "name": "Radeon RX 6600 XT",
      "brand": "AMD Radeon",
      "power": 160,
      "psu": 550,
      "length": 243,
      "tier": 1080,
      "discrete": true,
      "score": 30.8,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 30.8,
        "1440": 24.3,
        "2160": 15.6
      },
      "vram": 8,
      "rt": 0.45
    },
    {
      "id": "gpu-arc-b570",
      "name": "Arc B570",
      "brand": "Intel Arc",
      "power": 150,
      "psu": 550,
      "length": 270,
      "tier": 1080,
      "discrete": true,
      "score": 31.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 31.1,
        "1440": 26.5,
        "2160": 17.7
      },
      "vram": 8,
      "rt": 0.68
    },
    {
      "id": "gpu-arc-a770",
      "name": "Arc A770",
      "brand": "Intel Arc",
      "power": 225,
      "psu": 600,
      "length": 280,
      "tier": 1080,
      "discrete": true,
      "score": 32,
      "status": "estimated",
      "scoreNote": "Database score; Arc Alchemist · High-End",
      "vram": 16,
      "rt": 0.55
    },
    {
      "id": "gpu-geforce-rtx-2060-super",
      "name": "GeForce RTX 2060 Super",
      "brand": "NVIDIA GeForce",
      "power": 175,
      "psu": 550,
      "length": 230,
      "tier": 1080,
      "discrete": true,
      "score": 32,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · Mid-Range",
      "vram": 8,
      "rt": 0.65
    },
    {
      "id": "gpu-radeon-rx-5700-xt",
      "name": "Radeon RX 5700 XT",
      "brand": "AMD Radeon",
      "power": 225,
      "psu": 600,
      "length": 279,
      "tier": 1080,
      "discrete": true,
      "score": 33,
      "status": "estimated",
      "scoreNote": "Database score; RX 5000 RDNA 1 · High-End",
      "vram": 8,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-gtx-1080-ti",
      "name": "GeForce GTX 1080 Ti",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 600,
      "length": 290,
      "tier": 1440,
      "discrete": true,
      "score": 34,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 Pascal · High-End",
      "vram": 11,
      "rt": 0.35
    },
    {
      "id": "gpu-geforce-rtx-5050",
      "name": "GeForce RTX 5050",
      "brand": "NVIDIA GeForce",
      "power": 130,
      "psu": 450,
      "length": 220,
      "tier": 1080,
      "discrete": true,
      "score": 34,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 34,
        "1440": 27.1,
        "2160": 15.4
      },
      "vram": 8,
      "rt": 1
    },
    {
      "id": "gpu-radeon-rx-7600",
      "name": "Radeon RX 7600",
      "brand": "AMD Radeon",
      "power": 165,
      "psu": 550,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 34.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 34.3,
        "1440": 27.2,
        "2160": 16.6
      },
      "vram": 8,
      "rt": 0.45
    },
    {
      "id": "gpu-geforce-rtx-4060",
      "name": "GeForce RTX 4060",
      "brand": "NVIDIA GeForce",
      "power": 115,
      "psu": 450,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 35.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 35.1,
        "1440": 28.4,
        "2160": 15.7
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-geforce-rtx-2070",
      "name": "GeForce RTX 2070",
      "brand": "NVIDIA GeForce",
      "power": 175,
      "psu": 550,
      "length": 270,
      "tier": 1080,
      "discrete": true,
      "score": 36,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · Mid-Range",
      "vram": 8,
      "rt": 0.65
    },
    {
      "id": "gpu-geforce-rtx-3060",
      "name": "GeForce RTX 3060",
      "brand": "NVIDIA GeForce",
      "power": 170,
      "psu": 550,
      "length": 242,
      "tier": 1080,
      "discrete": true,
      "score": 36,
      "status": "estimated",
      "scoreNote": "Database score; RTX 30 Ampere · Mid-Range",
      "vram": 12,
      "rt": 0.82
    },
    {
      "id": "gpu-geforce-rtx-3060-ti",
      "name": "GeForce RTX 3060 Ti",
      "brand": "NVIDIA GeForce",
      "power": 200,
      "psu": 600,
      "length": 242,
      "tier": 1440,
      "discrete": true,
      "score": 36.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 36.4,
        "1440": 30.5,
        "2160": 17.5
      },
      "vram": 8,
      "rt": 0.78
    },
    {
      "id": "gpu-titan-xp",
      "name": "Titan Xp",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 650,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 37,
      "status": "estimated",
      "scoreNote": "Database score; GTX 10 HEDT · High-End",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-radeon-rx-6700-xt",
      "name": "Radeon RX 6700 XT",
      "brand": "AMD Radeon",
      "power": 230,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 38.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 38.9,
        "1440": 32.5,
        "2160": 25.3
      },
      "vram": 12,
      "rt": 0.42
    },
    {
      "id": "gpu-geforce-rtx-2070-super",
      "name": "GeForce RTX 2070 Super",
      "brand": "NVIDIA GeForce",
      "power": 215,
      "psu": 650,
      "length": 270,
      "tier": 1080,
      "discrete": true,
      "score": 40,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · Mid-Range",
      "vram": 8,
      "rt": 0.65
    },
    {
      "id": "gpu-geforce-rtx-3070",
      "name": "GeForce RTX 3070",
      "brand": "NVIDIA GeForce",
      "power": 220,
      "psu": 650,
      "length": 242,
      "tier": 1440,
      "discrete": true,
      "score": 42.8,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 42.8,
        "1440": 34.8,
        "2160": 23.6
      },
      "vram": 8,
      "rt": 0.8
    },
    {
      "id": "gpu-geforce-rtx-4060-ti-8gb",
      "name": "GeForce RTX 4060 Ti 8GB",
      "brand": "NVIDIA GeForce",
      "power": 160,
      "psu": 550,
      "length": 245,
      "tier": 1080,
      "discrete": true,
      "score": 51,
      "status": "estimated",
      "scoreNote": "Database score; RTX 40 Ada · Mid-Range",
      "vram": 8,
      "rt": 0.95
    },
    {
      "id": "gpu-geforce-rtx-5060",
      "name": "GeForce RTX 5060",
      "brand": "NVIDIA GeForce",
      "power": 145,
      "psu": 550,
      "length": 240,
      "tier": 1080,
      "discrete": true,
      "score": 43.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 43.4,
        "1440": 35.8,
        "2160": 19.6
      },
      "vram": 8,
      "rt": 1
    },
    {
      "id": "gpu-geforce-rtx-4060-ti-16gb",
      "name": "GeForce RTX 4060 Ti 16GB",
      "brand": "NVIDIA GeForce",
      "power": 160,
      "psu": 550,
      "length": 245,
      "tier": 1080,
      "discrete": true,
      "score": 51,
      "status": "estimated",
      "scoreNote": "Database score; RTX 40 Ada · Mid-Range",
      "vram": 8,
      "rt": 0.95
    },
    {
      "id": "gpu-arc-b580",
      "name": "Arc B580",
      "brand": "Intel Arc",
      "power": 185,
      "psu": 550,
      "length": 232,
      "tier": 1080,
      "discrete": true,
      "score": 45,
      "status": "estimated",
      "scoreNote": "Database score; Arc Battlemage · Mid-Range",
      "vram": 12,
      "rt": 0.68
    },
    {
      "id": "gpu-geforce-rtx-2080-super",
      "name": "GeForce RTX 2080 Super",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 45,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · High-End",
      "vram": 8,
      "rt": 0.65
    },
    {
      "id": "gpu-radeon-rx-9060-xt-8gb",
      "name": "Radeon RX 9060 XT 8GB",
      "brand": "AMD Radeon",
      "power": 160,
      "psu": 550,
      "length": 280,
      "tier": 1440,
      "discrete": true,
      "score": 58,
      "status": "estimated",
      "scoreNote": "Database score; RX 9000 RDNA 4 · Mid-Range",
      "vram": 16,
      "rt": 0.72
    },
    {
      "id": "gpu-geforce-rtx-3070-ti",
      "name": "GeForce RTX 3070 Ti",
      "brand": "NVIDIA GeForce",
      "power": 290,
      "psu": 750,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 46.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 46.4,
        "1440": 40,
        "2160": 23.5
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-geforce-rtx-2080-ti",
      "name": "GeForce RTX 2080 Ti",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 48,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 Turing · High-End",
      "vram": 11,
      "rt": 0.65
    },
    {
      "id": "gpu-radeon-rx-9060-xt-16gb",
      "name": "Radeon RX 9060 XT 16GB",
      "brand": "AMD Radeon",
      "power": 160,
      "psu": 550,
      "length": 280,
      "tier": 1440,
      "discrete": true,
      "score": 58,
      "status": "estimated",
      "scoreNote": "Database score; RX 9000 RDNA 4 · Mid-Range",
      "vram": 16,
      "rt": 0.72
    },
    {
      "id": "gpu-geforce-rtx-5060-ti-8gb",
      "name": "GeForce RTX 5060 Ti 8GB",
      "brand": "NVIDIA GeForce",
      "power": 180,
      "psu": 600,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 51.6,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 51.6,
        "1440": 43.9,
        "2160": 36.3
      },
      "vram": 8,
      "rt": 1
    },
    {
      "id": "gpu-radeon-rx-7600-xt",
      "name": "Radeon RX 7600 XT",
      "brand": "AMD Radeon",
      "power": 190,
      "psu": 600,
      "length": 280,
      "tier": 1080,
      "discrete": true,
      "score": 50.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 50.1,
        "1440": 30,
        "2160": 23.1
      },
      "vram": 8,
      "rt": 0.58
    },
    {
      "id": "gpu-radeon-rx-7700-xt",
      "name": "Radeon RX 7700 XT",
      "brand": "AMD Radeon",
      "power": 245,
      "psu": 700,
      "length": 280,
      "tier": 1440,
      "discrete": true,
      "score": 50.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 50.5,
        "1440": 43.4,
        "2160": 34.3
      },
      "vram": 12,
      "rt": 0.52
    },
    {
      "id": "gpu-geforce-rtx-4060-ti",
      "name": "GeForce RTX 4060 Ti",
      "brand": "NVIDIA GeForce",
      "power": 160,
      "psu": 550,
      "length": 245,
      "tier": 1080,
      "discrete": true,
      "score": 51,
      "status": "estimated",
      "scoreNote": "Database score; RTX 40 Ada · Mid-Range",
      "vram": 8,
      "rt": 0.95
    },
    {
      "id": "gpu-geforce-rtx-5060-ti-16gb",
      "name": "GeForce RTX 5060 Ti 16GB",
      "brand": "NVIDIA GeForce",
      "power": 180,
      "psu": 600,
      "length": 267,
      "tier": 1080,
      "discrete": true,
      "score": 51.6,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 51.6,
        "1440": 43.9,
        "2160": 36.3
      },
      "vram": 8,
      "rt": 1
    },
    {
      "id": "gpu-titan-rtx",
      "name": "TITAN RTX",
      "brand": "NVIDIA GeForce",
      "power": 280,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 53,
      "status": "estimated",
      "scoreNote": "Database score; RTX 20 HEDT · High-End",
      "vram": 8,
      "rt": 0.5
    },
    {
      "id": "gpu-geforce-rtx-4070",
      "name": "GeForce RTX 4070",
      "brand": "NVIDIA GeForce",
      "power": 200,
      "psu": 650,
      "length": 244,
      "tier": 1440,
      "discrete": true,
      "score": 54.7,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 54.7,
        "1440": 46.5,
        "2160": 37.2
      },
      "vram": 12,
      "rt": 0.91
    },
    {
      "id": "gpu-radeon-rx-6800-xt",
      "name": "Radeon RX 6800 XT",
      "brand": "AMD Radeon",
      "power": 300,
      "psu": 750,
      "length": 308,
      "tier": 1440,
      "discrete": true,
      "score": 54.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 54.9,
        "1440": 47.6,
        "2160": 38.1
      },
      "vram": 16,
      "rt": 0.45
    },
    {
      "id": "gpu-radeon-rx-6800",
      "name": "Radeon RX 6800",
      "brand": "AMD Radeon",
      "power": 250,
      "psu": 650,
      "length": 305,
      "tier": 1440,
      "discrete": true,
      "score": 55,
      "status": "estimated",
      "scoreNote": "Database score; RX 6000 RDNA 2 · High-End",
      "vram": 16,
      "rt": 0.45
    },
    {
      "id": "gpu-radeon-rx-6900-xt",
      "name": "Radeon RX 6900 XT",
      "brand": "AMD Radeon",
      "power": 300,
      "psu": 850,
      "length": 267,
      "tier": 2160,
      "discrete": true,
      "score": 57.4,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 57.4,
        "1440": 50.2,
        "2160": 40.5
      },
      "vram": 16,
      "rt": 0.45
    },
    {
      "id": "gpu-radeon-rx-9060-xt",
      "name": "Radeon RX 9060 XT",
      "brand": "AMD Radeon",
      "power": 160,
      "psu": 550,
      "length": 280,
      "tier": 1440,
      "discrete": true,
      "score": 58,
      "status": "estimated",
      "scoreNote": "Database score; RX 9000 RDNA 4 · Mid-Range",
      "vram": 16,
      "rt": 0.72
    },
    {
      "id": "gpu-radeon-rx-7800-xt",
      "name": "Radeon RX 7800 XT",
      "brand": "AMD Radeon",
      "power": 263,
      "psu": 700,
      "length": 302,
      "tier": 1440,
      "discrete": true,
      "score": 58.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 58.1,
        "1440": 50.7,
        "2160": 40.7
      },
      "vram": 16,
      "rt": 0.55
    },
    {
      "id": "gpu-geforce-rtx-3080-ti",
      "name": "GeForce RTX 3080 Ti",
      "brand": "NVIDIA GeForce",
      "power": 350,
      "psu": 750,
      "length": 313,
      "tier": 1440,
      "discrete": true,
      "score": 58.7,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 58.7,
        "1440": 53.3,
        "2160": 46
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-radeon-rx-9070-gre",
      "name": "Radeon RX 9070 GRE",
      "brand": "AMD Radeon",
      "power": 220,
      "psu": 650,
      "length": 310,
      "tier": 1440,
      "discrete": true,
      "score": 59.2,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 59.2,
        "1440": 51.8,
        "2160": 41.8
      },
      "vram": 16,
      "rt": 0.72
    },
    {
      "id": "gpu-geforce-rtx-3090",
      "name": "GeForce RTX 3090",
      "brand": "NVIDIA GeForce",
      "power": 350,
      "psu": 750,
      "length": 313,
      "tier": 2160,
      "discrete": true,
      "score": 60.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 60.3,
        "1440": 54.7,
        "2160": 47.9
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-radeon-rx-6950-xt",
      "name": "Radeon RX 6950 XT",
      "brand": "AMD Radeon",
      "power": 335,
      "psu": 850,
      "length": 331,
      "tier": 2160,
      "discrete": true,
      "score": 60.5,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 60.5,
        "1440": 53.5,
        "2160": 43.6
      },
      "vram": 16,
      "rt": 0.45
    },
    {
      "id": "gpu-geforce-rtx-3080-10gb",
      "name": "GeForce RTX 3080 10GB",
      "brand": "NVIDIA GeForce",
      "power": 320,
      "psu": 750,
      "length": 285,
      "tier": 1440,
      "discrete": true,
      "score": 62,
      "status": "estimated",
      "scoreNote": "Database score; RTX 30 Ampere · High-End",
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-geforce-rtx-4070-super",
      "name": "GeForce RTX 4070 Super",
      "brand": "NVIDIA GeForce",
      "power": 220,
      "psu": 650,
      "length": 244,
      "tier": 1440,
      "discrete": true,
      "score": 62.2,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 62.2,
        "1440": 54.5,
        "2160": 44.4
      },
      "vram": 12,
      "rt": 0.95
    },
    {
      "id": "gpu-geforce-rtx-3090-ti",
      "name": "GeForce RTX 3090 Ti",
      "brand": "NVIDIA GeForce",
      "power": 450,
      "psu": 850,
      "length": 336,
      "tier": 2160,
      "discrete": true,
      "score": 64.7,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 64.7,
        "1440": 59.7,
        "2160": 53.5
      },
      "vram": 8,
      "rt": 0.82
    },
    {
      "id": "gpu-geforce-rtx-5070",
      "name": "GeForce RTX 5070",
      "brand": "NVIDIA GeForce",
      "power": 250,
      "psu": 650,
      "length": 267,
      "tier": 1440,
      "discrete": true,
      "score": 65.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 65.1,
        "1440": 57.6,
        "2160": 49
      },
      "vram": 12,
      "rt": 1
    },
    {
      "id": "gpu-radeon-rx-7900-gre",
      "name": "Radeon RX 7900 GRE",
      "brand": "AMD Radeon",
      "power": 260,
      "psu": 700,
      "length": 310,
      "tier": 1440,
      "discrete": true,
      "score": 67,
      "status": "estimated",
      "scoreNote": "Database score; RX 7000 RDNA 3 · High-End",
      "vram": 16,
      "rt": 0.56
    },
    {
      "id": "gpu-geforce-rtx-4070-ti-super",
      "name": "GeForce RTX 4070 Ti Super",
      "brand": "NVIDIA GeForce",
      "power": 285,
      "psu": 700,
      "length": 285,
      "tier": 1440,
      "discrete": true,
      "score": 69.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 69.3,
        "1440": 62.1,
        "2160": 52.8
      },
      "vram": 16,
      "rt": 0.98
    },
    {
      "id": "gpu-radeon-rx-7900-xt",
      "name": "Radeon RX 7900 XT",
      "brand": "AMD Radeon",
      "power": 315,
      "psu": 750,
      "length": 320,
      "tier": 1440,
      "discrete": true,
      "score": 71.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 71.3,
        "1440": 64.6,
        "2160": 54
      },
      "vram": 20,
      "rt": 0.58
    },
    {
      "id": "gpu-geforce-rtx-5070-ti",
      "name": "GeForce RTX 5070 Ti",
      "brand": "NVIDIA GeForce",
      "power": 300,
      "psu": 750,
      "length": 304,
      "tier": 1440,
      "discrete": true,
      "score": 76.2,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 76.2,
        "1440": 69.8,
        "2160": 61.9
      },
      "vram": 16,
      "rt": 1
    },
    {
      "id": "gpu-radeon-rx-9070",
      "name": "Radeon RX 9070",
      "brand": "AMD Radeon",
      "power": 220,
      "psu": 650,
      "length": 310,
      "tier": 1440,
      "discrete": true,
      "score": 69.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 69.1,
        "1440": 62.1,
        "2160": 52.1
      },
      "vram": 16,
      "rt": 0.7
    },
    {
      "id": "gpu-radeon-rx-9070-xt",
      "name": "Radeon RX 9070 XT",
      "brand": "AMD Radeon",
      "power": 304,
      "psu": 750,
      "length": 330,
      "tier": 1440,
      "discrete": true,
      "score": 76.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 76.9,
        "1440": 69.7,
        "2160": 59.4
      },
      "vram": 16,
      "rt": 0.73
    },
    {
      "id": "gpu-geforce-rtx-4080-super",
      "name": "GeForce RTX 4080 Super",
      "brand": "NVIDIA GeForce",
      "power": 320,
      "psu": 750,
      "length": 304,
      "tier": 2160,
      "discrete": true,
      "score": 78,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 78,
        "1440": 70.9,
        "2160": 62.6
      },
      "vram": 16,
      "rt": 1
    },
    {
      "id": "gpu-radeon-rx-7900-xtx",
      "name": "Radeon RX 7900 XTX",
      "brand": "AMD Radeon",
      "power": 355,
      "psu": 850,
      "length": 345,
      "tier": 2160,
      "discrete": true,
      "score": 79.3,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 79.3,
        "1440": 73.1,
        "2160": 63.7
      },
      "vram": 24,
      "rt": 0.6
    },
    {
      "id": "gpu-geforce-rtx-5080-16gb",
      "name": "GeForce RTX 5080 16GB",
      "brand": "NVIDIA GeForce",
      "power": 360,
      "psu": 850,
      "length": 304,
      "tier": 2160,
      "discrete": true,
      "score": 81.9,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 81.9,
        "1440": 76.7,
        "2160": 69.8
      },
      "vram": 16,
      "rt": 1
    },
    {
      "id": "gpu-geforce-rtx-4090",
      "name": "GeForce RTX 4090",
      "brand": "NVIDIA GeForce",
      "power": 450,
      "psu": 850,
      "length": 304,
      "tier": 2160,
      "discrete": true,
      "score": 90.1,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 90.1,
        "1440": 85.7,
        "2160": 80.4
      },
      "vram": 24,
      "rt": 1
    },
    {
      "id": "gpu-geforce-rtx-5090",
      "name": "GeForce RTX 5090",
      "brand": "NVIDIA GeForce",
      "power": 575,
      "psu": 1000,
      "length": 313,
      "tier": 2160,
      "discrete": true,
      "score": 100,
      "status": "direct",
      "scoreNote": "Tom's Hardware 2026 raster hierarchy; RTX 5090 = 100",
      "resolutionScores": {
        "1080": 100,
        "1440": 100,
        "2160": 100
      },
      "vram": 32,
      "rt": 1
    }
  ]
};
