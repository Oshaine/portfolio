<template>
  <div>
    <About />
    <Services />
    <Skills />

    <Projects />
  </div>
</template>

<script>
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default {
  name: "Home",
  components: {
    About,
    Services,
    Projects,
    Skills,
  },
};
</script>
