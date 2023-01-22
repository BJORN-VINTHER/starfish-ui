<template>
  <div class="d-flex flex-column align-items-center">
    <!-- <h1>Player info</h1> -->

    <div class="form-group d-flex flex-column align-items-start mt-4">
      <label for="name">Player name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="state.name"
        aria-describedby="emailHelp"
        placeholder="Enter player name"
      />
    </div>

    <div class="form-group d-flex flex-column align-items-start mt-4">
      <label for="name">Player color</label>
      <div class="d-flex">
        <div
          v-for="color in state.playerColors"
          @click="() => state.color = color"
          class="color-box d-flex align-items-center justify-content-center"
          :class="{ selected: color === state.color }"
          :style="{ background: color }"
        >
          <i
            v-if="color === state.color"
            class="bi bi-check-lg checked"
          ></i>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-primary btn-lg m-4"
      @click="onSaveClick"
    >
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PlayerDto } from "@/http/models/restDtos";
import {
  createPlayer,
  updatePlayer,
} from "@/http/rest";
import { onMounted, reactive } from "vue";
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";

const store = useGlobalStore();

const state = reactive({
  id: 0,
  name: "",
  color: "",
  playerColors: [] as string[]
});

onMounted(async () => {
  const { playerColors, me } = storeToRefs(store)
  state.playerColors = playerColors.value;
  if (me) {
    state.id = me.value.id;
    state.name = me.value.name;
    state.color = me.value.color;
  }
});

async function onSaveClick() {
  const player: PlayerDto = {
    id: state.id,
    name: state.name,
    color: state.color,
  }
  if (state.id === 0) {
    const newMe = await createPlayer(player);
    player.id = newMe.id;
  } else {
    await updatePlayer(player);
  }
  store.updateMe(player);
}
</script>

<style>


.color-box {
  width: 50px;
  height: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  border-radius: 8px;
  margin: 5px;
  cursor: pointer;
}

.color-box.selected {
  border-width: 3px;
}
</style>
