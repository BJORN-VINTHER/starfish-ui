import { createApp } from "vue";
import { createPinia, storeToRefs } from "pinia";
import App from "./App.vue";
import router from "./router";
import { worker } from "../mocks/rest/browser";
import "./assets/main.css";
import { useGlobalStore } from "./stores/global";
// import * as dotenv from 'dotenv'
// dotenv.config()
// console.log(process.env.VUE_APP_SOMEKEY)  // SOME_KEY_VALUE

// if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
// }


const app = createApp(App);

// setup store
app.use(createPinia());
const store = useGlobalStore();
app.use(async () => {
  await store.init();
});

app.use(router);
app.mount("#app");
