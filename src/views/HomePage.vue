<template>
  <section id="home-page  " class="h-full bg-cstm_black_perl">
    <NavBar />
    <div id="partition-1" class="h-96 w-screen bg-cstm_black"></div>
    <div
      id="partition-2"
      class="flex flex-col p-10 font-comfortaa bg-cstm_black_perl"
    >
      <div
        id="the-symbol"
        class="mx-auto -mt-60"
        data-tilt
        data-tilt-max="50"
        data-tilt-speed="400"
        data-tilt-perspective="500"
      >
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
        <p>Simple person in life.</p>
		<ul>
			<li><strong>OS :</strong> Arch linux</li>
		</ul>
      </div>
    </div>
  </section>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
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
