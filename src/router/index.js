import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NotesVault from "@/views/NotesVault.vue";

const router = createRouter({
  // FIXME Without a proper server configuration
  /* the user will get 404 error if they access the link directly. */
  /* https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode */
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/notesvault", component: NotesVault },
  ],
});

export default router;
