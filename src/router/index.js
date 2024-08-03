import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NotesVault from "@/views/NotesVault.vue";

import NtSoftwareEngineering from "@/components/notes/publish/NtSoftwareEngineering.vue";
import NtLinux from "@/components/notes/publish/NtLinux.vue";
import NtCpuArchitecture from "@/components/notes/publish/NtCpuArchitecture.vue";
import NtArch from "@/components/notes/publish/NtArch.vue";

const router = createRouter({
  // FIXME Without a proper server configuration
  /* the user will get 404 error if they access the link directly. */
  /* https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode */
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    {
      path: "/notesvault",
      component: NotesVault,
      children: [
        /* { path: "linux", component: NtLinux }, */
        { path: "cpuarchitecture", component: NtCpuArchitecture },
        { path: "softwareengineering", component: NtSoftwareEngineering },
        { path: "arch", component: NtArch },
        { path: "cpuarchitecture", component: NtCpuArchitecture },
        { path: "linux", component: NtLinux },
        { path: "softwareengineering", component: NtSoftwareEngineering },
      ],
    },
  ],
});

export default router;
