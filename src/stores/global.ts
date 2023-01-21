import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type PlayerDto from "@/http/models/playerDto";
import { getAllPlayerColors, getPlayer } from "@/http/rest";

export const useGlobalStore = defineStore("global", () => {
  const playerColors = ref([] as string[]);
  const me = ref({ id: 0, name: "", color: "" } as PlayerDto);

  async function init() {
    playerColors.value = await getAllPlayerColors();
    const playerIdText = localStorage.getItem("playerId");
    if (playerIdText) {
      me.value = await getPlayer(parseInt(playerIdText));
    }
  }

  async function updateMe(player: PlayerDto) {
    localStorage.setItem("playerId", player.id.toString());
    me.value = player;
  }

  return { playerColors, me, init, updateMe };
});
