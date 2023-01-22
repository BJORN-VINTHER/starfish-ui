<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { getAllPlayers } from "@/http/rest";
import ChatHub from "@/http/chatHub";

let chatHub: ChatHub = new ChatHub("ws://localhost:5081/chat");

function connectToSocket() {
  chatHub.connect();
}

function sendMessage() {
  chatHub!.sendMessage({
    user: "PAlle pirat",
    message: "Ohøj tabere!",
  });
}

// console.log(process.env.VUE_APP_SOMEKEY)
</script>

<template>
  <main class="px-3 d-flex flex-column align-items-center">
    <h1>Test</h1>
    <button
      type="button"
      class="btn btn-primary btn-lg m-4"
      @click="connectToSocket"
    >
      Connect socket
    </button>

    <button
      type="button"
      class="btn btn-primary btn-lg m-4"
      @click="sendMessage"
    >
      Send message
    </button>

    <button
      type="button"
      class="btn btn-primary btn-lg m-4"
      @click="getAllPlayers"
    >
      Get all players
    </button>
  </main>
</template>
