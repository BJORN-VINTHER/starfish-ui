<template>
  <div class="me">
    <h1>Player info</h1>
    <p>Player name</p>
    <input v-model="playerName"/>

    <button @click="onSaveClick">Save</button>
    <button @click="onSave2Click">Save 2</button>
  </div>
</template>

<script setup lang="ts">
  import { getPlayers, getPlayer } from '@/http/rest';
import { ref } from 'vue'

  const playerName = ref("");

  function onSaveClick() {
    getPlayers();
  }

  function onSave2Click() {
    getPlayer(5);
  }
</script>

<style>
@media (min-width: 1024px) {
  .me {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
