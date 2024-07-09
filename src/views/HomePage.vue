<script setup></script>

<template>
  <section id="home-page" class="flex flex-col h-screen">
    <div
      class="flex flex-col w-max h-max items-center my-auto mx-auto p-10 bg-cstm_black_perl"
    >
      <!-- This div is neccessary for the image to load
         cause tailwind img depends on 
         parents size. -->
      <div class="w-max">
        <img
          src="@/assets/olfreg314_symbol_freehand_color_2.png"
          width="300px"
        />
      </div>
      <div
        id="symbolic-name"
        class="tracking-widest font-iosevkaext text-cstm_red mt-8 mb-0 font-bold text-md"
      >
        olfREG314
        <!-- <div id="the-name-line" class="border-cstm_red"></div> -->
      </div>
      <div
        id="the-intro"
        class="text-sm font-thin font-iosevkaext text-cstm_white"
      >
        A simple weightless node in an infinite swarm.
      </div>
    </div>
  </section>
</template>

<style scoped>
/* #symbolic-name { */
/* letter-spacing: 0.5em; */
/* } */

/* #the-name-line { */
/*   content: ""; */
/*   background-color: rgb(61, 61, 61); */
/*   width: 3em; */
/*   margin: 10px auto; */
/*   height: 0.1rem; */
/* } */
</style>
