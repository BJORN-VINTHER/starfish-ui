<template>
  <nav>
    <ul class="nav col-12 my-2 justify-content-center my-md-0 text-small">
      <RouterLink to="/" class="nav-link text-white px-4">
        <i class="bi bi-house-door d-block mx-auto"></i>
        Home
      </RouterLink>
      <RouterLink to="/me" class="nav-link text-white px-4">
        <i class="bi bi-grid d-block mx-auto"></i>
        Activities
      </RouterLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style>
i {
  font-size: 2rem;
}
</style>
