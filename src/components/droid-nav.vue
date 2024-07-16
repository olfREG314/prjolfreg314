<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function toNotesVault() {
  router.push({ path: "/notesvault" });
}

function toHome() {
  router.push({ path: "/" });
}
</script>

<template>
  <section
    id="droid-nav"
    class="absolute bottom-24 inset-x-0 text-white font-iosevkaext"
  >
    <div
      class="flex w-fit mx-auto px-16 py-4 justify-center bg-cstm_black rounded-md"
    >
      <button
        @click="toHome"
        class="px-5 flex items-center hover:text-cstm_red"
      >
        <div class="current-active mr-2.5 rounded-sm my-0 w-1 h-6"></div>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        Home
      </button>
      <button
        @click="toNotesVault"
        class="px-5 flex items-center hover:text-cstm_red"
      >
        <div class="mr-2.5 rounded-sm my-0 w-1 h-6"></div>
        <!-- <RouterLink to="/notesvault">Notes</RouterLink> -->
        Notes
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
