<template>
  <section
    id="nav-bar"
    class="font-comfortaa text-white absolute top-1/4 right-0"
  >
    <ul>
      <li class="m-4 px-5 py-2 bg-cstm_light_green">
        <button
          @click="loadContent('myBigFatLazyNotes')"
          class="text-black border-l-2 px-5 py-1 font-bold"
        >
          myBigFatLazyNotes
        </button>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  methods: {
    loadContent(content) {
      console.log(`loaded content ${content}`);
    },
  },
};
</script>
<style scoped></style>
