<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center p-5 justify-content-between"
  >
    <NavigationBar />

    <div
      @click="onPlayerClick"
      class="d-flex align-items-center player"
      :style="{ color: me?.color ?? 'white' }"
    >
      <i class="bi bi-person-circle"></i>
      <span class="ms-2">{{ me?.name }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from "@/router";
import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import NavigationBar from "./NavigationBar.vue";

const store = useGlobalStore();
const { me } = storeToRefs(store);

onMounted(() => {

}) 

function onPlayerClick() {
  router.push("/me");
}
</script>

<style scoped>
.player {
  /* color: #357fea; */
  padding: 0px 10px;
  border-radius: 3px;
  font-size: 1.3rem;
  cursor: pointer;
  user-select: none;
}
.player:hover {
  background-color: #333;
}
</style>
