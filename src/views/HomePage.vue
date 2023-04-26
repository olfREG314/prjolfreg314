<template>
  <section id="home-page  " class="h-full bg-cstm_black_perl">
    <div id="partition-1" class="h-96 w-screen bg-cstm_black"></div>
    <div
      id="partition-2"
      class="flex flex-col p-10 font-comfortaa bg-cstm_black_perl"
    >
      <div id="the-symbol" class="mx-auto -mt-60">
        <img
          src="@/assets/olfreg314_symbol_freehand_color_2.png"
          width="300px"
        />
      </div>
      <div
        id="the-name"
        class="text-center text-cstm_red m-8 font-bold text-md"
      >
        olfREG314
        <div id="the-name-line" class="border-cstm_red"></div>
      </div>
      <div
        id="the-intro"
        class="flex flex-col mx-auto gap-y-2 max-w-2xl align-center text-center text-sm font-light tracking-widest text-cstm_white"
      >
        <p>A very simple person in life.</p>
        <p>
          Uses Arch linux as daily driver, specifically Archcraft but customized
          it to be better & fit my workflow. And also made it to look cool.
        </p>

        <p>
          Little bit of gaming ( but not too much ) to distract myself from
          nightmares of arch. Currently playing =Rain World=, very interesting
          pixel art game with hardcore AI.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#the-name {
  letter-spacing: 0.5em;
}
#the-name-line {
  content: "";
  background-color: rgb(61, 61, 61);
  width: 3em;
  margin: 10px auto;
  height: 0.1rem;
}
</style>
