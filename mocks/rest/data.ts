import type PlayerDto from "@/http/models/playerDto";

export const players: PlayerDto[] = [
    {
        id: 3,
        name: "Torben",
        color: "#FFF",
      },
      {
        id: 4,
        name: "Dan",
        color: "#222",
      },
      {
        id: 20,
        name: "Sally",
        color: "#888",
      },
];

export const playerColors: string[] = [
  "#FF6699", // pink
  "#CC6633", // brown
  "#CC0000", // red
  "#669900", // green
  "#6699FF", // blue
  "#FFCC00", // orange
  "#CC33CC", // purple
  "#33FFCC", // turquise
]
