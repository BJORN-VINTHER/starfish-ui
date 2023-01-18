<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import CustomHeader from "./components/general/CustomHeader.vue";
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/me">Me</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <!-- <div class="d-flex flex-column cover-container w-100 h-100 p-3 mx-auto"> -->
    <CustomHeader/>
    <RouterView/>
  <!-- </div> -->
</template>
