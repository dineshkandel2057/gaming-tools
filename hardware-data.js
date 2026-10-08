/* SystemFit PC canonical hardware database.
 * Master selection set: 130 CPUs + 113 GPUs from Build Planner.
 * Existing scores are preserved. Newly scored CPUs use researched gaming-relative values.
 * The generic integrated-graphics placeholder is intentionally non-scored.
 */
const SFP_HARDWARE_DATA = {
  "CPUs": [
    {
      "id": "b550-matx",
      "name": "B550 Micro-ATX · DDR4",
      "socket": "AM4",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "B550",
      "m2": 2
    },
    {
      "id": "b550-atx",
      "name": "B550 ATX · DDR4",
      "socket": "AM4",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "B550",
      "m2": 2
    },
    {
      "id": "x570-atx",
      "name": "X570 ATX · DDR4",
      "socket": "AM4",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "X570",
      "m2": 2
    },
    {
      "id": "b650-matx",
      "name": "B650 Micro-ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "Micro-ATX",
      "chipset": "B650",
      "m2": 2
    },
    {
      "id": "b650-atx",
      "name": "B650 ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "B650",
      "m2": 2
    },
    {
      "id": "b850-atx",
      "name": "B850 ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "B850",
      "m2": 3
    },
    {
      "id": "x870e-atx",
      "name": "X870E ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "X870E",
      "m2": 4
    },
    {
      "id": "b760-ddr4",
      "name": "B760 ATX · DDR4",
      "socket": "LGA1700",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "B760",
      "m2": 2
    },
    {
      "id": "b760-ddr5",
      "name": "B760 Micro-ATX · DDR5",
      "socket": "LGA1700",
      "memory": "DDR5",
      "form": "Micro-ATX",
      "chipset": "B760",
      "m2": 2
    },
    {
      "id": "z790-ddr4",
      "name": "Z790 ATX · DDR4",
      "socket": "LGA1700",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z790",
      "m2": 3
    },
    {
      "id": "z790-ddr5",
      "name": "Z790 ATX · DDR5",
      "socket": "LGA1700",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "Z790",
      "m2": 4
    },
    {
      "id": "b860-atx",
      "name": "B860 ATX · DDR5",
      "socket": "LGA1851",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "B860",
      "m2": 3
    },
    {
      "id": "b860-matx",
      "name": "B860 Micro-ATX · DDR5",
      "socket": "LGA1851",
      "memory": "DDR5",
      "form": "Micro-ATX",
      "chipset": "B860",
      "m2": 2
    },
    {
      "id": "z890-atx",
      "name": "Z890 ATX · DDR5",
      "socket": "LGA1851",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "Z890",
      "m2": 4
    },
    {
      "id": "a520-matx",
      "name": "A520 Micro-ATX · DDR4",
      "socket": "AM4",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "A520",
      "m2": 2
    },
    {
      "id": "b450-matx",
      "name": "B450 Micro-ATX · DDR4",
      "socket": "AM4",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "B450",
      "m2": 2
    },
    {
      "id": "b450-atx",
      "name": "B450 ATX · DDR4",
      "socket": "AM4",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "B450",
      "m2": 2
    },
    {
      "id": "b650e-atx",
      "name": "B650E ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "B650E",
      "m2": 3
    },
    {
      "id": "a620-matx",
      "name": "A620 Micro-ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "Micro-ATX",
      "chipset": "A620",
      "m2": 2
    },
    {
      "id": "x670e-atx",
      "name": "X670E ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "X670E",
      "m2": 4
    },
    {
      "id": "x870-atx",
      "name": "X870 ATX · DDR5",
      "socket": "AM5",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "X870",
      "m2": 4
    },
    {
      "id": "h610-matx",
      "name": "H610 Micro-ATX · DDR4",
      "socket": "LGA1700",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "H610",
      "m2": 1
    },
    {
      "id": "b660-ddr4",
      "name": "B660 ATX · DDR4",
      "socket": "LGA1700",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "B660",
      "m2": 2
    },
    {
      "id": "b660-ddr5",
      "name": "B660 ATX · DDR5",
      "socket": "LGA1700",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "B660",
      "m2": 2
    },
    {
      "id": "h770-atx",
      "name": "H770 ATX · DDR5",
      "socket": "LGA1700",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "H770",
      "m2": 3
    },
    {
      "id": "z690-ddr4",
      "name": "Z690 ATX · DDR4",
      "socket": "LGA1700",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z690",
      "m2": 3
    },
    {
      "id": "z690-ddr5",
      "name": "Z690 ATX · DDR5",
      "socket": "LGA1700",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "Z690",
      "m2": 4
    },
    {
      "id": "z790-ddr4-2",
      "name": "Z790 ATX · DDR4 (expanded)",
      "socket": "LGA1700",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z790",
      "m2": 3
    },
    {
      "id": "b560-atx",
      "name": "B560 ATX · DDR4",
      "socket": "LGA1200",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "B560",
      "m2": 2
    },
    {
      "id": "b460-matx",
      "name": "B460 Micro-ATX · DDR4",
      "socket": "LGA1200",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "B460",
      "m2": 2
    },
    {
      "id": "z490-atx",
      "name": "Z490 ATX · DDR4",
      "socket": "LGA1200",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z490",
      "m2": 3
    },
    {
      "id": "z590-atx",
      "name": "Z590 ATX · DDR4",
      "socket": "LGA1200",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z590",
      "m2": 3
    },
    {
      "id": "b250-atx",
      "name": "B250 ATX · DDR4",
      "socket": "LGA1151",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "B250",
      "m2": 1
    },
    {
      "id": "h270-matx",
      "name": "H270 Micro-ATX · DDR4",
      "socket": "LGA1151",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "H270",
      "m2": 1
    },
    {
      "id": "z270-atx",
      "name": "Z270 ATX · DDR4",
      "socket": "LGA1151",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z270",
      "m2": 2
    },
    {
      "id": "b360-matx",
      "name": "B360 Micro-ATX · DDR4",
      "socket": "LGA1151",
      "memory": "DDR4",
      "form": "Micro-ATX",
      "chipset": "B360",
      "m2": 2
    },
    {
      "id": "z390-atx",
      "name": "Z390 ATX · DDR4",
      "socket": "LGA1151",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "Z390",
      "m2": 2
    },
    {
      "id": "x299-atx",
      "name": "X299 ATX · DDR4",
      "socket": "LGA2066",
      "memory": "DDR4",
      "form": "ATX",
      "chipset": "X299",
      "m2": 4
    },
    {
      "id": "b860-atx-2",
      "name": "B860 ATX · DDR5 (expanded)",
      "socket": "LGA1851",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "B860",
      "m2": 3
    },
    {
      "id": "b860-matx-2",
      "name": "B860 Micro-ATX · DDR5 (expanded)",
      "socket": "LGA1851",
      "memory": "DDR5",
      "form": "Micro-ATX",
      "chipset": "B860",
      "m2": 2
    },
    {
      "id": "z890-atx-2",
      "name": "Z890 ATX · DDR5 (expanded)",
      "socket": "LGA1851",
      "memory": "DDR5",
      "form": "ATX",
      "chipset": "Z890",
      "m2": 4
    }
  ],
  "GPUs": [
    {
      "id": "air-stock",
      "name": "Stock / compact air cooler · up to 90 W",
      "type": "air",
      "capacity": 90,
      "height": 155,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851"
      ]
    },
    {
      "id": "air-120",
      "name": "Compact air cooler · 120 W class",
      "type": "air",
      "capacity": 120,
      "height": 145,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851"
      ]
    },
    {
      "id": "air-180",
      "name": "Tower air cooler · 180 W class",
      "type": "air",
      "capacity": 180,
      "height": 158,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851"
      ]
    },
    {
      "id": "air-250",
      "name": "Large dual-tower air cooler · 250 W class",
      "type": "air",
      "capacity": 250,
      "height": 165,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851"
      ]
    },
    {
      "id": "aio-240",
      "name": "240 mm liquid cooler · 250 W class",
      "type": "aio",
      "capacity": 250,
      "radiator": 240,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851"
      ]
    },
    {
      "id": "air-low-100",
      "name": "Basic air cooler · 100 W class",
      "type": "air",
      "capacity": 100,
      "height": 150,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1151",
        "LGA1200",
        "LGA1700",
        "LGA1851",
        "LGA2066"
      ]
    },
    {
      "id": "air-140",
      "name": "Tower air cooler · 140 W class",
      "type": "air",
      "capacity": 140,
      "height": 155,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1151",
        "LGA1200",
        "LGA1700",
        "LGA1851",
        "LGA2066"
      ]
    },
    {
      "id": "air-220",
      "name": "Tower air cooler · 220 W class",
      "type": "air",
      "capacity": 220,
      "height": 160,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1151",
        "LGA1200",
        "LGA1700",
        "LGA1851",
        "LGA2066"
      ]
    },
    {
      "id": "air-280",
      "name": "Dual-tower air cooler · 280 W class",
      "type": "air",
      "capacity": 280,
      "height": 170,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1151",
        "LGA1200",
        "LGA1700",
        "LGA1851",
        "LGA2066"
      ]
    },
    {
      "id": "aio-120",
      "name": "120 mm liquid cooler · 180 W class",
      "type": "aio",
      "capacity": 180,
      "radiator": 180,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851",
        "LGA1200"
      ]
    },
    {
      "id": "aio-360",
      "name": "360 mm liquid cooler · 300 W class",
      "type": "aio",
      "capacity": 300,
      "radiator": 360,
      "sockets": [
        "AM4",
        "AM5",
        "LGA1700",
        "LGA1851",
        "LGA1200"
      ]
    }
  ]
};
