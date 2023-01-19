import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { worker } from "../mocks/rest/browser";
import "./assets/main.css";
// import * as dotenv from 'dotenv'
// dotenv.config()
// console.log(process.env.VUE_APP_SOMEKEY)  // SOME_KEY_VALUE

// if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
// }


const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
