<template>
  <div>
    <About />
    <Services />
    <Skills />

    <Projects />
    <Player/>
  </div>
</template>

<script>
import About from "./../components/About.vue";
import Services from "./../components/Services.vue";
import Projects from "./../components/Projects.vue";
import Skills from "./../components/Skills.vue";
import Player from "./../components/Player.vue";

export default {
  name: "Home",
  components: {
    About,
    Services,
    Projects,
    Skills,
    Player
  },
};
</script>
