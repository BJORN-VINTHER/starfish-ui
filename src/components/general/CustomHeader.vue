<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center p-5 justify-content-between"
  >
    <NavigationBar/>

    <div @click="onPlayerClick" class="d-flex align-items-center player" >
      <i class="bi bi-person-circle"></i>
      <span class="mx-2">Niels McChamp</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from "@/router";
import NavigationBar from "./NavigationBar.vue"

function onPlayerClick() {
  router.push('/me');
}
</script>

<style scoped>
  .player {
    color: #357FEA; 
    font-size: 1.3rem;
    cursor: pointer;
    user-select: none;
  }
  .player:hover {
    background-color: #112299;
  }
</style>
