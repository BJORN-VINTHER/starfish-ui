<template>
  <div class="d-flex flex-column align-items-center">
    <h1>Player info</h1>
    <div class="d-flex align-items-center mt-5">
      Player name:
      <input class="ms-3" v-model="state.playerName" />
    </div>

    <button class="m-4" @click="onSaveClick">Save</button>
  </div>
</template>

<script setup lang="ts">
import { getPlayer, createPlayer, updatePlayer } from "@/http/rest";
import { onMounted, reactive } from "vue";

const state = reactive({
  playerId: 0,
  playerName: "",
});

onMounted(async () => {
  const playerIdText = localStorage.getItem("playerId");
  if (playerIdText) {
    const id = parseInt(playerIdText);
    const player = await getPlayer(id);
    console.log(player);
    state.playerId = player.id;
    state.playerName = player.name;
  }
});

async function onSaveClick() {
  const dto = {
    id: state.playerId,
    name: state.playerName,
    color: "brown",
  };
  if (state.playerId === 0) {
    const player = await createPlayer(dto);
    localStorage.setItem("playerId", player.id.toString());
  } else {
    await updatePlayer(dto);
  }
}
</script>
