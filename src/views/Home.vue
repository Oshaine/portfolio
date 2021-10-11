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
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Player from "../components/Player.vue";

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
