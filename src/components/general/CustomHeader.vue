<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center p-5 justify-content-between"
  >

    <NavigationBar/>

    <div class="d-flex align-items-center" style="color: #357FEA; font-size: 1.3rem;">
      <i class="bi bi-person-circle fa-lg"></i>
      <span class="mx-2">Niels McChamp</span>
    </div>

  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavigationBar from "./NavigationBar.vue"
</script>
