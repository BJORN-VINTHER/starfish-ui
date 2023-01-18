<template>
  <div class="me">
    <h1>Player info</h1>
    <p>Player name</p>
    <input v-model="playerName"/>

    <button @click="onSaveClick">Save</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const playerName = ref("");

  function onSaveClick() {

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
