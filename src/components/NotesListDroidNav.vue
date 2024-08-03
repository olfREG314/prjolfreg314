<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const notesVaultAvailableRoutes = ref(router.options.routes[1].children);
console.log(notesVaultAvailableRoutes);
function loadNotePage(note) {
  console.log(note);
  router.push({ path: `/notesvault/${note.toLowerCase()}` });
}
</script>

<template>
  <section
    id="notes-list-droid-nav"
    class="fixed bottom-24 inset-x-0 text-white font-iosevkaext"
  >
    <div
      class="flex w-96 mx-auto px-16 py-1 justify-center bg-cstm_black rounded-md overflow-x-scroll"
    >
      <button
        v-for="route in notesVaultAvailableRoutes"
        :key="route"
        @click="loadNotePage(route.path)"
        class="px-5 flex items-center hover:text-cstm_red"
      >
        <div class="mr-2.5 rounded-sm my-0 w-1 h-3"></div>
        {{ route.path }}
      </button>
      <button
        @click="loadNotePage('cpuArchitecture')"
        class="px-5 flex items-center hover:text-cstm_red"
      >
        <div class="mr-2.5 rounded-sm my-0 w-1 h-3"></div>
        Cpu Architecture
      </button>
    </div>
  </section>
</template>

<style scoped>
.current-active {
  content: "";
  background-color: #8bd49c;
  display: inline-block;
}
</style>
